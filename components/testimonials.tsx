"use client"

import * as React from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { Star } from "@phosphor-icons/react"

const testimonials = [
  {
    quote: "From my very first visit I felt cared for and safe. The attention and the humanized approach made a real difference in my experience.",
    name: "Ananya S.",
    context: "Gynecology Care Patient",
    avatar: "/images/patient_ananya.jpg",
  },
  {
    quote: "An extremely attentive and welcoming clinic. I felt heard at every step, with warmth, professionalism and real safety.",
    name: "Priya M.",
    context: "Antenatal Care Patient",
    avatar: "/images/patient_priya.jpg",
  },
  {
    quote: "Throughout my whole pregnancy I felt calm and confident. The humanized care made the whole journey feel lighter and more special.",
    name: "Kavya R.",
    context: "Maternity and Delivery Support",
    avatar: "/images/patient_kavya.jpg",
  },
]

export function Testimonials() {
  const reduce = useReducedMotion()

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#FAF6F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Sticky heading */}
          <motion.div
            className="lg:col-span-4 space-y-4 lg:sticky lg:top-32"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-charcoal leading-[1.1] tracking-tight">
              What patients <span className="italic font-light text-brand-pink-dark">say</span>
            </h2>
            <p className="text-sm text-brand-muted font-light leading-relaxed pt-1">
              Reflections of care from generations of women and families welcomed at New BEL Road, Bengaluru.
            </p>
          </motion.div>

          {/* Right: Testimonial cards (staggered) */}
          <motion.div
            className="lg:col-span-8 space-y-4"
            initial={reduce ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {testimonials.map((item) => (
              <motion.div
                key={item.name}
                variants={{
                  hidden: { opacity: 0, y: reduce ? 0 : 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                {/* Double-Bezel testimonial card */}
                <div className="group p-1.5 rounded-2xl sm:rounded-3xl bg-white/60 border border-transparent hover:border-brand-pink-border/70 hover:bg-white shadow-[0_6px_20px_-6px_rgba(74,27,79,0.05)] hover:shadow-[0_14px_36px_-8px_rgba(194,110,146,0.18)] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="rounded-[calc(1rem-6px)] sm:rounded-[calc(1.5rem-6px)] bg-white/90 border border-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] flex flex-row gap-3.5 sm:gap-5 items-start p-4 sm:p-5 cursor-default">

                    {/* Double-bezel avatar */}
                    <div className="p-0.5 rounded-full bg-white/60 border border-brand-pink-border/60 shadow-[0_4px_12px_-3px_rgba(194,110,146,0.2)] group-hover:border-brand-purple/40 group-hover:shadow-[0_0_18px_rgba(194,110,146,0.28)] transition-all duration-300 shrink-0">
                      <div
                        className="relative w-12 h-12 min-w-12 min-h-12 sm:w-16 sm:h-16 sm:min-w-16 sm:min-h-16 rounded-full overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
                        style={{ aspectRatio: "1 / 1" }}
                      >
                        <Image
                          src={item.avatar}
                          alt={`Patient portrait of ${item.name}`}
                          width={64}
                          height={64}
                          className="h-full w-full rounded-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Quote and attribution */}
                    <div className="space-y-2 sm:space-y-2.5 flex-1 min-w-0">
                      <div className="flex items-center gap-0.5 text-[#C26E92]" aria-label="5 out of 5 stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} weight="fill" className="sm:hidden" />
                        ))}
                        {[...Array(5)].map((_, i) => (
                          <Star key={`sm-${i}`} size={14} weight="fill" className="hidden sm:block" />
                        ))}
                      </div>

                      <p className="font-serif text-base sm:text-lg lg:text-xl text-brand-charcoal font-normal leading-relaxed italic group-hover:text-black transition-colors duration-200">
                        &ldquo;{item.quote}&rdquo;
                      </p>

                      <div className="flex flex-col gap-0.5">
                        <h3 className="font-sans text-sm sm:text-base font-semibold text-brand-purple group-hover:text-brand-purple-dark tracking-tight transition-colors duration-200">
                          {item.name}
                        </h3>
                        <p className="text-xs text-brand-pink-dark font-medium tracking-wide">
                          {item.context}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
