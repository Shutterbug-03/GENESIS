"use client"

import * as React from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookingModal } from "@/components/booking-modal"
import {
  Phone,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const [bookingOpen, setBookingOpen] = React.useState(false)
  const [selectedService, setSelectedService] = React.useState<string | undefined>()

  const handleInquire = (serviceName: string) => {
    setSelectedService(serviceName)
    setBookingOpen(true)
  }

  const pathways = [
    {
      id: "01",
      pathwayTag: "PATHWAY 01",
      title: "GYNECOLOGY CARE",
      subheading: "General & specialist gynecology",
      intro:
        "Routine and complex concerns, handled with the same attention — whether it's a first consultation or a condition you've managed for years.",
      items: [
        "Menstrual disorders: irregular periods, heavy or painful cycles",
        "PCOS / PCOD diagnosis and long-term management",
        "Fibroids, ovarian cysts and endometriosis",
        "Pelvic infections and recurrent UTIs",
        "Contraceptive counseling",
        "Adolescent and menopausal gynecology",
      ],
      footerPill: "ROUTINE & SPECIALIZED CARE",
    },
    {
      id: "02",
      pathwayTag: "PATHWAY 02",
      title: "OBSTETRICS & MATERNITY",
      subheading: "Pregnancy, delivery & recovery",
      intro:
        "Antenatal monitoring through postnatal recovery, with particular experience in high-risk pregnancies.",
      items: [
        "Antenatal check-ups and fetal growth monitoring",
        "High-risk pregnancy care: pre-eclampsia, gestational diabetes",
        "Labor support, physiological delivery, cesarean section & VBAC at partner hospitals (Cloudnine, Columbia Asia, Milan)",
        "Postnatal recovery and lactation guidance",
      ],
      footerPill: "TRIMESTER-TO-TRIMESTER CONTINUITY",
    },
    {
      id: "03",
      pathwayTag: "PATHWAY 03",
      title: "FERTILITY SUPPORT",
      subheading: "Fertility & infertility care",
      intro:
        "Level-one evaluation and counseling for couples trying to conceive, informed by Dr. Sheshgiri's Certified Diploma in Artificial Reproductive Techniques (ART) from Germany (2015).",
      items: [
        "Level-one infertility evaluation for couples",
        "Ovulation tracking and fertility counseling",
        "Guided referral pathway for advanced ART where needed",
      ],
      footerPill: "GERMANY CERTIFIED ART PROTOCOL",
    },
    {
      id: "04",
      pathwayTag: "PATHWAY 04",
      title: "PREVENTIVE SCREENING",
      subheading: "Screenings worth doing early",
      intro:
        "Preventive checks that catch what's treatable before it becomes urgent — recommended for every woman above 30.",
      items: [
        "Pap smear and HPV testing",
        "Breast health examinations",
        "Thyroid, anemia and hormonal profiling",
        "Bone health checks for women over 40",
      ],
      footerPill: "RECOMMENDED AGE 30+ ROUTINE",
    },
    {
      id: "05",
      pathwayTag: "PATHWAY 05",
      title: "MENOPAUSE & MIDLIFE",
      subheading: "Menopause & hormonal health",
      intro:
        "Support through perimenopause and beyond, covering the physical and emotional shifts of the transition.",
      items: [
        "Hormone therapy where appropriate",
        "Bone density and cardiovascular screening",
        "Support for mood, sleep and energy changes",
      ],
      footerPill: "HOLISTIC MIDLIFE WELLNESS",
    },
    {
      id: "06",
      pathwayTag: "PATHWAY 06",
      title: "DIAGNOSTICS & LABS",
      subheading: "In-house diagnostics",
      intro:
        "Ultrasound and laboratory testing on site, so treatment isn't delayed by waiting on outside results.",
      items: [
        "Ultrasound scanning for antenatal and gynecological needs",
        "On-site blood, urine and hormonal testing",
      ],
      footerPill: "RAPID SAME-DAY ASSESSMENT",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F9]">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="flex-1">
        {/* ── Gradient Page Hero ─────────────────────────────── */}
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-40 lg:pb-28 text-center bg-gradient-to-b from-[#250629] via-[#3A0D3E] via-30% via-[#7B2461] via-65% via-[#CFA0BE] via-88% to-[#FAF6F9]">
          {/* Ambient glow orbs */}
          <div className="absolute top-0 left-1/3 w-[500px] h-[350px] rounded-full bg-[radial-gradient(ellipse,rgba(242,201,220,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-[400px] h-[300px] rounded-full bg-[radial-gradient(ellipse,rgba(110,45,117,0.20)_0%,transparent_70%)] blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs font-semibold uppercase tracking-[0.22em] text-[#FAD6E7] mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FAD6E7] animate-pulse" />
              Care Pathways &amp; Clinical Offerings
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal tracking-tight mb-5">
              Services
            </h1>

            <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto font-light leading-relaxed">
              Genesis brings gynecology, obstetrics, fertility support and preventive
              care into one continuous relationship — so your history doesn&apos;t reset
              every time you walk in.
            </p>

            {/* Quick Filter Badges — frosted glass */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs text-white font-medium">
                <Clock className="h-3.5 w-3.5 text-[#FAD6E7]" />
                Unhurried Consultations
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs text-white font-medium">
                <ShieldCheck className="h-3.5 w-3.5 text-[#FAD6E7]" />
                Evidence-Guided Protocol
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs text-white font-medium">
                <Sparkles className="h-3.5 w-3.5 text-[#FAD6E7]" />
                In-House Labs &amp; Ultrasound
              </span>
            </div>
          </div>
        </section>

        {/* ── Light content body ──────────────────────────────────── */}
        <div className="bg-[#FAF6F9] pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24 pt-4">
          
          {/* Continuous Healthcare Philosophy Feature Card (from screen copy.png) */}
          <section className="rounded-3xl sm:rounded-4xl bg-white border border-brand-pink-border p-6 sm:p-10 shadow-xs glow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-brand-pink-border/80">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop"
                  alt="Doctor consulting with patient"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[11px] font-medium text-brand-purple shadow-xs border border-brand-pink-border">
                  Led by Dr. Uma Sheshgiri
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink-dark">
                  Continuous Healthcare Philosophy
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-brand-charcoal leading-snug">
                  Clinical precision wrapped in compassionate, unhurried warmth.
                </h2>
                <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
                  From early adulthood menstrual rhythms to advanced reproductive diagnostics,
                  prenatal delivery plans, and midlife hormonal equilibrium, our care pathway is
                  built as a serene sanctuary tailored uniquely to each individual stage.
                </p>
              </div>
            </div>
          </section>

          {/* 6 Pathways Grid (from screen copy.png) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {pathways.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-3xl bg-white border border-brand-pink-border p-6 sm:p-8 shadow-xs hover:shadow-[0_12px_40px_rgba(194,110,146,0.18)] hover:border-brand-pink-dark/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Large watermark number */}
                <span className="absolute top-6 right-8 font-mono text-4xl sm:text-5xl font-light text-brand-pink-light/40 select-none pointer-events-none">
                  {item.id}
                </span>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-pink-dark">
                      {item.pathwayTag}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-brand-charcoal group-hover:text-brand-purple transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-brand-purple uppercase tracking-wider">
                      {item.subheading}
                    </p>
                  </div>

                  <p className="text-sm text-brand-muted font-light leading-relaxed">
                    {item.intro}
                  </p>

                  <ul className="space-y-2.5 pt-2 border-t border-brand-pink-border/50">
                    {item.items.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-charcoal font-light">
                        <CheckCircle2 className="h-4 w-4 text-brand-pink-dark shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-pink-border/50 flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-brand-muted uppercase">
                    • {item.footerPill}
                  </span>

                  <button
                    onClick={() => handleInquire(item.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-purple hover:text-brand-purple-dark group-hover:translate-x-1 transition-all"
                  >
                    <span>Inquire now</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </section>

          {/* The Genesis Distinction Section */}
          <section className="rounded-3xl sm:rounded-4xl bg-gradient-to-br from-[#F8EEF4] to-[#F3E3EF] p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                  The Genesis Distinction
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl text-brand-charcoal font-normal leading-tight">
                  A patient space where you are seen, heard, and never rushed.
                </h2>
                <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
                  Healthcare should feel like a safe haven, not an impersonal checklist. Every
                  diagnostic evaluation at Genesis Women&apos;s Health takes place in an atmosphere of dignity
                  and emotional clarity, allowing you to ask questions without time pressure.
                </p>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-brand-pink-border shadow-2xs">
                    <p className="font-serif text-2xl sm:text-3xl font-medium text-brand-purple">45+ Yrs</p>
                    <p className="text-[10px] sm:text-xs text-brand-muted mt-1 uppercase tracking-wider">
                      Continuous Medical Authority
                    </p>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-brand-pink-border shadow-2xs">
                    <p className="font-serif text-2xl sm:text-3xl font-medium text-brand-purple">100%</p>
                    <p className="text-[10px] sm:text-xs text-brand-muted mt-1 uppercase tracking-wider">
                      Individualized Consultations
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative aspect-[4/3] sm:aspect-[3/4] w-full max-w-sm rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border-4 border-white shadow-lg glow-pink-sm">
                  <Image
                    src="/images/genesis_distinction_sanctuary.jpg"
                    alt="Serene, unhurried patient consultation sanctuary at Genesis"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-deep/20 to-transparent" />
                </div>
              </div>

            </div>
          </section>

          {/* Closing CTA Banner */}
          <section className="relative overflow-hidden rounded-3xl sm:rounded-4xl bg-gradient-to-br from-[#250629] via-[#4A1B4F] to-[#331137] text-white p-6 sm:p-10 lg:p-14 text-center">
            {/* Ambient glow */}
            <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#C26E92]/30 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#904797]/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-brand-pink-light">
                Personalized Triage &amp; Guidance
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                Not sure which service you need? Call and describe what&apos;s going on.
              </h2>

              <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed">
                Our clinic team is here to listen and help direct you to the most comforting,
                timely medical consultation with Dr. Uma Sheshgiri.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+919900098736"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-purple text-white hover:bg-brand-purple-deep border border-brand-pink-border px-8 py-3.5 text-sm sm:text-base font-semibold shadow-md hover:shadow-[0_0_25px_rgba(236,197,214,0.45)] transition-all"
                >
                  <Phone className="h-4 w-4 text-brand-pink-light" />
                  <span>Call +91 99000 98736</span>
                </a>

                <Button
                  onClick={() => {
                    setSelectedService("General Consultation")
                    setBookingOpen(true)
                  }}
                  variant="white"
                  size="lg"
                  className="rounded-full font-semibold shadow-md"
                >
                  Request Online Slot
                </Button>
              </div>
            </div>
          </section>

        </div>
        </div>
      </main>

      <Footer />
      <BookingModal
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        initialService={selectedService}
      />
    </div>
  )
}
