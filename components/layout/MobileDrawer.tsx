"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { mainNav } from "@/content/nav";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/SigmaMark";

/** Full-height drawer with staggered links. Locks body scroll and closes on Escape. */
export function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[80] overflow-y-auto bg-navy-950 text-white"
          initial={{ clipPath: "circle(0% at 90% 5%)" }}
          animate={{ clipPath: "circle(150% at 90% 5%)" }}
          exit={{ clipPath: "circle(0% at 90% 5%)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="container-x flex h-20 items-center justify-between">
            <Logo />
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="grid size-11 place-items-center rounded-full border border-white/20"
            >
              <X className="size-5" />
            </button>
          </div>
          <motion.ul
            className="container-x space-y-1 pb-12 pt-6"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } } }}
          >
            {mainNav.map((item) => (
              <motion.li
                key={item.label}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 font-display text-3xl"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-3 space-y-1 border-l border-gold-500/40 pl-4">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          onClick={onClose}
                          className="block min-h-11 py-2 text-sm text-white/70"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.li>
            ))}
            <motion.li
              className="flex flex-col gap-3 pt-6"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            >
              <Button href="/open-account/" className="w-full">
                Open an Account
              </Button>
              <Button href={site.links.clientLogin} variant="outline-light" className="w-full">
                Client Login
              </Button>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
