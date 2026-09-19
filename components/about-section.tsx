import * as React from "react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-12 lg:py-16 bg-[#FAF6F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-purple">
                About Genesis
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-charcoal leading-[1.15]">
                More than a clinic — a space built for women&apos;s care
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-brand-muted font-light leading-relaxed">
              <p>
                Genesis was created from a simple desire: to offer gynecology and
                obstetrics that feels warm, close and deeply human.
              </p>
              <p>
                A space designed so every woman feels safe, heard and accompanied
                through every stage of life — from the everyday to the transformative
                moment of pregnancy and birth.
              </p>
              <p className="font-normal text-brand-charcoal">
                At Genesis, clinical precision and genuine care walk side by side, to
                offer a truly humanized experience.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-3 sm:gap-6 border-t border-brand-pink-border/30">
              <div className="group p-3 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white/80 hover:shadow-xs cursor-default">
                <p className="font-serif text-2xl sm:text-4xl font-medium text-brand-purple group-hover:text-brand-purple-dark group-hover:scale-105 origin-left inline-block transition-all duration-300">
                  40+
                </p>
                <p className="text-[11px] sm:text-xs text-brand-muted mt-1 uppercase tracking-wider group-hover:text-brand-charcoal transition-colors duration-200">
                  Years Clinical Trust
                </p>
              </div>
              <div className="group p-3 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white/80 hover:shadow-xs cursor-default">
                <p className="font-serif text-2xl sm:text-4xl font-medium text-brand-purple group-hover:text-brand-purple-dark group-hover:scale-105 origin-left inline-block transition-all duration-300">
                  100%
                </p>
                <p className="text-[11px] sm:text-xs text-brand-muted mt-1 uppercase tracking-wider group-hover:text-brand-charcoal transition-colors duration-200">
                  Humanized Approach
                </p>
              </div>
            </div>
          </div>

          {/* Right Dual Arched Pill Showcase */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-3.5 sm:gap-6 max-w-md lg:max-w-lg w-full">
              
              {/* Arch 1: Maternal Care Moment */}
              <div className="relative aspect-[9/15] w-full overflow-hidden rounded-t-[4.5rem] sm:rounded-t-[8rem] rounded-b-[1.5rem] sm:rounded-b-[2rem] shadow-lg hover:shadow-[0_25px_50px_-10px_rgba(194,110,146,0.35)] border border-white/60 hover:border-brand-pink-border glow-card group transition-all duration-500 hover:-translate-y-2">
                <Image
                  src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=1000&auto=format&fit=crop"
                  alt="Expectant mother in serene natural light at Genesis"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-deep/30 to-transparent pointer-events-none" />
              </div>

              {/* Arch 2: Newborn & Gentle Care Moment */}
              <div className="relative aspect-[9/15] w-full overflow-hidden rounded-t-[4.5rem] sm:rounded-t-[8rem] rounded-b-[1.5rem] sm:rounded-b-[2rem] shadow-lg hover:shadow-[0_25px_50px_-10px_rgba(194,110,146,0.35)] border border-white/60 hover:border-brand-pink-border mt-6 sm:mt-12 glow-card group transition-all duration-500 hover:-translate-y-2">
                <Image
                  src="https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=1000&auto=format&fit=crop"
                  alt="Newborn baby resting peacefully in gentle care at Genesis"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-deep/30 to-transparent pointer-events-none" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
