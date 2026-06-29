import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono text-black/60 dark:text-white/60 tracking-widest uppercase mb-4">Philosophy</h2>
            <div className="text-3xl md:text-4xl font-display font-medium text-black dark:text-white leading-tight mb-8">
              Most companies ask: <br />
              <span className="text-gray-500 dark:text-gray-500">"How do we make money?"</span>
            </div>
            
            <div className="text-3xl md:text-4xl font-display font-medium text-black dark:text-white leading-tight mb-8">
              Void Enterprises asks: <br />
              <span className="text-black/60 dark:text-white/60">"How do we build systems that make society stronger?"</span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6 font-light">
              Profit matters. But profit is fuel. Progress is the destination. 
            </p>

            <div className="h-[1px] w-full bg-black/10 dark:bg-white/10 my-10" />

            <h3 className="text-xl font-medium text-black dark:text-white mb-4 font-display">The Meaning Behind "Void"</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6 font-light">
              The name represents possibility. A void is empty space. Most people see emptiness. Void Enterprises sees opportunity. Every challenge. Every inefficiency. Every broken system. Exists because there is a void waiting to be filled.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12"
          >
            <div>
              <h3 className="text-xl font-medium text-black dark:text-white mb-3 font-display flex items-center gap-2">
                <span className="w-6 h-[1px] bg-black dark:bg-white"></span> Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed">
                To become the most influential African enterprise group by building industries that empower people, strengthen nations, and shape the future.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-black dark:text-white mb-3 font-display flex items-center gap-2">
                <span className="w-6 h-[1px] bg-black dark:bg-white"></span> Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed">
                To engineer sustainable progress by creating companies that solve real-world problems in technology, education, healthcare, transportation, energy, and industry.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-black dark:text-white mb-3 font-display flex items-center gap-2">
                <span className="w-6 h-[1px] bg-black dark:bg-white"></span> Long-Term Goal
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed">
                Build a diversified enterprise group operating across all 36 states of Nigeria. Not as a foreign dependency. Not as an importer. But as a creator. A builder. A producer of technology, talent, infrastructure, and opportunity.
              </p>
            </div>
            
            <div className="pt-6">
              <h3 className="text-sm font-mono text-black/50 dark:text-white/50 tracking-widest uppercase mb-6">Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: "Innovation", desc: "Never accept 'that's how it's always been done.'" },
                  { name: "Excellence", desc: "Build products that can compete anywhere." },
                  { name: "Integrity", desc: "Trust is harder to build than software. Protect it." },
                  { name: "Impact", desc: "Success is measured by lives improved." },
                  { name: "Learning", desc: "Every challenge teaches something." },
                  { name: "Courage", desc: "Build what others think is impossible." }
                ].map((value) => (
                  <div key={value.name} className="border-l border-black/10 dark:border-white/10 pl-4 py-1 hover:border-black/50 dark:border-white/50 transition-colors">
                    <h4 className="text-black dark:text-white font-medium mb-1">{value.name}</h4>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
