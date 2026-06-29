import { motion } from "motion/react";

const timelineEvents = [
  { year: "2025", title: "Foundation", desc: "Establishment of Void Tech. Core infrastructure and ideological framework finalized." },
  { year: "2026", title: "Vella Development", desc: "Launch of the foundational AI intelligence platform tailored for local processing and enterprise automation." },
  { year: "2027", title: "Void Academy", desc: "Initiation of the education arm. Rollout of AI-powered learning systems and technical training programs." },
  { year: "2030", title: "National Expansion", desc: "Operations scaled across multiple states. Void Energy and Health initiatives deployed to address critical infrastructure gaps." },
  { year: "2040+", title: "Multi-Industry Leadership", desc: "Realization of the diversified enterprise group operating across all 36 states, producing technology, talent, and infrastructure." }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-[#fafafa] dark:bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 md:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-black/60 dark:text-white/60 tracking-widest uppercase mb-4"
          >
            Strategic Roadmap
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white tracking-tight"
          >
            The Path Forward
          </motion.h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-black/10 dark:bg-white/10" />

          {timelineEvents.map((event, index) => (
            <motion.div 
              key={event.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal w-full mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-[2px] md:-translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-[#0a0a0c] border border-black/50 dark:border-white/50 flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-black/80 dark:bg-white/80" />
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-5/12" />

              {/* Content */}
              <div className="w-full pl-10 md:pl-0 md:w-5/12">
                <div className={`bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-6 rounded-sm ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <span className="font-mono text-2xl font-bold text-black dark:text-white block mb-2">
                    {event.year}
                  </span>
                  <h4 className="text-xl font-display text-black dark:text-white mb-3">{event.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light">
                    {event.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
