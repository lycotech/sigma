import Image from "next/image";
import { cn } from "@/lib/utils";

/** The supplied logo mark (transparent, cropped, upscaled). Designed for dark backgrounds. */
export function LogoImage({ className }: { className?: string }) {
  return (
    <Image
      src="/logo-mark.png"
      alt="Sigmasec logo"
      width={280}
      height={308}
      priority
      className={cn("h-12 w-auto drop-shadow-[0_2px_12px_rgb(201_162_75/0.25)]", className)}
    />
  );
}

/** Logo plus wordmark. Used on dark surfaces only (navbar, drawer, footer). */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3.5", className)}>
      <LogoImage />
      <span className="hidden whitespace-nowrap leading-none xl:block">
        <span className="block font-display text-xl tracking-tight text-white">Sigma Securities</span>
        <span className="mt-1.5 block text-[0.6rem] font-bold uppercase tracking-[0.32em] text-gold-400">
          Limited · Since 1995
        </span>
      </span>
    </span>
  );
}
