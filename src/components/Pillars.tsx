import { motion } from "motion/react";
import { 
  Cpu, 
  GraduationCap, 
  Activity, 
  Zap, 
  Factory, 
  Globe2
} from "lucide-react";

const pillars = [
  {
    title: "Technology & AI",
    icon: Cpu,
    color: "text-black dark:text-white",
    bgColor: "bg-black/5 dark:bg-white/10",
    companies: ["Void Tech", "Void Robotics", "Void Security", "Void Telecommunications"],
    desc: "Building the foundational digital infrastructure, artificial intelligence, and hardware that will power the next century of African innovation."
  },
  {
    title: "Education & Research",
    icon: GraduationCap,
    color: "text-black dark:text-white",
    bgColor: "bg-black/5 dark:bg-white/10",
    companies: ["Void Education", "Void Research"],
    desc: "Creating the systems to train the next generation of innovators, engineers, and scientists through AI-powered learning and technical colleges."
  },
  {
    title: "Health & Biotechnology",
    icon: Activity,
    color: "text-black dark:text-white",
    bgColor: "bg-black/5 dark:bg-white/10",
    companies: ["Void Health", "Void Biotech", "Void Pharmaceuticals"],
    desc: "Developing technology-driven healthcare solutions, medical AI, and diagnostics to ensure affordable and accessible care systems."
  },
  {
    title: "Energy & Infrastructure",
    icon: Zap,
    color: "text-black dark:text-white",
    bgColor: "bg-black/5 dark:bg-white/10",
    companies: ["Void Energy", "Void Construction", "Void Real Estate"],
    desc: "Solving core infrastructure challenges through solar energy, smart grids, sustainable building, and next-generation urban development."
  },
  {
    title: "Industry & Manufacturing",
    icon: Factory,
    color: "text-black dark:text-white",
    bgColor: "bg-black/5 dark:bg-white/10",
    companies: ["Void Manufacturing", "Void Mobility", "Void Aerospace"],
    desc: "Transitioning from consumption to production. Building electronics, electric vehicles, and advanced manufacturing capabilities locally."
  },
  {
    title: "Media, Finance & Services",
    icon: Globe2,
    color: "text-black dark:text-white",
    bgColor: "bg-black/5 dark:bg-white/10",
    companies: ["Void Media", "Void Finance", "Void Logistics"],
    desc: "Providing the essential services—from storytelling and digital banking to supply chain networks—that connect and empower the ecosystem."
  }
];

export default function Pillars() {
  return (
    <section id="companies" className="py-24 bg-gray-50 dark:bg-[#0a0a0c] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-black via-transparent to-white dark:to-black pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-black/60 dark:text-white/60 tracking-widest uppercase mb-4"
          >
            Enterprise Ecosystem
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white mb-6 tracking-tight"
          >
            Six Pillars of Progress
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed"
          >
            These are not isolated companies. They feed each other. Void Education trains talent. Void Tech builds technology. Void Energy powers operations. Each strengthens the whole.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-8 hover:bg-black/10 dark:hover:bg-white/10 transition-all hover:-translate-y-1 rounded-sm group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-black/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={`w-12 h-12 rounded-sm ${pillar.bgColor} flex items-center justify-center mb-6`}>
                <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
              </div>
              
              <h4 className="text-xl font-display font-semibold text-black dark:text-white mb-4">
                {pillar.title}
              </h4>
              
              <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed mb-6">
                {pillar.desc}
              </p>
              
              <div>
                <h5 className="text-xs font-mono text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">Core Companies</h5>
                <ul className="space-y-2">
                  {pillar.companies.map(company => (
                    <li key={company} className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                      <span className="w-1 h-1 bg-black/20 dark:bg-white/20 rounded-full mr-3"></span>
                      {company}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
