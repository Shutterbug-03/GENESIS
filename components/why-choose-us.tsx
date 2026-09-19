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
    <section id="why-us" className="py-16 sm:py-20 bg-[#331137] text-white relative overflow-hidden">
      {/* Radiant Ambient Glow in background */}
      <div className="absolute top-0 right-1/4 -z-0 h-[480px] w-[480px] rounded-full bg-brand-pink-dark/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-0 h-[380px] w-[380px] rounded-full bg-brand-purple-medium/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Checklist */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#FAD6E7]">
                Why choose Genesis?
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-[1.15] tracking-tight">
                Why choose Genesis Women&apos;s Health?
              </h2>
            </div>

            <p className="text-base sm:text-lg text-brand-pink-subtle/90 font-light max-w-lg leading-relaxed">
              We understand that clinical excellence is incomplete without genuine warmth.
              Every visit is designed to give you peace of mind, unhurried time to ask questions,
              and care tailored to your unique journey.
            </p>

            <ul className="space-y-2.5 pt-2">
              {checklist.map((item, index) => (
                <li
                  key={index}
                  className="group flex items-center gap-3.5 py-2 px-2.5 rounded-xl hover:bg-white/[0.08] hover:backdrop-blur-sm transition-all duration-200 cursor-default"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-[#FAD6E7] border border-white/20 group-hover:bg-[#FAD6E7] group-hover:text-[#331137] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(250,214,231,0.5)] transition-all duration-300">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base text-white/90 group-hover:text-white font-light tracking-wide transition-colors duration-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Layered Editorial Image Showcase (Original Photos with New Architectural Layout) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl pb-12 sm:pb-14 pt-2 sm:pt-4">
              
              {/* Soft Radiant Ambient Aura */}
              <div className="absolute -inset-4 sm:-inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(250,214,231,0.18)_0%,rgba(110,45,117,0.25)_50%,transparent_75%)] blur-2xl pointer-events-none" />

              {/* Primary Visual Anchor Frame: Mother & Newborn Baby (Original Image) */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-[2.25rem] sm:rounded-[2.75rem] shadow-[0_25px_60px_-15px_rgba(10,2,12,0.85)] hover:shadow-[0_30px_70px_-10px_rgba(10,2,12,0.95)] border border-white/25 hover:border-white/40 bg-[#250629]/40 group ml-auto transition-all duration-700">
                <Image
                  src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1200&auto=format&fit=crop"
                  alt="Newborn baby and mother care at Genesis"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Subtle bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                {/* Minimal Top-Right Category Pill */}
                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 px-3.5 py-1.5 rounded-full bg-[#1C0420]/75 group-hover:bg-[#1C0420]/90 backdrop-blur-md border border-white/20 group-hover:border-white/30 shadow-md text-[10px] sm:text-[11px] font-light tracking-widest uppercase text-[#FAD6E7] transition-all duration-300">
                  Maternity Care
                </div>

                {/* Minimal Frosted Bottom Caption */}
                <div className="absolute bottom-3.5 right-4 sm:bottom-4 sm:right-5 max-w-[210px] py-2 px-3.5 rounded-xl bg-[#1C0420]/80 group-hover:bg-[#1C0420]/90 backdrop-blur-md border border-white/15 group-hover:border-white/25 text-right hidden min-[440px]:block transition-all duration-300">
                  <p className="font-serif text-xs sm:text-sm text-white font-normal group-hover:text-[#FCE1EE] transition-colors">
                    Generations of Trust
                  </p>
                  <p className="text-[10px] text-[#FAD6E7]/90 font-light tracking-wide">
                    Safe &amp; Humanized Delivery
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Accent Frame: Compassionate Doctor-Patient Hands (Original Image) */}
              <div className="absolute -bottom-2 left-2 sm:-bottom-6 sm:-left-6 w-[52%] sm:w-[48%] aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem] shadow-[0_20px_50px_rgba(0,0,0,0.9)] hover:shadow-[0_28px_65px_rgba(0,0,0,0.95)] border-[3px] sm:border-4 border-[#331137] ring-1 ring-white/25 hover:ring-white/45 bg-[#250629] group z-20 transition-all duration-500 hover:-translate-y-1.5">
                <Image
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop"
                  alt="Attentive listening and humanized clinical care"
                  fill
                  sizes="(max-width: 768px) 55vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />

                {/* Delicate gradient for bottom contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Minimal Pill on Secondary Frame */}
                <div className="absolute bottom-3 inset-x-3 sm:bottom-3.5 sm:inset-x-3.5 py-1.5 px-2.5 rounded-xl bg-[#1C0420]/85 group-hover:bg-[#1C0420]/95 backdrop-blur-md border border-white/20 text-center transition-all duration-300">
                  <p className="text-[10px] sm:text-[11px] font-normal text-white tracking-wide group-hover:text-[#FCE1EE] transition-colors">
                    Active Listening
                  </p>
                  <p className="text-[9px] text-[#FAD6E7] font-light uppercase tracking-wider">
                    Individualized Care
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
