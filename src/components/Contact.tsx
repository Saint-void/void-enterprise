import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-black relative overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="absolute inset-0 grid-paper opacity-30 dark:opacity-20 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-black/60 dark:text-white/60 tracking-widest uppercase mb-4"
          >
            Partner With Us
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white tracking-tight"
          >
            Join the Movement
          </motion.h3>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-8 md:p-12 backdrop-blur-sm shadow-sm dark:shadow-none"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-mono text-black/70 dark:text-white/70 uppercase">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-2 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-mono text-black/70 dark:text-white/70 uppercase">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-2 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-2">
              <label htmlFor="organization" className="block text-sm font-mono text-black/70 dark:text-white/70 uppercase">Organization</label>
              <input 
                type="text" 
                id="organization" 
                className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-2 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                placeholder="Company Name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="inquiry" className="block text-sm font-mono text-black/70 dark:text-white/70 uppercase">Inquiry Type</label>
              <select 
                id="inquiry" 
                className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-2 text-black/70 dark:text-white/70 focus:outline-none focus:border-black dark:focus:border-white transition-colors appearance-none cursor-pointer"
              >
                <option value="partnership" className="bg-white dark:bg-black text-black dark:text-white">Partnership</option>
                <option value="investment" className="bg-white dark:bg-black text-black dark:text-white">Investment</option>
                <option value="career" className="bg-white dark:bg-black text-black dark:text-white">Career</option>
                <option value="general" className="bg-white dark:bg-black text-black dark:text-white">General Inquiry</option>
              </select>
            </div>
          </div>
          
          <button 
            type="button"
            className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-medium tracking-wide hover:bg-black/80 dark:hover:bg-white/80 transition-colors uppercase font-mono text-sm"
          >
            Submit Inquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
}
