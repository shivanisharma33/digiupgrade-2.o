import { motion } from 'framer-motion';
import { Target, Compass, Sparkles, Zap, ShieldCheck, Globe2 } from 'lucide-react';
import { CTASection } from './Footer';

const values = [
  {
    icon: Zap,
    title: 'Power First',
    body: 'We own and operate the energy stack — generation, substations, and high-density facilities — so our customers never wait on the grid.',
  },
  {
    icon: ShieldCheck,
    title: 'Sovereign Compute',
    body: 'Dedicated, single-tenant infrastructure with no virtualization tax and no noisy neighbors. Your models, your hardware, your rules.',
  },
  {
    icon: Globe2,
    title: 'Built in the U.S.',
    body: 'Domestic supply chain, U.S.-sited facilities, and a 450 MW development pipeline keep AI workloads on American soil.',
  },
  {
    icon: Sparkles,
    title: 'Engineered for Superintelligence',
    body: 'Liquid-cooled racks, 400 Gb/s fabric, and modular factory builds — designed for the next generation of frontier models.',
  },
];

const MissionVision = () => {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-brand-yellow selection:text-black">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col items-center pt-48 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.15]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,197,24,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,197,24,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-yellow/[0.05] blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-12">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-semibold text-white/60">Our Purpose</span>
            </div>

            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter uppercase mb-8 text-white relative z-10">
              MISSION <br /> <span className="text-brand-yellow">& VISION</span>
            </h1>

            <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed font-medium italic">
              "We exist to put the full AI factory — power, cooling, compute, and orchestration — within reach of every team building toward superintelligence."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission + Vision side-by-side */}
      <section className="py-32 bg-black relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative p-10 lg:p-14 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-yellow/[0.04] blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-brand-yellow/30 bg-brand-yellow/10 mb-8">
                  <Target size={22} className="text-brand-yellow" />
                </div>

                <div className="text-[10px] font-semibold uppercase tracking-[0.5em] text-brand-yellow mb-4">Mission</div>
                <h2 className="text-4xl md:text-5xl font-semibold uppercase tracking-tighter text-white mb-8 leading-[1]">
                  Build the <span className="text-brand-yellow">factories</span> AI runs on.
                </h2>

                <p className="text-white/70 text-base leading-relaxed mb-6">
                  DigiPowerX develops, owns, and operates the high-density power and computing infrastructure required to train and serve frontier AI. We integrate generation, liquid-cooled facilities, and NVIDIA-based GPU clusters into one vertically owned stack.
                </p>
                <p className="text-white/55 text-base leading-relaxed">
                  Our customers bring the models. We bring the megawatts, the cooling, the silicon, and the orchestration — delivered as one operational system, not a stack of vendors.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative p-10 lg:p-14 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-yellow/[0.04] blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-brand-yellow/30 bg-brand-yellow/10 mb-8">
                  <Compass size={22} className="text-brand-yellow" />
                </div>

                <div className="text-[10px] font-semibold uppercase tracking-[0.5em] text-brand-yellow mb-4">Vision</div>
                <h2 className="text-4xl md:text-5xl font-semibold uppercase tracking-tighter text-white mb-8 leading-[1]">
                  A nation <span className="text-brand-yellow">ready</span> for superintelligence.
                </h2>

                <p className="text-white/70 text-base leading-relaxed mb-6">
                  We see a future where AI capability is bounded by ambition — not by access to power, land, or accelerators. DigiPowerX is building the domestic backbone so American researchers, startups, and enterprises can scale without waiting on hyperscalers.
                </p>
                <p className="text-white/55 text-base leading-relaxed">
                  By 2030, our pipeline targets multi-gigawatt AI factory capacity across U.S. markets — purpose-built, customer-controlled, and powered for the densest workloads on the planet.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="py-32 bg-[#050608] relative border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-yellow/[0.02] blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="mb-20 max-w-3xl">
            <div className="text-[10px] font-semibold uppercase tracking-[0.5em] text-brand-yellow mb-6">Operating Principles</div>
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter uppercase text-white mb-8">
              WHAT WE <span className="text-white/40">STAND FOR</span>
            </h2>
            <p className="text-white/55 text-base leading-relaxed max-w-xl">
              Four principles guide every site we acquire, every megawatt we deploy, and every cluster we ship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.55 }}
                  className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.015] hover:border-brand-yellow/40 hover:bg-white/[0.03] transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-white/10 bg-black flex items-center justify-center group-hover:border-brand-yellow/40 transition-colors">
                      <Icon size={18} className="text-brand-yellow" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold uppercase tracking-tight text-white mb-3 group-hover:text-brand-yellow transition-colors">
                        {v.title}
                      </h3>
                      <p className="text-white/55 text-sm leading-relaxed">{v.body}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default MissionVision;
