import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CTASection } from './Footer';
import DgxGlobe from './DgxGlobe';
import EnergyHeroCanvas from './EnergyHeroCanvas';

const GlobalNetwork = () => {
  return (
    <div className="bg-[#06070a] min-h-screen text-white font-sans selection:bg-[#f5c518]/30 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden">

        {/* Background Cyber Rain Element */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <EnergyHeroCanvas />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5c518] shadow-[0_0_8px_#f5c518]"></span>
              <span className="text-[9px] uppercase tracking-[0.4em] font-mono text-white/60">
                Live Network · US Footprint
              </span>
            </div>

            {/* Title — subtle, two-tone like /energy */}
            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold tracking-tighter leading-[0.95] text-center mb-10 uppercase relative z-10">
              <span className="block text-white">GLOBAL</span>
              <span className="block text-[#f5c518]">NETWORK</span>
            </h1>

            {/* Subheading */}
            <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-medium tracking-wide">
              DigiPowerX connects owned generation, substation access, and compute capacity across a multi-site footprint — one resilient mesh from grid to GPU.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 md:mb-16">
              <Link
                to="/contact"
                className="px-12 py-5 bg-[#f5c518] text-black font-semibold uppercase tracking-[0.2em] text-[11px] rounded-md transition-all hover:brightness-110 active:scale-95 shadow-[0_10px_40px_rgba(245,197,24,0.2)]"
              >
                Talk to Team
              </Link>
              <Link
                to="/energy"
                className="px-12 py-5 border border-white/20 text-white font-semibold uppercase tracking-[0.2em] text-[11px] rounded-md bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Power Infrastructure
              </Link>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-4 bg-[#0a0b0f]/80 border border-white/10 rounded-xl overflow-hidden backdrop-blur-xl shadow-2xl"
          >
            {[
              { val: "4", label: "Active Sites Across the US Footprint" },
              { val: "450MW", label: "Pipeline Capacity in Development" },
              { val: "24/7", label: "Multi-region Network Operations" },
              { val: "<10ms", label: "Inter-site Backbone Latency Target" }
            ].map((stat, i) => (
              <div key={i} className="p-10 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 last:border-0 group hover:bg-white/5 transition-colors">
                <span className="text-[#f5c518] font-mono text-3xl font-semibold mb-2 tracking-tighter">{stat.val}</span>
                <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-medium text-center leading-tight">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Network Flow Section — mirrors /energy's "From Generation to GPU Load" */}
      <section className="bg-white py-15 px-6 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">

          {/* Top Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center px-6 py-2.5 rounded-full border border-black/10 bg-black/5 backdrop-blur-sm">
              <div className="w-10 h-[1.5px] bg-[#f5c518] mr-4"></div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-black/80">
                Network Flow
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter uppercase text-black mb-8 relative z-10">
              From Region<br />
              to <span className="text-[#f5c518]">Rack.</span>
            </h2>
          </div>

          {/* Subtext */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <p className="text-black/50 text-base md:text-[19px] leading-[1.6] font-medium tracking-tight">
              Multi-region sites linked by a redundant backbone and operated as one platform. Power, fiber, and compute provisioned together — without the gaps that slow leased-only competitors.
            </p>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* Left Column: Feature Cards (2x2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                "Geographically diverse sites with independent power profiles",
                "Inter-site backbone for replication and failover",
                "Edge-to-core latency budget engineered for AI workloads",
                "One operations team across the full network footprint"
              ].map((text, i) => (
                <div key={i} className="bg-[#f5f5f5] p-10 rounded-xl flex items-start gap-5 border border-black/[0.03] shadow-sm hover:shadow-md transition-all group">
                  <div className="mt-1 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#f5c518" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-black/80 font-semibold text-sm md:text-base leading-[1.4] tracking-tight">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column: Network Animation */}
            <div className="relative h-full flex items-center justify-center">
              <div className="w-full max-w-[800px] aspect-[16/10] bg-[#06070a] rounded-2xl overflow-hidden border border-black/10 shadow-xl">
                <DgxGlobe />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Network Layers Section — mirrors /energy's 3-column "Layers" */}
      <section className="bg-[#06070a] py-15 px-6 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">

          {/* Top Badge */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center px-6 py-2 rounded-full border border-white/10 bg-white/5">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em] mr-4">02 /</span>
              <div className="w-12 h-[1px] bg-[#f5c518] mr-4"></div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80">
                Network Layers
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter uppercase text-white mb-8 relative z-10">
              One Platform.<br />
              Many <span className="text-[#f5c518]">Regions.</span>
            </h2>
          </div>

          {/* Subtext */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-white/40 text-sm md:text-lg leading-relaxed font-medium">
              Each site is engineered as a self-sufficient power-and-compute node, then federated into a single operating fabric — so customers get geographic diversity without operational fragmentation.
            </p>
          </div>

          {/* 3-Column Layers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">

            {/* Column 1: Sites */}
            <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-colors group">
              <div className="text-[#f5c518] text-[10px] font-semibold uppercase tracking-[0.2em] mb-4">Sites</div>
              <h3 className="text-white text-xl md:text-2xl font-semibold uppercase mb-6 tracking-tight">Footprint Nodes</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-10 font-medium">
                Owned and operated sites in NY, AL, and NC anchor the footprint — each selected for power availability and customer proximity.
              </p>
              <ul className="space-y-4">
                {[
                  "North Tonawanda, NY — gas generation node",
                  "Buffalo, NY — urban interconnect",
                  "Columbiana, AL — campus expansion",
                  "Hildebran, NC — mega-site pipeline"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0 transform group-hover/item:translate-x-1 transition-transform">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#f5c518" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-white/60 text-[13px] font-semibold leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Backbone */}
            <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-colors group">
              <div className="text-[#f5c518] text-[10px] font-semibold uppercase tracking-[0.2em] mb-4">Backbone</div>
              <h3 className="text-white text-xl md:text-2xl font-semibold uppercase mb-6 tracking-tight">Inter-site Fabric</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-10 font-medium">
                A managed backbone links every node — enabling replication, failover, and consistent operating posture across regions.
              </p>
              <ul className="space-y-4">
                {[
                  "Diverse-path fiber between regions",
                  "Latency-budgeted routes for AI training",
                  "Replication of customer datasets across sites",
                  "Failover paths for power and connectivity"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0 transform group-hover/item:translate-x-1 transition-transform">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#f5c518" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-white/60 text-[13px] font-bold leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Operations */}
            <div className="p-10 md:p-14 hover:bg-white/[0.02] transition-colors group">
              <div className="text-[#f5c518] text-[10px] font-semibold uppercase tracking-[0.2em] mb-4">Operations</div>
              <h3 className="text-white text-xl md:text-2xl font-semibold uppercase mb-6 tracking-tight">Single Control Plane</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-10 font-medium">
                Network, power, and compute are observed and controlled as one — customers get a single contract and a single point of accountability.
              </p>
              <ul className="space-y-4">
                {[
                  "24/7 multi-region NOC coverage",
                  "Unified telemetry across power and compute",
                  "Capacity provisioning across the footprint",
                  "Customer-facing SLAs at the network tier"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0 transform group-hover/item:translate-x-1 transition-transform">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#f5c518" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-white/60 text-[13px] font-bold leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Network Pipeline Section — mirrors /energy's 4-card value chain */}
      <section className="bg-white py-15 px-6">
        <div className="max-w-[1400px] mx-auto">

          {/* Top Badge */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center px-6 py-2 rounded-full border border-black/10 bg-black/5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/60">
                Network Pipeline
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter uppercase text-black mb-8 relative z-10">
              Reach is Built<br />
              Region by <span className="text-[#f5c518]">Region.</span>
            </h2>
          </div>

          {/* Subtext */}
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
            <p className="text-black/50 text-sm md:text-lg leading-relaxed font-medium">
              The DigiPowerX network compounds as each new site comes online: more diversity, more capacity, lower customer latency, and more revenue per megawatt across the footprint.
            </p>
            <p className="text-black/50 text-sm md:text-lg leading-relaxed font-medium">
              Federated by design — every node is operationally independent and operationally consistent.
            </p>
          </div>

          {/* 4-Column Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { title: "Discover", desc: "Site selection driven by power, fiber, and customer-proximity — not just real estate availability." },
              { title: "Build",    desc: "Owned generation and substation control let each node come online without third-party blockers." },
              { title: "Connect",  desc: "New sites join the backbone with diverse-path fiber and unified operational tooling." },
              { title: "Operate",  desc: "One NOC, one telemetry pane, one accountable team across every region in the footprint." }
            ].map((card, i) => (
              <div key={i} className="bg-[#f2f2f2] p-10 rounded-xl flex flex-col items-center text-center group hover:bg-[#f5c518]/5 transition-colors border border-black/[0.03]">
                <h3 className="text-black text-xl font-semibold uppercase mb-6 tracking-tight">{card.title}</h3>
                <p className="text-black/60 text-[13px] leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Black Stats Bar */}
        <div className="bg-[#06070a] py-16 px-6 -mx-6 md:-mx-12 lg:-mx-24 mt-12 border-y border-white/5">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {[
              { val: "4 Regions", label: "ACTIVE OPERATING REGIONS ACROSS THE US — DIVERSIFIED POWER PROFILES AND CUSTOMER PROXIMITY." },
              { val: "Diverse Path", label: "INTER-SITE FIBER ENGINEERED WITH PHYSICAL ROUTE DIVERSITY FOR REPLICATION AND FAILOVER." },
              { val: "Single NOC",   label: "MULTI-REGION OPERATIONS RUN FROM A UNIFIED CONTROL PLANE — ONE TEAM, ONE PANE OF GLASS." },
              { val: "450MW Pipe",   label: "PIPELINE CAPACITY IN DEVELOPMENT EXTENDS THE NETWORK INTO NEW CUSTOMER GEOGRAPHIES." }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-4 border-l border-white/10 pl-8 first:border-0">
                <span className="text-[#f5c518] text-3xl font-semibold tracking-tight">{stat.val}</span>
                <span className="text-white/40 text-[9px] font-medium uppercase tracking-widest leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default GlobalNetwork;
