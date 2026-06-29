import { motion } from "motion/react";
import { 
  Cpu, GraduationCap, HeartPulse, Zap, Car, Factory, Beaker, Tv,
  Bot, Rocket, Dna, Pill, ShieldAlert, ShieldCheck, Landmark, Wifi,
  Ship, CarFront, Plane, Building2, Home, Sprout, Utensils,
  Sun, Pickaxe, Ticket, Gamepad2
} from "lucide-react";

const allCompanies = [
  { name: "Void Tech", desc: "Software, AI, & Consumer Tech", icon: Cpu },
  { name: "Void Education", desc: "Next-gen learning & training", icon: GraduationCap },
  { name: "Void Health", desc: "Telemedicine & Medical AI", icon: HeartPulse },
  { name: "Void Energy", desc: "Solar, Smart Grids & Storage", icon: Zap },
  { name: "Void Mobility", desc: "EVs & Smart Transportation", icon: Car },
  { name: "Void Manufacturing", desc: "Electronics & Hardware Assembly", icon: Factory },
  { name: "Void Research", desc: "AI & Emerging Technologies", icon: Beaker },
  { name: "Void Media", desc: "Digital Media & Production", icon: Tv },
  { name: "Void Robotics", desc: "Industrial & AI Automation", icon: Bot },
  { name: "Void Space Systems", desc: "Aerospace & Satellite Tech", icon: Rocket },
  { name: "Void Biotech", desc: "Genetic Research & Agrotech", icon: Dna },
  { name: "Void Pharmaceuticals", desc: "Drug Research & Manufacturing", icon: Pill },
  { name: "Void Defense", desc: "Strategic Tech & Infrastructure", icon: ShieldAlert },
  { name: "Void Security", desc: "Cyber & Physical Security", icon: ShieldCheck },
  { name: "Void Finance", desc: "Digital Banking & Investment", icon: Landmark },
  { name: "Void Telecommunications", desc: "Internet & Network Services", icon: Wifi },
  { name: "Void Logistics & Shipping", desc: "Supply Chain & Smart Networks", icon: Ship },
  { name: "Void Automotive", desc: "EV Manufacturing", icon: CarFront },
  { name: "Void Aviation", desc: "Aircraft Tech & Aerospace", icon: Plane },
  { name: "Void Construction", desc: "Smart Cities & Infrastructure", icon: Building2 },
  { name: "Void Real Estate", desc: "Commercial & Smart Communities", icon: Home },
  { name: "Void Agriculture", desc: "Smart Farming & Food Security", icon: Sprout },
  { name: "Void Food & Beverages", desc: "Production & Distribution", icon: Utensils },
  { name: "Void Renewable Solutions", desc: "Green Tech & Sustainability", icon: Sun },
  { name: "Void Mining", desc: "Mineral Processing & Resources", icon: Pickaxe },
  { name: "Void Entertainment", desc: "Film, Music & Creative", icon: Ticket },
  { name: "Void Gaming & Esports", desc: "Interactive Entertainment", icon: Gamepad2 }
];

export default function AllCompanies() {
  return (
    <section id="all-companies" className="py-24 bg-[#fafafa] dark:bg-black relative border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-black/60 dark:text-white/60 tracking-widest uppercase mb-4"
          >
            The Complete Ecosystem
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white tracking-tight"
          >
            All Entities
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allCompanies.map((company, index) => {
            const Icon = company.icon;
            return (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 10) * 0.05 }}
                className="p-5 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-sm hover:bg-gray-50 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/30 transition-colors cursor-default group flex items-start space-x-4 shadow-sm dark:shadow-none"
              >
                <div className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-medium text-black dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors mb-1">
                    {company.name}
                  </h4>
                  <p className="text-xs text-black/50 dark:text-gray-400 leading-relaxed font-light">
                    {company.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
