import * as React from "react"
import { HeartHandshake, HeartPulse, Shield, Stethoscope } from "lucide-react"

export function IconStrip() {
  const items = [
    {
      icon: HeartHandshake,
      title: "Warmth in every detail",
      description: "Gentle listening and genuine personal care",
    },
    {
      icon: HeartPulse,
      title: "Care through every stage",
      description: "From routine health to pregnancy and birth",
    },
    {
      icon: Shield,
      title: "Safety that builds trust",
      description: "Rigorous standards and clinical accuracy",
    },
    {
      icon: Stethoscope,
      title: "Expertise with a human touch",
      description: "Over 45 years of clinical excellence",
    },
  ]

  return (
    <section className="py-8 sm:py-12 bg-[#FAF6F9]/80 backdrop-blur-sm border-b border-brand-pink-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-2.5 sm:space-y-3.5 group p-3 sm:p-5 rounded-2xl sm:rounded-3xl border border-transparent hover:border-brand-pink-border hover:bg-white hover:shadow-[0_14px_35px_-8px_rgba(194,110,146,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {/* Minimalist Icon Badge with Fine Hairline Framing */}
                <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-white border border-brand-pink-border/70 text-brand-purple shadow-xs group-hover:bg-brand-purple group-hover:text-white group-hover:border-brand-purple group-hover:scale-110 group-hover:shadow-[0_8px_22px_rgba(110,45,117,0.28)] transition-all duration-300">
                  <Icon className="h-5 w-5 sm:h-7 sm:w-7 stroke-[1.35] group-hover:stroke-[1.6] transition-all duration-300" />
                </div>

                <div className="space-y-1 sm:space-y-1.5">
                  <h3 className="font-serif text-xs sm:text-base font-medium text-brand-charcoal leading-snug group-hover:text-brand-purple transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-[10px] min-[380px]:text-[11px] sm:text-xs text-brand-muted font-light leading-relaxed hidden min-[360px]:block sm:block group-hover:text-brand-charcoal/80 transition-colors duration-200">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
