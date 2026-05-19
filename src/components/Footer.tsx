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
                 <a href="https://x.com/DigipowerX" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/digi-power-x/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/DigiPowerX/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/digipowerx/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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

      t += 0.035;
      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener('resize', setSize);
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden pt-16 pb-28 md:pb-36 bg-[#050505] border-t border-white/5">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
      
      {/* Subtle radial glow behind the content */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#f5c518] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16">

          {/* Left Side: Large Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[55%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#f5c518] animate-pulse shadow-[0_0_8px_#f5c518]" />
              <span className="text-[#f5c518] text-[10px] font-bold tracking-[0.3em] uppercase">Partner With Us</span>
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold text-white uppercase tracking-tighter leading-[0.9] mb-0 break-words">
              READY TO OWN THE <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5c518] to-[#ffda47] drop-shadow-[0_0_15px_rgba(245,197,24,0.2)] break-all md:break-normal">INFRASTRUCTURE</span> <br className="hidden md:block" />
              LAYER?
            </h2>
          </motion.div>

          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden lg:flex flex-col justify-center py-8">
            <div className="w-px h-full max-h-[300px] bg-gradient-to-b from-transparent via-white/15 to-transparent" />
          </div>

          {/* Right Side: Description & Buttons */}
          <div className="w-full lg:flex-1 relative flex flex-col justify-center lg:py-8">

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/[0.02] border border-white/5 p-6 sm:p-8 md:p-10 rounded-2xl backdrop-blur-sm relative overflow-hidden"
            >
              {/* Subtle inner top highlight */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              
              <p className="text-gray-400 text-[15px] md:text-[16px] leading-relaxed mb-8 md:mb-10 font-medium text-center lg:text-left">
                Whether you need co-location, a turnkey data center build, or bare-metal GPU compute — DigiPowerX has the infrastructure, the scale, and the team to deliver.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#f5c518] text-black px-6 md:px-8 py-4 rounded-lg font-bold text-[12px] uppercase tracking-widest hover:bg-[#ffda47] hover:shadow-[0_0_20px_rgba(245,197,24,0.3)] transition-all active:scale-95 text-center flex-1">
                  Talk to Our Team
                </button>
                <button className="bg-black/40 border border-white/10 text-white px-6 md:px-8 py-4 rounded-lg font-bold text-[12px] uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all active:scale-95 text-center backdrop-blur-md flex-1">
                  Capability Deck
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { Footer, CTASection };





