"use client"

import * as React from "react"
import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  onOpenBooking: () => void
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-32 bg-gradient-to-b from-[#240A28] via-[#350C3A] via-30% via-[#4D154F] via-55% via-[#6B2068] via-75% via-[#A84A78] via-88% via-[#D89ABF] via-96% to-[#FAF6F9]">
      {/* Ambient Lighting & Soft Glow Accents */}
      <div className="absolute top-0 right-1/4 -z-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(242,201,220,0.22)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 -z-0 h-[450px] w-[450px] rounded-full bg-[radial-gradient(ellipse,rgba(110,45,117,0.30)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Content Column — Clean, Editorial & Minimalist */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            
            <div className="space-y-3.5">
              {/* Refined Frosted Clinical Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-xl border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300">
                <span className="h-2 w-2 rounded-full bg-[#E5A5C2] shadow-[0_0_8px_#E5A5C2] animate-pulse" />
                <span className="text-[10.5px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#FCE1EE]">
                  Dr. Uma Sheshgiri • New BEL Road, Bengaluru
                </span>
              </div>

              {/* Editorial Headline */}
              <h1 className="font-serif text-[2.75rem] sm:text-5xl lg:text-[4.25rem] xl:text-[4.85rem] text-white font-normal leading-[1.08] tracking-tight">
                Warmth, <span className="italic font-light text-[#FCE1EE]">safety</span><br />
                and clinical expertise.
              </h1>
            </div>

            {/* Reassuring Clinical Copy */}
            <div className="space-y-3">
              <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-xl leading-relaxed font-light">
                Gynecology and obstetrics with humanized care, guiding you through
                every stage of life — from adolescence and fertility to pregnancy,
                birth, and midlife wellness.
              </p>
              
              <p className="hidden sm:block text-xs sm:text-sm text-white/70 max-w-lg leading-relaxed font-light">
                Backed by over 40 years of continuous clinical presence on New BEL Road,
                providing an unhurried sanctuary where generations of mothers and daughters
                receive thoughtful, personalized care.
              </p>
            </div>

            {/* CTAs — Dual Sleek Actions on all screens */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                onClick={onOpenBooking}
                size="lg"
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-white via-[#FFF5FA] to-[#FDF0F6] hover:from-[#FFF5FA] hover:to-[#FCE7F3] text-[#250629] px-7 py-3.5 text-sm sm:text-base font-semibold shadow-[0_10px_30px_rgba(230,165,195,0.35)] hover:shadow-[0_14px_40px_rgba(250,214,231,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book a Consultation</span>
              </Button>

              <a
                href="tel:+919900098736"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] backdrop-blur-md px-6 py-3.5 text-xs sm:text-sm font-medium text-white transition-all duration-300 shadow-xs"
              >
                <Phone className="h-3.5 w-3.5 text-[#FAD6E7] group-hover:scale-110 transition-transform duration-300" />
                <span>Direct Call: +91 99000 98736</span>
              </a>
            </div>

            {/* Mobile Hero Photo Frame — Positioned right below CTAs for warm emotional connection without breaking headline */}
            <div className="block lg:hidden pt-2">
              <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden rounded-[2rem] shadow-[0_25px_65px_rgba(15,2,18,0.7)] border border-white/25 bg-[#250629]/50 group">
                <Image
                  src="/images/genesis_hero_doctors.jpg"
                  alt="Dr. Uma Sheshgiri and specialist doctors at Genesis"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent via-55% to-transparent pointer-events-none" />
                <div className="absolute bottom-3 inset-x-3 py-2 px-3.5 rounded-xl bg-[#1C0420]/80 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                  <div className="min-w-0 pr-2">
                    <p className="font-serif text-xs font-medium text-white truncate">
                      Dr. Uma Sheshgiri, MD, DGO &amp; Specialists
                    </p>
                    <p className="text-[9px] tracking-wider uppercase text-[#FAD6E7]/90 mt-0.5">
                      40+ Years Continuous Practice • Est. 1984
                    </p>
                  </div>
                  <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/15 text-[#FAD6E7] shrink-0">
                    New BEL Road
                  </span>
                </div>
              </div>
            </div>

            {/* Editorial Metric Capsule — Frosted luxury glass */}
            <div className="pt-2 sm:pt-3">
              <div className="inline-flex items-center gap-3.5 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 text-white w-fit shadow-sm">
                <div className="text-left">
                  <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-light tracking-tight text-[#FCE1EE]">
                    40+
                  </p>
                  <p className="text-[9px] sm:text-[11px] text-white/70 uppercase tracking-[0.14em] font-medium whitespace-nowrap">
                    Years Trust
                  </p>
                </div>

                <div className="h-6 w-px bg-white/15 shrink-0" />

                <div className="text-left">
                  <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-light tracking-tight text-[#FCE1EE]">
                    10,000+
                  </p>
                  <p className="text-[9px] sm:text-[11px] text-white/70 uppercase tracking-[0.14em] font-medium whitespace-nowrap">
                    Families
                  </p>
                </div>

                <div className="h-6 w-px bg-white/15 shrink-0" />

                <div className="text-left">
                  <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-light tracking-tight text-[#FCE1EE]">
                    100%
                  </p>
                  <p className="text-[9px] sm:text-[11px] text-white/70 uppercase tracking-[0.14em] font-medium whitespace-nowrap">
                    Humanized
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Image Column (Desktop/Large Screens Only) */}
          <div className="hidden lg:flex lg:col-span-6 justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              
              {/* Subtle Architectural Outline behind photo */}
              <div className="hidden sm:block absolute -inset-3 rounded-[3.5rem] border border-white/10 pointer-events-none transition-all duration-500 group-hover:border-white/20" />

              {/* Main Photo Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[16/12] w-full overflow-hidden rounded-[2rem] sm:rounded-[3.25rem] shadow-[0_35px_80px_-20px_rgba(20,4,25,0.7)] hover:shadow-[0_40px_90px_-15px_rgba(20,4,25,0.85)] border border-white/30 hover:border-white/45 bg-[#250629]/40 group transition-all duration-500">
                <Image
                  src="/images/genesis_hero_doctors.jpg"
                  alt="Dr. Uma Sheshgiri and specialist doctors at Genesis"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Subtle soft dark gradient at base for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent via-55% to-transparent pointer-events-none" />

                {/* Minimalist Frosted Bottom Caption */}
                <div className="absolute bottom-3 inset-x-3 sm:bottom-5 sm:inset-x-5 py-2.5 sm:py-3.5 px-3.5 sm:px-5 rounded-xl sm:rounded-2xl bg-[#1C0420]/80 group-hover:bg-[#1C0420]/90 backdrop-blur-md border border-white/15 group-hover:border-white/25 text-white flex items-center justify-between transition-all duration-300">
                  <div className="min-w-0 pr-2">
                    <p className="font-serif text-xs sm:text-base font-medium text-white group-hover:text-[#FDF2F8] transition-colors truncate">
                      Dr. Uma Sheshgiri, MD, DGO &amp; Specialists
                    </p>
                    <p className="text-[9px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[#FAD6E7]/90 mt-0.5 truncate">
                      New BEL Road, Bengaluru
                    </p>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-medium px-3 py-1 rounded-full bg-white/10 text-[#FAD6E7] border border-white/15 group-hover:bg-white/15 transition-all shrink-0">
                    Since 1984
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
