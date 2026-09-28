"use client"

import * as React from "react"
import Image from "next/image"
import { Phone, ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

interface HeroProps {
  onOpenBooking: () => void
}

export function Hero({ onOpenBooking }: HeroProps) {
  const reduce = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: reduce ? 1 : 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: reduce ? 0 : 0.2 },
    },
  }

  return (
    <section className="relative overflow-hidden min-h-[100dvh] flex items-center pt-28 pb-16 sm:pt-32 lg:pt-36 bg-gradient-to-b from-[#240A28] via-[#350C3A] via-30% via-[#4D154F] via-55% via-[#6B2068] via-75% via-[#A84A78] via-88% via-[#D89ABF] via-96% to-[#FAF6F9]">

      {/* Ambient radial depth */}
      <div className="absolute top-0 right-1/4 h-[560px] w-[560px] rounded-full bg-[radial-gradient(ellipse,rgba(242,201,220,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 h-[460px] w-[460px] rounded-full bg-[radial-gradient(ellipse,rgba(110,45,117,0.28)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Clinical Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.09] hover:bg-white/[0.14] backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 cursor-default">
                <span className="h-2 w-2 rounded-full bg-[#E5A5C2] shadow-[0_0_8px_#E5A5C2] animate-pulse shrink-0" />
                <span className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[#FCE1EE]">
                  Dr. Uma Sheshgiri, New BEL Road, Bengaluru
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="font-serif text-[2.6rem] sm:text-5xl lg:text-[4.25rem] xl:text-[4.75rem] text-white font-normal leading-[1.07] tracking-tight">
                Warmth, <span className="italic font-light text-[#FCE1EE]">safety</span>
                <br />and clinical expertise.
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-[46ch] leading-relaxed font-light">
                Gynecology and obstetrics with humanized care, guiding you through every stage of life from adolescence and fertility to pregnancy, birth, and midlife wellness.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                {/* Primary: Button-in-Button */}
                <button
                  onClick={onOpenBooking}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white text-[#250629] px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold shadow-[0_10px_30px_rgba(230,165,195,0.35)] hover:shadow-[0_14px_40px_rgba(250,214,231,0.55)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  <span>Book a Consultation</span>
                  <span className="btn-nested-icon bg-[#250629]/10 group-hover:bg-[#250629]/15">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </button>

                {/* Secondary: Ghost pill */}
                <a
                  href="tel:+919900098736"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 hover:bg-white/18 hover:border-white/38 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] backdrop-blur-md px-6 py-3 sm:py-3.5 text-sm font-medium text-white transition-all duration-300"
                >
                  <Phone className="h-3.5 w-3.5 text-[#FAD6E7] shrink-0" />
                  <span>+91 99000 98736</span>
                </a>
              </div>
            </motion.div>

            {/* Metric capsule */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-4 sm:gap-6 px-5 sm:px-6 py-3 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                {[
                  { value: "45+", label: "Years Trust" },
                  { value: "10,000+", label: "Families" },
                  { value: "100%", label: "Humanized" },
                ].map((m, i) => (
                  <React.Fragment key={m.label}>
                    {i > 0 && <div className="h-7 w-px bg-white/15 shrink-0" />}
                    <div className="text-left">
                      <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-light tracking-tight text-[#FCE1EE]">{m.value}</p>
                      <p className="text-[9px] sm:text-[11px] text-white/65 uppercase tracking-[0.14em] font-medium whitespace-nowrap mt-0.5">{m.label}</p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Double-Bezel Hero Image */}
          <motion.div
            className="lg:col-span-6 flex justify-center lg:justify-end"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            {/* Mobile photo */}
            <div className="block lg:hidden w-full">
              <div className="p-1.5 rounded-[2rem] bg-white/[0.08] border border-white/18 shadow-[0_24px_60px_rgba(15,2,18,0.65)]">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[calc(2rem-6px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] group">
                  <Image
                    src="/images/genesis_hero_care_team.jpg"
                    alt="Dr. Uma Sheshgiri and Genesis clinical team"
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Desktop photo */}
            <div className="hidden lg:block relative w-full max-w-xl">
              {/* Outer shell (Double-Bezel) */}
              <div className="p-2 rounded-[2.75rem] bg-white/[0.07] border border-white/18 shadow-[0_35px_80px_rgba(15,2,18,0.7)] hover:shadow-[0_40px_90px_rgba(15,2,18,0.85)] hover:border-white/28 transition-all duration-700 group">
                {/* Inner core */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[calc(2.75rem-8px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] bg-[#250629]/40">
                  <Image
                    src="/images/genesis_hero_care_team.jpg"
                    alt="Dr. Uma Sheshgiri and clinical specialist team at Genesis"
                    fill
                    sizes="(max-width: 1200px) 50vw, 600px"
                    priority
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-transparent pointer-events-none" />

                  {/* Frosted caption */}
                  <div className="absolute bottom-5 inset-x-5 py-3 px-4 rounded-xl bg-[#1C0420]/80 group-hover:bg-[#1C0420]/92 backdrop-blur-md border border-white/15 group-hover:border-white/25 text-white flex items-center justify-between transition-all duration-400">
                    <div className="min-w-0 pr-2">
                      <p className="font-serif text-sm font-medium text-white group-hover:text-[#FDF2F8] transition-colors truncate">
                        Dr. Uma Sheshgiri &amp; Clinical Team
                      </p>
                      <p className="text-[10px] tracking-[0.16em] uppercase text-[#FAD6E7]/85 mt-0.5 truncate">
                        45+ Years Clinical Practice, New BEL Road
                      </p>
                    </div>
                    <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/10 text-[#FAD6E7] border border-white/15 group-hover:bg-white/16 transition-all shrink-0">
                      Since 1984
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
