"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const strengths = [
    "In-house fabrication for 33/11 KV sub-stations",
    "40+ dedicated engineers and site experts",
    "Complete control over project timelines",
    "Proven track record with state government bodies"
  ];

  return (
    <section id="about" className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6">About Caliber Infrastructure</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
          <p>
            Headquartered in Hyderabad, Telangana, Caliber Infrastructure is a premier manufacturer, fabricator, civil, and electrical contractor. 
          </p>
          <p>
            Our core strength lies in our talented engineers and site team, supported by our own robust inventory of machinery. Whether executing Revamped Distribution Sector Scheme (RDSS) works or constructing 132 KV transmission lines, we deliver uncompromising quality and precision.
          </p>
        </div>
        
        <ul className="space-y-3">
          {strengths.map((item, i) => (
            <li key={i} className="flex items-center gap-3 font-medium text-gray-800">
              <CheckCircle2 className="text-[var(--color-secondary)] w-5 h-5" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="bg-slate-200 aspect-square rounded-lg shadow-xl border border-slate-300 flex items-center justify-center overflow-hidden">
           {/* Replace with an actual photo of the fabrication unit or team */}
          <span className="text-slate-400 font-medium">[ Fabrication Unit / Team Photo ]</span>
        </div>
        
        {/* Floating Badge */}
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border border-slate-100">
          <div className="font-numbers text-3xl font-bold text-[var(--color-primary)] mb-1">2007</div>
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Established</div>
        </div>
      </motion.div>
    </section>
  );
}