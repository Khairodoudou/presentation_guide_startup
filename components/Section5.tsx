"use client";

import { motion } from "framer-motion";
import {
  Code2,
  PenTool,
  Layers,
  Users,
  CheckCircle2,
  XCircle,
  Eye,
  Zap,
} from "lucide-react";

const protoFeatures = [
  { text: "يبين كيفاش الحل راح يخدم", icon: CheckCircle2, ok: true },
  { text: "منتج نهائي", icon: XCircle, ok: false },
  { text: "تطبيق كامل", icon: XCircle, ok: false },
  { text: "جميع الخصائص", icon: XCircle, ok: false },
];

const mvpFeatures = [
  { text: "يخدم فعلاً", icon: CheckCircle2, ok: true },
  { text: "يحل المشكل الأساسي", icon: CheckCircle2, ok: true },
  { text: "أقل عدد من الخصائص الضرورية", icon: CheckCircle2, ok: true },
  { text: "النسخة النهائية", icon: XCircle, ok: false },
];

const protoTools = [
  { name: "Figma", desc: "تصميم واجهات احترافية", icon: PenTool },
  { name: "Canva", desc: "صفحات بسيطة وجذابة", icon: Layers },
  { name: "Landing Page", desc: "موقع بسيط فيه الواجهات فقط", icon: Eye },
];

const diffTable = [
  { label: "يوري الفكرة", proto: true, mvp: false },
  { label: "يخدم فعلاً", proto: false, mvp: true },
  { label: "تصميم أو نموذج", proto: true, mvp: false },
  { label: "منتج قابل للاستعمال", proto: false, mvp: true },
  { label: "ما يحتاجش برمجة", proto: true, mvp: false },
  { label: "لازم يكون مبرمج", proto: false, mvp: true },
];

export default function Section5() {
  return (
    <section id="section5" className="relative py-24 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-700/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto w-fit">
            <Code2 className="w-4 h-4" />
            <span>القسم الخامس</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            <span className="gradient-text">Prototype</span> و{" "}
            <span className="gradient-text">MVP</span>
          </h2>
          <div className="divider max-w-xs mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Prototype Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass rounded-3xl p-7 border border-indigo-500/20 h-full section-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-indigo-600 to-purple-600 rounded-t-3xl" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center glow-indigo">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-black text-xl">Prototype</h3>
                  <p className="text-indigo-400 text-sm">النموذج الأولي</p>
                </div>
              </div>

              <p className="text-indigo-200/80 text-sm leading-relaxed mb-5">
                نموذج أولي يوري الفكرة والحل بطريقة بسيطة
              </p>

              <div className="space-y-2 mb-6">
                {protoFeatures.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} className="flex items-center gap-2">
                      <Icon
                        className={`w-4 h-4 flex-shrink-0 ${
                          f.ok ? "text-emerald-400" : "text-red-400/70"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          f.ok ? "text-indigo-200/80" : "text-indigo-400/50 line-through"
                        }`}
                      >
                        {f.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Tools */}
              <div className="mb-5">
                <p className="text-indigo-300/70 text-xs font-semibold mb-3">أمثلة على أدوات الـ Prototype</p>
                <div className="space-y-2">
                  {protoTools.map((tool, i) => {
                    const Icon = tool.icon;
                    return (
                      <div key={i} className="flex items-center gap-3 glass-light rounded-lg px-3 py-2">
                        <Icon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                        <div>
                          <span className="text-white text-sm font-semibold">{tool.name}</span>
                          <span className="text-indigo-400/70 text-xs mr-2">— {tool.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center gap-2 glass-light rounded-xl px-4 py-3 border-r-2 border-indigo-500">
                <Eye className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <p className="text-indigo-200/70 text-xs">
                  <strong className="text-indigo-300">الهدف:</strong> نوري الفكرة للناس ونأخذ آراءهم
                </p>
              </div>
            </div>
          </motion.div>

          {/* MVP Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass rounded-3xl p-7 border border-purple-500/20 h-full section-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-purple-600 to-pink-600 rounded-t-3xl" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center glow-purple">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-black text-xl">MVP</h3>
                  <p className="text-purple-400 text-sm">Minimum Viable Product</p>
                </div>
              </div>

              <p className="text-indigo-200/80 text-sm leading-relaxed mb-5">
                أول نسخة قابلة للاستعمال من المنتج، فيها أهم المميزات فقط
              </p>

              <div className="space-y-2 mb-6">
                {mvpFeatures.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} className="flex items-center gap-2">
                      <Icon
                        className={`w-4 h-4 flex-shrink-0 ${
                          f.ok ? "text-emerald-400" : "text-red-400/70"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          f.ok ? "text-indigo-200/80" : "text-indigo-400/50 line-through"
                        }`}
                      >
                        {f.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* MVP Example */}
              <div className="glass-light rounded-xl p-4 mb-5">
                <p className="text-indigo-300/70 text-xs font-semibold mb-2">مثال — تطبيق التربص:</p>
                <div className="flex flex-wrap gap-2">
                  {["التسجيل", "البحث عن عروض", "إرسال الطلب"].map((f, i) => (
                    <span key={i} className="flex items-center gap-1 px-3 py-1 rounded-full bg-purple-900/50 text-purple-300 text-xs border border-purple-700/30">
                      <CheckCircle2 className="w-3 h-3" />
                      {f}
                    </span>
                  ))}
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-red-900/20 text-red-400/60 text-xs border border-red-800/20 line-through">
                    ميزات إضافية
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 glass-light rounded-xl px-4 py-3 border-r-2 border-purple-500">
                <Users className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <p className="text-indigo-200/70 text-xs">
                  <strong className="text-purple-300">الهدف:</strong> نجرب مع المستخدمين الحقيقيين ونجمع ملاحظاتهم
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Diff Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass rounded-3xl overflow-hidden border border-purple-500/15"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 bg-purple-900/30 border-b border-purple-800/30">
            <div className="px-6 py-4 text-indigo-300 font-bold text-sm">المقارنة</div>
            <div className="px-6 py-4 text-center">
              <span className="flex items-center justify-center gap-2 text-indigo-400 font-bold text-sm">
                <Eye className="w-4 h-4" /> Prototype
              </span>
            </div>
            <div className="px-6 py-4 text-center">
              <span className="flex items-center justify-center gap-2 text-purple-400 font-bold text-sm">
                <Zap className="w-4 h-4" /> MVP
              </span>
            </div>
          </div>

          {diffTable.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 border-b border-purple-800/15 last:border-0 ${
                i % 2 === 0 ? "bg-transparent" : "bg-purple-900/10"
              }`}
            >
              <div className="px-6 py-4 text-indigo-200/80 text-sm">{row.label}</div>
              <div className="px-6 py-4 flex justify-center">
                {row.proto ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400/50" />
                )}
              </div>
              <div className="px-6 py-4 flex justify-center">
                {row.mvp ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400/50" />
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
