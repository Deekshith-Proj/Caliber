"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "14+", label: "Years Operating", desc: "Since 2012" },
  { value: "20+", label: "Major Projects", desc: "Successfully delivered" },
  { value: "₹29Cr+", label: "Peak Turnover", desc: "FY 2023-24" },
  { value: "40+", label: "Active Workforce", desc: "Engineers & Site Experts" },
];

export default function Stats() {
  return (
    <section className="bg-slate-100 py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="font-numbers text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-2">
              {stat.value}
            </div>
            <div className="font-bold text-gray-800 uppercase tracking-wide text-sm mb-1">{stat.label}</div>
            <div className="text-gray-500 text-xs">{stat.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}