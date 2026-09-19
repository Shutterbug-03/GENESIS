"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ServicesGridProps {
  onSelectService: (serviceName: string) => void
}

export function ServicesGrid({ onSelectService }: ServicesGridProps) {
  const services = [
    {
      title: "Gynecology Consultations",
      description: "Preventive care and everyday women's health check-ups.",
      category: "01",
    },
    {
      title: "Humanized Antenatal Care",
      description: "Close, attentive support throughout the whole pregnancy.",
      category: "02",
    },
    {
      title: "In-house Diagnostics",
      description: "Ultrasound and lab testing, evaluated with precision.",
      category: "03",
    },
    {
      title: "Fertility Planning",
      description: "Guidance and evaluation before trying to conceive.",
      category: "04",
    },
    {
      title: "Delivery & Postnatal Support",
      description: "Specialized care focused on a calm, guided birth.",
      category: "05",
    },
    {
      title: "Preventive Screenings",
      description: "Pap smears, breast checks and more, done early.",
      category: "06",
    },
  ]

  return (
    <section id="services" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-purple">
              How we can care for you
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-charcoal max-w-2xl leading-[1.15]">
              Support built around every stage of your health
            </h2>
          </div>
          <Link
            href="/services"
            className="text-xs uppercase tracking-wider font-semibold text-brand-purple hover:text-brand-purple-dark inline-flex items-center gap-1 group pb-1"
          >
            <span>Explore all pathways</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Visual Column (Medical Consultation Photo) */}
          <div className="lg:col-span-5">
            <div className="group relative aspect-[16/11] sm:aspect-[3/4] w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-lg hover:shadow-[0_25px_60px_-15px_rgba(194,110,146,0.28)] border border-white/60 hover:border-brand-pink-border glow-card transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop"
                alt="Genesis Clinical Consultation"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-deep/30 to-transparent pointer-events-none" />
              
              {/* Warm decorative badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 group-hover:bg-white backdrop-blur-xs border border-brand-pink-border shadow-xs group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-0.5">
                <p className="font-serif text-sm sm:text-base font-medium text-brand-charcoal group-hover:text-brand-purple transition-colors">
                  Compassionate Care Environment
                </p>
                <p className="text-[11px] sm:text-xs text-brand-muted mt-0.5 font-light">
                  Private, calm consultation suites crafted for your comfort
                </p>
              </div>
            </div>
          </div>

          {/* Right Services Grid: 6 Soft Muted Pink/Lavender Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => onSelectService(service.title)}
                  className="group cursor-pointer rounded-2xl sm:rounded-3xl bg-[#FAF0F5]/80 hover:bg-white border border-brand-pink-border/40 hover:border-brand-purple/35 p-4 sm:p-6 transition-all duration-300 hover:shadow-[0_14px_35px_-8px_rgba(194,110,146,0.22)] hover:-translate-y-1 flex flex-col justify-between min-h-[140px]"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <span className="text-[11px] font-mono font-medium text-brand-pink-dark group-hover:text-brand-purple transition-colors">
                        {service.category}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-brand-muted group-hover:text-brand-purple group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300 shrink-0 ml-2" />
                    </div>
                    <h3 className="text-base sm:text-lg font-medium text-brand-charcoal group-hover:text-brand-purple transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light group-hover:text-brand-charcoal/80 transition-colors duration-200">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-purple uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-200">
                      <span>Inquire &amp; Book</span>
                      <span>&rarr;</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
