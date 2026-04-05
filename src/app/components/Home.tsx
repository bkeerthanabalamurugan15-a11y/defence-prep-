import { Link } from "react-router";
import { Target, FileText, Zap, BookOpen, Dumbbell, Trophy, Clock, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: FileText,
      title: "Mock Tests",
      description: "Comprehensive mock tests for NDA, CDS, and AFCAT with detailed solutions",
      link: "/mock-tests",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Zap,
      title: "Flashcards",
      description: "Quick revision flashcards for important topics and concepts",
      link: "/flashcards",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: BookOpen,
      title: "Vocabulary Builder",
      description: "Master English vocabulary with daily word lists and exercises",
      link: "/vocabulary",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Dumbbell,
      title: "Physical Training",
      description: "Complete physical fitness guide for SSB and medical standards",
      link: "/physical-training",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const examStreams = [
    {
      title: "NDA",
      fullName: "National Defence Academy",
      subjects: ["Mathematics", "General Ability Test"],
      link: "/nda",
    },
    {
      title: "CDS",
      fullName: "Combined Defence Services",
      subjects: ["English", "General Knowledge", "Elementary Mathematics"],
      link: "/cds",
    },
    {
      title: "AFCAT",
      fullName: "Air Force Common Admission Test",
      subjects: ["General Awareness", "Verbal Ability", "Numerical Ability", "Reasoning"],
      link: "/afcat",
    },
  ];

  const stats = [
    { icon: FileText, value: "500+", label: "Mock Tests" },
    { icon: Zap, value: "2000+", label: "Flashcards" },
    { icon: BookOpen, value: "5000+", label: "Vocabulary Words" },
    { icon: Users, value: "10K+", label: "Aspirants" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763656444686-340ef6ea2c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMHRyYWluaW5nJTIwc29sZGllcnN8ZW58MXx8fHwxNzc1MzY0OTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Military training"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Gateway to Defence Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Complete preparation platform for NDA, CDS, and AFCAT examinations with mock tests,
              flashcards, vocabulary builder, and physical training guides.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/mock-tests"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Start Mock Test
              </Link>
              <Link
                to="/nda"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Complete Preparation Tools
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to ace your defence exams in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.title}
                  to={feature.link}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exam Streams Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Exam-Specific Preparation
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tailored study plans and resources for each defence examination
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {examStreams.map((exam) => (
              <div
                key={exam.title}
                className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 border border-blue-100 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
                    {exam.title}
                  </div>
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{exam.fullName}</h3>
                <div className="space-y-2 mb-6">
                  {exam.subjects.map((subject) => (
                    <div key={subject} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      {subject}
                    </div>
                  ))}
                </div>
                <Link
                  to={exam.link}
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  Start Preparation
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of aspirants who are preparing with DefencePrep
          </p>
          <Link
            to="/mock-tests"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            <FileText className="w-5 h-5" />
            Take Your First Mock Test
          </Link>
        </div>
      </section>
    </div>
  );
}
