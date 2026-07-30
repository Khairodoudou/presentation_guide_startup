"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  Lightbulb,
  Send,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  Minus,
} from "lucide-react";

const bmcItems = [
  {
    icon: Users,
    question: "شكون هو الزبون؟",
    example: "الطلبة",
    color: "from-purple-600 to-indigo-600",
  },
  {
    icon: Lightbulb,
    question: "واش راح نقدم؟",
    example: "دروس برمجة",
    color: "from-indigo-600 to-blue-600",
  },
  {
    icon: Send,
    question: "كيفاش نوصل للزبون؟",
    example: "موقع إلكتروني",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: DollarSign,
    question: "كيفاش راح ندخل الدراهم؟",
    example: "اشتراك شهري",
    color: "from-emerald-600 to-teal-600",
  },
];

const financeItems = [
  {
    label: "تطوير التطبيق",
    amount: "100,000 دج",
    type: "expense",
    icon: "💸",
  },
  {
    label: "التسويق",
    amount: "20,000 دج",
    type: "expense",
    icon: "📢",
  },
  {
    label: "الاشتراكات (إيرادات)",
    amount: "180,000 دج",
    type: "revenue",
    icon: "💵",
  },
];

export default function Section4() {
  return (
    <section id="section4" className="relative py-24 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-700/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto w-fit">
            <BarChart3 className="w-4 h-4" />
            <span>القسم الرابع</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            <span className="gradient-text">BMC</span> والخطة المالية
          </h2>
          <div className="divider max-w-xs mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* BMC Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-3xl p-7 border border-purple-500/20 h-full section-card">
              {/* BMC Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center glow-purple">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-black text-xl">Business Model Canvas</h3>
                  <p className="text-purple-400 text-sm font-medium">BMC</p>
                </div>
              </div>

              <p className="text-indigo-200/80 text-sm leading-relaxed mb-6">
                الـ BMC هو مخطط يشرح كيفاش المشروع راح يخدم — يجاوب على الأسئلة الأساسية:
              </p>

              {/* BMC Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {bmcItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-light rounded-xl p-4 border border-white/5 hover:border-purple-500/20 transition-all group"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-3`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-indigo-200/70 text-xs mb-1 leading-relaxed">{item.question}</p>
                      <p className="text-white font-bold text-sm">{item.example}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* BMC Summary */}
              <div className="glass-light rounded-xl p-4 border-r-2 border-purple-500 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-4 h-4 text-purple-400" />
                </div>
                <p className="text-indigo-200/80 text-sm">
                  الـ BMC يشرح <strong className="text-purple-400">كيفاش المشروع راح يخدم ويحقق الربح</strong>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Financial Plan Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass rounded-3xl p-7 border border-emerald-500/20 h-full section-card">
              {/* Finance Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center" style={{ boxShadow: "0 0 30px rgba(16,185,129,0.3)" }}>
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-black text-xl">الخطة المالية</h3>
                  <p className="text-emerald-400 text-sm font-medium">Plan Financier</p>
                </div>
              </div>

              <p className="text-indigo-200/80 text-sm leading-relaxed mb-6">
                الـ Plan Financier هو حسابات المشروع — يجاوب على:
              </p>

              {/* Finance questions */}
              <div className="space-y-2 mb-6">
                {["شحال راح نصرف؟", "شحال راح ندخل؟", "هل المشروع راح يربح؟"].map((q, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-indigo-200/70">
                    <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    {q}
                  </div>
                ))}
              </div>

              {/* Finance breakdown */}
              <div className="space-y-3 mb-6">
                {financeItems.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-3 rounded-xl ${
                      item.type === "revenue"
                        ? "bg-emerald-900/25 border border-emerald-600/20"
                        : "bg-red-900/15 border border-red-800/20"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{item.icon}</span>
                      <span className="text-indigo-200/80 text-sm">{item.label}</span>
                    </div>
                    <span
                      className={`font-bold text-sm ${
                        item.type === "revenue" ? "text-emerald-400" : "text-red-400"
                      }`}
                    >
                      {item.type === "expense" && <Minus className="w-3 h-3 inline-block ml-1" />}
                      {item.type === "revenue" && <TrendingUp className="w-3 h-3 inline-block ml-1" />}
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>

              {/* Profit = Revenue > Expenses */}
              <div className="glass-light rounded-xl p-4 border border-emerald-500/20 text-center">
                <p className="text-emerald-300 font-bold text-sm">
                  إذا كانت الإيرادات أكبر من المصاريف → المشروع مربح ✓
                </p>
              </div>

              {/* Finance Summary */}
              <div className="mt-4 glass-light rounded-xl p-4 border-r-2 border-emerald-500 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-indigo-200/80 text-sm">
                  يبين إذا المشروع <strong className="text-emerald-400">يقدر ينجح من الناحية المالية</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* One liner diff */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 glass rounded-2xl p-6 border border-purple-500/15"
        >
          <h4 className="text-indigo-300 font-bold text-sm mb-4 text-center">الفرق في جملة واحدة</h4>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 glass-light rounded-xl p-4">
              <BarChart3 className="w-5 h-5 text-purple-400 flex-shrink-0" />
              <p className="text-indigo-100/80 text-sm">
                <strong className="text-purple-400">BMC:</strong> كيفاش المشروع راح يخدم؟
              </p>
            </div>
            <div className="flex items-center gap-3 glass-light rounded-xl p-4">
              <DollarSign className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <p className="text-indigo-100/80 text-sm">
                <strong className="text-emerald-400">Plan Financier:</strong> هل المشروع راح يربح؟
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
