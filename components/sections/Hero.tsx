"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { site } from "@/content/site";
import { ease } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

/** Plain split hero: message on navy, real office photograph beside it. */
export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease },
  });

  return (
    <section className="on-dark bg-navy-900 text-white">
      <div className="container-x grid items-center gap-12 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20">
        <div className="lg:col-span-6">
          <motion.p {...rise(0)} className="mb-5 text-sm font-semibold text-sky-300">
            Stockbrokers in Lagos since 1995
          </motion.p>
          <motion.h1 {...rise(0.08)} className="t-hero" style={{ fontSize: "clamp(2.2rem, 1rem + 3.5vw, 4rem)" }}>
            {site.tagline}
          </motion.h1>
          <motion.p {...rise(0.16)} className="t-lead mt-6 max-w-xl text-white/80">
            {site.heroSub}
          </motion.p>
          <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap gap-3">
            <Button href="/open-account/" variant="white" magnetic className="px-7 py-3.5">
              Open an Account <ArrowRight className="size-4" />
            </Button>
            <Button href="/account-update/" variant="outline-light" className="px-7 py-3.5">
              Account Update Form
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.9, ease }}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-6"
        >
          <Image
            src="/images/office-executive.jpg"
            alt="Meeting room at the Sigma Securities head office"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
