"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Menu,
  X,
  ChevronDown,
  Lightbulb,
  GitCompare,
  Search,
  BarChart3,
  Code2,
  Award,
  AlertTriangle,
} from "lucide-react";

const navSections = [
  { id: "section1", label: "ما هي Startup", icon: Lightbulb },
  { id: "section2", label: "المقارنة", icon: GitCompare },
  { id: "section3", label: "الفكرة والسوق", icon: Search },
  { id: "section4", label: "BMC والتمويل", icon: BarChart3 },
  { id: "section5", label: "Prototype & MVP", icon: Code2 },
  { id: "section6", label: "Label Innovant", icon: Award },
  { id: "section7", label: "الأخطاء", icon: AlertTriangle },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navSections.map((s) => s.id);
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg shadow-purple-900/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18" dir="rtl">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center glow-purple">
                <Rocket className="w-5 h-5 text-white" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 opacity-50 blur-md -z-10" />
              </div>
              <div className="hidden sm:block">
                <p className="text-white font-bold text-base leading-tight">دليل Startup</p>
                <p className="text-purple-400 text-xs font-medium">من الفكرة إلى النجاح</p>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navSections.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`nav-link flex items-center gap-1.5 text-sm ${
                      activeSection === item.id ? "active" : ""
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-3">
              <motion.button
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-l from-purple-600 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-purple-900/30 hover:shadow-purple-700/40 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("section1")}
              >
                <Rocket className="w-4 h-4" />
                <span>ابدأ الآن</span>
              </motion.button>

              <button
                className="lg:hidden p-2 rounded-lg glass text-purple-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-menu lg:hidden overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1" dir="rtl">
                {navSections.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => scrollTo(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-right transition-all ${
                        activeSection === item.id
                          ? "bg-purple-900/40 text-white border border-purple-600/30"
                          : "text-purple-300 hover:bg-purple-900/20 hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll down indicator on hero */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 scroll-indicator hidden md:flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => scrollTo("section1")}>
        <span className="text-purple-400 text-xs font-medium">اسكرول للأسفل</span>
        <ChevronDown className="w-5 h-5 text-purple-400" />
      </div>
    </>
  );
}
