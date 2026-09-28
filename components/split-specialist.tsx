"use client"

import * as React from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { CalendarCheck, ArrowUpRight } from "@phosphor-icons/react"

interface SplitSpecialistProps {
  onOpenBooking: () => void
}

const areasOfCare = [
  "Women's health and wellbeing",
  "Obstetrics and gynaecology",
  "Maternal healthcare and delivery",
  "Preventive healthcare and screening",
  "Fertility and ART support",
  "Menopause and midlife care",
]

export function SplitSpecialist({ onOpenBooking }: SplitSpecialistProps) {
  const reduce = useReducedMotion()

  return (
    <section id="specialist" className="py-14 sm:py-20 bg-[#FAF6F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* Left: Story Card (Double-Bezel) */}
          <motion.div
            className="lg:col-span-6"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Outer shell */}
            <div className="group h-full p-1.5 rounded-[2rem] bg-gradient-to-br from-[#F9EDF5]/70 to-[#EFD9EB]/60 border border-brand-pink-border/60 shadow-[0_16px_40px_-8px_rgba(194,110,146,0.12)] hover:shadow-[0_24px_50px_-8px_rgba(194,110,146,0.22)] hover:-translate-y-1 transition-all duration-500">
              {/* Inner core */}
              <div className="h-full rounded-[calc(2rem-6px)] bg-gradient-to-br from-[#FBF2F9] to-[#F6E8F3] border border-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] px-7 py-8 sm:px-9 sm:py-10 lg:px-10 lg:py-12 flex flex-col justify-between">
                <div className="space-y-5">
                  <h2 className="font-serif text-2xl sm:text-4xl text-brand-charcoal font-normal leading-[1.15]">
                    A purpose born from care and listening
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base lg:text-lg text-brand-muted font-light leading-relaxed">
                    <p>
                      Genesis grew out of Dr. Uma Sheshgiri&apos;s 45+ years close to women&apos;s health, the belief that caring for women demands individual attention, sensitivity and trust, especially in life&apos;s most delicate and transformative moments.
                    </p>
                    <p className="font-normal text-brand-charcoal">
                      That&apos;s why Genesis was built around one experience: care centered on respect, continuity and genuine attention.
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={onOpenBooking}
                    className="group/btn inline-flex items-center gap-3 rounded-full bg-brand-purple hover:bg-brand-purple-dark text-white px-6 py-3 text-sm font-medium shadow-[0_8px_20px_rgba(74,27,79,0.3)] hover:shadow-[0_12px_28px_rgba(74,27,79,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 cursor-pointer"
                  >
                    <CalendarCheck size={16} />
                    <span>Book a Consultation</span>
                    <span className="btn-nested-icon bg-white/15 group-hover/btn:bg-white/25">
                      <ArrowUpRight size={12} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Specialist Profile (Double-Bezel) */}
          <motion.div
            className="lg:col-span-6"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: reduce ? 0 : 0.1 }}
          >
            {/* Outer shell */}
            <div className="group h-full p-1.5 rounded-[2rem] bg-white/70 border border-brand-pink-border/55 shadow-[0_16px_40px_-8px_rgba(74,27,79,0.06)] hover:shadow-[0_24px_50px_-8px_rgba(194,110,146,0.2)] hover:-translate-y-1 transition-all duration-500">
              {/* Inner core */}
              <div className="h-full rounded-[calc(2rem-6px)] bg-white border border-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] px-6 py-7 sm:px-8 sm:py-9 flex flex-col justify-between">
                <div className="space-y-5 sm:space-y-6">
                  <h2 className="font-serif text-2xl sm:text-4xl text-brand-charcoal font-normal">
                    Dr. Uma Sheshgiri
                  </h2>

                  <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
                    {/* Doctor photo (double-bezel avatar) */}
                    <div className="p-1 rounded-2xl bg-white/60 border border-brand-pink-border/60 shadow-[0_8px_20px_-4px_rgba(194,110,146,0.2)] shrink-0">
                      <div className="relative h-36 w-32 min-w-32 min-h-36 sm:h-44 sm:w-36 overflow-hidden rounded-[calc(1rem-4px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                        <Image
                          src="/images/dr_uma_clinic.jpg"
                          alt="Dr. Uma Sheshgiri, Senior Obstetrician and Gynaecologist"
                          fill
                          sizes="(max-width: 768px) 130px, 160px"
                          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      </div>
                    </div>

                    <div className="space-y-2.5 sm:space-y-3 flex-1 min-w-0">
                      <div>
                        <h3 className="font-serif text-xl font-medium text-brand-charcoal">Dr. Uma Sheshgiri</h3>
                        <p className="text-xs font-medium text-brand-purple mt-0.5">MBBS, DGO, MD (OBG) - Chairman, IMA-AMS</p>
                      </div>
                      <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                        With 45+ years of clinical practice, Dr. Uma Sheshgiri leads Genesis Women&apos;s Health with a patient-first philosophy — offering deeply personalized obstetric and gynecologic care.
                      </p>
                    </div>
                  </div>

                  {/* Areas of care */}
                  <div className="pt-3 border-t border-brand-pink-border/25">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {areasOfCare.map((area) => (
                        <div
                          key={area}
                          className="flex items-center gap-2 text-xs sm:text-sm text-brand-muted py-1.5 px-2.5 rounded-xl hover:bg-brand-pink-subtle/70 hover:text-brand-charcoal transition-all duration-200 cursor-default"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-pink-dark shrink-0" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-brand-pink-border/25 mt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-brand-muted text-center sm:text-left">
                  <span>Chairman, IMA-AMS Bangalore Chapter, New BEL Road</span>
                  <a href="tel:+919900098736" className="font-medium text-brand-purple hover:underline hover:text-brand-purple-dark transition-colors">
                    +91 99000 98736
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
