"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  sectionNum: number;
  totalSections?: number;
}

export default function SectionDivider({ sectionNum, totalSections = 7 }: SectionDividerProps) {
  return (
    <div className="relative py-2 px-8">
      <div className="divider" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 bg-[#0a0a1a] px-4 py-1 rounded-full border border-purple-800/30"
        >
          <span className="text-purple-600 text-xs">•</span>
          <span className="text-indigo-400/40 text-xs font-mono">
            {sectionNum}/{totalSections}
          </span>
          <span className="text-purple-600 text-xs">•</span>
        </motion.div>
      </div>
    </div>
  );
}
