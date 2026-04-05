import { Link } from "react-router";
import { Clock, FileText, Trophy, ChevronRight, Filter } from "lucide-react";
import { useState } from "react";

interface Test {
  id: string;
  title: string;
  exam: "NDA" | "CDS" | "AFCAT";
  subject: string;
  questions: number;
  duration: number;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
}

export function MockTests() {
  const [selectedExam, setSelectedExam] = useState<string>("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");

  const tests: Test[] = [
    {
      id: "nda-math-1",
      title: "NDA Mathematics - Full Length Test 1",
      exam: "NDA",
      subject: "Mathematics",
      questions: 120,
      duration: 150,
      difficulty: "Medium",
      category: "Full Length",
    },
    {
      id: "nda-gat-1",
      title: "NDA General Ability Test - Full Length Test 1",
      exam: "NDA",
      subject: "General Ability",
      questions: 150,
      duration: 150,
      difficulty: "Medium",
      category: "Full Length",
    },
    {
      id: "cds-english-1",
      title: "CDS English - Practice Test 1",
      exam: "CDS",
      subject: "English",
      questions: 120,
      duration: 120,
      difficulty: "Easy",
      category: "Practice",
    },
    {
      id: "cds-gk-1",
      title: "CDS General Knowledge - Full Length Test 1",
      exam: "CDS",
      subject: "General Knowledge",
      questions: 120,
      duration: 120,
      difficulty: "Hard",
      category: "Full Length",
    },
    {
      id: "cds-math-1",
      title: "CDS Elementary Mathematics - Practice Test 1",
      exam: "CDS",
      subject: "Mathematics",
      questions: 100,
      duration: 120,
      difficulty: "Medium",
      category: "Practice",
    },
    {
      id: "afcat-verbal-1",
      title: "AFCAT Verbal Ability - Full Length Test 1",
      exam: "AFCAT",
      subject: "Verbal Ability",
      questions: 30,
      duration: 120,
      difficulty: "Medium",
      category: "Full Length",
    },
    {
      id: "afcat-numerical-1",
      title: "AFCAT Numerical Ability - Practice Test 1",
      exam: "AFCAT",
      subject: "Numerical Ability",
      questions: 20,
      duration: 60,
      difficulty: "Easy",
      category: "Practice",
    },
    {
      id: "afcat-reasoning-1",
      title: "AFCAT Reasoning - Full Length Test 1",
      exam: "AFCAT",
      subject: "Reasoning",
      questions: 30,
      duration: 90,
      difficulty: "Medium",
      category: "Full Length",
    },
  ];

  const filteredTests = tests.filter((test) => {
    if (selectedExam !== "All" && test.exam !== selectedExam) return false;
    if (selectedDifficulty !== "All" && test.difficulty !== selectedDifficulty) return false;
    return true;
  });

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

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Mock Tests</h1>
          <p className="text-lg text-blue-100">
            Practice with comprehensive mock tests for NDA, CDS, and AFCAT
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-slate-600" />
            <h2 className="font-bold text-slate-900">Filters</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Exam</label>
              <select
                value={selectedExam}
                onChange={(e) => setSelectedExam(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Exams</option>
                <option value="NDA">NDA</option>
                <option value="CDS">CDS</option>
                <option value="AFCAT">AFCAT</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Difficulty</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Levels</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                    {test.exam}
                  </span>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${getDifficultyColor(test.difficulty)}`}>
                    {test.difficulty}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2 line-clamp-2">{test.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{test.subject}</p>

                <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    {test.questions} Qs
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {test.duration} min
                  </div>
                </div>

                <Link
                  to={`/mock-tests/${test.id}`}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  Start Test
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredTests.length === 0 && (
          <div className="text-center py-12">
            <Trophy className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-600">No tests found matching your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
