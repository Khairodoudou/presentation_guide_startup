"use client";

import { motion } from "framer-motion";
import { GitCompare, Rocket, Store, CheckCircle2, XCircle } from "lucide-react";

const comparisonRows = [
  {
    startup: "تعتمد على الابتكار",
    small: "تعتمد على نشاط تجاري أو خدمي",
  },
  {
    startup: "تحل مشكل بطريقة جديدة",
    small: "تقدم خدمة أو منتج موجود",
  },
  {
    startup: "قابلة للنمو والتوسع بسرعة",
    small: "نموها غالبًا يكون تدريجيًا",
  },
  {
    startup: "يمكن أن تستهدف السوق الوطني أو العالمي",
    small: "غالبًا تستهدف السوق المحلي",
  },
];

export default function Section2() {
  return (
    <section id="section2" className="relative py-24 px-4 sm:px-6 lg:px-8" dir="rtl">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-700/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto w-fit">
            <GitCompare className="w-4 h-4" />
            <span>القسم الثاني</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            الفرق بين <span className="gradient-text">Startup</span>
            <br />و المؤسسة المصغرة
          </h2>
          <div className="divider max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* Headers row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-4 mb-4"
        >
          {/* Startup header */}
          <div className="flex items-center gap-3 bg-gradient-to-l from-purple-900/60 to-indigo-900/40 border border-purple-500/30 rounded-2xl px-6 py-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-purple-300 text-xs font-medium">المشروع الريادي</p>
              <p className="text-white font-black text-lg">Startup</p>
            </div>
          </div>

          {/* Small biz header */}
          <div className="flex items-center gap-3 bg-gradient-to-l from-slate-800/60 to-slate-900/40 border border-slate-600/30 rounded-2xl px-6 py-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center flex-shrink-0">
              <Store className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-slate-400 text-xs font-medium">المشروع التقليدي</p>
              <p className="text-white font-black text-lg">مؤسسة مصغرة</p>
            </div>
          </div>
        </motion.div>

        {/* Comparison rows */}
        <div className="space-y-3 mb-10">
          {comparisonRows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Startup cell */}
              <div className="flex items-center gap-3 glass rounded-xl px-5 py-4 border border-purple-600/15 hover:border-purple-500/30 transition-all group">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <p className="text-indigo-100/90 text-sm leading-relaxed">{row.startup}</p>
              </div>
              {/* Small biz cell */}
              <div className="flex items-center gap-3 glass-light rounded-xl px-5 py-4 border border-slate-700/30 hover:border-slate-600/50 transition-all">
                <div className="w-4 h-4 rounded-full border border-slate-500 flex-shrink-0 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{row.small}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-5"
        >
          {/* Startup conclusion */}
          <div className="rounded-2xl p-6 border border-purple-600/30 bg-purple-900/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-purple-600 to-indigo-500 rounded-t-2xl" />
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Rocket className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h4 className="text-purple-300 font-bold mb-2">إذا كان مشروعك...</h4>
                <p className="text-indigo-100/80 text-sm leading-relaxed">
                  فيه <strong className="text-purple-400">ابتكار</strong> ويحل مشكل بطريقة جديدة — فهو أقرب إلى{" "}
                  <strong className="text-white">Startup</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Small biz conclusion */}
          <div className="rounded-2xl p-6 border border-slate-700/30 bg-slate-800/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-slate-600 to-slate-500 rounded-t-2xl" />
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Store className="w-5 h-5 text-slate-400" />
              </div>
              <div>
                <h4 className="text-slate-400 font-bold mb-2">أما إذا كان...</h4>
                <p className="text-slate-400/80 text-sm leading-relaxed">
                  يقدم خدمة أو منتجًا <strong className="text-slate-300">موجودًا</strong> في السوق بهدف الربح — فهو{" "}
                  <strong className="text-white">مؤسسة مصغرة</strong>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
