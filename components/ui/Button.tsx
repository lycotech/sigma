"use client";

import Link from "next/link";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn, isExternal } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  magnetic?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-[0_8px_30px_-8px_rgb(201_162_75/0.6)]",
  secondary: "bg-navy-900 text-white hover:bg-navy-800",
  ghost: "text-navy-900 hover:bg-navy-900/5",
  "outline-light": "border border-white/30 text-white hover:bg-white/10 hover:border-white/60",
};

/** Button/link with optional magnetic hover (pointer devices only). */
export function Button({
  children,
  href,
  variant = "primary",
  magnetic = false,
  className,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-[background-color,border-color,transform,box-shadow] duration-300 will-change-transform disabled:cursor-not-allowed disabled:opacity-60",
    styles[variant],
    className,
  );

  const move = (e: MouseEvent) => {
    const el = ref.current;
    if (!magnetic || !el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.25;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.35;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  if (href) {
    const common = { className: classes, onMouseMove: move, onMouseLeave: reset };
    return isExternal(href) ? (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...common}
      >
        {children}
      </a>
    ) : (
      <Link ref={ref as React.Ref<HTMLAnchorElement>} href={href} {...common}>
        {children}
      </Link>
    );
  }
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      onMouseMove={move}
      onMouseLeave={reset}
    >
      {children}
    </button>
  );
}
