"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-8 py-24 md:py-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Executing Critical <span className="text-[var(--color-secondary)]">Electrical Infrastructure</span> Up To 132KV
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Turnkey EPC contractors specializing in the construction of sub-stations, transmission lines, and high-voltage distribution systems (HVDS).
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <button className="bg-[var(--color-accent)] text-[var(--color-primary)] font-bold px-8 py-4 rounded-sm flex items-center gap-2 hover:bg-yellow-400 transition-colors">
            Discuss Your Project <ArrowRight size={20} />
          </button>
          <span className="text-sm text-gray-500 font-medium">
            Backed by a dedicated team of 40+ engineers
          </span>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-slate-200 aspect-[4/3] rounded-lg shadow-xl border border-slate-300 flex items-center justify-center overflow-hidden"
      >
        {/* Replace with actual 132KV substation image or drone footage */}
        <span className="text-slate-400 font-medium">[ Substation / Project Image ]</span>
      </motion.div>
    </section>
  );
}