import { motion } from "motion/react";

const statesCoordinates = [
  // North West
  { name: "Sokoto", x: 25, y: 15 }, { name: "Zamfara", x: 35, y: 22 }, 
  { name: "Katsina", x: 45, y: 12 }, { name: "Kano", x: 55, y: 22 }, 
  { name: "Jigawa", x: 65, y: 18 }, { name: "Kaduna", x: 45, y: 35 },
  { name: "Kebbi", x: 15, y: 28 },
  // North East
  { name: "Yobe", x: 75, y: 18 }, { name: "Borno", x: 88, y: 22 }, 
  { name: "Bauchi", x: 65, y: 35 }, { name: "Gombe", x: 78, y: 35 },
  { name: "Adamawa", x: 88, y: 48 }, { name: "Taraba", x: 75, y: 58 },
  // North Central
  { name: "Niger", x: 30, y: 45 }, { name: "Kwara", x: 18, y: 55 },
  { name: "Kogi", x: 42, y: 60 }, { name: "Benue", x: 58, y: 65 },
  { name: "Nasarawa", x: 55, y: 52 }, { name: "Plateau", x: 65, y: 45 },
  { name: "FCT", x: 45, y: 50, isFct: true },
  // South West
  { name: "Oyo", x: 20, y: 68 }, { name: "Osun", x: 25, y: 72 },
  { name: "Ekiti", x: 30, y: 68 }, { name: "Ondo", x: 32, y: 78 },
  { name: "Ogun", x: 15, y: 78 }, { name: "Lagos", x: 12, y: 88 },
  // South South
  { name: "Edo", x: 40, y: 75 }, { name: "Delta", x: 38, y: 88 },
  { name: "Bayelsa", x: 42, y: 95 }, { name: "Rivers", x: 52, y: 92 },
  { name: "Akwa Ibom", x: 62, y: 88 }, { name: "Cross River", x: 68, y: 78 },
  // South East
  { name: "Anambra", x: 48, y: 78 }, { name: "Enugu", x: 52, y: 72 },
  { name: "Ebonyi", x: 58, y: 75 }, { name: "Imo", x: 50, y: 84 },
  { name: "Abia", x: 56, y: 84 },
];

export default function FutureMap() {
  const fct = statesCoordinates.find(s => s.isFct)!;

  return (
    <section id="future" className="py-32 bg-gray-100 dark:bg-[#050508] relative overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="absolute inset-0 grid-paper opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <div className="text-center mb-16 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-black/60 dark:text-white/60 tracking-widest uppercase mb-4"
          >
            Future Expansion
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white tracking-tight"
          >
            National Coverage
          </motion.h3>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-600 dark:text-gray-400 mt-4 text-lg font-light"
          >
            Operating across all 36 states of Nigeria. A decentralized network of technology, infrastructure, and talent hubs.
          </motion.p>
        </div>

        <div className="relative w-full max-w-3xl aspect-[4/5] sm:aspect-square md:aspect-[4/3] bg-white/80 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-sm overflow-hidden flex items-center justify-center p-4 backdrop-blur-sm">
          
          <div className="relative w-full h-full">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              {statesCoordinates.map((state, index) => {
                if (state.isFct) return null;
                return (
                  <motion.line
                    key={`line-${state.name}`}
                    x1={`${fct.x}%`}
                    y1={`${fct.y}%`}
                    x2={`${state.x}%`}
                    y2={`${state.y}%`}
                    className="stroke-black/20 dark:stroke-white/20"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1.5, delay: 0.5 + (index % 10) * 0.1, ease: "easeInOut" }}
                  />
                );
              })}
            </svg>

            {/* Nodes */}
            {statesCoordinates.map((state, index) => (
              <motion.div
                key={state.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ 
                  delay: (index % 10) * 0.1, 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 10 
                }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
                style={{ 
                  left: `${state.x}%`, 
                  top: `${state.y}%` 
                }}
              >
                <div className={`relative ${state.isFct ? 'w-4 h-4' : 'w-2 h-2'} bg-black dark:bg-white rounded-full cursor-pointer hover:scale-150 transition-transform shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_15px_rgba(255,255,255,0.2)]`}>
                  {state.isFct && (
                    <div className="absolute inset-0 border border-black/80 dark:border-white/80 rounded-full animate-ping" />
                  )}
                </div>
                
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-md border border-black/20 dark:border-white/20 text-xs text-black dark:text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-mono">
                  {state.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
