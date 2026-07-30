"use client";

import { motion } from "framer-motion";
import { Rocket, Sparkles, TrendingUp, Lightbulb, Globe } from "lucide-react";

const floatingCards = [
  { icon: Lightbulb, label: "Innovation", color: "from-amber-500 to-orange-500", delay: 0 },
  { icon: TrendingUp, label: "Growth", color: "from-emerald-500 to-teal-500", delay: 0.2 },
  { icon: Globe, label: "Scale", color: "from-blue-500 to-cyan-500", delay: 0.4 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20" dir="rtl">
      {/* Bg mesh gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-700/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.06)_0%,_transparent_70%)]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="particle absolute w-1.5 h-1.5 rounded-full bg-purple-400/60"
          style={{
            top: `${15 + i * 14}%`,
            right: `${8 + i * 15}%`,
            "--duration": `${3 + i}s`,
            "--delay": `${i * 0.4}s`,
          } as React.CSSProperties}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="section-badge text-sm">
            <Sparkles className="w-4 h-4" />
            <span>دليل شامل للمؤسسات الناشئة في الجزائر</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
            <span className="text-white">كيفاش تبني</span>
            <br />
            <span className="gradient-text text-glow">Startup ناجحة؟</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-indigo-200/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          من الفكرة إلى التنفيذ — كل ما تحتاجه لفهم عالم الريادة وبناء مشروعك الناجح خطوة بخطوة
        </motion.p>

        {/* Formula */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-3 glass rounded-2xl px-8 py-4 mb-12 glow-purple"
        >
          <span className="text-purple-400 font-bold text-lg">Startup</span>
          <span className="text-indigo-300 text-lg">=</span>
          <span className="text-white font-semibold">Innovation</span>
          <span className="text-indigo-400">+</span>
          <span className="text-white font-semibold">Solution</span>
          <span className="text-indigo-400">+</span>
          <span className="text-white font-semibold">Growth</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(124,58,237,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-l from-purple-600 to-indigo-600 text-white font-bold text-base shadow-lg shadow-purple-900/40 transition-all"
            onClick={() => document.getElementById("section1")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Rocket className="w-5 h-5" />
            <span>ابدأ الاستكشاف</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl glass text-purple-300 font-semibold text-base border border-purple-600/30 hover:border-purple-500/60 transition-all"
            onClick={() => document.getElementById("section6")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span>Label Innovant</span>
          </motion.button>
        </motion.div>

        {/* Floating stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {floatingCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                className={`flex items-center gap-3 glass rounded-xl px-5 py-3 border border-white/5`}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, delay: card.delay, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-indigo-200 font-semibold text-sm">{card.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a1a] to-transparent z-10" />
    </section>
  );
}
