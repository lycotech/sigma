"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Megaphone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";

const KEY = "sigma-ipo-band-dismissed";

/** Dangote Ref IPO promo. Dismissal is remembered in localStorage. */
export function AnnouncementBand() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Deferred so the localStorage read does not run synchronously inside the effect.
    const t = window.setTimeout(() => {
      try {
        setVisible(localStorage.getItem(KEY) !== "1");
      } catch {
        setVisible(true);
      }
    }, 0);
    return () => window.clearTimeout(t);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          aria-label="Announcement"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden on-dark bg-brand-500 text-white"
        >
          <div className="container-x relative flex flex-wrap items-center gap-x-6 gap-y-3 py-4 pr-14">
            <Megaphone className="size-5 shrink-0" aria-hidden />
            <p className="flex-1 basis-64 text-sm font-semibold">
              The Dangote Refinery IPO is open for subscription through Sigma Securities.
            </p>
            <div className="flex gap-3">
              <Button href={site.links.ipo} variant="white" className="min-h-11 px-5 py-2">
                Subscribe to IPO
              </Button>
              <Button href="/open-account/" variant="outline-light" className="min-h-11 px-5 py-2">
                Open an Account
              </Button>
            </div>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss announcement"
              className="absolute right-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full hover:bg-white/15"
            >
              <X className="size-5" />
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
