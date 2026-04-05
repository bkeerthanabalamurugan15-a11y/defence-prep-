import { useState } from "react";
import { RotateCw, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

interface Flashcard {
  id: number;
  category: string;
  front: string;
  back: string;
}

export function Flashcards() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const flashcards: Flashcard[] = [
    {
      id: 1,
      category: "History",
      front: "When did India gain independence?",
      back: "India gained independence on August 15, 1947",
    },
    {
      id: 2,
      category: "Geography",
      front: "What is the highest mountain peak in India?",
      back: "Kangchenjunga (8,586 meters) - located in Sikkim",
    },
    {
      id: 3,
      category: "Mathematics",
      front: "What is the Pythagorean theorem?",
      back: "In a right triangle: a² + b² = c² (where c is the hypotenuse)",
    },
    {
      id: 4,
      category: "Science",
      front: "What is Newton's First Law of Motion?",
      back: "An object at rest stays at rest and an object in motion stays in motion unless acted upon by an external force",
    },
    {
      id: 5,
      category: "Current Affairs",
      front: "Who is the current Chief of Defence Staff (CDS)?",
      back: "General Anil Chauhan (as of 2024)",
    },
    {
      id: 6,
      category: "History",
      front: "Who was the first Chief of Army Staff of independent India?",
      back: "General K. M. Cariappa",
    },
    {
      id: 7,
      category: "Geography",
      front: "Which is the longest river in India?",
      back: "The Ganges (Ganga) - approximately 2,525 km",
    },
    {
      id: 8,
      category: "Mathematics",
      front: "What is the formula for the area of a circle?",
      back: "A = πr² (where r is the radius)",
    },
  ];

  const categories = ["All", ...Array.from(new Set(flashcards.map((card) => card.category)))];

  const filteredCards = flashcards.filter(
    (card) => selectedCategory === "All" || card.category === selectedCategory
  );

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentCard((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentCard((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const card = filteredCards[currentCard];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Flashcards</h1>
          <p className="text-lg text-purple-100">
            Quick revision cards for important topics and concepts
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Category Filter */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <label className="block text-sm font-medium text-slate-700 mb-3">Category</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentCard(0);
                  setIsFlipped(false);
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredCards.length > 0 ? (
          <>
            {/* Flashcard */}
            <div className="mb-8">
              <div
                onClick={handleFlip}
                className="relative h-96 cursor-pointer perspective-1000"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="relative w-full h-full transition-transform duration-500 preserve-3d"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front of card */}
                  <div
                    className="absolute w-full h-full bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center backface-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="bg-white/20 px-4 py-2 rounded-full text-sm mb-6">
                      {card.category}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                      {card.front}
                    </h2>
                    <div className="flex items-center gap-2 text-purple-200 text-sm">
                      <RotateCw className="w-4 h-4" />
                      Click to reveal answer
                    </div>
                  </div>

                  {/* Back of card */}
                  <div
                    className="absolute w-full h-full bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center backface-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="bg-white/20 px-4 py-2 rounded-full text-sm mb-6">
                      Answer
                    </div>
                    <p className="text-xl md:text-2xl text-center leading-relaxed">
                      {card.back}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={handlePrevious}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-300 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>

                <div className="text-center">
                  <p className="text-sm text-slate-600">
                    Card {currentCard + 1} of {filteredCards.length}
                  </p>
                  <div className="flex gap-1 mt-2">
                    {filteredCards.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1.5 rounded-full transition-all ${
                          index === currentCard
                            ? "w-8 bg-purple-600"
                            : "w-1.5 bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-600">No flashcards found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}
