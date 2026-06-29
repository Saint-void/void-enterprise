import { motion } from "motion/react";

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 dark:from-white/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[700px] w-full rounded-sm overflow-hidden bg-gray-100 dark:bg-[#050508] border border-black/10 dark:border-white/10"
          >
            <div className="absolute inset-0 grid-paper opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-8">
               <div className="w-32 h-32 rounded-full border border-black/20 dark:border-white/20 mb-8 flex items-center justify-center bg-black/5 dark:bg-white/5">
                 <span className="text-4xl font-display text-black/50 dark:text-white/50">SD</span>
               </div>
               <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-black/50 dark:via-white/50 to-transparent mb-8" />
               <p className="font-mono text-sm text-black/60 dark:text-white/60 tracking-widest uppercase">Founder & Visionary</p>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-white dark:from-black to-transparent">
              <h3 className="text-3xl font-display font-bold text-black dark:text-white mb-2">Sogolo Donaldson</h3>
              <p className="text-gray-600 dark:text-gray-400">Student • Software Engineer • Entrepreneur</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono text-black/60 dark:text-white/60 tracking-widest uppercase mb-4">Origin Story</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white tracking-tight mb-8">
              The Journey Starts Small
            </h3>

            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed">
              <p>
                A student, software engineer, and entrepreneur with a vision to build a multi-industry enterprise capable of transforming Nigeria through technology and innovation.
              </p>
              <p>
                Beginning with software and artificial intelligence, the vision expands toward a future where African-built solutions solve African problems at scale.
              </p>
              
              <div className="py-6 border-l border-black/20 dark:border-white/20 pl-6 my-8 space-y-3 font-mono text-sm text-black dark:text-white">
                <p>A laptop.</p>
                <p>Code.</p>
                <p>Ideas.</p>
                <p>Persistence.</p>
              </div>

              <p className="text-xl text-black dark:text-white font-medium font-display">
                Then systems. <br />
                Then companies. <br />
                Then industries.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
