import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Target, BookOpen, Dumbbell, Zap, FileText, GraduationCap } from "lucide-react";
import { useState } from "react";

export function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: Target },
    { path: "/mock-tests", label: "Mock Tests", icon: FileText },
    { path: "/flashcards", label: "Flashcards", icon: Zap },
    { path: "/vocabulary", label: "Vocabulary", icon: BookOpen },
    { path: "/physical-training", label: "Physical Training", icon: Dumbbell },
  ];

  const examStreams = [
    { path: "/nda", label: "NDA" },
    { path: "/cds", label: "CDS" },
    { path: "/afcat", label: "AFCAT" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8" />
              <span className="text-xl font-bold">DefencePrep</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                      isActive(link.path)
                        ? "bg-white/20 text-white"
                        : "text-blue-100 hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Exam Streams */}
            <div className="hidden lg:flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              {examStreams.map((stream) => (
                <Link
                  key={stream.path}
                  to={stream.path}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    isActive(stream.path)
                      ? "bg-white text-blue-900"
                      : "text-blue-100 hover:bg-white/20"
                  }`}
                >
                  {stream.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-blue-700">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                        isActive(link.path)
                          ? "bg-white/20 text-white"
                          : "text-blue-100 hover:bg-white/10"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {link.label}
                    </Link>
                  );
                })}
                <div className="border-t border-blue-700 my-2 pt-2">
                  <p className="text-xs text-blue-200 px-3 mb-2">Exam Streams</p>
                  {examStreams.map((stream) => (
                    <Link
                      key={stream.path}
                      to={stream.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                        isActive(stream.path)
                          ? "bg-white/20 text-white"
                          : "text-blue-100 hover:bg-white/10"
                      }`}
                    >
                      {stream.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-white mb-3">DefencePrep</h3>
              <p className="text-sm">
                Your complete preparation platform for NDA, CDS, and AFCAT examinations.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3">Quick Links</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/mock-tests" className="hover:text-white transition-colors">
                  Mock Tests
                </Link>
                <Link to="/flashcards" className="hover:text-white transition-colors">
                  Flashcards
                </Link>
                <Link to="/physical-training" className="hover:text-white transition-colors">
                  Physical Training
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3">Exam Streams</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/nda" className="hover:text-white transition-colors">
                  NDA Preparation
                </Link>
                <Link to="/cds" className="hover:text-white transition-colors">
                  CDS Preparation
                </Link>
                <Link to="/afcat" className="hover:text-white transition-colors">
                  AFCAT Preparation
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2026 DefencePrep. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
