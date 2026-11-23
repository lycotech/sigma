"use client";

import { motion, useReducedMotion } from "framer-motion";
import { offices } from "@/content/offices";

/** Very stylised Nigeria silhouette (schematic, not cartographic) with animated office pins. */
export function NigeriaMap() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto aspect-[1/0.9] w-full max-w-lg">
      <svg viewBox="0 0 100 90" className="size-full" role="img" aria-label="Schematic map showing Sigma offices in Lagos, Abuja and Jalingo">
        <defs>
          <linearGradient id="ng-fill" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#1b3a7a" />
            <stop offset="1" stopColor="#0a1b3d" />
          </linearGradient>
        </defs>
        <path
          d="M12 62 L10 46 L18 34 L16 22 L30 14 L44 18 L58 10 L72 14 L84 26 L90 42 L82 54 L84 66 L72 76 L62 72 L54 84 L40 82 L30 86 L22 78 L14 74 Z"
          fill="url(#ng-fill)"
          stroke="#c9a24b"
          strokeOpacity="0.5"
          strokeWidth="0.5"
        />
        <g stroke="#c9a24b" strokeOpacity="0.25" strokeWidth="0.3" strokeDasharray="1 1.5">
          <line x1={offices[0].map.x} y1={offices[0].map.y} x2={offices[1].map.x} y2={offices[1].map.y} />
          <line x1={offices[1].map.x} y1={offices[1].map.y} x2={offices[2].map.x} y2={offices[2].map.y} />
        </g>
        {offices.map((o, i) => (
          <g key={o.city}>
            {!reduce && (
              <motion.circle
                cx={o.map.x}
                cy={o.map.y}
                r="2"
                fill="#c9a24b"
                initial={{ opacity: 0.6, scale: 1 }}
                animate={{ opacity: 0, scale: 4 }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.5 }}
                style={{ transformOrigin: `${o.map.x}px ${o.map.y}px` }}
              />
            )}
            <circle cx={o.map.x} cy={o.map.y} r="2" fill="#e3c982" stroke="#0a1b3d" strokeWidth="0.6" />
            <text x={o.map.x} y={o.map.y - 4.5} textAnchor="middle" fontSize="3.6" fill="white" fontWeight="700">
              {o.city}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
