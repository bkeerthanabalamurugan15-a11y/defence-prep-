import { Link } from "react-router";
import { BookOpen, FileText, Zap, Calendar, Target, TrendingUp, Award } from "lucide-react";

export function CDSPrep() {
  const syllabus = {
    english: [
      "Vocabulary",
      "Grammar & Usage",
      "Comprehension",
      "Synonyms & Antonyms",
      "Sentence Completion",
      "Error Detection",
    ],
    gk: [
      "Indian History",
      "Geography of India",
      "Indian Polity",
      "Economics",
      "General Science",
      "Current Affairs",
      "Defense Related Topics",
    ],
    mathematics: [
      "Arithmetic",
      "Algebra",
      "Trigonometry",
      "Geometry",
      "Mensuration",
      "Statistics",
    ],
  };

  const examPattern = [
    { paper: "English", questions: 120, marks: 100, duration: "2 hours" },
    { paper: "General Knowledge", questions: 120, marks: 100, duration: "2 hours" },
    { paper: "Elementary Mathematics", questions: 100, marks: 100, duration: "2 hours" },
  ];

  const studyResources = [
    {
      icon: FileText,
      title: "Mock Tests",
      description: "60+ full-length CDS mock tests",
      link: "/mock-tests",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Zap,
      title: "Flashcards",
      description: "Quick revision for all subjects",
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
      focus: "Foundation",
      activities: [
        "Complete English grammar",
        "Mathematics basics",
        "GK current affairs start",
        "Daily reading habit",
      ],
    },
    {
      phase: "Phase 2 (Months 3-4)",
      focus: "Subject Mastery",
      activities: [
        "Advanced mathematics",
        "History & Geography deep dive",
        "Vocabulary expansion",
        "Subject-wise tests",
      ],
    },
    {
      phase: "Phase 3 (Months 5-6)",
      focus: "Test & Revise",
      activities: [
        "Full-length mock tests",
        "Previous year papers",
        "Revision of weak areas",
        "Speed improvement",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
              Combined Defence Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CDS Preparation</h1>
            <p className="text-lg text-emerald-100 mb-6">
              Complete preparation guide for CDS examination - English, GK, and Elementary Mathematics
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/mock-tests"
                className="bg-white text-emerald-900 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors"
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
            <FileText className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900 mb-1">340</div>
            <div className="text-sm text-slate-600">Total Questions</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <Award className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900 mb-1">300</div>
            <div className="text-sm text-slate-600">Total Marks</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <Calendar className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900 mb-1">6 hrs</div>
            <div className="text-sm text-slate-600">Duration</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <Target className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900 mb-1">2x</div>
            <div className="text-sm text-slate-600">Yearly</div>
          </div>
        </div>

        {/* Exam Pattern */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Exam Pattern</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Paper</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Questions</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Marks</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {examPattern.map((paper) => (
                  <tr key={paper.paper}>
                    <td className="px-6 py-4 font-medium text-slate-900">{paper.paper}</td>
                    <td className="px-6 py-4 text-slate-600">{paper.questions}</td>
                    <td className="px-6 py-4 text-slate-600">{paper.marks}</td>
                    <td className="px-6 py-4 text-slate-600">{paper.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Syllabus */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Detailed Syllabus</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">E</span>
                </div>
                English
              </h3>
              <ul className="space-y-2">
                {syllabus.english.map((topic) => (
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
                  <span className="text-green-600 font-bold">G</span>
                </div>
                General Knowledge
              </h3>
              <ul className="space-y-2">
                {syllabus.gk.map((topic) => (
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
                  <span className="text-purple-600 font-bold">M</span>
                </div>
                Mathematics
              </h3>
              <ul className="space-y-2">
                {syllabus.mathematics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-slate-600">
                    <span className="text-purple-600 mt-1">•</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Study Timeline */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-slate-900">6-Month Study Plan</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map((phase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg font-bold mb-4 inline-block">
                  {phase.phase}
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{phase.focus}</h3>
                <ul className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-emerald-600 mt-1">✓</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Important Notes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Important Points</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-lg shadow-sm p-6 border border-emerald-100">
              <h3 className="font-bold text-slate-900 mb-4">Exam Eligibility</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-emerald-600 mt-1">•</span>
                  Age: 19-24 years (varies by academy)
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-emerald-600 mt-1">•</span>
                  Education: Graduate or final year student
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-emerald-600 mt-1">•</span>
                  Marital Status: Unmarried
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-emerald-600 mt-1">•</span>
                  Physical & Medical standards apply
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-sm p-6 border border-blue-100">
              <h3 className="font-bold text-slate-900 mb-4">Selection Process</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-blue-600 mt-1">1.</span>
                  Written Examination
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-blue-600 mt-1">2.</span>
                  SSB Interview (5 days)
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-blue-600 mt-1">3.</span>
                  Medical Examination
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-blue-600 mt-1">4.</span>
                  Final Merit List
                </li>
              </ul>
            </div>
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
