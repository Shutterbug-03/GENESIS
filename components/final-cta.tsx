"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"
import { CalendarCheck, Phone, ArrowUpRight } from "@phosphor-icons/react"

interface FinalCtaProps {
  onOpenBooking: () => void
}

export function FinalCta({ onOpenBooking }: FinalCtaProps) {
  const reduce = useReducedMotion()

  return (
    <section className="py-16 lg:py-24 bg-[#331137] text-white relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 h-[480px] w-[480px] rounded-full bg-brand-pink-dark/18 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 h-[360px] w-[360px] rounded-full bg-brand-purple-medium/28 blur-3xl pointer-events-none" />

      {/* Decorative background heart */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[18%] pointer-events-none select-none"
        aria-hidden="true"
      >
        <motion.svg
          viewBox="0 0 600 540"
          className="w-[360px] sm:w-[500px] lg:w-[640px] xl:w-[750px]"
          style={{ opacity: 0.07 }}
          initial={reduce ? false : { opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 0.07, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M300 510 C300 510 30 360 30 180 C30 90 105 30 180 30 C225 30 270 55 300 90 C330 55 375 30 420 30 C495 30 570 90 570 180 C570 360 300 510 300 510Z"
            fill="url(#ctaHeartGrad)"
          />
          <path
            d="M300 510 C300 510 30 360 30 180 C30 90 105 30 180 30 C225 30 270 55 300 90 C330 55 375 30 420 30 C495 30 570 90 570 180 C570 360 300 510 300 510Z"
            stroke="#FAD6E7"
            strokeWidth="3"
            strokeOpacity="0.4"
            fill="none"
          />
          <defs>
            <radialGradient id="ctaHeartGrad" cx="50%" cy="38%" r="58%">
              <stop offset="0%" stopColor="#FDF0F7" />
              <stop offset="60%" stopColor="#E5A5C2" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#C26E92" stopOpacity="0.15" />
            </radialGradient>
          </defs>
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-2xl space-y-7 sm:space-y-9"
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.1]">
              Your health deserves{" "}
              <span className="italic font-light text-brand-pink-light">
                warm, expert care.
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-white/88 font-light leading-relaxed max-w-xl">
            We&apos;re ready to support you with attention, listening and safety at every stage of your journey.
          </p>

          {/* CTAs: Button-in-Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-full bg-white text-brand-purple px-6 py-3.5 text-sm sm:text-base font-semibold shadow-[0_12px_30px_rgba(250,214,231,0.35)] hover:shadow-[0_16px_40px_rgba(250,214,231,0.55)] hover:-translate-y-0.5 hover:bg-brand-pink-subtle active:translate-y-0 active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <CalendarCheck size={17} />
              <span>Book a Consultation</span>
              <span className="btn-nested-icon bg-brand-purple/10 group-hover:bg-brand-purple/15">
                <ArrowUpRight size={12} />
              </span>
            </button>

            <a
              href="tel:+919900098736"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/28 bg-white/10 hover:bg-white/18 hover:border-white/42 hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 backdrop-blur-md px-6 py-3.5 text-sm font-medium text-white transition-all duration-300"
            >
              <Phone size={15} className="text-[#FAD6E7] shrink-0" />
              <span>Call +91 99000 98736</span>
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-white/78">
            {["Direct Doctor Access", "Dedicated Antenatal Slots", "Private Sanctuary Suites"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/14 hover:bg-white/[0.13] hover:text-white transition-all duration-200 cursor-default"
              >
                &#10003; {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
