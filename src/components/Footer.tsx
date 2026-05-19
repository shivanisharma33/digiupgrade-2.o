import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoImg from '../assets/Digi new color logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-10 pb-8 px-4 md:px-8 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <img src={logoImg} alt="DigiPowerX Logo" className="h-16 w-auto brightness-0 invert opacity-90" />
              </div>
              
              <p className="text-white/50 text-[15px] leading-relaxed mb-8 max-w-sm">
                DigiPowerX is an innovative energy infrastructure company that develops cutting-edge data centers to drive the expansion of sustainable energy assets.
              </p>
              
              <div className="mb-10">
                <a href="mailto:ir@digipowerx.com" className="text-white hover:text-[#f5c518] font-medium text-[15px] transition-colors flex items-center gap-3">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  ir@digipowerx.com
                </a>
              </div>

              <div className="flex gap-4">
                 {/* Social Icons */}
                 <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-white mb-6">Company</h4>
              <ul className="space-y-3 text-[14px] font-medium text-white/50">
                <li><Link to="/" className="hover:text-[#f5c518] transition-colors">Home</Link></li>
                <li><Link to="/investors" className="hover:text-[#f5c518] transition-colors">Investor Relations</Link></li>
                <li><a href="#" className="hover:text-[#f5c518] transition-colors">News</a></li>
                <li><Link to="/careers" className="hover:text-[#f5c518] transition-colors">Career</Link></li>
                <li><a href="#" className="hover:text-[#f5c518] transition-colors">Partner</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-white mb-6">Financials</h4>
              <ul className="space-y-3 text-[14px] font-medium text-white/50">
                <li><a href="#" className="hover:text-[#f5c518] transition-colors">Stock Information</a></li>
                <li><Link to="/sec-filings" className="hover:text-[#f5c518] transition-colors">SEC Filings</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-white mb-6">Governance</h4>
              <ul className="space-y-3 text-[14px] font-medium text-white/50">
                <li><Link to="/documents-charters" className="hover:text-[#f5c518] transition-colors">Documents & Charters</Link></li>
                <li><Link to="/leadership" className="hover:text-[#f5c518] transition-colors">Leadership & Committees</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-white mb-6">IR Resources</h4>
              <ul className="space-y-3 text-[14px] font-medium text-white/50">
                <li><Link to="/email-alerts" className="hover:text-[#f5c518] transition-colors">Email Alerts</Link></li>
                <li><Link to="/contact" className="hover:text-[#f5c518] transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <span className="text-[13px] font-medium text-white/40">© {new Date().getFullYear()} DigiPowerX</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00e878] rounded-full animate-pulse shadow-[0_0_8px_rgba(0,232,120,0.8)]" />
              <span className="text-[13px] font-medium text-white/40">All Systems Operational</span>
            </div>
          </div>
          
          <div className="text-[13px] font-medium text-white/40 flex flex-wrap items-center justify-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            <a href="#" className="hover:text-white transition-colors">Trust Center</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CTASection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d')!;
    let W: number, H: number, t = 0;

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      W = c.offsetWidth; H = c.offsetHeight;
      c.width = W * dpr; c.height = H * dpr;
      c.style.width = W + 'px'; c.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    window.addEventListener('resize', setSize);
    setSize();

    const waves = [
      { freq: 0.5, amp: 0.15, speed: 0.4, col: '40, 50, 10', op: 0.4 },
      { freq: 0.8, amp: 0.1, speed: 0.6, col: '30, 40, 5', op: 0.3 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Topographical dark green/black background
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, '#050505');
      grad.addColorStop(1, '#0c1005');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      waves.forEach(w => {
        ctx.beginPath();
        for (let x = 0; x <= W; x++) {
          const y = H * 0.7 + Math.sin((x / W) * Math.PI * 1.5 + t * w.speed) * H * w.amp;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.lineTo(W, H);
        ctx.lineTo(0, H);
        ctx.closePath();
        ctx.fillStyle = `rgba(${w.col}, ${w.op})`;
        ctx.fill();

        // Stroke for topographical feel
        ctx.strokeStyle = `rgba(245, 197, 24, 0.05)`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      t += 0.005;
      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener('resize', setSize);
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden pt-10 pb-24 md:pb-32 bg-[#050505]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-16 lg:gap-0">

          {/* Left Side: Large Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[58%] lg:pr-16 flex items-center"
          >
            <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] font-semibold text-white uppercase tracking-tighter leading-[0.9] mb-0">
              READY TO OWN THE <br />
              <span className="text-[#f5c518]">INFRASTRUCTURE</span> <br />
              LAYER?
            </h2>
          </motion.div>

          {/* Right Side: Description & Buttons */}
          <div className="w-full lg:w-[42%] relative flex flex-col items-center lg:items-start justify-center gap-10 lg:pl-16 py-8">
            {/* Vertical Divider (Desktop Only) - Perfectly centered in the expanded gutter */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-64 bg-white/10" />

            <div className="flex flex-col gap-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-400 text-[14px] md:text-[15px] leading-relaxed max-w-md font-medium"
              >
                Whether you need co-location, a turnkey data center build, or bare-metal GPU compute — DigiPowerX has the infrastructure and the team to deliver.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-[#f5c518] text-black px-8 py-4 rounded-lg font-semibold text-[12px] uppercase tracking-widest hover:bg-[#ffda47] transition-all active:scale-95 text-center min-w-[200px]">
                  Talk to Our Team
                </button>
                <button className="bg-black/40 border border-white/10 text-white px-8 py-4 rounded-lg font-semibold text-[12px] uppercase tracking-widest hover:bg-white/5 transition-all active:scale-95 text-center backdrop-blur-md min-w-[200px]">
                  Capability Deck
                </button>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { Footer, CTASection };
