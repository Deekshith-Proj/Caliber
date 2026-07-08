"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Jagananna Housing Colonies Electrification",
    client: "SPR Constructions (APCPDCL)",
    value: "₹43.46 Crores",
    scope: "Electrification of newly formed layouts erecting DTRs, 11KV, and LT lines.",
    status: "Completed"
  },
  {
    title: "152MW Wind Project Transmission",
    client: "Avaada Clean Project Pvt Ltd",
    value: "₹16.01 Crores",
    scope: "Supply & Erection of 33kV Internal Transmission Line for Narangwadi project.",
    status: "Ongoing"
  },
  {
    title: "RDSS Infrastructure Works",
    client: "Shiridi Sai Electricals (APCPDCL)",
    value: "₹11.25 Crores",
    scope: "Distribution infrastructure works under loss reduction by segregation of agricultural feeders.",
    status: "Ongoing"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider mb-2">
                  {project.status}
                </div>
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{project.scope}</p>
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Client:</span>
                    <span className="text-sm font-bold">{project.client}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Project Value:</span>
                    <span className="text-sm font-bold text-[var(--color-primary)]">{project.value}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}