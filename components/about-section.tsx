"use client"

import * as React from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"

export function AboutSection() {
  const reduce = useReducedMotion()

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#FAF6F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Text */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={reduce ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-charcoal leading-[1.12]">
                More than a clinic, a space built for women&apos;s care
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-brand-muted font-light leading-relaxed">
              <p>
                Genesis was created from a simple desire: to offer gynecology and obstetrics that feels warm, close and deeply human.
              </p>
              <p>
                A space designed so every woman feels safe, heard and accompanied through every stage of life, from the everyday to the transformative moment of pregnancy and birth.
              </p>
              <p className="font-normal text-brand-charcoal">
                At Genesis, clinical precision and genuine care walk side by side, to offer a truly humanized experience.
              </p>
            </div>

            {/* Metric grid with double-bezel */}
            <motion.div
              className="pt-4 grid grid-cols-2 gap-3 sm:gap-5 border-t border-brand-pink-border/30"
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {[
                { value: "45+", label: "Years Clinical Trust" },
                { value: "100%", label: "Humanized Approach" },
              ].map(({ value, label }) => (
                <motion.div
                  key={label}
                  variants={{
                    hidden: { opacity: 0, y: reduce ? 0 : 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  {/* Double-bezel metric card */}
                  <div className="group p-1.5 rounded-2xl bg-white/60 border border-brand-pink-border/50 shadow-[0_8px_24px_-6px_rgba(74,27,79,0.05)] hover:border-brand-pink-border hover:bg-white hover:shadow-[0_16px_36px_-8px_rgba(194,110,146,0.16)] hover:-translate-y-0.5 transition-all duration-400 cursor-default">
                    <div className="rounded-[calc(1rem-6px)] bg-white border border-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] px-4 py-4 sm:px-5 sm:py-5">
                      <p className="font-serif text-2xl sm:text-4xl font-medium text-brand-purple group-hover:text-brand-purple-dark transition-colors duration-200">
                        {value}
                      </p>
                      <p className="text-[10px] sm:text-xs text-brand-muted mt-1 uppercase tracking-wider group-hover:text-brand-charcoal transition-colors duration-200">
                        {label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Dual Arched Photography */}
          <motion.div
            className="lg:col-span-6 flex justify-center lg:justify-end"
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: reduce ? 0 : 0.1 }}
          >
            <div className="grid grid-cols-2 gap-3.5 sm:gap-5 max-w-md lg:max-w-lg w-full">

              {/* Arch 1 */}
              <div className="p-1.5 rounded-t-[4.5rem] sm:rounded-t-[8rem] rounded-b-[1.5rem] sm:rounded-b-[2rem] bg-white/55 border border-brand-pink-border/50 shadow-[0_16px_40px_-10px_rgba(194,110,146,0.18)] hover:shadow-[0_24px_50px_-10px_rgba(194,110,146,0.3)] hover:-translate-y-2 transition-all duration-500 group cursor-default">
                <div className="relative aspect-[9/15] w-full overflow-hidden rounded-t-[calc(4.5rem-6px)] sm:rounded-t-[calc(8rem-6px)] rounded-b-[calc(1.5rem-6px)] sm:rounded-b-[calc(2rem-6px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                  <Image
                    src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=1000&auto=format&fit=crop"
                    alt="Expectant mother in serene natural light at Genesis"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-deep/25 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Arch 2 (offset) */}
              <div className="p-1.5 mt-8 sm:mt-14 rounded-t-[4.5rem] sm:rounded-t-[8rem] rounded-b-[1.5rem] sm:rounded-b-[2rem] bg-white/55 border border-brand-pink-border/50 shadow-[0_16px_40px_-10px_rgba(194,110,146,0.18)] hover:shadow-[0_24px_50px_-10px_rgba(194,110,146,0.3)] hover:-translate-y-2 transition-all duration-500 group cursor-default">
                <div className="relative aspect-[9/15] w-full overflow-hidden rounded-t-[calc(4.5rem-6px)] sm:rounded-t-[calc(8rem-6px)] rounded-b-[calc(1.5rem-6px)] sm:rounded-b-[calc(2rem-6px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                  <Image
                    src="https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=1000&auto=format&fit=crop"
                    alt="Newborn baby resting peacefully in gentle care at Genesis"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-deep/25 to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
