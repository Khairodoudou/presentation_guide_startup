"use client";

import { motion } from "framer-motion";
import {
  Award,
  FileText,
  ClipboardCheck,
  CheckCircle2,
  Shield,
  DollarSign,
  Users,
  Star,
  Building2,
  ArrowLeft,
} from "lucide-react";

const steps = [
  {
    num: "1",
    icon: FileText,
    title: "تسجل وتبعث الملف",
    desc: "عبر منصة Startup.dz — تكمل جميع المعلومات المطلوبة",
    color: "from-purple-600 to-indigo-600",
  },
  {
    num: "2",
    icon: ClipboardCheck,
    title: "اللجنة الوطنية تدرس الملف",
    desc: "اللجنة الوطنية للتوسيم تراجع المشروع وتتحقق من شروط الابتكار",
    color: "from-indigo-600 to-blue-600",
  },
  {
    num: "3",
    icon: Award,
    title: "تتحصل على اللقب",
    desc: 'إذا المشروع يستوفي الشروط، تتحصل على Label "Projet Innovant"',
    color: "from-amber-600 to-orange-600",
  },
];

const benefits = [
  {
    icon: Users,
    title: "برامج المرافقة والاحتضان",
    desc: "تدعمك خبراء ومرشدون متخصصون في الريادة",
    color: "from-purple-600 to-indigo-600",
  },
  {
    icon: DollarSign,
    title: "فرص التمويل",
    desc: "الوصول لصناديق دعم الدولة والمستثمرين",
    color: "from-emerald-600 to-teal-600",
  },
  {
    icon: Star,
    title: "مسابقات وبرامج خاصة",
    desc: "المشاركة في برامج خاصة بالمؤسسات الناشئة المعترف بها",
    color: "from-amber-600 to-orange-600",
  },
  {
    icon: Shield,
    title: "مزايا وتسهيلات",
    desc: "تسهيلات إدارية وضريبية تقدمها الدولة للمشاريع المبتكرة",
    color: "from-blue-600 to-cyan-600",
  },
];

export default function Section6() {
  return (
    <section id="section6" className="relative py-24 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-amber-700/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto w-fit">
            <Award className="w-4 h-4" />
            <span>القسم السادس</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            <span className="gradient-text-gold">Label</span>{" "}
            <span className="text-white">Projet Innovant</span>
          </h2>
          <div className="divider max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* Main definition card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 border border-amber-500/25 mb-12 section-card relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/15 to-transparent" />
          <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">
            {/* Award Icon */}
            <div className="relative flex-shrink-0">
              <div
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center"
                style={{ boxShadow: "0 0 40px rgba(245,158,11,0.35)" }}
              >
                <Award className="w-10 h-10 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-white font-black text-2xl mb-3">واش هو Label Projet Innovant؟</h3>
              <p className="text-indigo-100/85 text-base leading-relaxed mb-4">
                هو اعتراف رسمي من الدولة يثبت أن مشروعك مبتكر ويستوفي الشروط المطلوبة
                للحصول على مزايا وتسهيلات خاصة بالمؤسسات الناشئة.
              </p>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-900/30 border border-amber-600/30 w-fit">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span className="text-amber-300 text-sm font-semibold">عبر منصة Startup.dz</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-purple-900/50 flex items-center justify-center">
              <ArrowLeft className="w-4 h-4 text-purple-400" />
            </span>
            كيفاش تتحصل عليه؟
          </h3>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute right-6 top-8 bottom-8 w-px bg-gradient-to-b from-purple-600 via-indigo-600 to-amber-600 opacity-30 hidden sm:block" />

            <div className="space-y-4">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="step-card sm:mr-0"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`step-number bg-gradient-to-br ${step.color} flex-shrink-0`}>
                        {step.num}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-4 h-4 text-purple-400" />
                          <h4 className="text-white font-bold">{step.title}</h4>
                        </div>
                        <p className="text-indigo-200/70 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-amber-900/50 flex items-center justify-center">
              <Star className="w-4 h-4 text-amber-400" />
            </span>
            علاش مهم الـ Label؟
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="feature-card"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${b.color} flex items-center justify-center mb-4 flex-shrink-0`} style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-white font-bold mb-2">{b.title}</h4>
                  <p className="text-indigo-200/70 text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Platform CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href="https://www.startup.dz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-l from-amber-600 to-orange-600 text-white font-bold text-base shadow-lg hover:shadow-amber-900/40 transition-all hover:scale-105"
          >
            <Building2 className="w-5 h-5" />
            <span>زور منصة Startup.dz</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
