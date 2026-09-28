"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"
import { Handshake, Heartbeat, ShieldCheck, Stethoscope } from "@phosphor-icons/react"

const items = [
  {
    Icon: Handshake,
    title: "Warmth in every detail",
    description: "Gentle listening and genuine personal care",
  },
  {
    Icon: Heartbeat,
    title: "Care through every stage",
    description: "From routine health to pregnancy and birth",
  },
  {
    Icon: ShieldCheck,
    title: "Safety that builds trust",
    description: "Rigorous standards and clinical accuracy",
  },
  {
    Icon: Stethoscope,
    title: "Expertise with a human touch",
    description: "Over 45 years of clinical excellence",
  },
]

export function IconStrip() {
  const reduce = useReducedMotion()

  return (
    <section className="py-10 sm:py-14 bg-[#FAF6F9]/90 backdrop-blur-sm border-b border-brand-pink-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6"
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {items.map(({ Icon, title, description }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: reduce ? 0 : 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              {/* Double-Bezel card */}
              <div className="group h-full flex flex-col items-center text-center p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl border border-transparent hover:border-brand-pink-border hover:bg-white hover:shadow-[0_14px_35px_-8px_rgba(194,110,146,0.18)] hover:-translate-y-1 transition-all duration-300 cursor-default">
                {/* Outer shell icon bezel */}
                <div className="p-1.5 rounded-xl sm:rounded-2xl bg-white/60 border border-brand-pink-border/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] group-hover:border-brand-purple group-hover:bg-brand-purple/5 transition-all duration-300 mb-3 sm:mb-4">
                  {/* Inner core */}
                  <div className="flex h-10 w-10 sm:h-13 sm:w-13 items-center justify-center rounded-[calc(0.75rem-6px)] sm:rounded-[calc(1rem-6px)] bg-white text-brand-purple group-hover:bg-brand-purple group-hover:text-white group-hover:shadow-[0_6px_18px_rgba(110,45,117,0.3)] transition-all duration-300">
                    <Icon size={20} weight="light" className="sm:hidden" />
                    <Icon size={26} weight="light" className="hidden sm:block" />
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-1.5">
                  <h3 className="font-serif text-xs sm:text-base font-medium text-brand-charcoal leading-snug group-hover:text-brand-purple transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-[10px] min-[380px]:text-[11px] sm:text-xs text-brand-muted font-light leading-relaxed hidden min-[360px]:block group-hover:text-brand-charcoal/80 transition-colors duration-200">
                    {description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
