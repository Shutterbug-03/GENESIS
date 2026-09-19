import * as React from "react"
import Image from "next/image"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "From my very first visit I felt cared for and safe. The attention and the humanized approach made a real difference in my experience.",
      name: "Ananya S.",
      context: "Gynecology Care Patient",
      avatar: "/images/patient_ananya.jpg",
    },
    {
      quote:
        "An extremely attentive and welcoming clinic. I felt heard at every step, with warmth, professionalism and real safety.",
      name: "Priya M.",
      context: "Antenatal Care Patient",
      avatar: "/images/patient_priya.jpg",
    },
    {
      quote:
        "Throughout my whole pregnancy I felt calm and confident. The humanized care made the whole journey feel lighter and more special.",
      name: "Kavya R.",
      context: "Maternity & Delivery Support",
      avatar: "/images/patient_kavya.jpg",
    },
  ]

  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-[#FAF6F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-32">
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-brand-purple">
              PATIENT EXPERIENCES
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-charcoal leading-[1.12] tracking-tight">
              What patients <span className="italic font-light text-brand-pink-dark">say</span>
            </h2>

            <p className="text-sm text-brand-muted font-light leading-relaxed pt-1">
              Reflections of care from generations of women and families welcomed at New BEL Road, Bengaluru.
            </p>
          </div>

          {/* Right Column: Premium Testimonial Rows with Indian Patient Avatars */}
          <div className="lg:col-span-8 space-y-4">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="group flex flex-row gap-3.5 sm:gap-6 items-start p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-transparent hover:border-brand-pink-border/70 hover:bg-white/85 hover:shadow-[0_12px_35px_-8px_rgba(194,110,146,0.18)] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                {/* Circular Patient Avatar — Guaranteed non-collapsing circular portrait */}
                <div
                  className="relative w-14 h-14 min-w-14 min-h-14 sm:w-20 sm:h-20 sm:min-w-20 sm:min-h-20 shrink-0 aspect-square rounded-full border-2 border-brand-pink-border group-hover:border-brand-purple/50 group-hover:shadow-[0_0_20px_rgba(194,110,146,0.32)] bg-white p-0.5 shadow-sm transition-all duration-300 overflow-hidden"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  <Image
                    src={item.avatar}
                    alt={`Patient portrait of ${item.name}`}
                    width={80}
                    height={80}
                    priority={index === 0}
                    className="h-full w-full rounded-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Quote and Author Details */}
                <div className="space-y-2 sm:space-y-2.5 flex-1 min-w-0">
                  {/* 5-Star Patient Rating */}
                  <div className="flex items-center gap-1 text-[#C26E92]" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-[#C26E92] text-[#C26E92]" />
                    ))}
                  </div>

                  <p className="font-serif text-base sm:text-lg lg:text-xl text-brand-charcoal font-normal leading-relaxed italic text-[#221725] group-hover:text-black transition-colors duration-200">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="pt-0.5 flex flex-col space-y-0.5">
                    <h3 className="font-sans text-sm sm:text-base font-semibold text-brand-purple group-hover:text-brand-purple-dark tracking-tight transition-colors duration-200">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-pink-dark font-medium tracking-wide">
                      {item.context}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
