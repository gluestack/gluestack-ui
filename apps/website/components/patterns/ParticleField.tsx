'use client';

import { useEffect, useRef } from 'react';

/**
 * "Patterns assembling": particles swarm into the wireframe of an app screen
 * inside a phone outline, hold, then re-form as the next pattern.
 *
 * Budget: one Canvas 2D, ~1.6k particles drawn as batched fillRects (no WebGL,
 * no per-pair lines), DPR capped at 2, paused when off-screen or the tab is
 * hidden, and a still frame for prefers-reduced-motion.
 */

type Shape = { x: number; y: number; w: number; h: number; r?: number; fill?: boolean; accent?: 0 | 1 | 2 | 3 };

// Layouts in phone-screen space (0..1). `fill` samples the inside; otherwise the outline.
const LAYOUTS: Shape[][] = [
  // Sign in
  [
    { x: 0.1, y: 0.16, w: 0.13, h: 0.06, r: 0.03, fill: true, accent: 1 },
    { x: 0.1, y: 0.26, w: 0.62, h: 0.035, fill: true },
    { x: 0.1, y: 0.31, w: 0.45, h: 0.015, fill: true },
    { x: 0.1, y: 0.39, w: 0.8, h: 0.065, r: 0.02 },
    { x: 0.1, y: 0.49, w: 0.8, h: 0.065, r: 0.02 },
    { x: 0.1, y: 0.6, w: 0.8, h: 0.065, r: 0.02, fill: true, accent: 2 },
    { x: 0.1, y: 0.72, w: 0.8, h: 0.06, r: 0.02 },
    { x: 0.1, y: 0.8, w: 0.8, h: 0.06, r: 0.02 },
  ],
  // Social feed
  [
    { x: 0.08, y: 0.1, w: 0.12, h: 0.055, r: 0.03, accent: 3 },
    { x: 0.26, y: 0.1, w: 0.12, h: 0.055, r: 0.03, accent: 3 },
    { x: 0.44, y: 0.1, w: 0.12, h: 0.055, r: 0.03, accent: 3 },
    { x: 0.62, y: 0.1, w: 0.12, h: 0.055, r: 0.03, accent: 3 },
    { x: 0.08, y: 0.21, w: 0.08, h: 0.035, r: 0.02, fill: true },
    { x: 0.2, y: 0.215, w: 0.4, h: 0.012, fill: true },
    { x: 0.08, y: 0.27, w: 0.84, h: 0.36, r: 0.025, accent: 1 },
    { x: 0.08, y: 0.66, w: 0.3, h: 0.012, fill: true },
    { x: 0.08, y: 0.69, w: 0.7, h: 0.012, fill: true },
    { x: 0.08, y: 0.76, w: 0.84, h: 0.14, r: 0.025 },
  ],
  // AI chat
  [
    { x: 0.08, y: 0.1, w: 0.5, h: 0.03, fill: true },
    { x: 0.4, y: 0.18, w: 0.52, h: 0.07, r: 0.03, fill: true, accent: 2 },
    { x: 0.08, y: 0.29, w: 0.7, h: 0.17, r: 0.03 },
    { x: 0.13, y: 0.33, w: 0.5, h: 0.012, fill: true },
    { x: 0.13, y: 0.36, w: 0.56, h: 0.012, fill: true },
    { x: 0.13, y: 0.39, w: 0.4, h: 0.012, fill: true },
    { x: 0.5, y: 0.5, w: 0.42, h: 0.06, r: 0.03, fill: true, accent: 2 },
    { x: 0.08, y: 0.62, w: 0.26, h: 0.045, r: 0.022, accent: 1 },
    { x: 0.38, y: 0.62, w: 0.3, h: 0.045, r: 0.022, accent: 1 },
    { x: 0.08, y: 0.82, w: 0.84, h: 0.07, r: 0.035 },
    { x: 0.8, y: 0.835, w: 0.08, h: 0.04, r: 0.02, fill: true, accent: 2 },
  ],
  // Wallet
  [
    { x: 0.08, y: 0.1, w: 0.4, h: 0.02, fill: true },
    { x: 0.08, y: 0.16, w: 0.84, h: 0.22, r: 0.035, fill: true, accent: 3 },
    { x: 0.08, y: 0.43, w: 0.17, h: 0.08, r: 0.04, accent: 1 },
    { x: 0.305, y: 0.43, w: 0.17, h: 0.08, r: 0.04, accent: 1 },
    { x: 0.53, y: 0.43, w: 0.17, h: 0.08, r: 0.04, accent: 1 },
    { x: 0.755, y: 0.43, w: 0.17, h: 0.08, r: 0.04, accent: 1 },
    { x: 0.08, y: 0.58, w: 0.84, h: 0.07, r: 0.02 },
    { x: 0.08, y: 0.68, w: 0.84, h: 0.07, r: 0.02 },
    { x: 0.08, y: 0.78, w: 0.84, h: 0.07, r: 0.02 },
  ],
];

type Pt = { x: number; y: number; a: number };

function sampleShape(s: Shape, W: number, H: number, step: number, out: Pt[]) {
  const x = s.x * W;
  const y = s.y * H;
  const w = s.w * W;
  const h = s.h * H;
  const a = s.accent ?? 0;
  if (h < step * 1.2) {
    // A text line: a single row of points.
    for (let i = 0; i <= w; i += step) out.push({ x: x + i, y: y + h / 2, a });
    return;
  }
  if (s.fill) {
    const st = step * 1.15;
    for (let j = st / 2; j < h; j += st) for (let i = st / 2; i < w; i += st) out.push({ x: x + i, y: y + j, a });
    return;
  }
  const r = Math.min((s.r ?? 0) * W, w / 2, h / 2);
  const straightW = w - 2 * r;
  const straightH = h - 2 * r;
  const per = 2 * straightW + 2 * straightH + 2 * Math.PI * r;
  const n = Math.max(8, Math.round(per / step));
  for (let k = 0; k < n; k++) {
    let d = (k / n) * per;
    let px: number, py: number;
    if (d < straightW) { px = x + r + d; py = y; }
    else if ((d -= straightW) < (Math.PI / 2) * r) { const t = d / r - Math.PI / 2; px = x + w - r + Math.cos(t) * r; py = y + r + Math.sin(t) * r; }
    else if ((d -= (Math.PI / 2) * r) < straightH) { px = x + w; py = y + r + d; }
    else if ((d -= straightH) < (Math.PI / 2) * r) { const t = d / r; px = x + w - r + Math.cos(t) * r; py = y + h - r + Math.sin(t) * r; }
    else if ((d -= (Math.PI / 2) * r) < straightW) { px = x + w - r - d; py = y + h; }
    else if ((d -= straightW) < (Math.PI / 2) * r) { const t = d / r + Math.PI / 2; px = x + r + Math.cos(t) * r; py = y + h - r + Math.sin(t) * r; }
    else if ((d -= (Math.PI / 2) * r) < straightH) { px = x; py = y + h - r - d; }
    else { d -= straightH; const t = d / r + Math.PI; px = x + r + Math.cos(t) * r; py = y + r + Math.sin(t) * r; }
    out.push({ x: px, y: py, a });
  }
}

function buildTargets(layout: Shape[], cx: number, cy: number, PH: number, step: number): Pt[] {
  const PW = PH * 0.49;
  const ox = cx - PW / 2;
  const oy = cy - PH / 2;
  const pts: Pt[] = [];
  // Phone body and notch.
  sampleShape({ x: 0, y: 0, w: 1, h: 1, r: 0.16 }, PW, PH, step * 0.9, pts);
  sampleShape({ x: 0.36, y: 0.025, w: 0.28, h: 0.028, r: 0.06, fill: true }, PW, PH, step, pts);
  for (const s of layout) sampleShape(s, PW, PH, step, pts);
  for (const p of pts) { p.x += ox; p.y += oy; }
  return pts;
}

type Particle = { x: number; y: number; vx: number; vy: number; tx: number; ty: number; on: boolean; a: number; s: number; seed: number };

function readRGB(name: string, fallback: string) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v ? `rgb(${v.split(/\s+/).join(',')})` : fallback;
}

export default function ParticleField({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0, H = 0, dpr = 1;
    let particles: Particle[] = [];
    let layoutIndex = 0;
    let lastSwitch = 0;
    let raf = 0;
    let running = false;
    let visible = true;
    const mouse = { x: -9999, y: -9999 };
    let palette: string[] = [];

    const readPalette = () => {
      const dark = document.documentElement.classList.contains('dark');
      const fg = readRGB('--foreground', dark ? 'rgb(250,250,250)' : 'rgb(10,10,10)');
      palette = dark
        ? [fg, 'rgb(125,211,252)', 'rgb(196,181,253)', 'rgb(110,231,183)']
        : [fg, 'rgb(2,132,199)', 'rgb(124,58,237)', 'rgb(5,150,105)'];
    };

    const geometry = () => {
      const PH = Math.min(H * 0.86, W * 1.45, 620);
      return { cx: W / 2, cy: H / 2 + 6, PH, step: Math.max(5, PH / 92) };
    };

    const assign = (index: number, scatter: boolean) => {
      const { cx, cy, PH, step } = geometry();
      const targets = buildTargets(LAYOUTS[index], cx, cy, PH, step);
      // Shuffle so particles cross the screen when the pattern changes.
      for (let i = targets.length - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        [targets[i], targets[j]] = [targets[j], targets[i]];
      }
      const ambient = Math.round(targets.length * 0.35);
      const total = targets.length + ambient;
      while (particles.length < total) {
        particles.push({ x: Math.random() * W, y: Math.random() * H, vx: 0, vy: 0, tx: 0, ty: 0, on: false, a: 0, s: 1, seed: Math.random() * 1000 });
      }
      particles.length = total;
      particles.forEach((p, i) => {
        const t = targets[i];
        if (t) {
          p.on = true; p.tx = t.x; p.ty = t.y; p.a = t.a; p.s = t.a ? 1.9 : 1.5;
          if (scatter) { p.x = Math.random() * W; p.y = Math.random() * H; }
        } else {
          p.on = false; p.a = Math.random() < 0.2 ? 1 + ((Math.random() * 3) | 0) : 0; p.s = 1.1;
          // Released particles get a small kick outward.
          p.vx += (Math.random() - 0.5) * 3; p.vy += (Math.random() - 0.5) * 3;
        }
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.max(1, rect.width);
      H = Math.max(1, rect.height);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      assign(layoutIndex, particles.length === 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let c = 0; c < palette.length; c++) {
        ctx.fillStyle = palette[c];
        for (const p of particles) {
          if (p.a !== c) continue;
          ctx.globalAlpha = p.on ? (c ? 0.95 : 0.8) : 0.22;
          ctx.fillRect(p.x - p.s / 2, p.y - p.s / 2, p.s, p.s);
        }
      }
      ctx.globalAlpha = 1;
    };

    const step = (t: number) => {
      raf = 0;
      if (!running) return;
      if (t - lastSwitch > 5200) {
        lastSwitch = t;
        layoutIndex = (layoutIndex + 1) % LAYOUTS.length;
        assign(layoutIndex, false);
      }
      const time = t * 0.00025;
      for (const p of particles) {
        if (p.on) {
          p.vx += (p.tx - p.x) * 0.018;
          p.vy += (p.ty - p.y) * 0.018;
          p.vx += Math.sin(time * 6 + p.seed) * 0.03;
          p.vy += Math.cos(time * 6 + p.seed) * 0.03;
          p.vx *= 0.84; p.vy *= 0.84;
        } else {
          // Gentle flow field for the ambient dust.
          const ang = Math.sin(p.x * 0.004 + time * 2) * Math.cos(p.y * 0.004 - time) * Math.PI * 2;
          p.vx = p.vx * 0.96 + Math.cos(ang) * 0.06;
          p.vy = p.vy * 0.96 + Math.sin(ang) * 0.06;
        }
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 6400) {
          const f = (1 - d2 / 6400) * 2.2;
          const d = Math.sqrt(d2) || 1;
          p.vx += (dx / d) * f; p.vy += (dy / d) * f;
        }
        p.x += p.vx; p.y += p.vy;
        if (!p.on) {
          if (p.x < -10) p.x = W + 10; else if (p.x > W + 10) p.x = -10;
          if (p.y < -10) p.y = H + 10; else if (p.y > H + 10) p.y = -10;
        }
      }
      draw();
      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (running || reduced || !visible || document.hidden) return;
      running = true;
      lastSwitch = performance.now();
      raf = requestAnimationFrame(step);
    };
    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    readPalette();
    resize();
    if (reduced) {
      for (const p of particles) if (p.on) { p.x = p.tx; p.y = p.ty; }
      draw();
    }

    const ro = new ResizeObserver(() => { resize(); if (!running) draw(); });
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? start() : stop(); });
    io.observe(canvas);
    const mo = new MutationObserver(() => { readPalette(); if (!running) draw(); });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVis);
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave);
    start();

    return () => {
      stop();
      ro.disconnect(); io.disconnect(); mo.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={`block h-full w-full ${className}`} />;
}
