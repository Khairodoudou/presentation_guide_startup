"use client";

import { motion } from "framer-motion";
import {
  Search,
  Target,
  Users,
  ShoppingBag,
  Star,
  MessageSquare,
  GraduationCap,
  Clock,
  AlertCircle,
  Globe,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

const problems = [
  {
    icon: GraduationCap,
    text: "الطلبة يلقاو صعوبة باش يلقاو تربص (Stage)",
  },
  {
    icon: Clock,
    text: "الناس يضيعولهم الوقت في الإدارات",
  },
  {
    icon: AlertCircle,
    text: "مرضى الحساسية ما يعرفوش مكونات المنتجات الغذائية",
  },
];

const marketSteps = [
  {
    num: "١",
    icon: AlertCircle,
    question: "واش هو المشكل؟",
    answer: "مثال: الطلبة يلقاو صعوبة باش يلقاو Stage",
    color: "from-purple-600 to-indigo-600",
  },
  {
    num: "٢",
    icon: Users,
    question: "شكون الناس لي عندهم هاد المشكل؟",
    answer: "مثال: طلبة الجامعة، المتخرجين الجدد",
    color: "from-indigo-600 to-blue-600",
  },
  {
    num: "٣",
    icon: ShoppingBag,
    question: "كاين حلول في السوق؟",
    answer: "ابحث في Google, Play Store, App Store",
    color: "from-blue-600 to-cyan-600",
    subItems: ["Google", "Play Store", "App Store"],
  },
  {
    num: "٤",
    icon: Star,
    question: "واش يميز الحل تاعك؟",
    answer: "",
    color: "from-emerald-600 to-teal-600",
    bullets: ["أسهل في الاستعمال", "أسرع", "أقل تكلفة", "موجه للسوق الجزائرية"],
  },
  {
    num: "٥",
    icon: MessageSquare,
    question: "اسأل الناس",
    answer: "",
    color: "from-amber-600 to-orange-600",
    bullets: ["دير Google Forms", "اهدر مع الناس المستهدفة", "اسمع لآرائهم ومشاكلهم"],
  },
];

export default function Section3() {
  return (
    <section id="section3" className="relative py-24 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-700/8 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto w-fit">
            <Search className="w-4 h-4" />
            <span>القسم الثالث</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            كيفاش <span className="gradient-text">نجيب فكرة</span> مشروع؟
          </h2>
          <div className="divider max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* Big insight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 border border-purple-600/20 mb-10 text-center relative overflow-hidden section-card"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent" />
          <div className="relative z-10">
            <p className="text-indigo-300 text-lg mb-3 font-medium">
              أغلب الناس يظنوا أن الـ Startup تبدأ بفكرة...
            </p>
            <p className="text-white text-2xl font-black leading-tight">
              لكن الحقيقة أنها تبدأ بـ{" "}
              <span className="gradient-text text-glow">مشكل</span> 🎯
            </p>
            <div className="mt-6 inline-flex items-center gap-3 glass-light rounded-xl px-6 py-3">
              <Target className="w-5 h-5 text-purple-400" />
              <span className="text-indigo-100 font-semibold">
                إذا لقيت مشكل حقيقي — تقدر تلقى فكرة مشروع
              </span>
            </div>
          </div>
        </motion.div>

        {/* Problem examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h3 className="text-purple-300 font-bold text-sm mb-4 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            أمثلة على مشاكل حقيقية
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="feature-card flex items-start gap-3"
                >
                  <div className="icon-wrapper mt-0.5 flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <p className="text-indigo-100/85 text-sm leading-relaxed">{p.text}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-4 text-center">
            <span className="text-purple-400 text-sm font-semibold">
              ✦ كل مشكل يقدر يكون فرصة لإنشاء Startup
            </span>
          </div>
        </motion.div>

        {/* Market study section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="glass rounded-3xl p-8 border border-indigo-500/20 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="icon-wrapper flex-shrink-0 mt-1">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">
                  واش هي دراسة السوق (Étude de marché)؟
                </h3>
                <p className="text-indigo-100/80 text-sm leading-relaxed mb-4">
                  قبل ما تبدأ تخدم على المشروع تاعك، لازم تعرف:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "هل هذا المشكل موجود فعلًا؟",
                    "شكون الناس لي يعانو منه؟",
                    "كاين حلول في السوق؟",
                    "الناس راهم مستعدين يستعملوا الحل تاعك؟",
                  ].map((q, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-indigo-200/80 text-sm">{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="glass-light rounded-xl p-4 border-r-2 border-purple-500">
              <p className="text-indigo-200/80 text-sm">
                قبل ما تصرف وقتك وجهدك — لازم تتأكد بلي فكرتك{" "}
                <strong className="text-purple-400">مطلوبة</strong>
              </p>
            </div>
          </div>
        </motion.div>

        {/* 5 validation questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-purple-900/50 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
            </span>
            كيفاه نتحقق من الفكرة؟ — ٥ أسئلة أساسية
          </h3>

          <div className="space-y-4">
            {marketSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="step-card"
                >
                  <div className="flex items-start gap-4">
                    <div className={`step-number bg-gradient-to-br ${step.color} text-base`}>
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-purple-400" />
                        <h4 className="text-white font-bold">{step.question}</h4>
                      </div>
                      {step.answer && (
                        <p className="text-indigo-200/70 text-sm mb-2">{step.answer}</p>
                      )}
                      {step.bullets && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {step.bullets.map((b, j) => (
                            <span
                              key={j}
                              className="px-3 py-1 rounded-full bg-purple-900/40 text-purple-300 text-xs border border-purple-700/30"
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                      )}
                      {step.subItems && (
                        <div className="flex gap-2 mt-2">
                          {step.subItems.map((s, j) => (
                            <span
                              key={j}
                              className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 text-xs border border-blue-700/30"
                            >
                              <Smartphone className="w-3 h-3" />
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 glass rounded-2xl p-5 border border-emerald-500/20 bg-emerald-900/10 text-center"
          >
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <p className="text-indigo-100/80 text-sm">
              إذا لقيت أن الناس عندهم نفس المشكل ويهتموا بالحل —{" "}
              <strong className="text-emerald-400">فالفكرة عندها فرصة تنجح</strong>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
