import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Search,
  ArrowUpRight,
  Clock,
  Download,
  ChevronRight,
  Calendar
} from 'lucide-react';
import NeuralCube3D from './NeuralCube3D';
import { CTASection } from './Footer';

const SECFilings = () => {
  const filings = [
    {
      date: "May 15, 2026",
      type: "FORM 10-Q",
      desc: "TRANSITION REPORT PURSUANT TO SECTION 13 OR 15(d) OF THE SECURITIES EXCHANGE ACT OF 1934"
    },
    {
      date: "May 12, 2026",
      type: "SCHEDULE 13G",
      desc: "SECURITIES AND EXCHANGE COMMISSION Washington, D.C. 20549"
    },
    {
      date: "May 8, 2026",
      type: "424B5",
      desc: "PROSPECTUS SUPPLEMENT (To prospectus dated April 15, 2026 and prospectus supplement dated April 15, 2026)"
    },
    {
      date: "April 28, 2026",
      type: "FORM 8-K",
      desc: "CURRENT REPORT PURSUANT TO SECTION 13 OR 15(d) OF THE SECURITIES EXCHANGE ACT OF 1934"
    },
    {
      date: "April 15, 2026",
      type: "FORM 10-Q",
      desc: "QUARTERLY REPORT PURSUANT TO SECTION 13 OR 15(d) OF THE SECURITIES EXCHANGE ACT OF 1934"
    },
    {
      date: "March 24, 2026",
      type: "FORM 4",
      desc: "STATEMENT OF CHANGES IN BENEFICIAL OWNERSHIP OF SECURITIES"
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white selection:bg-brand-yellow selection:text-black">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Matrix Grid */}
        <div className="absolute inset-0 z-0 opacity-[0.15]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,197,24,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,197,24,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>

        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center">
          <div className="w-full h-full max-w-6xl">
            <NeuralCube3D />
          </div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto text-center flex flex-col items-center flex-1 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            {/* Top Badge */}
            <div className="relative mb-16">
              <div className="w-64 h-[1px] bg-white/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-black flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-brand-yellow" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.6em] text-white/40">Investors</span>
              </div>
            </div>

            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter uppercase mb-8 text-white relative z-10">
              <span className="block text-white mb-2">SEC</span>
              <span className="block text-brand-yellow">Filings</span>
            </h1>

            <p className="text-sm md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-16 font-medium">
              Access all regulatory filings, annual reports, and quarterly disclosures for DigiPowerX Corporation (NASDAQ: DGXX).
            </p>

            {/* Bottom HUD Stats Bar */}
            <div className="w-full max-w-[1000px] grid grid-cols-2 md:grid-cols-4 gap-8 py-6 border-t border-white/10 border-b border-white/10 bg-black/40 backdrop-blur-xl">
              {[
                { val: "DGXX", label: "NASDAQ TICKER" },
                { val: "10-K", label: "ANNUAL FILING" },
                { val: "10-Q", label: "QUARTERLY FILING" },
                { val: "8-K", label: "CURRENT EVENTS" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-brand-yellow font-semibold text-xl mb-1 tracking-tighter">{stat.val}</div>
                  <div className="text-[8px] font-semibold text-white/30 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Filings Header (Light Contrast) */}
      <section className="bg-white text-black py-20">
        <div className="container mx-auto px-6 max-w-[1400px] text-center">
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-black/10 mb-10">
            <div className="flex items-center gap-1.5">
              <div className="h-[2px] w-8 bg-brand-yellow" />
              <div className="h-[2px] w-2 bg-black/10" />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-black/60">Market Disclosures</span>
          </div>

          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter uppercase text-black mb-8 relative z-10">
            RECENT <span className="text-brand-yellow">FILINGS</span>
          </h2>
          <p className="text-black/40 text-lg font-medium">View and download our latest filings.</p>
        </div>
      </section>

      {/* Filings Grid Section */}
      <section className="bg-[#f8f9fa] py-24 relative overflow-hidden border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-100 p-6 md:p-8 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between h-full min-h-[420px] transition-all hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:scale-[1.02] duration-300 group"
              >
                <div>
                  {/* Date Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#f5c518]/10 text-[#f5c518] flex items-center justify-center flex-shrink-0">
                      <Calendar size={18} className="stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Filing Date</span>
                      <span className="text-slate-800 text-[13px] font-bold mt-0.5">{item.date}</span>
                    </div>
                  </div>

                  {/* Form Type Box */}
                  <div className="bg-[#f5c518]/5 border border-[#f5c518]/15 rounded-[14px] p-5 mb-6 text-left flex flex-col justify-center">
                    <span className="text-[10px] font-semibold text-[#f5c518]/85 uppercase tracking-wider mb-1">Form Type</span>
                    <span className="text-slate-800 text-[20px] font-black tracking-tight leading-none">{item.type}</span>
                  </div>

                  {/* Description */}
                  <div className="text-left flex-1 mb-8">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">Description</span>
                    <p className="text-slate-600 text-[12px] font-semibold leading-relaxed tracking-tight line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Connected Two-Tone Download Button */}
                <div className="pt-2">
                  <a 
                    href="#"
                    className="flex items-stretch w-full rounded-[14px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 font-sans"
                  >
                    <div className="flex-1 bg-black text-white flex items-center justify-center gap-2.5 py-4 px-5 font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-[#1a1c20] transition-colors">
                      <Download size={14} className="stroke-[3]" />
                      Download PDF
                    </div>
                    <div className="bg-[#f5c518] text-black flex items-center justify-center px-5 hover:bg-[#e0b30d] transition-colors">
                      <ArrowUpRight size={16} className="stroke-[3]" />
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-20 flex items-center justify-center gap-8">
            <button className="text-slate-400 hover:text-[#f5c518] transition-colors cursor-pointer bg-transparent border-0">
              <ChevronRight size={20} className="rotate-180" />
            </button>
            <div className="flex items-center gap-6 text-sm font-semibold uppercase tracking-widest">
              <span className="text-[#f5c518] border-b border-[#f5c518] pb-1">1</span>
              <span className="text-slate-400 hover:text-slate-800 cursor-pointer transition-colors">2</span>
              <span className="text-slate-400 hover:text-slate-800 cursor-pointer transition-colors">3</span>
              <span className="text-slate-300">....</span>
              <span className="text-slate-400 hover:text-slate-800 cursor-pointer transition-colors">10</span>
            </div>
            <button className="text-slate-400 hover:text-[#f5c518] transition-colors cursor-pointer bg-transparent border-0">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default SECFilings;
