"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Deterministic illustrative series (not real market data). */
const series = [62, 58, 64, 60, 68, 66, 74, 70, 79, 76, 84, 80, 90, 87, 96, 93, 104, 99, 110, 118];
const W = 1200;
const H = 520;
const max = 130;

const pts = series.map((v, i) => ({
  x: (i / (series.length - 1)) * W,
  y: H - (v / max) * H * 0.82 - 30,
}));

const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
const area = `${line} L${W},${H} L0,${H} Z`;

/** Candles are derived from the same series, for a subtle backdrop motif. */
const candles = pts.filter((_, i) => i % 2 === 0).map((p, i) => ({
  x: p.x,
  top: p.y - 24 - (i % 3) * 8,
  height: 34 + (i % 4) * 10,
  up: i % 3 !== 1,
}));

/** SVG chart that draws itself. Decorative only. */
export function HeroChart({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      aria-hidden
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="hc-area" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#c9a24b" stopOpacity="0.28" />
          <stop offset="1" stopColor="#c9a24b" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hc-line" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#e3c982" stopOpacity="0.2" />
          <stop offset="0.5" stopColor="#e3c982" />
          <stop offset="1" stopColor="#c9a24b" />
        </linearGradient>
      </defs>

      {[0.2, 0.4, 0.6, 0.8].map((g) => (
        <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} stroke="white" strokeOpacity="0.06" />
      ))}

      {candles.map((c) => (
        <motion.g
          key={c.x}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 + c.x / 900, duration: 0.8 }}
        >
          <line x1={c.x} x2={c.x} y1={c.top - 10} y2={c.top + c.height + 10} stroke={c.up ? "#1f9d63" : "#d64545"} strokeOpacity="0.35" />
          <rect x={c.x - 6} y={c.top} width="12" height={c.height} rx="2" fill={c.up ? "#1f9d63" : "#d64545"} fillOpacity="0.28" />
        </motion.g>
      ))}

      <motion.path
        d={area}
        fill="url(#hc-area)"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1.2 }}
      />
      <motion.path
        d={line}
        stroke="url(#hc-line)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />
      <motion.circle
        cx={pts[pts.length - 1].x - 4}
        cy={pts[pts.length - 1].y}
        r="7"
        fill="#e3c982"
        initial={reduce ? false : { scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.6, 1], opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.6 }}
      />
    </svg>
  );
}
