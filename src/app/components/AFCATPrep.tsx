import { Link } from "react-router";
import { BookOpen, FileText, Zap, Calendar, Target, TrendingUp, Award, Plane } from "lucide-react";

export function AFCATPrep() {
  const syllabus = {
    generalAwareness: [
      "History",
      "Geography",
      "Civics & Politics",
      "Environment",
      "Defence",
      "Current Affairs",
      "Arts & Culture",
      "Sports",
    ],
    verbalAbility: [
      "Comprehension",
      "Error Detection",
      "Sentence Completion",
      "Synonyms & Antonyms",
      "Testing of Vocabulary",
    ],
    numericalAbility: [
      "Decimal Fractions",
      "Simplification",
      "Average",
      "Percentage",
      "Ratio & Proportion",
      "Square Roots",
    ],
    reasoning: [
      "Verbal Reasoning",
      "Non-Verbal Reasoning",
      "Spatial Ability",
      "Series Completion",
      "Coding-Decoding",
      "Analytical Reasoning",
    ],
  };

  const examPattern = [
    { section: "General Awareness", questions: 20, time: "Part of 2 hours" },
    { section: "Verbal Ability in English", questions: 30, time: "Part of 2 hours" },
    { section: "Numerical Ability", questions: 20, time: "Part of 2 hours" },
    { section: "Reasoning & Military Aptitude", questions: 30, time: "Part of 2 hours" },
  ];

  const studyResources = [
    {
      icon: FileText,
      title: "Mock Tests",
      description: "40+ AFCAT specific mock tests",
      link: "/mock-tests",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Zap,
      title: "Flashcards",
      description: "Quick revision for all sections",
      link: "/flashcards",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: BookOpen,
      title: "Vocabulary",
      description: "English vocabulary builder",
      link: "/vocabulary",
      color: "bg-green-100 text-green-600",
    },
  ];

  const timeline = [
    {
      phase: "Phase 1 (Months 1-2)",
      focus: "Basics & Foundation",
      activities: [
        "Complete syllabus overview",
        "English fundamentals",
        "Basic mathematics revision",
        "Current affairs daily",
      ],
    },
    {
      phase: "Phase 2 (Months 3-4)",
      focus: "In-depth Study",
      activities: [
        "General awareness deep dive",
        "Reasoning practice",
        "Numerical ability mastery",
        "Previous year analysis",
      ],
    },
    {
      phase: "Phase 3 (Month 5)",
      focus: "Practice & Perfect",
      activities: [
        "Daily mock tests",
        "Speed & accuracy drills",
        "Weak area focus",
        "Final revision",
      ],
    },
  ];

  const branches = [
    {
      name: "Flying Branch",
      requirements: ["B.E./B.Tech or equivalent", "Physics & Maths in 10+2", "Age: 20-24 years"],
    },
    {
      name: "Ground Duty (Technical)",
      requirements: ["B.E./B.Tech in specified fields", "Age: 20-26 years", "60% aggregate"],
    },
    {
      name: "Ground Duty (Non-Technical)",
      requirements: ["Any graduate degree", "Age: 20-26 years", "60% aggregate"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-sky-900 to-sky-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2 mb-4">
              <Plane className="w-4 h-4" />
              Air Force Common Admission Test
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AFCAT Preparation</h1>
            <p className="text-lg text-sky-100 mb-6">
              Complete preparation guide for AFCAT - Join the Indian Air Force
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/mock-tests"
                className="bg-white text-sky-900 px-6 py-3 rounded-lg font-medium hover:bg-sky-50 transition-colors"
              >
                Start Practice
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <FileText className="w-8 h-8 text-sky-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900 mb-1">100</div>
            <div className="text-sm text-slate-600">Total Questions</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <Award className="w-8 h-8 text-sky-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900 mb-1">300</div>
            <div className="text-sm text-slate-600">Total Marks</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <Calendar className="w-8 h-8 text-sky-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900 mb-1">2 hrs</div>
            <div className="text-sm text-slate-600">Duration</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <Target className="w-8 h-8 text-sky-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900 mb-1">2x</div>
            <div className="text-sm text-slate-600">Yearly</div>
          </div>
        </div>

        {/* Exam Pattern */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Exam Pattern</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-sky-50">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Section</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Questions</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {examPattern.map((section) => (
                  <tr key={section.section}>
                    <td className="px-6 py-4 font-medium text-slate-900">{section.section}</td>
                    <td className="px-6 py-4 text-slate-600">{section.questions}</td>
                    <td className="px-6 py-4 text-slate-600">{section.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sm text-sky-900">
              <strong>Note:</strong> Total 100 questions for 300 marks (3 marks each). Negative marking: 1 mark for each wrong answer.
            </p>
          </div>
        </section>

        {/* Syllabus */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Detailed Syllabus</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">GA</span>
                </div>
                General Awareness
              </h3>
              <ul className="space-y-2">
                {syllabus.generalAwareness.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-slate-600">
                    <span className="text-blue-600 mt-1">•</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold">VA</span>
                </div>
                Verbal Ability
              </h3>
              <ul className="space-y-2">
                {syllabus.verbalAbility.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-slate-600">
                    <span className="text-green-600 mt-1">•</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold">NA</span>
                </div>
                Numerical Ability
              </h3>
              <ul className="space-y-2">
                {syllabus.numericalAbility.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-slate-600">
                    <span className="text-purple-600 mt-1">•</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold">RM</span>
                </div>
                Reasoning & Military Aptitude
              </h3>
              <ul className="space-y-2">
                {syllabus.reasoning.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-slate-600">
                    <span className="text-orange-600 mt-1">•</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Branches */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Entry Branches</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {branches.map((branch) => (
              <div key={branch.name} className="bg-white rounded-lg shadow-sm p-6">
                <div className="bg-sky-100 text-sky-700 px-4 py-2 rounded-lg font-bold mb-4 inline-block">
                  {branch.name}
                </div>
                <ul className="space-y-2">
                  {branch.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-sky-600 mt-1">✓</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Study Timeline */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-sky-600" />
            <h2 className="text-3xl font-bold text-slate-900">5-Month Study Plan</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map((phase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="bg-sky-100 text-sky-700 px-4 py-2 rounded-lg font-bold mb-4 inline-block">
                  {phase.phase}
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{phase.focus}</h3>
                <ul className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-sky-600 mt-1">✓</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Study Resources */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Study Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {studyResources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Link
                  key={resource.title}
                  to={resource.link}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-lg ${resource.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{resource.title}</h3>
                  <p className="text-sm text-slate-600">{resource.description}</p>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
