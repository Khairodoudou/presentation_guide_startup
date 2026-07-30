"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Code,
  Lightbulb,
  BarChart3,
  Package,
  UserX,
  Briefcase,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Rocket,
  Users,
  FileText,
  TrendingUp,
  Search,
  Layers,
} from "lucide-react";

const mistakes = [
  {
    icon: Code,
    title: "تبدأ بالبرمجة مباشرة",
    desc: "البرمجة آخر خطوة — ابدأ بالفكرة، ودراسة السوق، والـ Prototype",
    fix: "ابدأ بالـ Prototype وخذ آراء الناس قبل ما تبرمج",
    fixIcon: Layers,
  },
  {
    icon: Lightbulb,
    title: "تعتقد أن الفكرة وحدها تكفي",
    desc: "الفكرة مجرد نقطة بداية — التنفيذ والتحقق هما اللي يفرقوا",
    fix: "أثبت أن الفكرة مطلوبة أولاً بالتحدث مع الناس",
    fixIcon: Users,
  },
  {
    icon: BarChart3,
    title: "عدم القيام بدراسة السوق",
    desc: "بدون دراسة سوق، تخاطر بصرف وقت وجهد على منتج ما يحتاجوش أحد",
    fix: "دير بحث مع الناس المستهدفة وتحقق من المشكل",
    fixIcon: Search,
  },
  {
    icon: Package,
    title: "بناء منتج كامل من البداية",
    desc: "منتج كامل من البداية يضيع وقتك ومواردك على ميزات غير ضرورية",
    fix: "ابدأ بـ MVP — أقل عدد من الميزات يحل المشكل الأساسي",
    fixIcon: Rocket,
  },
  {
    icon: UserX,
    title: "العمل بمفردك",
    desc: "Startup ناجحة تحتاج فريق متنوع — تقني، تسويقي، تجاري",
    fix: "ابنِ فريق يكمّل مهاراتك وتتقاسموا نفس الرؤية",
    fixIcon: Users,
  },
  {
    icon: Briefcase,
    title: "إهمال الـ Business Model",
    desc: "بدون نموذج أعمال واضح، ما تعرفش كيفاش تدخل الدراهم",
    fix: "وضّح من البداية كيفاش راح يكون نموذج ربحك",
    fixIcon: TrendingUp,
  },
];

const bonusTips = [
  {
    icon: FileText,
    text: "إهمال الوثائق والملف القانوني للمشروع من البداية",
  },
  {
    icon: TrendingUp,
    text: "التوسع السريع قبل التأكد من ثبات المنتج",
  },
  {
    icon: Users,
    text: "عدم الاستماع لملاحظات المستخدمين بعد إطلاق الـ MVP",
  },
];

export default function Section7() {
  return (
    <section id="section7" className="relative py-24 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-700/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto w-fit" style={{ background: "rgba(239,68,68,0.1)", borderColor: "rgba(239,68,68,0.3)", color: "#fca5a5" }}>
            <AlertTriangle className="w-4 h-4" />
            <span>القسم السابع</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            أخطاء يجب{" "}
            <span className="bg-gradient-to-l from-red-500 to-orange-500 bg-clip-text text-transparent">
              تجنبها
            </span>
          </h2>
          <p className="text-indigo-300/70 text-base mt-3">تعرف على أكثر الأخطاء الشائعة وكيف تتجنبها</p>
          <div className="divider max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* Mistakes grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {mistakes.map((m, i) => {
            const Icon = m.icon;
            const FixIcon = m.fixIcon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-5 border border-red-800/20 relative overflow-hidden group hover:border-red-700/40 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/10"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-l from-red-600 to-orange-600 opacity-60" />

                {/* Mistake */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-red-900/30 border border-red-800/30 flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-3.5 h-3.5 text-red-400/70" />
                      <h4 className="text-white font-bold text-sm">{m.title}</h4>
                    </div>
                    <p className="text-red-300/60 text-xs leading-relaxed">{m.desc}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-l from-transparent via-purple-800/30 to-transparent mb-4" />

                {/* Fix */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-900/30 border border-emerald-800/30 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-emerald-300/70 text-xs font-semibold mb-1">الحل:</p>
                    <p className="text-emerald-200/60 text-xs leading-relaxed">{m.fix}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bonus mistakes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-6 border border-orange-800/20"
        >
          <h4 className="text-orange-300 font-bold text-sm mb-4 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            أخطاء إضافية تستحق الانتباه
          </h4>
          <div className="space-y-3">
            {bonusTips.map((tip, i) => {
              const Icon = tip.icon;
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-orange-400" />
                  </div>
                  <p className="text-indigo-200/70 text-sm">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Final CTA motivational */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center glass rounded-3xl p-8 border border-purple-600/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-indigo-900/10" />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mx-auto mb-4 glow-purple">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-black text-2xl mb-3">جاهز تبدأ مشروعك؟</h3>
            <p className="text-indigo-200/70 text-base mb-6 max-w-lg mx-auto leading-relaxed">
              كل رحلة بألف ميل تبدأ بخطوة واحدة — ابدأ بالمشكل، اعمل على الحل، وما تخافش من الأخطاء
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-l from-purple-600 to-indigo-600 text-white font-bold shadow-lg shadow-purple-900/40 hover:shadow-purple-700/50 hover:scale-105 transition-all"
            >
              <ArrowRight className="w-5 h-5" />
              <span>ارجع للبداية</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
