"use client"

import * as React from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookingModal } from "@/components/booking-modal"
import {
  Heart,
  CalendarCheck,
  Phone,
  Clock,
  MapPin,
  Mail,
  GraduationCap,
  Award,
  CheckCircle2,
  ArrowUpRight,
  Building2,
  ShieldCheck,
  Users2,
  Quote,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const [bookingOpen, setBookingOpen] = React.useState(false)

  const timeline = [
    {
      phase: "PHASE 01 • 1978",
      title: "Medical Foundation",
      degree: "MBBS — M.R. Medical College, Gulbarga",
      description:
        "Comprehensive undergraduate clinical immersion establishing lifelong dedication to patient empathy, surgical discipline, and clinical ethics.",
      badge: "Graduated 1978",
    },
    {
      phase: "PHASE 02 • 1982",
      title: "Postgraduate Diploma",
      degree: "DGO (Obstetrics & Gynaecology) — M.R. Medical College, Gulbarga",
      description:
        "Specialized postgraduate training in Obstetrics and Gynaecology, mastering antenatal protocols, maternal care, and labor ward management.",
      badge: "Specialized 1982",
    },
    {
      phase: "PHASE 03 • 1998",
      title: "Doctor of Medicine (MD)",
      degree: "MD (Obstetrics & Gynaecology) — Bangalore Medical College",
      description:
        "Advanced tertiary mastery at Karnataka's apex medical academy, managing high-risk pregnancies, obstetric emergencies, and complex gynecological surgeries.",
      badge: "BMC Alumna • 1998",
    },
    {
      phase: "PHASE 04 • 2015",
      title: "Certified International Fellowship",
      degree: "Certified Diploma in ART — Germany",
      description:
        "Advanced training in Assisted Reproductive Techniques (ART), integrating European evidence-based fertility protocols with patient-sparing conservative ethics.",
      badge: "Germany Certified • 2015",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F9]">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="flex-1">
        {/* ── Gradient Page Hero ─────────────────────────────── */}
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-40 lg:pb-28 bg-gradient-to-b from-[#250629] via-[#3A0D3E] via-28% via-[#7B2461] via-62% via-[#CFA0BE] via-86% to-[#FAF6F9]">
          {/* Ambient glow orbs */}
          <div className="absolute top-0 left-1/4 w-[550px] h-[380px] rounded-full bg-[radial-gradient(ellipse,rgba(242,201,220,0.16)_0%,transparent_70%)] blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-[420px] h-[300px] rounded-full bg-[radial-gradient(ellipse,rgba(110,45,117,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Heading & Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs font-semibold uppercase tracking-[0.22em] text-[#FAD6E7]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FAD6E7]" />
                  Continuity of Care Since 1984
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.1]">
                  About Genesis
                </h1>

                <p className="font-serif text-xl sm:text-2xl text-[#FAD6E7] font-light italic leading-relaxed">
                  &ldquo;A lifelong medical sanctuary where generations of mothers, daughters,
                  and families find comfort, clarity, and steadfast clinical guidance.&rdquo;
                </p>

                <p className="text-base sm:text-lg text-white/85 font-light leading-relaxed">
                  Genesis was built on a simple premise: that women&apos;s health needed a clinic,
                  not a series of one-off appointments. Led by Dr. Uma Sheshgiri, the practice on
                  New BEL Road has grown into a place where check-ups, pregnancies, fertility
                  questions and midlife changes are handled by people who already know your history.
                </p>

                <div className="pt-2 flex flex-wrap gap-2.5 text-xs">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-medium">
                    Unhurried Clinical Dialogue
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-medium">
                    Multi-Generational Trust
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-medium">
                    Specialized Reproductive Medicine
                  </span>
                </div>
              </div>

              {/* Right Column: Care Philosophy Card — frosted dark glass */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl sm:rounded-4xl bg-[#1C0420]/70 backdrop-blur-sm border border-white/15 p-6 sm:p-8 shadow-xl space-y-6">
                  <div className="flex items-center justify-between border-b border-white/15 pb-4">
                    <div>
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-[#FAD6E7]">
                        Care Philosophy
                      </span>
                      <h3 className="font-serif text-xl font-medium text-white">
                        The Genesis Arch
                      </h3>
                    </div>
                    <Heart className="h-5 w-5 text-[#FAD6E7] fill-[#FAD6E7]/30" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 border border-white/20 text-xs font-mono font-semibold text-[#FAD6E7]">
                        01
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          Human Connection First
                        </h4>
                        <p className="text-xs text-white/70 font-light mt-0.5 leading-relaxed">
                          We prioritize deep diagnostic conversations before prescribing medical pathways.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 border border-white/20 text-xs font-mono font-semibold text-[#FAD6E7]">
                        02
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          Evidence &amp; International Standards
                        </h4>
                        <p className="text-xs text-white/70 font-light mt-0.5 leading-relaxed">
                          Rigorous protocols learned across Bangalore Medical College and Kiel University, Germany.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 border border-white/20 text-xs font-mono font-semibold text-[#FAD6E7]">
                        03
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          Generational Continuity
                        </h4>
                        <p className="text-xs text-white/70 font-light mt-0.5 leading-relaxed">
                          Babies Dr. Uma delivered over 45 years ago now return to embark on their own parenthood.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Light content body ────────────────────────────────────── */}
        <div className="bg-[#FAF6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28 pt-6">
          
          {/* Section: Physician Profile & Clinical Leadership (from screen.png) */}
          <section className="space-y-12">
            <div className="text-center space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink-dark">
                Physician Profile &amp; Clinical Leadership
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-charcoal">
                Compassion Rooted in 45+ Years of Mastery
              </h2>
            </div>

            <div className="rounded-3xl sm:rounded-4xl bg-white border border-brand-pink-border p-6 sm:p-12 shadow-xs glow-card">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Arched Photo */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative aspect-[3/4] w-full max-w-sm rounded-[2.5rem] overflow-hidden border-4 border-white shadow-lg glow-pink-sm">
                    <Image
                      src="/images/dr_uma_clinic.jpg"
                      alt="Dr. Uma Sheshgiri, Senior Obstetrician & Gynaecologist"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-deep/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-center py-2 px-3 rounded-full bg-white/95 backdrop-blur-xs text-xs font-semibold text-brand-purple shadow-xs border border-brand-pink-border">
                      Chairman, IMA-AMS Bangalore Chapter
                    </div>
                  </div>
                </div>

                {/* Right Bio & Stats */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-1.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink-subtle border border-brand-pink-border text-xs font-semibold text-brand-purple">
                      Senior Obstetrician &amp; Gynaecologist
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-medium text-brand-charcoal pt-1">
                      Dr. Uma Sheshgiri, <span className="text-xl font-normal text-brand-muted">MBBS, DGO, MD (OBG)</span>
                    </h3>
                    <p className="text-sm font-medium text-brand-pink-dark">
                      45+ years of clinical experience • 15 years Govt of Karnataka service
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
                    Senior Obstetrician &amp; Gynaecologist with 45+ years of clinical experience, including 15 years of distinguished service with the Government of Karnataka. Experienced in public-sector healthcare, women&apos;s health, clinical leadership, and professional medical organisations. Served as Superintendent of K.R. Puram General Hospital and held prominent leadership positions in the Indian Medical Association (IMA). Currently serving as Chairman, IMA Academy of Medical Specialties (IMA-AMS), Bangalore Chapter.
                  </p>

                  {/* 4 Stat Chips in a clean responsive grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-2">
                    <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-brand-pink-subtle/70 border border-brand-pink-border text-center">
                      <p className="font-serif text-lg sm:text-2xl font-semibold text-brand-purple">45+</p>
                      <p className="text-[9px] sm:text-[10px] text-brand-muted uppercase tracking-wider mt-0.5 leading-tight">Yrs Experience</p>
                    </div>
                    <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-brand-pink-subtle/70 border border-brand-pink-border text-center">
                      <p className="font-serif text-lg sm:text-2xl font-semibold text-brand-purple">15 Yrs</p>
                      <p className="text-[9px] sm:text-[10px] text-brand-muted uppercase tracking-wider mt-0.5 leading-tight">Govt Service</p>
                    </div>
                    <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-brand-pink-subtle/70 border border-brand-pink-border text-center">
                      <p className="font-serif text-lg sm:text-2xl font-semibold text-brand-purple">Chairman</p>
                      <p className="text-[9px] sm:text-[10px] text-brand-muted uppercase tracking-wider mt-0.5 leading-tight">IMA-AMS Blr</p>
                    </div>
                    <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-brand-pink-subtle/70 border border-brand-pink-border text-center">
                      <p className="font-serif text-lg sm:text-2xl font-semibold text-brand-purple">ART Dip.</p>
                      <p className="text-[9px] sm:text-[10px] text-brand-muted uppercase tracking-wider mt-0.5 leading-tight">Germany 2015</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap gap-3">
                    <Button
                      onClick={() => setBookingOpen(true)}
                      className="rounded-full bg-brand-purple hover:bg-brand-purple-dark text-white px-6 py-2.5 text-sm font-medium shadow-sm hover:shadow-[0_0_20px_rgba(194,110,146,0.35)]"
                    >
                      <CalendarCheck className="h-4 w-4 mr-2" />
                      Schedule with Dr. Uma
                    </Button>
                    <a
                      href="tel:+919900098736"
                      className="inline-flex items-center gap-2 rounded-full border border-brand-pink-border bg-brand-pink-subtle/40 px-5 py-2.5 text-xs sm:text-sm font-medium text-brand-purple hover:bg-brand-pink-subtle transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5 text-brand-pink-dark" />
                      Direct Clinical Inquiries
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Section: Academic Foundation & Legacy (Career Timeline from screen.png) */}
          <section className="space-y-12">
            <div className="text-center space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink-dark">
                Academic Foundation &amp; Legacy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-charcoal">
                A Landmark Medical Journey
              </h2>
              <p className="text-sm text-brand-muted font-light max-w-xl mx-auto">
                From premier surgical academies in India to specialized ART fellowship in Germany.
              </p>
            </div>

            {/* Vertical Alternating Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Central vertical spine line */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-brand-pink-border" />

              <div className="space-y-8 md:space-y-12">
                {timeline.map((item, idx) => {
                  const isEven = idx % 2 === 0
                  return (
                    <div
                      key={idx}
                      className={`relative flex flex-col md:flex-row items-center gap-6 ${
                        isEven ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Timeline Content Card */}
                      <div className="w-full md:w-[46%] rounded-3xl bg-white border border-brand-pink-border p-6 sm:p-7 shadow-xs hover:shadow-md transition-all">
                        <span className="text-[10px] font-mono font-semibold tracking-widest text-brand-pink-dark uppercase">
                          {item.phase}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-medium text-brand-charcoal mt-1">
                          {item.title}
                        </h3>
                        <p className="text-xs font-medium text-brand-purple mt-1">
                          {item.degree}
                        </p>
                        <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed mt-2.5">
                          {item.description}
                        </p>
                      </div>

                      {/* Center Node Icon */}
                      <div className="hidden md:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-purple text-white border-4 border-[#FAF6F9] shadow-sm z-10">
                        <GraduationCap className="h-4 w-4" />
                      </div>

                      {/* Opposite Side Badge / Milestone marker */}
                      <div className={`hidden md:block w-[46%] ${isEven ? "text-left pl-4" : "text-right pr-4"}`}>
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-pink-subtle border border-brand-pink-border text-xs font-medium text-brand-purple">
                          <Award className="h-3.5 w-3.5 text-brand-pink-dark" />
                          {item.badge}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Section: Public Service, Leadership & Accreditations (from updated CV) */}
          <section className="space-y-12">
            <div className="text-center space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink-dark">
                Public Service &amp; Professional Governance
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-charcoal">
                A Distinguished Record of Healthcare Leadership
              </h2>
              <p className="text-sm text-brand-muted font-light max-w-2xl mx-auto">
                Combining 15 years of public-sector hospital governance with prominent leadership roles across state and national medical associations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Card 1: 15 Years Government Service */}
              <div className="rounded-3xl bg-white border border-brand-pink-border p-7 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink-subtle border border-brand-pink-border text-xs font-semibold text-brand-purple">
                      <Building2 className="h-3.5 w-3.5 text-brand-pink-dark" />
                      15 Years Government Service
                    </span>
                    <span className="text-xs font-mono font-medium text-brand-muted">Karnataka</span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-medium text-brand-charcoal">
                      Retired Superintendent, K.R. Puram General Hospital
                    </h3>
                    <p className="text-xs font-medium text-brand-purple mt-1">
                      Government of Karnataka • Public Healthcare Administration
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                    Served the Government of Karnataka in various capacities for 15 years. Led as Superintendent of K.R. Puram General Hospital, directing clinical maternity protocols, community healthcare initiatives, and hospital administrative operations.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-brand-pink-border/50">
                    <div className="flex items-start gap-2 text-xs text-brand-charcoal">
                      <CheckCircle2 className="h-4 w-4 text-brand-pink-dark shrink-0 mt-0.5" />
                      <span>Extensive public-sector clinical care &amp; maternal health delivery</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-brand-charcoal">
                      <CheckCircle2 className="h-4 w-4 text-brand-pink-dark shrink-0 mt-0.5" />
                      <span>Superintendent leadership over multidisciplinary medical teams</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-brand-charcoal">
                      <CheckCircle2 className="h-4 w-4 text-brand-pink-dark shrink-0 mt-0.5" />
                      <span>Dedicated community-oriented healthcare &amp; preventive health drives</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: IMA Leadership & Medical Governance */}
              <div className="rounded-3xl bg-white border border-brand-pink-border p-7 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink-subtle border border-brand-pink-border text-xs font-semibold text-brand-purple">
                      <ShieldCheck className="h-3.5 w-3.5 text-brand-pink-dark" />
                      Medical Association Leadership
                    </span>
                    <span className="text-xs font-mono font-medium text-brand-muted">IMA Leadership</span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-medium text-brand-charcoal">
                      Chairman, IMA-AMS Bangalore Chapter
                    </h3>
                    <p className="text-xs font-medium text-brand-purple mt-1">
                      Indian Medical Association Academy of Medical Specialties
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                    A cornerstone of professional medical governance in Bengaluru, serving continuously in executive leadership roles within the Indian Medical Association since 2001.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-brand-pink-border/50">
                    <div className="flex items-start gap-2 text-xs text-brand-charcoal">
                      <CheckCircle2 className="h-4 w-4 text-brand-pink-dark shrink-0 mt-0.5" />
                      <span><strong>Chairman</strong>, IMA Academy of Medical Specialties (IMA-AMS), Bangalore Chapter — Current</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-brand-charcoal">
                      <CheckCircle2 className="h-4 w-4 text-brand-pink-dark shrink-0 mt-0.5" />
                      <span><strong>President</strong>, IMA Bangalore Branch (2013–2015)</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-brand-charcoal">
                      <CheckCircle2 className="h-4 w-4 text-brand-pink-dark shrink-0 mt-0.5" />
                      <span><strong>Honorary Secretary</strong>, IMA Bangalore Branch (2003–2004)</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-brand-charcoal">
                      <CheckCircle2 className="h-4 w-4 text-brand-pink-dark shrink-0 mt-0.5" />
                      <span><strong>Senior Vice President</strong>, IMA Karnataka State &bull; Executive Committee from 2001</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Awards & Recognition */}
              <div className="rounded-3xl bg-white border border-brand-pink-border p-7 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink-subtle border border-brand-pink-border text-xs font-semibold text-brand-purple">
                      <Award className="h-3.5 w-3.5 text-brand-pink-dark" />
                      Honors &amp; Recognition
                    </span>
                    <span className="text-xs font-mono font-medium text-brand-muted">National &amp; State</span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-medium text-brand-charcoal">
                      State &amp; National Medical Honors
                    </h3>
                    <p className="text-xs font-medium text-brand-purple mt-1">
                      Awarded for scientific sessions &amp; medical community development
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                    Honored by premier medical authorities for outstanding institutional leadership, academic session curation, and expanding the medical fraternity.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-brand-pink-border/50">
                    <div className="flex items-start gap-2 text-xs text-brand-charcoal">
                      <CheckCircle2 className="h-4 w-4 text-brand-pink-dark shrink-0 mt-0.5" />
                      <span><strong>Best Branch Award</strong> — IMA Karnataka State (2013)</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-brand-charcoal">
                      <CheckCircle2 className="h-4 w-4 text-brand-pink-dark shrink-0 mt-0.5" />
                      <span><strong>National Award for Best Scientific Session</strong> (2013)</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-brand-charcoal">
                      <CheckCircle2 className="h-4 w-4 text-brand-pink-dark shrink-0 mt-0.5" />
                      <span><strong>National Award for Maximum Member Installations</strong>, IMA Bangalore Branch (2015)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Professional Memberships */}
              <div className="rounded-3xl bg-white border border-brand-pink-border p-7 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink-subtle border border-brand-pink-border text-xs font-semibold text-brand-purple">
                      <Users2 className="h-3.5 w-3.5 text-brand-pink-dark" />
                      Professional Fellowships
                    </span>
                    <span className="text-xs font-mono font-medium text-brand-muted">Apex Societies</span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-medium text-brand-charcoal">
                      Life Memberships &amp; Affiliations
                    </h3>
                    <p className="text-xs font-medium text-brand-purple mt-1">
                      Active participant in India&apos;s leading obstetric and medical societies
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                    Committed to advancing clinical guidelines, continuing medical education, and ethical healthcare through active life memberships in prestigious councils.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-brand-pink-border/50">
                    <div className="flex items-start gap-2 text-xs text-brand-charcoal">
                      <CheckCircle2 className="h-4 w-4 text-brand-pink-dark shrink-0 mt-0.5" />
                      <span><strong>BSOG</strong>: Life Member, Bangalore Society of Obstetrics &amp; Gynaecology</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-brand-charcoal">
                      <CheckCircle2 className="h-4 w-4 text-brand-pink-dark shrink-0 mt-0.5" />
                      <span><strong>FOGSI</strong>: Life Member, Federation of Obstetric and Gynaecological Societies of India</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-brand-charcoal">
                      <CheckCircle2 className="h-4 w-4 text-brand-pink-dark shrink-0 mt-0.5" />
                      <span><strong>IMA</strong>: Life Member, Indian Medical Association</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-brand-charcoal">
                      <CheckCircle2 className="h-4 w-4 text-brand-pink-dark shrink-0 mt-0.5" />
                      <span><strong>IMA-AMS</strong>: Life Member, IMA Academy of Medical Specialties</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Section: Leadership Philosophy Quote */}
          <section>
            {/* Elegant Quote Banner */}
            <div className="rounded-3xl sm:rounded-4xl bg-gradient-to-br from-[#250629] via-[#3D0F40] to-[#5C1A58] text-white p-8 sm:p-12 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse,rgba(242,201,220,0.15)_0%,transparent_70%)] blur-2xl pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
                <Quote className="h-8 w-8 text-[#FAD6E7] mx-auto opacity-80" />
                <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FCE1EE] font-light italic leading-relaxed">
                  &ldquo;Committed to women&apos;s health, compassionate clinical care and meaningful medical leadership.&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed max-w-2xl mx-auto pt-2">
                  Dr. Uma Sheshgiri has combined long-standing clinical practice in Obstetrics &amp; Gynaecology with public-sector service and leadership in the medical profession. Her experience spans hospital administration, women&apos;s healthcare, professional association leadership, scientific and educational activities, and community-oriented healthcare.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Current Clinical Practice & Hospital Network */}
          <section className="space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink-dark">
                Clinical Practice Network
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-charcoal">
                Where Dr. Uma Sheshgiri Consults &amp; Operates
              </h2>
              <p className="text-sm text-brand-muted font-light max-w-2xl mx-auto">
                Consultations and outpatient diagnostics at our peaceful New BEL Road sanctuary, with admitting and delivery privileges at Bengaluru&apos;s leading tertiary centers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              
              <div className="rounded-3xl bg-gradient-to-br from-[#F9EDF5] to-[#F3E3EF] p-6 border border-brand-pink-border shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-purple bg-white/70 px-2.5 py-1 rounded-full inline-block border border-brand-pink-border">
                    Primary Outpatient Sanctuary
                  </span>
                  <h3 className="font-serif text-xl font-medium text-brand-charcoal">
                    VCUS Health Centre / Genesis
                  </h3>
                  <p className="text-xs text-brand-purple font-medium">
                    New BEL Road, Bengaluru
                  </p>
                  <p className="text-xs text-brand-muted font-light leading-relaxed pt-1">
                    Consultant in Obstetrics &amp; Gynaecology. Dedicated sanctuary for unhurried 30-minute consultations, antenatal check-ups, diagnostics &amp; fertility evaluations.
                  </p>
                </div>
                <div className="text-[11px] text-brand-pink-dark font-medium pt-2 border-t border-brand-pink-border/50">
                  Daily Outpatient Consultations
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 border border-brand-pink-border shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-purple bg-brand-pink-subtle px-2.5 py-1 rounded-full inline-block border border-brand-pink-border">
                    Maternity &amp; Inpatient Privileges
                  </span>
                  <h3 className="font-serif text-xl font-medium text-brand-charcoal">
                    Cloudnine Hospital
                  </h3>
                  <p className="text-xs text-brand-purple font-medium">
                    Malleswaram, Bengaluru
                  </p>
                  <p className="text-xs text-brand-muted font-light leading-relaxed pt-1">
                    Consultant in Obstetrics &amp; Gynaecology. Admitting consultant for natural deliveries, cesarean births, and neonatal backup with Level-3 NICU infrastructure.
                  </p>
                </div>
                <div className="text-[11px] text-brand-pink-dark font-medium pt-2 border-t border-brand-pink-border/50">
                  Admitting &amp; Delivery Privileges
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 border border-brand-pink-border shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-purple bg-brand-pink-subtle px-2.5 py-1 rounded-full inline-block border border-brand-pink-border">
                    Specialized Inpatient Care
                  </span>
                  <h3 className="font-serif text-xl font-medium text-brand-charcoal">
                    Milan Hospital
                  </h3>
                  <p className="text-xs text-brand-purple font-medium">
                    Kumara Park West, Bengaluru
                  </p>
                  <p className="text-xs text-brand-muted font-light leading-relaxed pt-1">
                    Consultant in Obstetrics &amp; Gynaecology. Comprehensive reproductive medicine facilities, specialized maternity suites, and operative procedures.
                  </p>
                </div>
                <div className="text-[11px] text-brand-pink-dark font-medium pt-2 border-t border-brand-pink-border/50">
                  Consultant &amp; Surgical Privileges
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 border border-brand-pink-border shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-purple bg-brand-pink-subtle px-2.5 py-1 rounded-full inline-block border border-brand-pink-border">
                    Multidisciplinary Tertiary
                  </span>
                  <h3 className="font-serif text-xl font-medium text-brand-charcoal">
                    Columbia Asia Hospital
                  </h3>
                  <p className="text-xs text-brand-purple font-medium">
                    Yeshwanthpur, Bengaluru
                  </p>
                  <p className="text-xs text-brand-muted font-light leading-relaxed pt-1">
                    Consultant in Obstetrics &amp; Gynaecology. State-of-the-art apex hospital infrastructure for high-risk maternal vigilance and complex operative care.
                  </p>
                </div>
                <div className="text-[11px] text-brand-pink-dark font-medium pt-2 border-t border-brand-pink-border/50">
                  Consultant &amp; Inpatient Privileges
                </div>
              </div>

            </div>
          </section>

          {/* Section: The Team Behind Every Visit (from screen.png) */}
          <section className="rounded-3xl sm:rounded-4xl bg-white border border-brand-pink-border p-8 sm:p-12 shadow-xs glow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink-dark">
                    The Team Behind Every Visit
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-normal leading-tight">
                    Care doesn&apos;t happen alone
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
                  Dr. Sheshgiri works alongside a team of nurses, lab technicians and
                  counselors who carry the same unhurried approach into every visit — from
                  the front desk to the delivery room. Modern consultation rooms, on-site
                  diagnostics and short waiting times mean the focus stays on the
                  conversation, not the logistics around it.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-brand-pink-dark shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-brand-charcoal">Dedicated Gynecological Nurses</h4>
                      <p className="text-xs text-brand-muted font-light">Attentive, gentle care through prep, vital checks, and post-procedure solace.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-brand-pink-dark shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-brand-charcoal">Certified Lab Technicians</h4>
                      <p className="text-xs text-brand-muted font-light">Rapid, meticulous on-site blood panels, hormone testing, and microscopy.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-brand-pink-dark shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-brand-charcoal">Maternal &amp; Fertility Counselors</h4>
                      <p className="text-xs text-brand-muted font-light">Compassionate mental wellness guidance for IVF journeys and postpartum shifts.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Dual Team Photos */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="rounded-2xl overflow-hidden border border-brand-pink-border bg-brand-pink-subtle/30 shadow-xs">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop"
                      alt="Unhurried Consultations"
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h4 className="text-sm font-semibold text-brand-charcoal">Unhurried Consultations</h4>
                    <p className="text-xs text-brand-muted font-light leading-relaxed">
                      Acoustically quiet consultation chambers suited to give privacy and space for questions without time stress.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-brand-pink-border bg-brand-pink-subtle/30 shadow-xs">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop"
                      alt="Empathetic Frontline"
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h4 className="text-sm font-semibold text-brand-charcoal">Empathetic Frontline</h4>
                    <p className="text-xs text-brand-muted font-light leading-relaxed">
                      Warm front-desk triage and immediate coordination ensure you never feel like just another patient file.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Section: Visit Genesis */}
          <section className="space-y-8">
            <div className="text-center space-y-1.5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink-dark">
                Center Location &amp; Inquiries
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-charcoal">
                Visit Genesis
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted font-light">
                Conveniently situated in North Bengaluru at New BEL Road.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Card: Clinic Address */}
              <div className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-[#F9EDF5] to-[#F3E3EF] p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-pink-subtle text-brand-purple border border-brand-pink-border">
                      <MapPin className="h-5 w-5 text-brand-pink-dark" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-medium text-brand-charcoal">
                        Clinic Address
                      </h4>
                      <p className="text-xs text-brand-muted">New BEL Road, 3rd Block</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-brand-pink-subtle/50 border border-brand-pink-border text-sm text-brand-charcoal font-light leading-relaxed">
                    3rd Floor, SL Complex, Amarajyoti Layout, New BEL Road, 3rd Block, R.M.V. 2nd Stage, Bengaluru, Karnataka – 560094
                  </div>

                  <a
                    href="https://maps.app.goo.gl/Pw7MaNok4CQYsD8p7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline"
                  >
                    <span>Get directions link &rarr; Google Maps (Genesis Women&apos;s Health)</span>
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-brand-pink-border/60">
                  <a
                    href="tel:+919900098736"
                    className="p-3 rounded-2xl bg-brand-canvas border border-brand-pink-border hover:border-brand-purple transition-all flex items-center gap-3"
                  >
                    <Phone className="h-4 w-4 text-brand-pink-dark shrink-0" />
                    <div>
                      <span className="text-[10px] text-brand-muted uppercase block">Phone / WhatsApp</span>
                      <span className="text-xs font-semibold text-brand-charcoal">+91 99000 98736</span>
                    </div>
                  </a>

                  <a
                    href="mailto:umasheshgiri@gmail.com"
                    className="p-3 rounded-2xl bg-brand-canvas border border-brand-pink-border hover:border-brand-purple transition-all flex items-center gap-3"
                  >
                    <Mail className="h-4 w-4 text-brand-pink-dark shrink-0" />
                    <div>
                      <span className="text-[10px] text-brand-muted uppercase block">Direct Email</span>
                      <span className="text-xs font-semibold text-brand-charcoal">umasheshgiri@gmail.com</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Card: Consultation Timings — Dark Gradient */}
              <div className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-[#250629] via-[#3A0D3E] to-[#6B2060] text-white p-6 sm:p-8 shadow-md flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-brand-pink-light">
                        Personalized Care
                      </span>
                      <h4 className="font-serif text-xl font-medium text-white">
                        Consultation Timings
                      </h4>
                    </div>
                    <Clock className="h-5 w-5 text-brand-pink-light" />
                  </div>

                  <p className="text-xs text-white/80 font-light leading-relaxed">
                    We schedule deliberate gaps between patients, providing ample time to discuss
                    reports, ultrasound findings, and your family goals without rush.
                  </p>

                  <div className="space-y-3 pt-2 text-xs font-light">
                    <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                      <span className="font-medium text-brand-pink-light">Monday – Friday</span>
                      <span>10:00 AM – 1:30 PM • 5:00 PM – 8:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                      <span className="font-medium text-brand-pink-light">Saturday</span>
                      <span>10:00 AM – 3:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="font-medium text-brand-pink-light">Sunday</span>
                      <span className="text-brand-pink-light">Emergency / High-Risk On-Call</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <Button
                    onClick={() => setBookingOpen(true)}
                    className="w-full rounded-full bg-white text-brand-purple hover:bg-brand-pink-subtle text-xs sm:text-sm font-semibold py-3 shadow-md"
                  >
                    Book an Unhurried Consultation (+91 99000 98736)
                  </Button>
                  <p className="text-[11px] text-center text-white/70">
                    Walk-ins accommodated subject to clinical availability.
                  </p>
                </div>
              </div>

            </div>

            {/* Elegant Panoramic Real Google Maps View Bar (Matching screen.png layout) */}
            <div className="rounded-3xl overflow-hidden border border-brand-pink-border bg-white shadow-xs p-2.5 sm:p-3 glow-card">
              <div className="relative h-[190px] sm:h-[210px] w-full rounded-2xl overflow-hidden border border-brand-pink-border/60 bg-[#F5ECF2]">
                {/* Real Google Map Embed (Slender Panoramic View) */}
                <iframe
                  src="https://maps.google.com/maps?q=13.0358266,77.5672185+(Genesis+Womens+Health+and+Infertility+center)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "contrast(1.05) saturate(0.85) hue-rotate(320deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover"
                  title="Genesis Womens Health and Infertility Center Location"
                />

                {/* Floating Elegant Pill Card (Exact Nascere / Genesis screen.png design) */}
                <div className="absolute inset-0 flex items-center justify-center p-3 pointer-events-none">
                  <div className="pointer-events-auto p-3.5 sm:p-5 rounded-2xl sm:rounded-full bg-white/95 backdrop-blur-md border border-brand-pink-border shadow-lg flex flex-col sm:flex-row items-center gap-4 max-w-xl">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-pink-subtle text-brand-purple border border-brand-pink-border">
                        <MapPin className="h-4 w-4 text-brand-pink-dark" />
                      </div>
                      <div className="text-center sm:text-left">
                        <p className="text-xs font-semibold text-brand-charcoal">
                          SL Complex, 3rd Floor • Amarajyoti Layout
                        </p>
                        <p className="text-[11px] text-brand-muted font-light">
                          New BEL Road, 3rd Block, RMV 2nd Stage, Bengaluru
                        </p>
                      </div>
                    </div>

                    <a
                      href="https://maps.app.goo.gl/Pw7MaNok4CQYsD8p7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-brand-purple text-white text-xs font-semibold hover:bg-brand-purple-dark transition-all shadow-xs hover:shadow-[0_0_16px_rgba(194,110,146,0.35)] flex items-center gap-1.5 shrink-0"
                    >
                      <span>Open in Maps</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
        </div>
      </main>

      <Footer />
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  )
}
