import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black grid-paper pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 dark:to-black/90 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-black/10 dark:bg-white/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 inline-flex items-center space-x-2 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 rounded-full px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse" />
          <span className="text-xs font-mono text-gray-700 dark:text-gray-300 uppercase tracking-widest">Nigeria's Future Engine</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-black dark:text-white tracking-tight leading-tight mb-6"
        >
          VOID <br className="md:hidden" />
          <span className="text-black dark:text-white">
            ENTERPRISES
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 font-light"
        >
          Building the Future of Nigeria.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#companies" className="px-8 py-4 bg-transparent border border-black/20 dark:border-white/20 text-black dark:text-white font-medium rounded-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2">View Companies</a>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/20 dark:via-white/20 to-transparent" />
      <div className="absolute left-10 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-black/10 dark:via-white/10 to-transparent hidden lg:block" />
      <div className="absolute right-10 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-black/10 dark:via-white/10 to-transparent hidden lg:block" />
    </section>
  );
}
