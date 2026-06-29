import { motion } from "motion/react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-black relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-black/80 dark:text-white/60 tracking-widest uppercase mb-4"
          >
            Void Tech Initiatives
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white tracking-tight"
          >
            Flagship Projects
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vella Project */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-[#050508] border border-black/10 dark:border-white/10 rounded-sm overflow-hidden group"
          >
            <div className="h-64 bg-gradient-to-br from-black/5 dark:from-white/10 to-white dark:to-black relative flex items-center justify-center border-b border-black/10 dark:border-white/10">
              <div className="absolute inset-0 grid-paper opacity-50" />

              <div className="relative z-10">
                {/* Light Theme */}
                <img
                  src="./assets/images/lightModeVella.png"
                  alt="Vella"
                  className="h-32 w-32 object-contain block dark:hidden"
                />

                {/* Dark Theme */}
                <img
                  src="./assets/images/darkModeVella.png"
                  alt="Vella"
                  className="h-32 w-32 object-contain hidden dark:block"
                />
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-3xl font-display font-bold text-black dark:text-white">Vella</h4>
                <span className="px-3 py-1 bg-black/5 dark:bg-white/10 text-black/80 dark:text-white/60 text-xs font-mono rounded-sm">INTELLIGENCE</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-light mb-6">
                An AI assistant designed to become a Nigerian-built intelligence platform.
              </p>
              
              <ul className="space-y-3">
                {["Voice Assistant", "Productivity Assistant", "Local AI Processing", "Enterprise Automation"].map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-3 text-black/80 dark:text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Volco Project */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 dark:bg-[#050508] border border-black/10 dark:border-white/10 rounded-sm overflow-hidden group"
          >
            <div className="h-64 bg-gradient-to-bl from-black/5 dark:from-white/10 to-white dark:to-black relative flex items-center justify-center border-b border-black/10 dark:border-white/10">
              <div className="absolute inset-0 grid-paper opacity-50" />
              {/* Abstract Volco Hardware Representation */}
              <div className="relative z-10 w-40 h-16 rounded-full border border-black/30 dark:border-white/30 bg-white/80 dark:bg-black/50 backdrop-blur-md flex items-center justify-between px-6 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <div className="w-3 h-3 rounded-full bg-black/50 dark:bg-white/50" />
                <div className="w-12 h-1 bg-black/20 dark:bg-white/20 rounded-full" />
                <div className="w-3 h-3 rounded-full bg-black/50 dark:bg-white/50" />
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-3xl font-display font-bold text-black dark:text-white">Volco</h4>
                <span className="px-3 py-1 bg-black/5 dark:bg-white/5 text-black/80 dark:text-white/60 text-xs font-mono rounded-sm">HARDWARE</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-light mb-6">
                A next-generation wearable AI device for voice-first computing.
              </p>
              
              <ul className="space-y-3">
                {["Continuous AI assistance", "Smart audio experiences", "Personal productivity", "Ambient computing"].map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-3 text-black/80 dark:text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
