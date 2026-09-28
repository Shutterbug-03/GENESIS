"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { ArrowUpRight } from "@phosphor-icons/react"

interface ServicesGridProps {
  onSelectService: (serviceName: string) => void
}

const services = [
  {
    title: "Gynecology Consultations",
    description: "Preventive care and everyday women's health check-ups.",
  },
  {
    title: "Humanized Antenatal Care",
    description: "Close, attentive support throughout the whole pregnancy.",
  },
  {
    title: "Cosmetic Gynaecology",
    description: "Advanced aesthetic & functional treatments in a safe hospital setting.",
  },
  {
    title: "Fertility Planning",
    description: "Guidance and evaluation before trying to conceive.",
  },
  {
    title: "Delivery and Postnatal Support",
    description: "Specialized care focused on a calm, guided birth.",
  },
  {
    title: "Preventive Screenings",
    description: "Pap smears, breast checks and hormonal profiles, done early.",
  },
]

export function ServicesGrid({ onSelectService }: ServicesGridProps) {
  const reduce = useReducedMotion()

  return (
    <section id="services" className="py-14 lg:py-20 bg-[#FAF6F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-charcoal max-w-2xl leading-[1.12]">
            Support built around every stage of your health
          </h2>
          <Link
            href="/services"
            className="text-xs uppercase tracking-wider font-semibold text-brand-purple hover:text-brand-purple-dark inline-flex items-center gap-1.5 group pb-1 shrink-0"
          >
            <span>Explore all pathways</span>
            <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left: Consultation photo (Double-Bezel) */}
          <motion.div
            className="lg:col-span-5"
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Outer shell */}
            <div className="group p-1.5 rounded-[2.25rem] sm:rounded-[2.5rem] bg-white/60 border border-brand-pink-border/55 shadow-[0_20px_50px_-12px_rgba(194,110,146,0.15)] hover:shadow-[0_28px_60px_-12px_rgba(194,110,146,0.25)] hover:-translate-y-1 transition-all duration-500">
              {/* Inner core */}
              <div className="relative aspect-[16/11] sm:aspect-[3/4] w-full overflow-hidden rounded-[calc(2.25rem-6px)] sm:rounded-[calc(2.5rem-6px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] bg-[#FAF6F9]">
                <Image
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop"
                  alt="Genesis clinical consultation suite"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-deep/30 to-transparent pointer-events-none" />

                {/* Clean bottom caption (no pill overlay on image) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <div className="p-3 sm:p-4 rounded-xl bg-white/95 group-hover:bg-white backdrop-blur-sm border border-brand-pink-border/60 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-0.5">
                    <p className="font-serif text-sm sm:text-base font-medium text-brand-charcoal group-hover:text-brand-purple transition-colors">
                      Compassionate Care Environment
                    </p>
                    <p className="text-[11px] sm:text-xs text-brand-muted mt-0.5 font-light">
                      Private, calm consultation suites crafted for your comfort
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Services bento (asymmetric 2-col) */}
          <div className="lg:col-span-7">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07 } },
              }}
            >
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={{
                    hidden: { opacity: 0, y: reduce ? 0 : 18 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  {/* Double-bezel service card */}
                  <div
                    onClick={() => onSelectService(service.title)}
                    className="group cursor-pointer h-full p-1.5 rounded-2xl sm:rounded-3xl bg-[#FAF0F5]/75 border border-brand-pink-border/45 hover:border-brand-purple/35 hover:bg-white shadow-[0_6px_18px_-6px_rgba(74,27,79,0.06)] hover:shadow-[0_16px_36px_-8px_rgba(194,110,146,0.22)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="h-full rounded-[calc(1rem-6px)] sm:rounded-[calc(1.5rem-6px)] bg-white/90 border border-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] p-4 sm:p-5 flex flex-col justify-between min-h-[148px]">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <h3 className="text-base sm:text-lg font-medium text-brand-charcoal group-hover:text-brand-purple transition-colors duration-200 leading-snug pr-2">
                            {service.title}
                          </h3>
                          <ArrowUpRight
                            size={16}
                            className="text-brand-muted group-hover:text-brand-purple group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300 shrink-0 mt-0.5"
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light group-hover:text-brand-charcoal/80 transition-colors duration-200">
                          {service.description}
                        </p>
                      </div>
                      <div className="pt-3">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-purple uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-200">
                          Inquire and Book
                          <span className="ml-0.5">&#8594;</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
