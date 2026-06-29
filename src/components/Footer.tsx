import { motion } from "motion/react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#050508] relative overflow-hidden border-t border-black/10 dark:border-white/10 pt-24 pb-12">
      <div className="absolute inset-0 grid-paper opacity-20 pointer-events-none" />
      
      {/* Abstract Map Visualization */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none flex flex-wrap gap-2 justify-center content-center rotate-45 scale-150">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="w-16 h-16 border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto mb-32"
        >
          <div className="w-12 h-12 rounded-full border border-black/50 dark:border-white/50 flex items-center justify-center mx-auto mb-10">
            <div className="w-2 h-2 rounded-full bg-black/80 dark:bg-white/80 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-black dark:text-white tracking-tight leading-tight mb-8">
            "We are not building a company. <br className="hidden md:block" />
            <span className="text-black dark:text-white">
              We are building the systems that power tomorrow."
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left mb-16 border-t border-black/10 dark:border-white/10 pt-16">
          <div>
            <h4 className="text-black dark:text-white font-medium mb-4">Core</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#vision" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">Vision & Mission</a></li>
              <li><a href="#founder" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">Founder</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-black dark:text-white font-medium mb-4">Pillars</h4>
            <ul className="space-y-2">
              <li><a href="#companies" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">Technology & AI</a></li>
              <li><a href="#companies" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">Education & Research</a></li>
              <li><a href="#companies" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">Health & Biotech</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-black dark:text-white font-medium mb-4">Projects</h4>
            <ul className="space-y-2">
              <li><a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">Vella Platform</a></li>
              <li><a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">Volco Hardware</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-black dark:text-white font-medium mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center text-black dark:text-white">
            <Logo className="h-8 w-auto" />
          </div>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} Void Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
