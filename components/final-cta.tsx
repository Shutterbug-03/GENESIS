"use client"

import * as React from "react"
import { CalendarCheck, Phone, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FinalCtaProps {
  onOpenBooking: () => void
}

export function FinalCta({ onOpenBooking }: FinalCtaProps) {
  return (
    <section className="py-12 lg:py-16 bg-[#331137] text-white relative overflow-hidden">
      {/* Minimalist Radiant Ambient Glow (matching Why Choose Us) */}
      <div className="absolute top-0 right-1/4 -z-0 h-[450px] w-[450px] rounded-full bg-brand-pink-dark/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-0 h-[350px] w-[350px] rounded-full bg-brand-purple-medium/30 blur-3xl pointer-events-none" />

      {/* Heart Contour Outline in background */}
      <div className="absolute -bottom-16 -right-16 sm:right-10 pointer-events-none opacity-20">
        <svg
          width="340"
          height="340"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-brand-pink-light"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl space-y-6 sm:space-y-8">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-brand-pink-light">
              <Heart className="h-3.5 w-3.5 fill-brand-pink-light/50" />
              <span>Genesis Women&apos;s Care</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.12]">
              Your health deserves{" "}
              <span className="italic font-light text-brand-pink-light">
                warm, expert care.
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed max-w-xl">
            We&apos;re ready to support you with attention, listening and safety at
            every stage of your journey.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Button
              onClick={onOpenBooking}
              size="lg"
              className="w-full sm:w-auto rounded-full bg-white text-brand-purple hover:bg-brand-pink-subtle hover:text-brand-purple-dark px-7 py-3.5 text-sm sm:text-base font-semibold shadow-lg hover:shadow-[0_12px_35px_rgba(236,197,214,0.55)] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <CalendarCheck className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span>Book a Consultation</span>
            </Button>

            <a
              href="tel:+919900098736"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-6 py-3.5 text-xs sm:text-sm font-medium text-white hover:bg-white/20 hover:border-white/45 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0 transition-all duration-300 shadow-xs"
            >
              <Phone className="h-4 w-4 text-[#FAD6E7] group-hover:scale-110 transition-transform duration-300" />
              <span>Call +91 99000 98736</span>
            </a>
          </div>

          <div className="pt-3 text-[11px] sm:text-xs text-white/80 flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 hover:bg-white/[0.14] hover:text-white transition-all duration-200 cursor-default">
              ✓ Direct Doctor Access
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 hover:bg-white/[0.14] hover:text-white transition-all duration-200 cursor-default">
              ✓ Dedicated Antenatal Slots
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 hover:bg-white/[0.14] hover:text-white transition-all duration-200 cursor-default">
              ✓ Private Sanctuary Suites
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
