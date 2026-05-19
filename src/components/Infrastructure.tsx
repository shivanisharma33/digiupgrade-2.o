import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Footer, CTASection } from './Footer';
import { Zap, Shield, BatteryCharging, Activity, Server, Cpu } from 'lucide-react';
import EnergyHeroCanvas from './EnergyHeroCanvas';
import EnergyFlowDiagram from './EnergyFlowDiagram';

const Infrastructure = () => {
  return (
    <div className="bg-[#06070a] min-h-screen text-white font-sans selection:bg-[#f5c518]/30 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">

        {/* Background Cyber Rain Element */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <EnergyHeroCanvas />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f5c518]/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f5c518]/20 bg-[#f5c518]/5 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(245,197,24,0.1)]">
              <Zap size={12} className="text-[#f5c518]" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#f5c518]">
                Power Generation & Management
              </span>
            </div>

            {/* Title */}
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-semibold tracking-tighter leading-[0.9] text-center mb-8 uppercase relative z-10">
              <span className="block text-white">ENERGY</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f5c518] to-[#ffda66]">
                PORTFOLIO
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-white/60 text-base md:text-xl max-w-3xl mx-auto mb-14 leading-relaxed font-medium tracking-wide">
              DigiPowerX controls the foundation of the AI revolution: <strong className="text-white">Raw Power</strong>.
              From owned generation assets to advanced grid interconnection, we provide the megawatt capacity required for next-generation computing.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 md:mb-24 w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-12 py-5 bg-[#f5c518] text-black font-semibold uppercase tracking-[0.2em] text-[11px] rounded-md transition-all hover:bg-[#ffd84d] hover:shadow-[0_0_30px_rgba(245,197,24,0.3)] active:scale-95"
              >
                Inquire Capacity
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-12 py-5 border border-white/10 text-white font-semibold uppercase tracking-[0.2em] text-[11px] rounded-md bg-white/5 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#0a0b0f]/80 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl relative"
          >
            {/* Top highlight line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#f5c518]/50 to-transparent opacity-50" />

            {[
              { val: "60MW", label: "Existing Base Generation", desc: "North Texarkana Plant" },
              { val: "128MW", label: "Additional Capacity", desc: "Phase II Expansion" },
              { val: "~$0.04", label: "Target Power Cost", desc: "Per kWh via Owned Generation" },
              { val: "100%", label: "Grid Redundancy", desc: "Dual-Path Interconnection" }
            ].map((stat, i) => (
              <div key={i} className="p-8 md:p-10 flex flex-col items-center justify-center border-b sm:border-b-0 lg:border-r border-white/5 last:border-0 group hover:bg-white/[0.03] transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#f5c518]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-[#f5c518] font-mono text-4xl md:text-5xl font-bold mb-3 tracking-tighter relative z-10">{stat.val}</span>
                <span className="text-white text-sm font-semibold tracking-wide text-center mb-1 relative z-10">{stat.label}</span>
                <span className="text-[10px] text-white/40 uppercase tracking-[0.1em] text-center relative z-10">{stat.desc}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Power Flow Section: From Generation to GPU Load */}
      <section className="bg-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">

          {/* Top Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-6 py-2.5 rounded-full border border-black/10 bg-[#f5f5f5] shadow-sm">
              <Zap size={14} className="text-[#f5c518] mr-3" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-black/80">
                Energy Flow Matrix
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-6">
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tighter uppercase text-black">
              From Generation<br />
              to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a017] to-[#f5c518]">GPU Load.</span>
            </h2>
          </div>

          {/* Subtext */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-black/60 text-lg leading-[1.6] font-medium tracking-tight">
              The DigiPowerX infrastructure story starts at the source. By operating our own generation assets and substation distribution paths, we bypass the grid bottlenecks that throttle traditional data center expansion.
            </p>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Feature Cards (2x2) */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              {[
                { title: "Owned Generation Base", text: "Direct control over power production allows us to dramatically lower energy costs while securing long-term availability.", icon: <Zap size={20} className="text-[#f5c518]" /> },
                { title: "Behind-The-Meter Economics", text: "Bypassing public transmission lines reduces distribution costs, delivering direct-to-compute power efficiency.", icon: <BatteryCharging size={20} className="text-[#f5c518]" /> },
                { title: "Substation Control", text: "Owned switchgear and transformation infrastructure guarantees high-voltage capacity scaling on our own timeline.", icon: <Activity size={20} className="text-[#f5c518]" /> },
                { title: "Compute Conversion", text: "Every megawatt generated is purposefully conditioned for high-density AI and HPC workloads.", icon: <Cpu size={20} className="text-[#f5c518]" /> }
              ].map((feature, i) => (
                <div key={i} className="bg-[#f8f9fa] p-8 rounded-2xl border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-black/[0.08] transition-all duration-300 group">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-black font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-black/60 text-sm leading-[1.6] font-medium">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Existing Animated Visual */}
            <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
              <div className="w-full max-w-[800px] bg-[#f8f9fa] rounded-3xl p-6 md:p-12 border border-black/[0.04] shadow-xl">
                <EnergyFlowDiagram />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Infrastructure Layers Section */}
      <section className="bg-[#06070a] py-24 px-6 border-y border-white/5 relative overflow-hidden">

        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f5c518]/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

        <div className="max-w-[1400px] mx-auto relative z-10">

          {/* Top Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="text-[10px] font-mono text-[#f5c518] uppercase tracking-[0.2em] mr-3">01 /</span>
              <div className="w-8 h-[1px] bg-white/20 mr-3"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                Energy Stack Layers
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-6">
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tighter uppercase text-white mb-6">
              Powering Compute <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5c518] to-[#ffda66]">From The Ground Up.</span>
            </h2>
          </div>

          {/* Subtext */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-white/50 text-lg leading-relaxed font-medium">
              In the high-density computing era, energy is the ultimate currency. We don't just secure power—we generate it, transform it, and deliver it to the rack with unmatched efficiency and scale.
            </p>
          </div>

          {/* 3-Column Layers Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Column 1: Generation */}
            <div className="bg-[#0a0b0f] p-10 md:p-12 rounded-3xl border border-white/5 hover:border-[#f5c518]/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#f5c518] transition-all duration-500" />

              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#f5c518]/10 transition-all duration-500">
                <Zap size={28} className="text-white group-hover:text-[#f5c518] transition-colors" />
              </div>

              <div className="text-[#f5c518] text-[11px] font-bold uppercase tracking-[0.2em] mb-3">Layer 1</div>
              <h3 className="text-white text-2xl font-bold uppercase mb-4 tracking-tight">Generation Assets</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8 font-medium">
                Owned power generation secures our foundation, shielding operations from market volatility and eliminating utility queue bottlenecks.
              </p>

              <div className="space-y-4 pt-6 border-t border-white/5">
                {[
                  "Natural gas & renewable integration",
                  "60MW base capacity scaling to 188MW",
                  "Insulated from grid pricing spikes",
                  "Modular generation expansion capabilities"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f5c518] flex-shrink-0" />
                    <span className="text-white/70 text-[13px] font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Substation */}
            <div className="bg-[#0a0b0f] p-10 md:p-12 rounded-3xl border border-white/5 hover:border-[#f5c518]/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#f5c518] transition-all duration-500" />

              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#f5c518]/10 transition-all duration-500">
                <Activity size={28} className="text-white group-hover:text-[#f5c518] transition-colors" />
              </div>

              <div className="text-[#f5c518] text-[11px] font-bold uppercase tracking-[0.2em] mb-3">Layer 2</div>
              <h3 className="text-white text-2xl font-bold uppercase mb-4 tracking-tight">Transformation</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8 font-medium">
                Strategic substation control provides the high-voltage gateway necessary for rapid, large-scale data center deployment.
              </p>

              <div className="space-y-4 pt-6 border-t border-white/5">
                {[
                  "Direct high-voltage grid interconnection",
                  "Redundant transformation architecture",
                  "Tier III equivalent reliability path",
                  "Optimized transmission line efficiency"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f5c518] flex-shrink-0" />
                    <span className="text-white/70 text-[13px] font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Compute */}
            <div className="bg-[#0a0b0f] p-10 md:p-12 rounded-3xl border border-white/5 hover:border-[#f5c518]/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#f5c518] transition-all duration-500" />

              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#f5c518]/10 transition-all duration-500">
                <Server size={28} className="text-white group-hover:text-[#f5c518] transition-colors" />
              </div>

              <div className="text-[#f5c518] text-[11px] font-bold uppercase tracking-[0.2em] mb-3">Layer 3</div>
              <h3 className="text-white text-2xl font-bold uppercase mb-4 tracking-tight">Compute Delivery</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8 font-medium">
                We convert raw energy into the highest-margin output: compute-ready capacity optimized for intensive AI workloads.
              </p>

              <div className="space-y-4 pt-6 border-t border-white/5">
                {[
                  "High-density rack power architecture",
                  "Advanced liquid cooling readiness",
                  "Maximized compute-per-megawatt ratio",
                  "Flexible collocation & bare-metal deployment"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f5c518] flex-shrink-0" />
                    <span className="text-white/70 text-[13px] font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Value Chain Section: Pipeline Overview */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1400px] mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1] tracking-tight uppercase text-black">
              The Energy Economics Advantage.
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-[#111] text-white p-12 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#f5c518]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#f5c518]/10 flex items-center justify-center border border-[#f5c518]/20">
                  <Shield size={20} className="text-[#f5c518]" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">Strategic Independence</h3>
              </div>

              <p className="text-white/70 text-lg leading-relaxed font-medium mb-8">
                While competitors lease capacity and wait years in utility interconnection queues, our vertical integration strategy places us years ahead. We control the power source, dictating our own timelines.
              </p>

              <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-[#f5c518] font-bold text-3xl mb-1">0 Wait Time</div>
                <div className="text-white/50 text-xs font-bold uppercase tracking-widest">For primary grid queue approvals</div>
              </div>
            </div>

            <div className="bg-[#f8f9fa] border border-black/5 p-12 rounded-3xl relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center border border-black/10">
                  <Activity size={20} className="text-black" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-black">Margin Expansion</h3>
              </div>

              <p className="text-black/70 text-lg leading-relaxed font-medium mb-8">
                The shift from standard enterprise colocation to AI-centric infrastructure requires massive power density. By owning the generation, we capture the margin at every step of the energy-to-compute conversion.
              </p>

              <div className="p-6 bg-white border border-black/5 rounded-xl shadow-sm">
                <div className="text-black font-bold text-3xl mb-1">Highest Value</div>
                <div className="text-black/50 text-xs font-bold uppercase tracking-widest">Yield per megawatt generated</div>
              </div>
            </div>
          </div>
        </div>

        {/* Black Stats Bar */}
        <div className="bg-[#06070a] py-20 px-6 -mx-6 md:-mx-12 lg:-mx-24 mt-12 border-y border-[#f5c518]/20 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {[
              { val: "~$0.04/kWh", label: "STRUCTURAL COST ADVANTAGE", desc: "Target power production cost cited for North Texarkana site, beating market rates." },
              { val: "Behind-the-Meter", label: "TRANSMISSION EFFICIENCY", desc: "Direct distribution program drastically reduces grid transmission and delivery fees." },
              { val: "2N Redundancy", label: "REVENUE OPTIONALITY", desc: "Dual-path interconnection enables Tier III equivalent uptime for critical AI loads." },
              { val: "188MW", label: "PIPELINE CAPACITY", desc: "Combined existing and expansion energy capacity designated for compute conversion." }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-3 lg:border-l border-white/10 lg:pl-8 first:border-0 relative">
                <div className="w-8 h-[2px] bg-[#f5c518] mb-2 hidden lg:block absolute -left-[4px] top-4"></div>
                <span className="text-white text-3xl font-bold tracking-tight">{stat.val}</span>
                <span className="text-[#f5c518] text-[11px] font-bold uppercase tracking-widest leading-tight">
                  {stat.label}
                </span>
                <span className="text-white/40 text-[13px] font-medium leading-relaxed mt-2">
                  {stat.desc}
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

export default Infrastructure;
