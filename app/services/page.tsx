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
  Award,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const [bookingOpen, setBookingOpen] = React.useState(false)
  const [selectedService, setSelectedService] = React.useState<string | undefined>()
  const [openFaq, setOpenFaq] = React.useState<number | null>(0)

  const handleInquire = (serviceName: string) => {
    setSelectedService(serviceName)
    setBookingOpen(true)
  }

  const cosmeticProcedures = [
    {
      id: "c01",
      title: "Vaginal Rejuvenation",
      tag: "Non-Surgical",
      description:
        "Non-surgical treatments to improve vaginal tone, hydration and overall comfort.",
    },
    {
      id: "c02",
      title: "Vaginal Tightening",
      tag: "Minimally Invasive",
      description:
        "Minimally invasive procedures designed to restore firmness and improve functional support.",
    },
    {
      id: "c03",
      title: "Labiaplasty",
      tag: "Surgical Procedure",
      description:
        "A surgical procedure to reshape or reduce the labia for comfort and aesthetic balance.",
    },
    {
      id: "c04",
      title: "Post Delivery Vaginal Restoration",
      tag: "Postpartum Care",
      description:
        "Treatments aimed at restoring intimate health after childbirth.",
    },
    {
      id: "c05",
      title: "Treatment for Vaginal Dryness",
      tag: "Advanced Therapy",
      description:
        "Advanced therapies to improve lubrication and reduce irritation or discomfort.",
    },
    {
      id: "c06",
      title: "Stress Urinary Incontinence Treatment (Non-surgical options)",
      tag: "Non-Surgical Option",
      description:
        "Helps manage mild urine leakage without surgery.",
    },
    {
      id: "c07",
      title: "PRP Therapy for Intimate Wellness",
      tag: "Regenerative Medicine",
      description:
        "Uses the body’s own healing properties to enhance tissue health and sensitivity.",
    },
  ]

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
              Care Pathways &amp; Clinical Offerings • Bangalore
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal tracking-tight mb-5">
              Services
            </h1>

            <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto font-light leading-relaxed">
              Genesis brings gynecology, obstetrics, fertility support, advanced cosmetic
              gynaecology and preventive care into one continuous relationship — so your history
              doesn&apos;t reset every time you walk in.
            </p>

            {/* Quick Filter Badges — frosted glass */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs text-white font-medium">
                <Clock className="h-3.5 w-3.5 text-[#FAD6E7]" />
                Unhurried Consultations
              </span>
              <a
                href="#cosmetic-gynaecology"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-sm text-xs text-[#FCE1EE] font-medium transition-all"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-[#FAD6E7]" />
                Cosmetic Gynaecology
              </a>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs text-white font-medium">
                <ShieldCheck className="h-3.5 w-3.5 text-[#FAD6E7]" />
                Hospital-Based Setting
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs text-white font-medium">
                <Award className="h-3.5 w-3.5 text-[#FAD6E7]" />
                Evidence-Guided Protocol
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

          {/* ── Cosmetic Gynaecology Procedures Offered (Professional Clinical List) ── */}
          <section id="cosmetic-gynaecology" className="scroll-mt-24 rounded-3xl sm:rounded-4xl bg-white border border-brand-pink-border p-6 sm:p-10 lg:p-12 shadow-xs">
            {/* Section Header */}
            <div className="max-w-3xl space-y-3 pb-8 sm:pb-10 border-b border-brand-pink-border/60">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0F5] border border-brand-pink-border text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-purple">
                Hospital Clinical Offerings • Bangalore
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-brand-charcoal leading-tight">
                Cosmetic Gynaecology Procedures Offered
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-brand-muted font-light leading-relaxed pt-1">
                Our hospital offers a range of advanced cosmetic gynaecology treatments in Bangalore, tailored to individual needs and performed in a safe, hospital-based setting. Common procedures include:
              </p>

              {/* Clinical Assurances */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-brand-muted">
                <span className="inline-flex items-center gap-1.5 font-medium text-brand-charcoal">
                  <ShieldCheck className="h-4 w-4 text-brand-pink-dark" />
                  Safe hospital-based setting
                </span>
                <span className="text-brand-pink-border">•</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-brand-charcoal">
                  <Clock className="h-4 w-4 text-brand-pink-dark" />
                  Tailored to individual needs
                </span>
                <span className="text-brand-pink-border">•</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-brand-charcoal">
                  <Award className="h-4 w-4 text-brand-pink-dark" />
                  Led by Dr. Uma Sheshgiri
                </span>
              </div>
            </div>

            {/* Professional Procedure List */}
            <div className="divide-y divide-brand-pink-border/50 pt-2">
              {cosmeticProcedures.map((proc, index) => (
                <div
                  key={proc.id}
                  className="py-5 sm:py-6 first:pt-4 last:pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-[#FAF6F9]/60 px-3 sm:px-5 -mx-3 sm:-mx-5 rounded-2xl transition-colors duration-150"
                >
                  <div className="flex items-start gap-4 sm:gap-5 max-w-3xl">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-brand-pink-dark bg-brand-pink-light/30 px-2.5 py-1 rounded-md shrink-0 mt-0.5 select-none">
                      0{index + 1}
                    </span>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="font-serif text-xl sm:text-2xl font-medium text-brand-charcoal group-hover:text-brand-purple transition-colors">
                          {proc.title}
                        </h3>
                        <span className="text-[11px] font-medium text-brand-purple bg-[#FAF0F5] px-2.5 py-0.5 rounded-full border border-brand-pink-border/60">
                          {proc.tag}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
                        {proc.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center md:self-center pl-10 md:pl-0">
                    <button
                      onClick={() => handleInquire(proc.title)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-brand-purple/20 bg-white hover:bg-brand-purple hover:text-white text-brand-purple text-xs font-semibold shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer"
                      aria-label={`Inquire about ${proc.title}`}
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Confidential Consultation Footer Banner */}
            <div className="mt-8 pt-6 border-t border-brand-pink-border/60 flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-[#FAF5F8] p-6 sm:p-8 rounded-2xl border border-brand-pink-border/60">
              <div className="space-y-1.5 max-w-2xl">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
                  Private &amp; Confidential Consultation
                </div>
                <h4 className="font-serif text-lg sm:text-xl text-brand-charcoal font-medium">
                  Discuss your health and intimate wellness in complete privacy
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                  All cosmetic gynaecology consultations and treatments are performed with strict clinical confidentiality in our hospital-based surgical and outpatient suites with Dr. Uma Sheshgiri.
                </p>
              </div>

              <div className="shrink-0 flex flex-wrap items-center gap-3">
                <Button
                  onClick={() => handleInquire("Cosmetic Gynaecology")}
                  className="bg-brand-purple hover:bg-brand-purple-dark text-white text-xs px-5 py-2.5 rounded-full font-semibold shadow-xs cursor-pointer transition-all"
                >
                  Book Confidential Consultation
                </Button>
                <a
                  href="tel:+918023607777"
                  className="inline-flex items-center gap-2 text-xs font-medium text-brand-charcoal hover:text-brand-purple px-4 py-2.5 rounded-full border border-brand-pink-border bg-white transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-brand-pink-dark" />
                  <span>Call Hospital: +91 80 2360 7777</span>
                </a>
              </div>
            </div>
          </section>

          {/* Core Care Pathways */}
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

          {/* ── Clinical FAQs for Patients & Answer Engines (AEO) ── */}
          <section id="faqs" className="rounded-3xl sm:rounded-4xl bg-white border border-brand-pink-border p-6 sm:p-10 lg:p-12 shadow-xs">
            <div className="max-w-3xl space-y-3 mb-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                Clinical FAQs &amp; Patient Guidance
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-brand-charcoal leading-snug">
                Common questions about cosmetic gynaecology &amp; specialized women&apos;s care in Bangalore
              </h2>
              <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
                Clear, transparent medical guidance on safety, procedures, hospital standards, and confidential consultations.
              </p>
            </div>

            <div className="divide-y divide-brand-pink-border/50">
              {[
                {
                  q: "What cosmetic gynaecology procedures are available at VCUS Genesis Bangalore?",
                  a: "Our hospital provides advanced functional and aesthetic cosmetic gynaecology treatments tailored to each patient: non-surgical Vaginal Rejuvenation, minimally invasive Vaginal Tightening, Labiaplasty for comfort and balance, Post Delivery Vaginal Restoration, advanced treatments for Vaginal Dryness, non-surgical Stress Urinary Incontinence treatment, and autologous PRP Therapy for intimate wellness.",
                },
                {
                  q: "Are all cosmetic gynaecology procedures performed in a safe, hospital-based setting?",
                  a: "Yes. All treatments and surgical procedures are conducted strictly within a safe, sterile hospital-based setting. Patients receive complete pre-procedure medical evaluations by Dr. Uma Sheshgiri, hospital-grade sterilization protocols, and comprehensive follow-up care.",
                },
                {
                  q: "How does non-surgical vaginal rejuvenation and tightening work?",
                  a: "Non-surgical treatments utilize advanced tissue-restorative techniques and regenerative protocols to stimulate natural collagen remodeling, improve hydration, restore tissue elasticity, and support the pelvic floor without major incisions or prolonged downtime.",
                },
                {
                  q: "What is PRP therapy for intimate wellness and how does it help?",
                  a: "Platelet-Rich Plasma (PRP) therapy isolates healing growth factors from your own blood. When applied to intimate tissues, it naturally promotes vascularization, stimulates healthy tissue regeneration, improves lubrication, and enhances intimate sensitivity safely and naturally.",
                },
                {
                  q: "How is patient confidentiality protected during consultation and treatment?",
                  a: "Confidentiality is paramount in cosmetic and intimate health. Every appointment is conducted in a private, unhurried one-on-one session with Dr. Uma Sheshgiri. Your medical history, procedure discussions, and identity are guarded under strict medical ethics.",
                },
                {
                  q: "Which areas of Bengaluru does the clinic serve, and how do I schedule an appointment?",
                  a: "We are located on New BEL Road in RMV 2nd Stage (PIN 560094), serving patients from Sadashivanagar, Sanjaynagar, Mathikere, Yeshwanthpur, Malleshwaram, Hebbal, RT Nagar, Dollars Colony, and Yelahanka. You can schedule a private visit online or call +91 99000 98736 directly.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="py-4 sm:py-5">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                    aria-expanded={openFaq === idx}
                  >
                    <span className="font-serif text-base sm:text-lg text-brand-charcoal group-hover:text-brand-purple transition-colors font-medium">
                      {faq.q}
                    </span>
                    <span className={`shrink-0 h-7 w-7 rounded-full bg-[#FAF0F5] border border-brand-pink-border flex items-center justify-center text-brand-purple transition-transform duration-200 ${openFaq === idx ? "rotate-180 bg-brand-purple text-white" : ""}`}>
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="pt-3 pr-8 text-xs sm:text-sm text-brand-muted font-light leading-relaxed animate-in fade-in duration-200">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
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
