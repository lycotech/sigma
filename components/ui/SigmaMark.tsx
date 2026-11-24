import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * The supplied logo is transparent with a silver mark, so it always sits on a navy tile.
 * That keeps it legible on both light and dark pages.
 */
export function LogoImage({ className }: { className?: string }) {
  return (
    <span className={cn("grid place-items-center rounded-2xl bg-navy-900 p-1.5", className)}>
      <Image
        src="/logo-mark.png"
        alt="Sigmasec logo"
        width={280}
        height={308}
        priority
        className="h-10 w-auto"
      />
    </span>
  );
}

/** Logo tile plus wordmark. `dark` means the surrounding page is light, so the text is navy. */
export function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoImage />
      <span className="hidden whitespace-nowrap leading-none xl:block">
        <span className={cn("block font-display text-xl font-bold tracking-tight", dark ? "text-navy-900" : "text-white")}>
          Sigma Securities
        </span>
        <span className={cn("mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.2em]", dark ? "text-brand-600" : "text-sky-300")}>
          Limited · Since 1995
        </span>
      </span>
    </span>
  );
}
