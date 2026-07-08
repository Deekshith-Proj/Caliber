"use client";

import { motion } from "framer-motion";
import { Zap, HardHat, Factory, ShieldCheck } from "lucide-react";

const services = [
  { title: "Substations & Transmission", icon: Zap, desc: "Construction of Sub-Stations and Transmission Lines up to 132 KV." },
  { title: "In-House Fabrication", icon: Factory, desc: "Fabrication of structural steel and tower parts for 33/11 KV sub-stations and connected lines." },
  { title: "Distribution Networks", icon: HardHat, desc: "Construction and commissioning of 11 KV & 33 KV distribution lines, including HVDS." },
  { title: "System Improvements", icon: ShieldCheck, desc: "Strengthening of conductors, capacitor banks, and Revamped Distribution Sector Scheme (RDSS) works." }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Core Capabilities</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Providing end-to-end electrical infrastructure solutions with uncompromising quality.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
          >
            <service.icon className="w-12 h-12 text-[var(--color-secondary)] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}