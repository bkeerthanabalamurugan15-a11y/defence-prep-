import { useState } from "react";
import { BookOpen, Volume2, Star, Check } from "lucide-react";

interface Word {
  id: number;
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  definition: string;
  example: string;
  synonyms: string[];
  difficulty: "Easy" | "Medium" | "Hard";
}

export function Vocabulary() {
  const [learnedWords, setLearnedWords] = useState<Set<number>>(new Set());
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");

  const words: Word[] = [
    {
      id: 1,
      word: "Aberration",
      pronunciation: "ab-uh-REY-shuhn",
      partOfSpeech: "noun",
      definition: "A departure from what is normal, usual, or expected",
      example: "The sudden cold spell was an aberration in the otherwise warm summer.",
      synonyms: ["anomaly", "deviation", "irregularity"],
      difficulty: "Hard",
    },
    {
      id: 2,
      word: "Benevolent",
      pronunciation: "buh-NEV-uh-luhnt",
      partOfSpeech: "adjective",
      definition: "Well meaning and kindly",
      example: "The benevolent king was loved by all his subjects.",
      synonyms: ["kind", "charitable", "generous"],
      difficulty: "Medium",
    },
    {
      id: 3,
      word: "Candid",
      pronunciation: "KAN-did",
      partOfSpeech: "adjective",
      definition: "Truthful and straightforward; frank",
      example: "I appreciate your candid feedback about my presentation.",
      synonyms: ["honest", "frank", "open"],
      difficulty: "Easy",
    },
    {
      id: 4,
      word: "Diligent",
      pronunciation: "DIL-i-juhnt",
      partOfSpeech: "adjective",
      definition: "Having or showing care and conscientiousness",
      example: "She was diligent in her studies and always completed her homework on time.",
      synonyms: ["hardworking", "assiduous", "industrious"],
      difficulty: "Medium",
    },
    {
      id: 5,
      word: "Ephemeral",
      pronunciation: "ih-FEM-er-uhl",
      partOfSpeech: "adjective",
      definition: "Lasting for a very short time",
      example: "The beauty of the cherry blossoms is ephemeral, lasting only a few weeks.",
      synonyms: ["transient", "fleeting", "temporary"],
      difficulty: "Hard",
    },
    {
      id: 6,
      word: "Fortitude",
      pronunciation: "FAWR-ti-tood",
      partOfSpeech: "noun",
      definition: "Courage in pain or adversity",
      example: "The soldiers showed great fortitude during the difficult campaign.",
      synonyms: ["courage", "bravery", "resilience"],
      difficulty: "Medium",
    },
    {
      id: 7,
      word: "Gregarious",
      pronunciation: "gri-GAIR-ee-uhs",
      partOfSpeech: "adjective",
      definition: "Fond of company; sociable",
      example: "His gregarious nature made him popular at social gatherings.",
      synonyms: ["sociable", "outgoing", "friendly"],
      difficulty: "Hard",
    },
    {
      id: 8,
      word: "Humble",
      pronunciation: "HUHM-buhl",
      partOfSpeech: "adjective",
      definition: "Having or showing a modest estimate of one's importance",
      example: "Despite his achievements, he remained humble and approachable.",
      synonyms: ["modest", "unassuming", "meek"],
      difficulty: "Easy",
    },
  ];

  const filteredWords = words.filter(
    (word) => selectedDifficulty === "All" || word.difficulty === selectedDifficulty
  );

  const toggleLearned = (wordId: number) => {
    const newLearned = new Set(learnedWords);
    if (newLearned.has(wordId)) {
      newLearned.delete(wordId);
    } else {
      newLearned.add(wordId);
    }
    setLearnedWords(newLearned);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Hard":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  const learnedCount = filteredWords.filter((word) => learnedWords.has(word.id)).length;
  const progress = filteredWords.length > 0 ? (learnedCount / filteredWords.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Vocabulary Builder</h1>
          <p className="text-lg text-green-100">
            Master English vocabulary with daily word lists and exercises
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Progress and Filter */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Progress Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="font-bold text-slate-900 mb-4">Your Progress</h2>
            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Words Learned</span>
                <span className="text-sm font-medium text-slate-900">
                  {learnedCount} / {filteredWords.length}
                </span>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-600 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <p className="text-sm text-slate-600">
              Keep going! Mark words as learned to track your progress.
            </p>
          </div>

          {/* Filter Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="font-bold text-slate-900 mb-4">Filter by Difficulty</h2>
            <div className="flex flex-wrap gap-2">
              {["All", "Easy", "Medium", "Hard"].map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedDifficulty === difficulty
                      ? "bg-green-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Words List */}
        <div className="space-y-4">
          {filteredWords.map((word) => (
            <div
              key={word.id}
              className={`bg-white rounded-lg shadow-sm p-6 transition-all ${
                learnedWords.has(word.id) ? "border-2 border-green-200" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">{word.word}</h3>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${getDifficultyColor(word.difficulty)}`}>
                      {word.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <Volume2 className="w-4 h-4" />
                      {word.pronunciation}
                    </div>
                    <span className="italic">{word.partOfSpeech}</span>
                  </div>
                </div>
                <button
                  onClick={() => toggleLearned(word.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    learnedWords.has(word.id)
                      ? "bg-green-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {learnedWords.has(word.id) ? (
                    <>
                      <Check className="w-4 h-4" />
                      Learned
                    </>
                  ) : (
                    <>
                      <Star className="w-4 h-4" />
                      Mark as Learned
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-slate-700 mb-1">Definition</h4>
                  <p className="text-slate-900">{word.definition}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-slate-700 mb-1">Example</h4>
                  <p className="text-slate-600 italic">"{word.example}"</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-slate-700 mb-1">Synonyms</h4>
                  <div className="flex flex-wrap gap-2">
                    {word.synonyms.map((synonym) => (
                      <span
                        key={synonym}
                        className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full"
                      >
                        {synonym}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredWords.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-600">No words found in this difficulty level</p>
          </div>
        )}
      </div>
    </div>
  );
}
