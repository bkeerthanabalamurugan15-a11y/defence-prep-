import { Link } from "react-router";
import { BookOpen, FileText, Zap, Calendar, Target, TrendingUp, Award } from "lucide-react";

export function NDAPrep() {
  const syllabus = {
    mathematics: [
      "Algebra",
      "Matrices and Determinants",
      "Trigonometry",
      "Analytical Geometry (2D & 3D)",
      "Differential Calculus",
      "Integral Calculus",
      "Vector Algebra",
      "Statistics and Probability",
    ],
    gat: [
      "English (Grammar & Usage)",
      "Physics",
      "Chemistry",
      "General Science",
      "History",
      "Geography",
      "Current Events",
      "General Knowledge",
    ],
  };

  const examPattern = [
    { paper: "Mathematics", questions: 120, marks: 300, duration: "2.5 hours" },
    { paper: "General Ability Test", questions: 150, marks: 600, duration: "2.5 hours" },
  ];

  const studyResources = [
    {
      icon: FileText,
      title: "Mock Tests",
      description: "50+ full-length NDA mock tests",
      link: "/mock-tests",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Zap,
      title: "Flashcards",
      description: "Quick revision cards for all topics",
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
      phase: "Phase 1 (Months 1-3)",
      focus: "Foundation Building",
      activities: [
        "Complete syllabus coverage",
        "Basic concept clarity",
        "Chapter-wise practice",
        "Daily vocabulary building",
      ],
    },
    {
      phase: "Phase 2 (Months 4-6)",
      focus: "Practice & Revision",
      activities: [
        "Topic-wise tests",
        "Previous year papers",
        "Weak area improvement",
        "Speed building",
      ],
    },
    {
      phase: "Phase 3 (Months 7-9)",
      focus: "Mock Tests & Fine-tuning",
      activities: [
        "Full-length mock tests",
        "Time management practice",
        "Revision of all topics",
        "Current affairs update",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
              National Defence Academy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">NDA Preparation</h1>
            <p className="text-lg text-blue-100 mb-6">
              Comprehensive preparation guide for NDA examination - Mathematics and General Ability Test
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/mock-tests"
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
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
            <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900 mb-1">270</div>
            <div className="text-sm text-slate-600">Total Questions</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900 mb-1">900</div>
            <div className="text-sm text-slate-600">Total Marks</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900 mb-1">5 hrs</div>
            <div className="text-sm text-slate-600">Duration</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900 mb-1">2x</div>
            <div className="text-sm text-slate-600">Yearly</div>
          </div>
        </div>

        {/* Exam Pattern */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Exam Pattern</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-50">
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
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">M</span>
                </div>
                Mathematics
              </h3>
              <ul className="space-y-2">
                {syllabus.mathematics.map((topic) => (
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
                General Ability Test
              </h3>
              <ul className="space-y-2">
                {syllabus.gat.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-slate-600">
                    <span className="text-green-600 mt-1">•</span>
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
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900">9-Month Study Plan</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map((phase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-bold mb-4 inline-block">
                  {phase.phase}
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{phase.focus}</h3>
                <ul className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-blue-600 mt-1">✓</span>
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
