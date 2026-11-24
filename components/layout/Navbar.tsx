"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav, type NavItem } from "@/content/nav";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/SigmaMark";
import { MobileDrawer } from "./MobileDrawer";

function NavLink({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.slice(0, -1));

  const label = (
    <span className="relative py-2">
      {item.label}
      <span
        className={cn(
          "absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-sky-300 transition-transform duration-300",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </span>
  );

  if (!item.children) {
    return (
      <Link href={item.href} className="group whitespace-nowrap text-sm font-medium text-white">
        {label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
        className="group flex items-center gap-1 whitespace-nowrap text-sm font-medium text-white"
      >
        {label}
        <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3"
          >
            <li className="rounded-xl border border-line bg-white p-2 shadow-lift">
              <ul>
                {item.children.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-4 py-3 text-sm text-navy-900 transition-colors hover:bg-paper-2"
                    >
                      <span className="font-semibold">{c.label}</span>
                      {c.description && (
                        <span className="block text-xs text-ink-soft">{c.description}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Solid navy bar (the logo is silver and white, so it needs a dark ground). Hides on scroll down, returns on scroll up. */
export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 400 && !drawer);
  });

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-110%" : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="on-dark fixed inset-x-0 top-0 z-50 bg-navy-900 shadow-[0_1px_0_rgb(255_255_255/0.08)]"
      >
        <nav aria-label="Primary" className="container-x flex h-20 items-center justify-between gap-6">
          <Link href="/" aria-label="Sigma Securities, home">
            <Logo />
          </Link>

          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {mainNav.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex xl:gap-3">
            <Button href={site.links.clientLogin} variant="outline-light" className="px-5">
              Client Login
            </Button>
            <Button href="/open-account/" variant="white">
              Open an Account
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Button href="/open-account/" variant="white" className="px-4 py-2 text-xs">
              Open Account
            </Button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setDrawer(true)}
              className="grid size-11 place-items-center rounded-full text-white"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </nav>
      </motion.header>
      <MobileDrawer open={drawer} onClose={() => setDrawer(false)} />
    </>
  );
}
