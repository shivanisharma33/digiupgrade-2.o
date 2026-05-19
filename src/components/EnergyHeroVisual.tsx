import { useEffect, useRef } from 'react';

const EnergyHeroVisual = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0, h = 0, dpr = 1, raf = 0, dead = false;

    const resize = () => {
      const r = container.getBoundingClientRect();
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    addEventListener('resize', resize);

    /* ── isometric helpers ── */
    const iso = (x: number, y: number, z: number) => ({
      x: w / 2 + (x - z) * 0.866,
      y: h / 2 + 40 + (x + z) * 0.5 - y
    });
    const isoLine = (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) => {
      const a = iso(x1, y1, z1), b = iso(x2, y2, z2);
      ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
    };
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    /* ── ambient cross-stars ── */
    const stars = Array.from({ length: 90 }, () => ({
      x: Math.random(), y: Math.random(),
      s: Math.random() * 1.4 + 0.4,
      sp: Math.random() * 1.2 + 0.4,
      ph: Math.random() * Math.PI * 2
    }));

    /* ── energy flow particles ── */
    const flows = Array.from({ length: 24 }, () => ({
      t: Math.random(), sp: Math.random() * 0.3 + 0.15, line: Math.floor(Math.random() * 5)
    }));

    /* ── PLATFORM ── */
    const drawPlatform = () => {
      const sz = 200;
      const corners = [iso(-sz, 0, -sz), iso(sz, 0, -sz), iso(sz, 0, sz), iso(-sz, 0, sz)];
      // Thick edge with depth
      const depth = 12;
      const bCorners = [iso(-sz, -depth, -sz), iso(sz, -depth, -sz), iso(sz, -depth, sz), iso(-sz, -depth, sz)];

      // Side faces
      ctx.fillStyle = 'rgba(255,255,255,0.015)';
      // Front-left face
      ctx.beginPath();
      ctx.moveTo(corners[3].x, corners[3].y); ctx.lineTo(corners[2].x, corners[2].y);
      ctx.lineTo(bCorners[2].x, bCorners[2].y); ctx.lineTo(bCorners[3].x, bCorners[3].y);
      ctx.closePath(); ctx.fill();
      // Front-right face
      ctx.beginPath();
      ctx.moveTo(corners[2].x, corners[2].y); ctx.lineTo(corners[1].x, corners[1].y);
      ctx.lineTo(bCorners[1].x, bCorners[1].y); ctx.lineTo(bCorners[2].x, bCorners[2].y);
      ctx.closePath(); ctx.fill();

      // Top face
      ctx.beginPath();
      ctx.moveTo(corners[0].x, corners[0].y);
      corners.forEach(p => ctx.lineTo(p.x, p.y));
      ctx.closePath();
      ctx.fillStyle = 'rgba(255,255,255,0.025)';
      ctx.fill();

      // Grid on top
      ctx.strokeStyle = 'rgba(255,255,255,0.035)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let i = -5; i <= 5; i++) {
        const v = i * (sz / 5);
        isoLine(-sz, 0, v, sz, 0, v);
        isoLine(v, 0, -sz, v, 0, sz);
      }
      ctx.stroke();

      // Border
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(corners[0].x, corners[0].y);
      corners.forEach(p => ctx.lineTo(p.x, p.y));
      ctx.closePath(); ctx.stroke();
      // Side edges
      ctx.beginPath();
      ctx.moveTo(corners[3].x, corners[3].y); ctx.lineTo(bCorners[3].x, bCorners[3].y);
      ctx.moveTo(corners[2].x, corners[2].y); ctx.lineTo(bCorners[2].x, bCorners[2].y);
      ctx.moveTo(corners[1].x, corners[1].y); ctx.lineTo(bCorners[1].x, bCorners[1].y);
      ctx.moveTo(bCorners[3].x, bCorners[3].y); ctx.lineTo(bCorners[2].x, bCorners[2].y);
      ctx.lineTo(bCorners[1].x, bCorners[1].y);
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.stroke();
    };

    /* ── SOLAR PANEL ── */
    const drawSolarPanel = (ox: number, oz: number, sc: number, t: number) => {
      const pw = 48 * sc, pd = 30 * sc, legH = 22 * sc, tiltH = 38 * sc;

      // Support structure
      ctx.strokeStyle = 'rgba(255,255,255,0.18)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      isoLine(ox - pw * 0.35, 0, oz, ox - pw * 0.35, legH, oz);
      isoLine(ox + pw * 0.35, 0, oz, ox + pw * 0.35, legH, oz);
      // Cross brace
      isoLine(ox - pw * 0.35, legH * 0.5, oz, ox + pw * 0.35, legH * 0.5, oz);
      ctx.stroke();

      // Panel face — tilted
      const c = [
        iso(ox - pw, tiltH, oz - pd),
        iso(ox + pw, tiltH, oz - pd),
        iso(ox + pw, tiltH - 8 * sc, oz + pd),
        iso(ox - pw, tiltH - 8 * sc, oz + pd),
      ];

      // Panel fill
      ctx.beginPath();
      ctx.moveTo(c[0].x, c[0].y);
      c.forEach(p => ctx.lineTo(p.x, p.y));
      ctx.closePath();
      ctx.fillStyle = 'rgba(255,255,255,0.045)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.22)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Cell grid (3 rows × 4 cols)
      const rows = 3, cols = 4;
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.lineWidth = 0.4;
      ctx.beginPath();
      for (let r = 1; r < rows; r++) {
        const f = r / rows;
        ctx.moveTo(lerp(c[0].x, c[3].x, f), lerp(c[0].y, c[3].y, f));
        ctx.lineTo(lerp(c[1].x, c[2].x, f), lerp(c[1].y, c[2].y, f));
      }
      for (let cl = 1; cl < cols; cl++) {
        const f = cl / cols;
        ctx.moveTo(lerp(c[0].x, c[1].x, f), lerp(c[0].y, c[1].y, f));
        ctx.lineTo(lerp(c[3].x, c[2].x, f), lerp(c[3].y, c[2].y, f));
      }
      ctx.stroke();

      // Animated active cell shimmer
      const cellIdx = Math.floor((t * 0.6 + ox * 0.02) % (rows * cols));
      const cr = Math.floor(cellIdx / cols), cc = cellIdx % cols;
      const cellCorner = (r: number, cl: number) => ({
        x: lerp(lerp(c[0].x, c[1].x, cl / cols), lerp(c[3].x, c[2].x, cl / cols), r / rows),
        y: lerp(lerp(c[0].y, c[1].y, cl / cols), lerp(c[3].y, c[2].y, cl / cols), r / rows),
      });
      const tl = cellCorner(cr, cc), tr = cellCorner(cr, cc + 1);
      const bl = cellCorner(cr + 1, cc), br = cellCorner(cr + 1, cc + 1);
      ctx.beginPath();
      ctx.moveTo(tl.x, tl.y); ctx.lineTo(tr.x, tr.y);
      ctx.lineTo(br.x, br.y); ctx.lineTo(bl.x, bl.y); ctx.closePath();
      const shimmer = 0.12 + Math.sin(t * 4) * 0.08;
      ctx.fillStyle = `rgba(255,255,255,${shimmer})`;
      ctx.fill();
    };

    /* ── WIND TURBINE ── */
    const drawTurbine = (ox: number, oz: number, sc: number, t: number, rpm: number) => {
      const poleH = 95 * sc;
      const hub = iso(ox, poleH, oz);
      const base = iso(ox, 0, oz);
      const mid = iso(ox, poleH * 0.5, oz);

      // Foundation circle
      ctx.beginPath();
      ctx.ellipse(base.x, base.y, 6 * sc, 3 * sc, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Pole — tapered (thicker at base)
      ctx.beginPath();
      ctx.moveTo(base.x - 2.5 * sc, base.y);
      ctx.lineTo(hub.x - 1 * sc, hub.y);
      ctx.lineTo(hub.x + 1 * sc, hub.y);
      ctx.lineTo(base.x + 2.5 * sc, base.y);
      ctx.closePath();
      ctx.fillStyle = 'rgba(255,255,255,0.04)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 0.6;
      ctx.stroke();

      // Nacelle (housing box at top)
      ctx.fillStyle = 'rgba(255,255,255,0.08)';
      ctx.fillRect(hub.x - 5 * sc, hub.y - 3 * sc, 10 * sc, 5 * sc);
      ctx.strokeStyle = 'rgba(255,255,255,0.18)';
      ctx.lineWidth = 0.6;
      ctx.strokeRect(hub.x - 5 * sc, hub.y - 3 * sc, 10 * sc, 5 * sc);

      // Blades — 3 with proper tapered shape
      const bladeLen = 42 * sc;
      const angle = t * rpm;
      ctx.lineWidth = 1.2;
      for (let b = 0; b < 3; b++) {
        const a = angle + (b * Math.PI * 2) / 3;
        const tipX = hub.x + Math.cos(a) * bladeLen;
        const tipY = hub.y + Math.sin(a) * bladeLen * 0.45;
        // Blade body (tapered)
        const perpX = -Math.sin(a) * 2.5 * sc;
        const perpY = -Math.cos(a) * 2.5 * sc * 0.45;
        ctx.beginPath();
        ctx.moveTo(hub.x + perpX, hub.y + perpY);
        ctx.lineTo(tipX, tipY);
        ctx.lineTo(hub.x - perpX, hub.y - perpY);
        ctx.closePath();
        ctx.fillStyle = `rgba(255,255,255,${0.06 + Math.sin(a) * 0.02})`;
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.35)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Hub center dot
      ctx.beginPath();
      ctx.arc(hub.x, hub.y, 2.5 * sc, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.fill();
    };

    /* ── TRANSMISSION TOWER ── */
    const drawTower = (ox: number, oz: number, sc: number) => {
      const th = 120 * sc;
      const baseW = 18 * sc;
      const topW = 5 * sc;

      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 0.7;
      ctx.beginPath();

      // Main legs
      isoLine(ox - baseW, 0, oz, ox - topW, th, oz);
      isoLine(ox + baseW, 0, oz, ox + topW, th, oz);

      // Horizontal braces + X cross braces
      const levels = 6;
      for (let i = 1; i <= levels; i++) {
        const f = i / (levels + 1);
        const lx = lerp(ox - baseW, ox - topW, f);
        const rx = lerp(ox + baseW, ox + topW, f);
        const yy = th * f;
        isoLine(lx, yy, oz, rx, yy, oz);
        if (i < levels) {
          const nf = (i + 1) / (levels + 1);
          const nlx = lerp(ox - baseW, ox - topW, nf);
          const nrx = lerp(ox + baseW, ox + topW, nf);
          const nyy = th * nf;
          isoLine(lx, yy, oz, nrx, nyy, oz);
          isoLine(rx, yy, oz, nlx, nyy, oz);
        }
      }

      // Top cross-arms
      const armW = 28 * sc;
      isoLine(ox - topW, th, oz, ox - armW, th * 0.92, oz);
      isoLine(ox + topW, th, oz, ox + armW, th * 0.92, oz);
      isoLine(ox - topW, th, oz, ox - armW * 0.85, th * 1.04, oz);
      isoLine(ox + topW, th, oz, ox + armW * 0.85, th * 1.04, oz);

      // Peak
      isoLine(ox - topW, th, oz, ox, th * 1.12, oz);
      isoLine(ox + topW, th, oz, ox, th * 1.12, oz);

      ctx.stroke();

      // Insulator dots on arms
      const insulators = [
        iso(ox - armW, th * 0.92, oz),
        iso(ox + armW, th * 0.92, oz),
        iso(ox - armW * 0.85, th * 1.04, oz),
        iso(ox + armW * 0.85, th * 1.04, oz),
      ];
      insulators.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ctx.fill();
      });
    };

    /* ── BATTERY STORAGE ── */
    const drawBattery = (ox: number, oz: number, sc: number, t: number) => {
      const bh = 70 * sc, br = 26 * sc;
      const base = iso(ox, 0, oz), top = iso(ox, bh, oz);
      const eRx = br, eRy = br * 0.32;

      // Body fill
      ctx.fillStyle = 'rgba(255,255,255,0.02)';
      ctx.beginPath();
      ctx.moveTo(base.x - eRx, base.y);
      ctx.lineTo(top.x - eRx, top.y);
      ctx.ellipse(top.x, top.y, eRx, eRy, 0, Math.PI, 0, true);
      ctx.lineTo(base.x + eRx, base.y);
      ctx.ellipse(base.x, base.y, eRx, eRy, 0, 0, Math.PI, true);
      ctx.closePath();
      ctx.fill();

      // Side lines
      ctx.strokeStyle = 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(base.x - eRx, base.y); ctx.lineTo(top.x - eRx, top.y);
      ctx.moveTo(base.x + eRx, base.y); ctx.lineTo(top.x + eRx, top.y);
      ctx.stroke();

      // Bottom ellipse
      ctx.beginPath();
      ctx.ellipse(base.x, base.y, eRx, eRy, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.stroke();

      // Animated fill level
      const fillFrac = 0.55 + Math.sin(t * 0.4) * 0.3;
      const fillY = iso(ox, bh * fillFrac, oz);

      // Fill body
      ctx.fillStyle = 'rgba(255,255,255,0.03)';
      ctx.beginPath();
      ctx.moveTo(base.x - eRx, base.y);
      ctx.lineTo(fillY.x - eRx, fillY.y);
      ctx.ellipse(fillY.x, fillY.y, eRx * 0.95, eRy * 0.9, 0, Math.PI, 0, true);
      ctx.lineTo(base.x + eRx, base.y);
      ctx.ellipse(base.x, base.y, eRx, eRy, 0, 0, Math.PI, true);
      ctx.closePath();
      ctx.fill();

      // Fill level ellipse
      ctx.beginPath();
      ctx.ellipse(fillY.x, fillY.y, eRx * 0.95, eRy * 0.9, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,255,255,${0.15 + Math.sin(t * 1.5) * 0.08})`;
      ctx.lineWidth = 0.7;
      ctx.stroke();
      ctx.fillStyle = `rgba(255,255,255,${0.05 + Math.sin(t * 1.5) * 0.03})`;
      ctx.fill();

      // Top ellipse
      ctx.beginPath();
      ctx.ellipse(top.x, top.y, eRx, eRy, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Ring details on body
      for (let i = 1; i <= 3; i++) {
        const ry = iso(ox, bh * (i / 4), oz);
        ctx.beginPath();
        ctx.ellipse(ry.x, ry.y, eRx * 0.98, eRy * 0.95, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255,255,255,0.04)';
        ctx.lineWidth = 0.4;
        ctx.stroke();
      }
    };

    /* ── POWER LINES + ENERGY FLOW ── */
    const lineAnchors: { x: number; y: number }[][] = [];

    const drawPowerLines = (t: number) => {
      lineAnchors.length = 0;

      const segs: [number, number, number, number, number, number][] = [
        [35, 105, -70, 95, 98, -35],    // tower ↔ tower
        [95, 98, -35, 150, 55, 45],     // tower → battery
        [-90, 35, -45, 35, 105, -70],   // solar → tower
        [-50, 35, 55, 95, 98, -35],     // solar → tower
        [-150, 70, -90, -90, 35, -45],  // turbine → solar area
      ];

      // Dashed lines with catenary sag
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.lineWidth = 0.7;
      ctx.setLineDash([3, 5]);
      segs.forEach(seg => {
        const p1 = iso(seg[0], seg[1], seg[2]);
        const p2 = iso(seg[3], seg[4], seg[5]);
        const mx = (p1.x + p2.x) / 2;
        const my = (p1.y + p2.y) / 2 + 10;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.quadraticCurveTo(mx, my, p2.x, p2.y);
        ctx.stroke();
        lineAnchors.push([p1, { x: mx, y: my }, p2]);
      });
      ctx.setLineDash([]);

      // Flowing energy particles
      flows.forEach(f => {
        if (lineAnchors.length === 0) return;
        const idx = f.line % lineAnchors.length;
        const pts = lineAnchors[idx];
        f.t = (f.t + f.sp * 0.006) % 1;
        const tt = f.t;
        const p0 = pts[0], p1 = pts[1], p2 = pts[2];
        const px = (1 - tt) * (1 - tt) * p0.x + 2 * (1 - tt) * tt * p1.x + tt * tt * p2.x;
        const py = (1 - tt) * (1 - tt) * p0.y + 2 * (1 - tt) * tt * p1.y + tt * tt * p2.y;

        // Soft glow
        const g = ctx.createRadialGradient(px, py, 0, px, py, 8);
        g.addColorStop(0, 'rgba(255,255,255,0.5)');
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(px, py, 8, 0, Math.PI * 2); ctx.fill();

        // Core dot
        ctx.beginPath(); ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.75 + Math.sin(t * 6 + f.t * 12) * 0.25})`;
        ctx.fill();
      });
    };

    /* ── MAIN DRAW LOOP ── */
    const draw = () => {
      if (dead) return;
      const t = performance.now() * 0.001;
      ctx.clearRect(0, 0, w, h);

      // Ambient cross-stars
      stars.forEach(s => {
        const tw = 0.25 + 0.75 * ((Math.sin(t * s.sp + s.ph) + 1) * 0.5);
        const sx = s.x * w, sy = s.y * h;
        ctx.strokeStyle = `rgba(255,255,255,${tw * 0.25})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(sx - s.s, sy); ctx.lineTo(sx + s.s, sy);
        ctx.moveTo(sx, sy - s.s); ctx.lineTo(sx, sy + s.s);
        ctx.stroke();
      });

      drawPlatform();

      // Solar panels
      drawSolarPanel(-110, -55, 0.8, t);
      drawSolarPanel(-35, -75, 0.85, t);
      drawSolarPanel(-100, 30, 0.75, t);
      drawSolarPanel(-25, 15, 0.8, t);

      // Wind turbines
      drawTurbine(-150, -95, 0.7, t, 1.1);
      drawTurbine(-160, 65, 0.65, t, 0.85);
      drawTurbine(15, 75, 0.55, t, 1.4);

      // Transmission towers
      drawTower(35, -70, 0.85);
      drawTower(95, -35, 0.8);

      // Battery storage
      drawBattery(150, 45, 0.8, t);

      // Power lines + energy packets
      drawPowerLines(t);

      // Smooth radial vignette
      const vg = ctx.createRadialGradient(w / 2, h / 2, h * 0.22, w / 2, h / 2, h * 0.72);
      vg.addColorStop(0, 'rgba(6,7,10,0)');
      vg.addColorStop(0.7, 'rgba(6,7,10,0.45)');
      vg.addColorStop(1, 'rgba(6,7,10,0.95)');
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, w, h);

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => { dead = true; cancelAnimationFrame(raf); removeEventListener('resize', resize); };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-85">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default EnergyHeroVisual;
