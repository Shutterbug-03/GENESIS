"use client"

import * as React from "react"
import Image from "next/image"
import { CalendarCheck, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SplitSpecialistProps {
  onOpenBooking: () => void
}

export function SplitSpecialist({ onOpenBooking }: SplitSpecialistProps) {
  const areasOfCare = [
    "Women's health & wellbeing",
    "Obstetrics & gynaecology",
    "Maternal healthcare & delivery",
    "Preventive healthcare & screening",
    "Fertility & ART support",
    "Menopause & midlife care",
  ]

  return (
    <section id="specialist" className="py-10 sm:py-12 bg-brand-pink-subtle/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT PANEL: Soft Muted Pink/Lavender Story Card */}
          <div className="lg:col-span-6 rounded-3xl sm:rounded-4xl bg-gradient-to-br from-[#F9EDF5] to-[#F3E4F0] p-6 sm:p-8 lg:p-12 flex flex-col justify-between shadow-sm hover:shadow-[0_18px_45px_rgba(194,110,146,0.18)] hover:-translate-y-1 border border-transparent hover:border-brand-pink-border/60 transition-all duration-300">
            <div className="space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-purple">
                  How Genesis Began
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl text-brand-charcoal font-normal leading-[1.15]">
                  A purpose born from care and listening
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base lg:text-lg text-brand-muted font-light leading-relaxed">
                <p>
                  Genesis grew out of Dr. Uma Sheshgiri&apos;s 45+ years close to women&apos;s
                  health — the belief that caring for women demands individual attention,
                  sensitivity and trust, especially in life&apos;s most delicate and
                  transformative moments.
                </p>
                <p className="font-normal text-brand-charcoal">
                  That&apos;s why Genesis was built around one experience: care centered on
                  respect, continuity and genuine attention.
                </p>
              </div>
            </div>

            <div className="pt-6 sm:pt-8">
              <Button
                onClick={onOpenBooking}
                size="lg"
                className="w-full sm:w-auto rounded-full bg-brand-purple hover:bg-brand-purple-dark text-white px-7 py-3 text-sm font-medium shadow-sm hover:shadow-[0_8px_25px_rgba(194,110,146,0.4)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group transition-all duration-300 cursor-pointer"
              >
                <CalendarCheck className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span>Book a Consultation</span>
              </Button>
            </div>
          </div>

          {/* RIGHT PANEL: Specialist Profile (Dr. Uma Sheshgiri) */}
          <div className="lg:col-span-6 rounded-3xl sm:rounded-4xl bg-white/80 hover:bg-white p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-[0_18px_45px_rgba(194,110,146,0.18)] hover:-translate-y-1 border border-transparent hover:border-brand-pink-border/60 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-purple">
                  Meet the Specialist
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl text-brand-charcoal font-normal">
                  Dr. Uma Sheshgiri
                </h2>
              </div>

              {/* Specialist Card Details */}
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start text-center sm:text-left">
                <div className="group/photo relative h-36 w-32 min-w-32 min-h-36 sm:h-44 sm:w-36 sm:min-w-36 sm:min-h-44 shrink-0 overflow-hidden rounded-2xl border-2 border-brand-pink-border hover:border-brand-purple/50 shadow-xs transition-colors duration-300">
                  <Image
                    src="/images/dr_uma_clinic.jpg"
                    alt="Dr. Uma Sheshgiri, Senior Obstetrician & Gynaecologist"
                    fill
                    sizes="(max-width: 768px) 130px, 160px"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover/photo:scale-105"
                  />
                </div>

                <div className="space-y-2.5 sm:space-y-3">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-brand-charcoal">
                      Dr. Uma Sheshgiri
                    </h3>
                    <p className="text-xs font-medium text-brand-purple flex items-center justify-center sm:justify-start gap-1.5 mt-0.5">
                      <Award className="h-3.5 w-3.5 text-brand-pink-dark" />
                      MBBS, DGO, MD (OBG) • Chairman, IMA-AMS
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                    Senior Obstetrician &amp; Gynaecologist with 45+ years of clinical experience, including 15 years Karnataka Government healthcare service (Retired Superintendent, K.R. Puram General Hospital). Dedicated to compassionate, individualized maternal and gynecological care.
                  </p>
                </div>
              </div>

              {/* Areas of Care */}
              <div className="pt-2 border-t border-brand-pink-border/25">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-2.5">
                  Areas of Care &amp; Focus
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  {areasOfCare.map((area, idx) => (
                    <div
                      key={idx}
                      className="group/item flex items-center gap-2 text-xs sm:text-sm text-brand-muted py-1.5 px-2.5 rounded-xl hover:bg-brand-pink-subtle/70 hover:text-brand-charcoal transition-all duration-200 cursor-default"
                    >
                      <CheckCircle className="h-3.5 w-3.5 text-brand-pink-dark group-hover/item:text-brand-purple group-hover/item:scale-110 transition-all duration-200 shrink-0" />
                      <span className="transition-colors">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-brand-pink-border/25 mt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-brand-muted text-center sm:text-left">
              <span>Chairman, IMA-AMS Bangalore Chapter • New BEL Road</span>
              <a href="tel:+919900098736" className="font-medium text-brand-purple hover:underline hover:text-brand-purple-dark transition-colors">
                Tel: +91 99000 98736
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
