"use client";

import { motion } from "framer-motion";

const clients = [
  "APSPDCL",
  "APEPDCL",
  "Shiridi Sai Electricals",
  "SPR Constructions",
  "Avaada Clean Project",
  "KCVR Infra Projects",
  "HG Infra Engineering",
  "HES Infra Pvt Ltd"
];

export default function Clients() {
  return (
    <section className="bg-[var(--color-primary)] py-16">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-white/70 font-medium mb-10 text-sm uppercase tracking-widest">
          Trusted by government & industry leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-80">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-white font-bold text-lg md:text-xl text-center"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}