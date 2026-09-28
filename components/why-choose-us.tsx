import * as React from "react"
import Image from "next/image"
import { Check } from "lucide-react"

export function WhyChooseUs() {
  const checklist = [
    "Humanized, patient-first care",
    "Active, individualized listening",
    "A warm, thoughtfully designed medical sanctuary",
    "Support through every stage of a woman's life",
    "40+ years of continuous clinical practice",
  ]

  return (
    <section id="why-us" className="py-14 sm:py-20 bg-[#331137] text-white relative overflow-hidden">
      {/* Radiant Ambient Glow */}
      <div className="absolute top-0 right-1/4 -z-0 h-[450px] w-[450px] rounded-full bg-brand-pink-dark/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-0 h-[350px] w-[350px] rounded-full bg-brand-purple-medium/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Checklist */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#FAD6E7]">
                Why choose Genesis?
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-[1.15] tracking-tight">
                Why choose VCUS Genesis?
              </h2>
            </div>

            <p className="text-base sm:text-lg text-brand-pink-subtle/90 font-light max-w-lg leading-relaxed">
              We understand that clinical excellence is incomplete without genuine warmth.
              Every visit is designed to give you peace of mind, unhurried time to ask questions,
              and care tailored to your unique journey.
            </p>

            <ul className="space-y-4 pt-2">
              {checklist.map((item, index) => (
                <li key={index} className="flex items-center gap-3.5 group">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-[#FAD6E7] border border-white/20">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base text-white/95 font-light tracking-wide">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Dual Arched Pill Showcase (Matching Section 2 Size & Layout) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md lg:max-w-lg w-full">
              
              {/* Arch 1: Attentive listening & caring hands */}
              <div className="relative aspect-[9/15] w-full overflow-hidden rounded-t-[7rem] sm:rounded-t-[8rem] rounded-b-[2rem] shadow-2xl border border-white/30 group">
                <Image
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop"
                  alt="Attentive listening and compassionate humanized medical care"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Arch 2: Newborn & Maternal Care */}
              <div className="relative aspect-[9/15] w-full overflow-hidden rounded-t-[7rem] sm:rounded-t-[8rem] rounded-b-[2rem] shadow-2xl border border-white/30 mt-8 sm:mt-12 group">
                <Image
                  src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1000&auto=format&fit=crop"
                  alt="Newborn baby and mother care at VCUS Genesis"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

