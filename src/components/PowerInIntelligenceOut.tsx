import { useState } from "react";
import "./PowerInIntelligenceOut.css";

const PowerInIntelligenceOut = () => {
  const [speed, setSpeed] = useState(6);

  return (
    <section className="pio" style={{ ["--speed" as string]: `${speed}s` }}>
      <div className="pio-stage-bg" />
      <div className="pio-grid-tex" />

      <div className="pio-wrap">
        <div className="pio-headline">
          <h1>
            POWER IN.<br />
            <span className="pio-amber">INTELLIGENCE</span> OUT.
          </h1>
          <div className="pio-sub">From Megawatts to Models — One Continuous Stack</div>
        </div>

        <div className="pio-rule" />

        <div className="pio-pipeline">
          {/* 01 · POWER GENERATION */}
          <div className="pio-stage">
            <div className="pio-box">
              <span className="pio-tag">01 / SOURCE</span>
              <span className="pio-status" />
              <svg viewBox="0 0 280 350" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="sky_p" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#3a2c0c" />
                    <stop offset=".42" stopColor="#1a1206" />
                    <stop offset="1" stopColor="#070502" />
                  </linearGradient>
                  <radialGradient id="sun_p" cx="50%" cy="50%" r="50%">
                    <stop offset="0" stopColor="rgba(255,210,90,.55)" />
                    <stop offset=".4" stopColor="rgba(245,177,6,.22)" />
                    <stop offset="1" stopColor="rgba(245,177,6,0)" />
                  </radialGradient>
                  <linearGradient id="steel_lit" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#7a6326" />
                    <stop offset=".5" stopColor="#a8862f" />
                    <stop offset="1" stopColor="#4a3a16" />
                  </linearGradient>
                  <linearGradient id="glass_p" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#3a4f74" />
                    <stop offset=".5" stopColor="#1a2740" />
                    <stop offset="1" stopColor="#0c1322" />
                  </linearGradient>
                  <linearGradient id="haze_p" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="rgba(245,177,6,0)" />
                    <stop offset="1" stopColor="rgba(245,177,6,.10)" />
                  </linearGradient>
                  <filter id="soft_p"><feGaussianBlur stdDeviation="1.1" /></filter>
                  <filter id="blur_far_p"><feGaussianBlur stdDeviation="2.4" /></filter>
                </defs>
                <rect width="280" height="350" fill="url(#sky_p)" />
                <circle cx="196" cy="96" r="74" fill="url(#sun_p)" />
                <circle cx="196" cy="96" r="17" fill="rgba(255,221,130,.5)" filter="url(#soft_p)" />
                <g filter="url(#blur_far_p)" opacity=".6">
                  <path d="M0 224 Q70 206 140 218 T280 208 V300 H0Z" fill="#140f06" />
                </g>
                <g opacity=".4" filter="url(#blur_far_p)" stroke="#2a200b" fill="none" strokeWidth="2">
                  <line x1="40" y1="222" x2="40" y2="196" />
                  <circle cx="40" cy="193" r="3" />
                  <line x1="64" y1="220" x2="64" y2="198" />
                  <circle cx="64" cy="195" r="3" />
                </g>
                <g>
                  <ellipse cx="74" cy="266" rx="62" ry="13" fill="#000" opacity=".5" filter="url(#soft_p)" />
                  <path d="M30 200 L92 200 L92 264 L30 264Z" fill="#241b0a" />
                  <path d="M30 200 L92 200 L98 192 L36 192Z" fill="#3a2d10" />
                  <path d="M92 200 L92 264 L98 258 L98 192Z" fill="#161005" />
                  <rect x="38" y="210" width="46" height="3" fill="rgba(245,177,6,.14)" />
                  <rect x="38" y="232" width="46" height="3" fill="rgba(245,177,6,.10)" />
                  <rect x="52" y="240" width="18" height="24" fill="#0c0803" />
                  <rect x="40" y="160" width="11" height="40" fill="url(#steel_lit)" />
                  <rect x="40" y="160" width="2.4" height="40" fill="rgba(255,225,150,.45)" />
                  <rect x="58" y="148" width="11" height="52" fill="url(#steel_lit)" />
                  <rect x="58" y="148" width="2.4" height="52" fill="rgba(255,225,150,.45)" />
                  <g filter="url(#soft_p)">
                    <ellipse cx="46" cy="156" rx="7" ry="5" fill="rgba(245,200,110,.16)">
                      <animate attributeName="cy" values="156;112;156" dur="4.4s" repeatCount="indefinite" />
                      <animate attributeName="rx" values="5;14;5" dur="4.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0;.34;0" dur="4.4s" repeatCount="indefinite" />
                    </ellipse>
                    <ellipse cx="64" cy="142" rx="8" ry="5" fill="rgba(245,200,110,.14)">
                      <animate attributeName="cy" values="142;92;142" dur="5.6s" repeatCount="indefinite" />
                      <animate attributeName="rx" values="5;16;5" dur="5.6s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0;.32;0" dur="5.6s" repeatCount="indefinite" />
                    </ellipse>
                  </g>
                </g>
                <g transform="translate(20 286)">
                  <ellipse cx="44" cy="14" rx="58" ry="10" fill="#000" opacity=".45" filter="url(#soft_p)" />
                  <g stroke="rgba(140,170,220,.22)">
                    <polygon points="0,0 38,-4 38,12 0,16" fill="url(#glass_p)" />
                    <polygon points="46,-4 84,-8 84,8 46,12" fill="url(#glass_p)" />
                    <polygon points="10,20 50,15 50,30 10,34" fill="url(#glass_p)" />
                    <polygon points="58,15 96,10 96,25 58,29" fill="url(#glass_p)" />
                  </g>
                  <g fill="rgba(255,230,160,.3)">
                    <polygon points="2,1 12,0 9,5 1,6" />
                    <polygon points="48,-3 58,-4 55,1 47,2" />
                  </g>
                  <g fill="#0c0a04">
                    <rect x="8" y="14" width="2.6" height="9" />
                    <rect x="44" y="8" width="2.6" height="11" />
                  </g>
                </g>
                <g transform="translate(196 92)">
                  <ellipse cx="14" cy="186" rx="40" ry="11" fill="#000" opacity=".55" filter="url(#soft_p)" />
                  <g strokeWidth="2.4" strokeLinecap="round">
                    <line x1="14" y1="0" x2="2" y2="182" stroke="#c79a34" />
                    <line x1="14" y1="0" x2="26" y2="182" stroke="#6e561f" />
                  </g>
                  <g stroke="#8a6c26" strokeWidth="1.5">
                    <path d="M-18 36 H46 M-14 70 H42 M-10 104 H38 M-6 138 H34 M-2 168 H30" />
                  </g>
                  <g stroke="#a8842c" strokeWidth="1.3" opacity=".9">
                    <path d="M9 14 L23 44 M23 14 L9 44 M7 50 L25 84 M25 50 L7 84
                             M6 90 L26 124 M26 90 L6 124 M5 130 L27 162 M27 130 L5 162" />
                  </g>
                  <g stroke="#c79a34" strokeWidth="2">
                    <line x1="-20" y1="36" x2="48" y2="36" />
                    <line x1="-16" y1="70" x2="44" y2="70" />
                  </g>
                  <g fill="rgba(245,177,6,.9)" filter="url(#soft_p)">
                    <circle cx="-20" cy="36" r="3.2" />
                    <circle cx="48" cy="36" r="3.2" />
                    <circle cx="-16" cy="70" r="3.2" />
                    <circle cx="44" cy="70" r="3.2" />
                    <circle cx="14" cy="36" r="3" />
                    <circle cx="14" cy="70" r="3" />
                  </g>
                  <g stroke="rgba(255,225,150,.6)" strokeWidth="1.4">
                    <line x1="-20" y1="36" x2="-20" y2="46" />
                    <line x1="48" y1="36" x2="48" y2="46" />
                    <line x1="-16" y1="70" x2="-16" y2="80" />
                    <line x1="44" y1="70" x2="44" y2="80" />
                  </g>
                </g>
                <path d="M-4 132 Q140 152 284 124" stroke="#7a5f22" fill="none" strokeWidth="1.3" />
                <path d="M-4 162 Q140 184 284 154" stroke="#5f4a1b" fill="none" strokeWidth="1.2" />
                <circle r="3" fill="#ffe39a" filter="url(#soft_p)">
                  <animateMotion path="M-4 132 Q140 152 284 124" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r="2.4" fill="#f5b106" filter="url(#soft_p)">
                  <animateMotion path="M-4 162 Q140 184 284 154" dur="3.7s" begin="-1s" repeatCount="indefinite" />
                </circle>
                <rect x="0" y="240" width="280" height="110" fill="url(#haze_p)" />
                <ellipse cx="140" cy="320" rx="170" ry="34" fill="rgba(245,177,6,.06)" />
              </svg>
              <div className="pio-grade" />
              <div className="pio-grain" />
            </div>
            <div className="pio-card">
              <div className="pio-ctop">
                <span className="pio-cstage">Stage 01 — Source</span>
                <span className="pio-cdot"><i className="pio-on" /><i /><i /></span>
              </div>
              <h3>Power Generation</h3>
              <div className="pio-cmeta">Natural Gas · Solar · Grid</div>
              <div className="pio-cbar" />
              <div className="pio-cspec"><span>Capacity</span><b>400 MW+</b></div>
            </div>
          </div>

          <div className="pio-conn">
            <span className="pio-track" />
            <span className="pio-pulse" />
            <span className="pio-pulse" />
            <span className="pio-pulse" />
          </div>

          {/* 02 · HV SUBSTATION */}
          <div className="pio-stage">
            <div className="pio-box">
              <span className="pio-tag">02 / TRANSFORM</span>
              <span className="pio-status" />
              <svg viewBox="0 0 280 350" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="sky_s" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#2e2409" />
                    <stop offset=".5" stopColor="#16100600" />
                    <stop offset="1" stopColor="#060402" />
                  </linearGradient>
                  <linearGradient id="tank_s" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#5f4d1e" />
                    <stop offset=".34" stopColor="#9b7d2c" />
                    <stop offset=".62" stopColor="#3f3214" />
                    <stop offset="1" stopColor="#241c0b" />
                  </linearGradient>
                  <linearGradient id="cons_s" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#b08f33" />
                    <stop offset="1" stopColor="#4a3a16" />
                  </linearGradient>
                  <linearGradient id="haze_s" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="rgba(245,177,6,0)" />
                    <stop offset="1" stopColor="rgba(245,177,6,.10)" />
                  </linearGradient>
                  <filter id="soft_s"><feGaussianBlur stdDeviation="1.1" /></filter>
                  <filter id="blur_far_s"><feGaussianBlur stdDeviation="2.6" /></filter>
                </defs>
                <rect width="280" height="350" fill="url(#sky_s)" />
                <g filter="url(#blur_far_s)" opacity=".5" stroke="#3a2d10" strokeWidth="2" fill="none">
                  <line x1="40" y1="40" x2="40" y2="220" />
                  <line x1="88" y1="40" x2="88" y2="220" />
                  <line x1="24" y1="52" x2="104" y2="52" />
                  <line x1="24" y1="74" x2="104" y2="74" />
                  <line x1="200" y1="46" x2="200" y2="220" />
                  <line x1="248" y1="46" x2="248" y2="220" />
                  <line x1="186" y1="58" x2="262" y2="58" />
                </g>
                <g opacity=".5" filter="url(#blur_far_s)">
                  <circle cx="200" cy="100" r="3" fill="rgba(245,177,6,.5)" />
                  <line x1="200" y1="58" x2="200" y2="100" stroke="rgba(245,177,6,.3)" strokeWidth="1.4" />
                </g>
                <g transform="translate(74 132)">
                  <ellipse cx="42" cy="150" rx="74" ry="15" fill="#000" opacity=".55" filter="url(#soft_s)" />
                  <g stroke="#5a4719" strokeWidth="3">
                    <line x1="-14" y1="20" x2="-14" y2="120" />
                    <line x1="-22" y1="20" x2="-22" y2="120" />
                    <line x1="-30" y1="20" x2="-30" y2="120" />
                    <line x1="98" y1="20" x2="98" y2="120" />
                    <line x1="106" y1="20" x2="106" y2="120" />
                    <line x1="114" y1="20" x2="114" y2="120" />
                  </g>
                  <g stroke="#7a6122" strokeWidth="1.5">
                    <line x1="-30" y1="28" x2="-12" y2="28" />
                    <line x1="-30" y1="112" x2="-12" y2="112" />
                    <line x1="96" y1="28" x2="116" y2="28" />
                    <line x1="96" y1="112" x2="116" y2="112" />
                  </g>
                  <path d="M0 16 L84 16 L84 142 L0 142Z" fill="url(#tank_s)" />
                  <path d="M0 16 L84 16 L92 6 L8 6Z" fill="#9b7d2c" />
                  <path d="M84 16 L84 142 L92 132 L92 6Z" fill="#1c1509" />
                  <rect x="0" y="16" width="3.6" height="126" fill="rgba(255,228,150,.4)" />
                  <ellipse cx="42" cy="-6" rx="30" ry="11" fill="url(#cons_s)" />
                  <ellipse cx="42" cy="-6" rx="30" ry="11" fill="none" stroke="#caa23a" strokeWidth="1" />
                  <rect x="40" y="3" width="4" height="9" fill="#5a4719" />
                  <g stroke="#caa23a" strokeWidth="2">
                    <line x1="16" y1="16" x2="16" y2="-44" />
                    <line x1="42" y1="16" x2="42" y2="-52" />
                    <line x1="68" y1="16" x2="68" y2="-44" />
                  </g>
                  <g fill="#caa23a" opacity=".9" filter="url(#soft_s)">
                    <ellipse cx="16" cy="-10" rx="6" ry="3.4" />
                    <ellipse cx="16" cy="-20" rx="6" ry="3.4" />
                    <ellipse cx="16" cy="-30" rx="6" ry="3.4" />
                    <ellipse cx="16" cy="-40" rx="6" ry="3.4" />
                    <ellipse cx="42" cy="-12" rx="6.5" ry="3.6" />
                    <ellipse cx="42" cy="-23" rx="6.5" ry="3.6" />
                    <ellipse cx="42" cy="-34" rx="6.5" ry="3.6" />
                    <ellipse cx="42" cy="-45" rx="6.5" ry="3.6" />
                    <ellipse cx="68" cy="-10" rx="6" ry="3.4" />
                    <ellipse cx="68" cy="-20" rx="6" ry="3.4" />
                    <ellipse cx="68" cy="-30" rx="6" ry="3.4" />
                    <ellipse cx="68" cy="-40" rx="6" ry="3.4" />
                  </g>
                  <g fill="rgba(255,235,170,.5)">
                    <ellipse cx="14" cy="-11" rx="2" ry="1.3" />
                    <ellipse cx="40" cy="-13" rx="2" ry="1.3" />
                    <ellipse cx="66" cy="-11" rx="2" ry="1.3" />
                  </g>
                  <g fill="#ffe39a" filter="url(#soft_s)">
                    <circle cx="16" cy="-46" r="3" />
                    <circle cx="42" cy="-54" r="3.4" />
                    <circle cx="68" cy="-46" r="3" />
                  </g>
                  <circle cx="42" cy="-54" r="4" fill="#fff3c8">
                    <animate attributeName="opacity" values="0;1;.2;0;1;0" dur="2.2s" repeatCount="indefinite" />
                    <animate attributeName="r" values="2.5;6;2.5;2.5;6;2.5" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="14" cy="116" r="7" fill="#0d0a04" stroke="#caa23a" strokeWidth="1.4" />
                  <circle cx="14" cy="116" r="1.6" fill="#ffe39a" />
                  <rect x="34" y="106" width="20" height="24" fill="#0c0903" stroke="#7a6122" />
                  <circle cx="70" cy="120" r="5" fill="#0d0a04" stroke="#9b7d2c" />
                </g>
                <path d="M116 78 Q116 40 200 16" stroke="#7a5f22" strokeWidth="1.4" fill="none" />
                <circle r="2.6" fill="#ffe39a" filter="url(#soft_s)">
                  <animateMotion path="M200 16 Q116 40 116 78 L116 274" dur="3s" repeatCount="indefinite" />
                </circle>
                <rect x="0" y="244" width="280" height="106" fill="url(#haze_s)" />
                <ellipse cx="140" cy="318" rx="170" ry="32" fill="rgba(245,177,6,.06)" />
              </svg>
              <div className="pio-grade" />
              <div className="pio-grain" />
            </div>
            <div className="pio-card">
              <div className="pio-ctop">
                <span className="pio-cstage">Stage 02 — Transform</span>
                <span className="pio-cdot"><i className="pio-on" /><i className="pio-on" /><i /></span>
              </div>
              <h3>HV Substation</h3>
              <div className="pio-cmeta">2N Redundant · Owned</div>
              <div className="pio-cbar" />
              <div className="pio-cspec"><span>Topology</span><b>2N · ON-SITE</b></div>
            </div>
          </div>

          <div className="pio-conn">
            <span className="pio-track" />
            <span className="pio-pulse" />
            <span className="pio-pulse" />
            <span className="pio-pulse" />
          </div>

          {/* 03 · DATA CENTER */}
          <div className="pio-stage">
            <div className="pio-box">
              <span className="pio-tag">03 / FACILITY</span>
              <span className="pio-status" />
              <svg viewBox="0 0 280 350" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="sky_d" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#2c2208" />
                    <stop offset=".5" stopColor="#150f06" />
                    <stop offset="1" stopColor="#060402" />
                  </linearGradient>
                  <linearGradient id="face_lit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#392d11" />
                    <stop offset="1" stopColor="#1d1608" />
                  </linearGradient>
                  <linearGradient id="face_dk" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#1a1407" />
                    <stop offset="1" stopColor="#0c0903" />
                  </linearGradient>
                  <linearGradient id="hot_d" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="rgba(245,177,6,.5)" />
                    <stop offset="1" stopColor="rgba(245,177,6,.08)" />
                  </linearGradient>
                  <linearGradient id="haze_d" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="rgba(245,177,6,0)" />
                    <stop offset="1" stopColor="rgba(245,177,6,.10)" />
                  </linearGradient>
                  <filter id="soft_d"><feGaussianBlur stdDeviation="1" /></filter>
                  <filter id="blur_far_d"><feGaussianBlur stdDeviation="2.6" /></filter>
                </defs>
                <rect width="280" height="350" fill="url(#sky_d)" />
                <g filter="url(#blur_far_d)" opacity=".45">
                  <path d="M0 200 L70 188 L70 240 L0 248Z" fill="#140f06" />
                  <path d="M236 196 L280 204 L280 250 L236 244Z" fill="#140f06" />
                </g>
                <g>
                  <ellipse cx="142" cy="288" rx="118" ry="20" fill="#000" opacity=".55" filter="url(#soft_d)" />
                  <path d="M44 128 L156 104 L156 284 L44 300Z" fill="url(#face_lit)" />
                  <path d="M156 104 L246 130 L246 256 L156 284Z" fill="url(#face_dk)" />
                  <path d="M44 128 L156 104 L246 130 L134 152Z" fill="#241b0b" />
                  <line x1="156" y1="104" x2="156" y2="284" stroke="rgba(255,225,150,.32)" strokeWidth="1.6" />
                  <line x1="44" y1="128" x2="156" y2="104" stroke="rgba(255,225,150,.22)" />
                  <g>
                    <path d="M84 116 L104 112 L104 122 L84 126Z" fill="#2c220e" stroke="#5a4719" />
                    <path d="M112 110 L132 106 L132 116 L112 120Z" fill="#2c220e" stroke="#5a4719" />
                    <circle cx="94" cy="119" r="4.6" fill="none" stroke="rgba(245,177,6,.55)" strokeWidth="1.4">
                      <animateTransform attributeName="transform" type="rotate" from="0 94 119" to="360 94 119" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="122" cy="113" r="4.6" fill="none" stroke="rgba(245,177,6,.55)" strokeWidth="1.4">
                      <animateTransform attributeName="transform" type="rotate" from="360 122 113" to="0 122 113" dur="2.8s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  <g>
                    <path d="M58 158 L150 138 L150 152 L58 172Z" fill="url(#hot_d)" />
                    <path d="M58 184 L150 164 L150 178 L58 198Z" fill="rgba(245,177,6,.10)" />
                    <path d="M58 210 L150 190 L150 204 L58 224Z" fill="url(#hot_d)" />
                    <path d="M58 236 L150 216 L150 230 L58 250Z" fill="rgba(245,177,6,.08)" />
                    <g stroke="rgba(245,177,6,.3)">
                      <line x1="76" y1="156" x2="76" y2="248" />
                      <line x1="98" y1="151" x2="98" y2="243" />
                      <line x1="120" y1="147" x2="120" y2="239" />
                      <line x1="142" y1="142" x2="142" y2="234" />
                    </g>
                    <path d="M58 158 L150 138 L150 146 L58 166Z" fill="rgba(255,225,150,.45)" filter="url(#soft_d)">
                      <animateTransform attributeName="transform" type="translate" values="0 0;0 96;0 0" dur="4.6s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0;.7;0" dur="4.6s" repeatCount="indefinite" />
                    </path>
                  </g>
                  <g stroke="rgba(245,177,6,.18)">
                    <line x1="166" y1="138" x2="236" y2="158" />
                    <line x1="166" y1="156" x2="236" y2="176" />
                    <line x1="166" y1="174" x2="236" y2="194" />
                    <line x1="166" y1="192" x2="236" y2="212" />
                    <line x1="166" y1="210" x2="236" y2="230" />
                  </g>
                  <path d="M86 252 L108 248 L108 284 L86 288Z" fill="#0b0803" />
                  <rect x="178" y="176" width="44" height="26" rx="2" fill="rgba(245,177,6,.12)" stroke="rgba(245,177,6,.55)" />
                  <text x="200" y="194" fontFamily="JetBrains Mono,monospace" fontSize="13" fontWeight="700" fill="#ffe39a" textAnchor="middle" filter="url(#soft_d)">T-III</text>
                </g>
                <path d="M246 150 Q266 128 282 104" stroke="#7a5f22" fill="none" strokeWidth="1.3" />
                <circle r="2.4" fill="#ffe39a" filter="url(#soft_d)">
                  <animateMotion path="M246 150 Q266 128 282 104" dur="2s" repeatCount="indefinite" />
                </circle>
                <rect x="0" y="248" width="280" height="102" fill="url(#haze_d)" />
                <ellipse cx="140" cy="322" rx="170" ry="30" fill="rgba(245,177,6,.06)" />
              </svg>
              <div className="pio-grade" />
              <div className="pio-grain" />
            </div>
            <div className="pio-card">
              <div className="pio-ctop">
                <span className="pio-cstage">Stage 03 — Facility</span>
                <span className="pio-cdot"><i className="pio-on" /><i className="pio-on" /><i className="pio-on" /></span>
              </div>
              <h3>Data Center</h3>
              <div className="pio-cmeta">Tier III · TIA-942</div>
              <div className="pio-cbar" />
              <div className="pio-cspec"><span>Uptime</span><b>99.982%</b></div>
            </div>
          </div>

          <div className="pio-conn">
            <span className="pio-track" />
            <span className="pio-pulse" />
            <span className="pio-pulse" />
            <span className="pio-pulse" />
          </div>

          {/* 04 · GPU CLUSTER */}
          <div className="pio-stage">
            <div className="pio-box">
              <span className="pio-tag">04 / COMPUTE</span>
              <span className="pio-status" />
              <svg viewBox="0 0 280 350" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="sky_g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#1f1809" />
                    <stop offset="1" stopColor="#060402" />
                  </linearGradient>
                  <linearGradient id="rack_lit" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#2e2410" />
                    <stop offset=".5" stopColor="#3e3014" />
                    <stop offset="1" stopColor="#1a1407" />
                  </linearGradient>
                  <linearGradient id="rack_dk" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#181206" />
                    <stop offset="1" stopColor="#0a0703" />
                  </linearGradient>
                  <radialGradient id="aisle_g" cx="50%" cy="40%" r="62%">
                    <stop offset="0" stopColor="rgba(245,177,6,.30)" />
                    <stop offset="1" stopColor="rgba(245,177,6,0)" />
                  </radialGradient>
                  <linearGradient id="haze_g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="rgba(245,177,6,0)" />
                    <stop offset="1" stopColor="rgba(245,177,6,.08)" />
                  </linearGradient>
                  <filter id="soft_g"><feGaussianBlur stdDeviation="1" /></filter>
                </defs>
                <rect width="280" height="350" fill="url(#sky_g)" />
                <ellipse cx="140" cy="150" rx="60" ry="120" fill="url(#aisle_g)" />
                <path d="M0 320 L116 168 L164 168 L280 320Z" fill="#0c0903" />
                <g stroke="rgba(245,177,6,.12)">
                  <line x1="140" y1="168" x2="140" y2="320" />
                  <line x1="124" y1="200" x2="64" y2="320" />
                  <line x1="156" y1="200" x2="216" y2="320" />
                  <line x1="132" y1="244" x2="98" y2="320" />
                  <line x1="148" y1="244" x2="182" y2="320" />
                </g>
                <g stroke="rgba(245,177,6,.2)" strokeWidth="1.4">
                  <line x1="116" y1="44" x2="164" y2="44" />
                  <line x1="116" y1="44" x2="92" y2="20" />
                  <line x1="164" y1="44" x2="188" y2="20" />
                  <line x1="122" y1="54" x2="158" y2="54" />
                </g>
                <g>
                  <path d="M16 70 L116 92 L116 282 L16 316Z" fill="url(#rack_lit)" />
                  <path d="M16 70 L16 316" stroke="rgba(255,225,150,.3)" strokeWidth="1.6" />
                  <g fill="rgba(8,6,2,.6)" stroke="rgba(245,177,6,.22)">
                    <path d="M26 92 L110 104 L110 120 L26 110Z" />
                    <path d="M26 116 L110 128 L110 144 L26 134Z" />
                    <path d="M26 140 L110 152 L110 168 L26 158Z" />
                    <path d="M26 164 L110 176 L110 192 L26 182Z" />
                    <path d="M26 188 L110 200 L110 216 L26 206Z" />
                    <path d="M26 212 L110 224 L110 240 L26 230Z" />
                    <path d="M26 236 L110 248 L110 264 L26 254Z" />
                  </g>
                  <g fill="#ffd24a">
                    <rect x="30" y="98" width="3.5" height="6"><animate attributeName="opacity" values="1;.2;1" dur="1.1s" repeatCount="indefinite" /></rect>
                    <rect x="30" y="122" width="3.5" height="6"><animate attributeName="opacity" values=".3;1;.3" dur="1.4s" repeatCount="indefinite" /></rect>
                    <rect x="30" y="146" width="3.5" height="6"><animate attributeName="opacity" values="1;.3;1" dur="0.9s" repeatCount="indefinite" /></rect>
                    <rect x="30" y="170" width="3.5" height="6"><animate attributeName="opacity" values=".4;1;.4" dur="1.6s" repeatCount="indefinite" /></rect>
                    <rect x="30" y="194" width="3.5" height="6"><animate attributeName="opacity" values="1;.3;1" dur="1.2s" repeatCount="indefinite" /></rect>
                    <rect x="30" y="218" width="3.5" height="6"><animate attributeName="opacity" values=".3;1;.3" dur="1s" repeatCount="indefinite" /></rect>
                    <rect x="30" y="242" width="3.5" height="6"><animate attributeName="opacity" values="1;.4;1" dur="1.5s" repeatCount="indefinite" /></rect>
                  </g>
                </g>
                <g>
                  <path d="M264 70 L164 92 L164 282 L264 316Z" fill="url(#rack_dk)" />
                  <path d="M264 70 L264 316" stroke="rgba(255,225,150,.18)" strokeWidth="1.4" />
                  <g fill="rgba(6,4,2,.6)" stroke="rgba(245,177,6,.18)">
                    <path d="M254 92 L170 104 L170 120 L254 110Z" />
                    <path d="M254 116 L170 128 L170 144 L254 134Z" />
                    <path d="M254 140 L170 152 L170 168 L254 158Z" />
                    <path d="M254 164 L170 176 L170 192 L254 182Z" />
                    <path d="M254 188 L170 200 L170 216 L254 206Z" />
                    <path d="M254 212 L170 224 L170 240 L254 230Z" />
                    <path d="M254 236 L170 248 L170 264 L254 254Z" />
                  </g>
                  <g fill="#e6b53e">
                    <rect x="246" y="98" width="3.5" height="6"><animate attributeName="opacity" values=".3;1;.3" dur="1.3s" repeatCount="indefinite" /></rect>
                    <rect x="246" y="146" width="3.5" height="6"><animate attributeName="opacity" values="1;.3;1" dur="1s" repeatCount="indefinite" /></rect>
                    <rect x="246" y="194" width="3.5" height="6"><animate attributeName="opacity" values=".4;1;.4" dur="1.5s" repeatCount="indefinite" /></rect>
                    <rect x="246" y="242" width="3.5" height="6"><animate attributeName="opacity" values="1;.3;1" dur="1.15s" repeatCount="indefinite" /></rect>
                  </g>
                </g>
                <path d="M116 92 L164 92 L164 282 L116 282Z" fill="rgba(245,177,6,.06)" />
                <line x1="140" y1="92" x2="140" y2="282" stroke="#ffd24a" strokeWidth="2.4" filter="url(#soft_g)">
                  <animate attributeName="opacity" values=".3;.8;.3" dur="2s" repeatCount="indefinite" />
                </line>
                <g fill="#ffe39a" filter="url(#soft_g)">
                  <circle r="2" cx="132" cy="0">
                    <animate attributeName="cy" values="282;100" dur="2.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;0" dur="2.4s" repeatCount="indefinite" />
                  </circle>
                  <circle r="2" cx="140" cy="0">
                    <animate attributeName="cy" values="282;100" dur="2.4s" begin="-0.8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;0" dur="2.4s" begin="-0.8s" repeatCount="indefinite" />
                  </circle>
                  <circle r="2" cx="148" cy="0">
                    <animate attributeName="cy" values="282;100" dur="2.4s" begin="-1.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;0" dur="2.4s" begin="-1.6s" repeatCount="indefinite" />
                  </circle>
                </g>
                <rect x="0" y="266" width="280" height="84" fill="url(#haze_g)" />
              </svg>
              <div className="pio-grade" />
              <div className="pio-grain" />
            </div>
            <div className="pio-card">
              <div className="pio-ctop">
                <span className="pio-cstage">Stage 04 — Compute</span>
                <span className="pio-cdot"><i className="pio-on" /><i className="pio-on" /><i className="pio-on" /></span>
              </div>
              <h3>GPU Cluster</h3>
              <div className="pio-cmeta">NVIDIA Blackwell B200</div>
              <div className="pio-cbar" />
              <div className="pio-cspec"><span>Fabric</span><b>NVLINK</b></div>
            </div>
          </div>

          <div className="pio-conn pio-to-green">
            <span className="pio-track" />
            <span className="pio-pulse" />
            <span className="pio-pulse" />
            <span className="pio-pulse" />
          </div>

          {/* 05 · NEOCLOUDZ */}
          <div className="pio-stage pio-out">
            <div className="pio-box">
              <span className="pio-tag">05 / DELIVERY</span>
              <span className="pio-status" />
              <svg viewBox="0 0 280 350" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <radialGradient id="orb_n" cx="50%" cy="42%" r="62%">
                    <stop offset="0" stopColor="rgba(30,217,138,.34)" />
                    <stop offset=".5" stopColor="rgba(30,217,138,.12)" />
                    <stop offset="1" stopColor="rgba(30,217,138,0)" />
                  </radialGradient>
                  <linearGradient id="haze_n" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="rgba(30,217,138,0)" />
                    <stop offset="1" stopColor="rgba(30,217,138,.10)" />
                  </linearGradient>
                  <filter id="soft_n"><feGaussianBlur stdDeviation="1.1" /></filter>
                </defs>
                <rect width="280" height="350" fill="#04130c" />
                <circle cx="140" cy="158" r="140" fill="url(#orb_n)" />
                <g stroke="rgba(30,217,138,.26)" fill="none">
                  <ellipse cx="140" cy="158" rx="108" ry="48" />
                  <ellipse cx="140" cy="158" rx="76" ry="94" transform="rotate(28 140 158)" />
                  <ellipse cx="140" cy="158" rx="76" ry="94" transform="rotate(-28 140 158)" />
                </g>
                <g fill="#54f0ac" filter="url(#soft_n)">
                  <circle r="4.5">
                    <animateMotion path="M32 158 a108 48 0 1 0 216 0 a108 48 0 1 0 -216 0" dur="6s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3.5">
                    <animateMotion path="M140 64 a76 94 0 1 1 0 188 a76 94 0 1 1 0 -188" dur="7s" repeatCount="indefinite" />
                  </circle>
                </g>
                <g transform="translate(140 150)">
                  <ellipse cx="0" cy="8" rx="54" ry="31" fill="rgba(30,217,138,.12)" stroke="rgba(30,217,138,.55)" />
                  <circle cx="-21" cy="-3" r="19" fill="rgba(30,217,138,.14)" stroke="rgba(30,217,138,.5)" />
                  <circle cx="11" cy="-11" r="24" fill="rgba(30,217,138,.14)" stroke="rgba(30,217,138,.5)" />
                  <circle cx="31" cy="3" r="16" fill="rgba(30,217,138,.14)" stroke="rgba(30,217,138,.5)" />
                  <rect x="-18" y="-5" width="36" height="27" rx="2" fill="#06160e" stroke="#1ED98A" />
                  <g stroke="#54f0ac">
                    <line x1="-18" y1="3" x2="-27" y2="3" />
                    <line x1="-18" y1="13" x2="-27" y2="13" />
                    <line x1="18" y1="3" x2="27" y2="3" />
                    <line x1="18" y1="13" x2="27" y2="13" />
                    <line x1="-8" y1="-5" x2="-8" y2="-13" />
                    <line x1="8" y1="-5" x2="8" y2="-13" />
                  </g>
                  <circle cx="0" cy="9" r="5" fill="#1ED98A" filter="url(#soft_n)">
                    <animate attributeName="opacity" values="1;.3;1" dur="1.3s" repeatCount="indefinite" />
                  </circle>
                </g>
                <text x="140" y="266" fontFamily="JetBrains Mono,monospace" fontSize="12" fontWeight="700" fill="#54f0ac" textAnchor="middle" letterSpacing="3.5">&lt; 60s PROVISION</text>
                <g fill="#1ED98A">
                  <circle r="2.8" cx="0" cy="312">
                    <animate attributeName="cx" values="46;258" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle r="2.8" cx="0" cy="312">
                    <animate attributeName="cx" values="46;258" dur="2s" begin="0.7s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.7s" repeatCount="indefinite" />
                  </circle>
                  <circle r="2.8" cx="0" cy="312">
                    <animate attributeName="cx" values="46;258" dur="2s" begin="1.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1.4s" repeatCount="indefinite" />
                  </circle>
                </g>
                <rect x="0" y="262" width="280" height="88" fill="url(#haze_n)" />
              </svg>
              <div className="pio-grade" />
              <div className="pio-grain" />
            </div>
            <div className="pio-card">
              <div className="pio-ctop">
                <span className="pio-cstage">Output — Delivery</span>
                <span className="pio-cdot"><i className="pio-on" /><i className="pio-on" /><i className="pio-on" /></span>
              </div>
              <h3>NeoCloudz</h3>
              <div className="pio-cmeta">Bare Metal · &lt;60s Provision</div>
              <div className="pio-cbar" />
              <div className="pio-cspec"><span>Provision</span><b>&lt; 60 SEC</b></div>
            </div>
          </div>
        </div>

        <div className="pio-footer-note">
          One Continuous Stack — <b>From Power</b> to <b>Provisioned Compute</b>
        </div>
      </div>

      <div className="pio-ctl">
        Flow Speed
        <input
          type="range"
          min={2}
          max={12}
          step={0.5}
          value={speed}
          onChange={(e) => setSpeed(parseFloat(e.target.value))}
        />
      </div>
    </section>
  );
};

export default PowerInIntelligenceOut;
