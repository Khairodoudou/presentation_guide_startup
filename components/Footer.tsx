"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Heart,
  Github,
  Linkedin,
  Globe,
  Mail,
  ArrowUp,
  Lightbulb,
  GitCompare,
  Search,
  BarChart3,
  Code2,
  Award,
  AlertTriangle,
  MapPin,
  ExternalLink,
} from "lucide-react";

const sections = [
  { id: "section1", label: "ما هي Startup", icon: Lightbulb },
  { id: "section2", label: "المقارنة", icon: GitCompare },
  { id: "section3", label: "الفكرة والسوق", icon: Search },
  { id: "section4", label: "BMC والتمويل", icon: BarChart3 },
  { id: "section5", label: "Prototype & MVP", icon: Code2 },
  { id: "section6", label: "Label Innovant", icon: Award },
  { id: "section7", label: "الأخطاء", icon: AlertTriangle },
];

const resources = [
  { label: "منصة Startup.dz", href: "https://startup.dz/", icon: Globe },
  { label: "Business Model Canvas", href: "https://www.strategyzer.com", icon: ExternalLink },
  { label: "Figma للتصميم", href: "https://www.figma.com", icon: ExternalLink },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer-gradient relative mt-20" dir="rtl">
      {/* Back to top */}
      <div className="flex justify-center pt-12 mb-8">
        <motion.button
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col items-center gap-2 group"
        >
          <div className="w-12 h-12 rounded-full glass border border-purple-600/30 flex items-center justify-center group-hover:border-purple-500/60 group-hover:glow-purple transition-all">
            <ArrowUp className="w-5 h-5 text-purple-400" />
          </div>
          <span className="text-indigo-400/60 text-xs">ارجع للأعلى</span>
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center glow-purple">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-bold">دليل Startup</p>
                <p className="text-purple-400 text-xs">من الفكرة إلى النجاح</p>
              </div>
            </div>
            <p className="text-indigo-300/60 text-sm leading-relaxed mb-4">
              دليل شامل يساعدك على فهم عالم الريادة وبناء مشروعك الناجح خطوة بخطوة في الجزائر والعالم.
            </p>
            <div className="flex items-center gap-2 text-indigo-400/50 text-xs">
              <MapPin className="w-3.5 h-3.5" />
              <span>الجزائر 🇩🇿</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5">روابط سريعة</h4>
            <div className="space-y-2">
              {sections.map((s) => {
                const Icon = s.icon;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className="flex items-center gap-2 text-indigo-300/60 hover:text-purple-400 text-sm transition-colors group w-full text-right"
                  >
                    <Icon className="w-3.5 h-3.5 flex-shrink-0 group-hover:text-purple-400 transition-colors" />
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5">مصادر مفيدة</h4>
            <div className="space-y-3">
              {resources.map((r, i) => {
                const Icon = r.icon;
                return (
                  <a
                    key={i}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-300/60 hover:text-purple-400 text-sm transition-colors group"
                  >
                    <Icon className="w-3.5 h-3.5 flex-shrink-0 group-hover:text-purple-400 transition-colors" />
                    {r.label}
                  </a>
                );
              })}
            </div>

            {/* Newsletter-style motivational */}
            <div className="mt-6 glass-light rounded-xl p-4 border border-purple-600/15">
              <p className="text-purple-300 text-xs font-semibold mb-1">💡 نصيحة اليوم</p>
              <p className="text-indigo-300/60 text-xs leading-relaxed">
                ابدأ بمشكل حقيقي، وحلك سيجد طريقه نحو النجاح.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-indigo-400/40 text-xs">
            © {new Date().getFullYear()} دليل Startup — جميع الحقوق محفوظة
          </p>
          <div className="flex items-center gap-1.5 text-indigo-400/40 text-xs">
            <span>صُنع بـ</span>
            <Heart className="w-3.5 h-3.5 text-red-500/70 fill-red-500/50" />
            <span>من أجل رواد الأعمال الجزائريين</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-indigo-400/40 text-xs">Startup.dz</span>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full glass flex items-center justify-center text-indigo-400/60 hover:text-purple-400 cursor-pointer transition-colors">
                <Globe className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
