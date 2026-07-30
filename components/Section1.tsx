"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Zap,
  Globe,
  TrendingUp,
  CheckCircle2,
  ChevronLeft,
} from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "الابتكار",
    titleEn: "Innovation",
    desc: "طريقة جديدة أو أحسن باش تحل مشكل موجود",
    color: "from-amber-500 to-orange-500",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.25)",
  },
  {
    icon: CheckCircle2,
    title: "الحل",
    titleEn: "Solution",
    desc: "مشكل حقيقي يعانيه الناس يحتاج حل فعلي",
    color: "from-emerald-500 to-teal-500",
    bg: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.25)",
  },
  {
    icon: TrendingUp,
    title: "النمو",
    titleEn: "Growth",
    desc: "قابلية للتوسع حتى للأسواق العالمية",
    color: "from-blue-500 to-cyan-500",
    bg: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.25)",
  },
];

const facts = [
  { icon: Globe, text: "ماشي غير السوق المحلي — قابلة للتوسع عالميًا" },
  { icon: Zap, text: "الابتكار يكون تكنولوجي أو في الخدمة أو طريقة العمل" },
  { icon: Lightbulb, text: "الـ Startup تبدأ بمشكل حقيقي لا بفكرة فقط" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Section1() {
  return (
    <section id="section1" className="relative py-24 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto w-fit">
            <Lightbulb className="w-4 h-4" />
            <span>القسم الأول</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            واش هي <span className="gradient-text">Startup</span>؟
          </h2>
          <div className="divider max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* Main definition card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 mb-10 relative overflow-hidden border border-purple-500/20 section-card"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/8 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="icon-wrapper mt-1">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">التعريف الرسمي</h3>
                <p className="text-indigo-100/90 text-lg leading-relaxed">
                  Startup هي مؤسسة جديدة مبنية على <span className="text-purple-400 font-semibold">فكرة مبتكرة</span>، هدفها تحل مشكل حقيقي وتقدر تكبر وتتوسع بسرعة.
                </p>
              </div>
            </div>
            <div className="glass-light rounded-2xl p-5">
              <p className="text-indigo-200/80 text-sm mb-1 font-medium">بطريقة أبسط:</p>
              <p className="text-white text-base leading-relaxed">
                Startup هي مشروع جديد يجيب حل جديد لمشكل موجود عند الناس، ويكون عنده{" "}
                <span className="text-purple-400 font-semibold">قابلية للنمو والتوسع</span>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Formula */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 glass border border-purple-600/30 rounded-2xl px-8 py-5 glow-purple">
            <span className="text-indigo-300 font-semibold text-sm">قاعدة سهلة:</span>
            <div className="h-4 w-px bg-purple-600/40" />
            <span className="text-purple-400 font-black text-lg">Startup</span>
            <span className="text-white text-lg font-bold">=</span>
            <span className="text-amber-400 font-bold">Innovation</span>
            <span className="text-indigo-400">+</span>
            <span className="text-emerald-400 font-bold">Solution</span>
            <span className="text-indigo-400">+</span>
            <span className="text-blue-400 font-bold">Growth</span>
          </div>
        </motion.div>

        {/* 3 Pillars */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={i} variants={item}>
                <div
                  className="feature-card h-full"
                  style={{
                    background: p.bg,
                    borderColor: p.border,
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-1">{p.title}</h3>
                  <p className="text-indigo-300/70 text-sm font-medium mb-3">{p.titleEn}</p>
                  <p className="text-indigo-100/80 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Facts list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-light rounded-2xl p-6 border border-purple-500/15"
        >
          <h4 className="text-purple-300 font-bold text-sm mb-4 flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            نقاط مهمة تفهمها
          </h4>
          <div className="space-y-3">
            {facts.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-purple-400" />
                  </div>
                  <p className="text-indigo-100/80 text-sm">{f.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
