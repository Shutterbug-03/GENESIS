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
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const [bookingOpen, setBookingOpen] = React.useState(false)

  const timeline = [
    {
      phase: "PHASE 01 • GULBARGA",
      title: "Medical Foundation",
      degree: "MBBS — MRMC Medical College, Gulbarga",
      description:
        "Rigorous clinical immersion laying the lifelong grounding in patient empathy and surgical fundamentals.",
      badge: "Class Honors & Distinction",
    },
    {
      phase: "PHASE 02 • BENGALURU",
      title: "Specialization",
      degree: "MD, Obstetrics & Gynaecology — Bangalore Medical College (BMC)",
      description:
        "Intensive training in high-risk pregnancy protocols, complex obstetric emergencies, and operative gynecology.",
      badge: "Tertiary Obstetrics Mastery",
    },
    {
      phase: "PHASE 03 • GERMANY",
      title: "International Training",
      degree: "Artificial Reproductive Techniques (ART) — Kiel University, Frankfurt",
      description:
        "Advanced reproductive medicine and fertility care modalities brought back to establish evidence-led protocols in Bengaluru.",
      badge: "Global ART Fellowship",
    },
    {
      phase: "PHASE 04 • NEW BEL ROAD",
      title: "Four Decades in Practice",
      degree: "Thousands of deliveries, generations of families",
      description:
        "40+ years of continuous practice in gynecology, obstetrics and infertility care in Bengaluru, welcoming second-generation mothers.",
      badge: "Over 40 Years of Service",
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
                          Babies Dr. Uma delivered four decades ago now return to embark on their own parenthood.
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
                Compassion Rooted in 40+ Years of Mastery
              </h2>
            </div>

            <div className="rounded-3xl sm:rounded-4xl bg-white border border-brand-pink-border p-6 sm:p-12 shadow-xs glow-card">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Arched Photo */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative aspect-[3/4] w-full max-w-sm rounded-[2.5rem] overflow-hidden border-4 border-white shadow-lg glow-pink-sm">
                    <Image
                      src="/images/dr_uma_clinic.jpg"
                      alt="Dr. Uma Sheshgiri, Senior Gynecologist & Infertility Specialist"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-deep/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-center py-2 px-3 rounded-full bg-white/95 backdrop-blur-xs text-xs font-semibold text-brand-purple shadow-xs border border-brand-pink-border">
                      Senior Gynecologist &amp; Fertility Specialist
                    </div>
                  </div>
                </div>

                {/* Right Bio & Stats */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-1.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink-subtle border border-brand-pink-border text-xs font-semibold text-brand-purple">
                      Senior Consultant &amp; Medical Director
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-medium text-brand-charcoal pt-1">
                      Dr. Uma Sheshgiri, <span className="text-xl font-normal text-brand-muted">MD, DGO</span>
                    </h3>
                    <p className="text-sm font-medium text-brand-pink-dark">
                      40+ years in gynecology, obstetrics &amp; infertility care
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
                    Dr. Uma Sheshgiri has spent more than four decades managing normal and
                    high-risk deliveries, and guiding women through menstrual health, fertility
                    questions and menopause. She trained in Artificial Reproductive Techniques at
                    Kiel University in Frankfurt, Germany, and is known — as much as for her
                    clinical precision — for a calm, patient-first way of explaining what&apos;s
                    happening and what comes next.
                  </p>

                  {/* 3 Stat Chips */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2">
                    <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-brand-pink-subtle/70 border border-brand-pink-border text-center">
                      <p className="font-serif text-lg sm:text-2xl font-semibold text-brand-purple">12,000+</p>
                      <p className="text-[9px] min-[380px]:text-[10px] sm:text-xs text-brand-muted uppercase tracking-wider mt-0.5 leading-tight">Safe Deliveries</p>
                    </div>
                    <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-brand-pink-subtle/70 border border-brand-pink-border text-center">
                      <p className="font-serif text-lg sm:text-2xl font-semibold text-brand-purple">40+</p>
                      <p className="text-[9px] min-[380px]:text-[10px] sm:text-xs text-brand-muted uppercase tracking-wider mt-0.5 leading-tight">Years Dedication</p>
                    </div>
                    <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-brand-pink-subtle/70 border border-brand-pink-border text-center">
                      <p className="font-serif text-lg sm:text-2xl font-semibold text-brand-purple">Kiel ART</p>
                      <p className="text-[9px] min-[380px]:text-[10px] sm:text-xs text-brand-muted uppercase tracking-wider mt-0.5 leading-tight">Germany Fellow</p>
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
                    href="mailto:umasheshgiri.c@gmail.com"
                    className="p-3 rounded-2xl bg-brand-canvas border border-brand-pink-border hover:border-brand-purple transition-all flex items-center gap-3"
                  >
                    <Mail className="h-4 w-4 text-brand-pink-dark shrink-0" />
                    <div>
                      <span className="text-[10px] text-brand-muted uppercase block">Direct Email</span>
                      <span className="text-xs font-semibold text-brand-charcoal">umasheshgiri.c</span>
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
