"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookingModal } from "@/components/booking-modal"
import { BLOG_POSTS } from "@/lib/blog-data"
import {
  Clock,
  ArrowUpRight,
  BookOpen,
  CalendarCheck,
  MessageSquare,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const [bookingOpen, setBookingOpen] = React.useState(false)
  const [activeCategory, setActiveCategory] = React.useState("All Entries (6)")

  const categories = [
    "All Entries (6)",
    "Choosing a clinic",
    "Getting started",
    "Pregnancy",
    "Fertility",
    "Midlife & Menopause",
    "Prevention",
  ]

  const filteredArticles =
    activeCategory === "All Entries (6)"
      ? BLOG_POSTS
      : BLOG_POSTS.filter(
          (a) =>
            a.tag.toLowerCase() === activeCategory.toLowerCase() ||
            (activeCategory === "Midlife & Menopause" && a.tag === "Midlife & Menopause")
        )

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F9]">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="flex-1">
        {/* ── Gradient Page Hero ─────────────────────────────── */}
        <section className="relative overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-20 bg-gradient-to-b from-[#220426] via-[#350A3A] to-[#450F4A] border-b border-[#5E1E64]/60">
          {/* Ambient glow orbs */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(242,201,220,0.14)_0%,transparent_70%)] blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-full bg-[radial-gradient(ellipse,rgba(194,110,146,0.16)_0%,transparent_70%)] blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/15">
              
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FAD6E7]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FAD6E7] animate-pulse" />
                  Clinical Library &amp; Notes • VCUS Genesis Journal
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight">
                  From the clinic
                </h1>

                <p className="text-base sm:text-lg text-white/85 font-light leading-relaxed">
                  Notes on women&apos;s health, written in plain language — the same
                  explanations you&apos;d get in the room.
                </p>
              </div>

              {/* Curator Badge — frosted glass */}
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl flex items-center gap-3 self-start md:self-auto">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-[#FAD6E7] border border-white/20">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Curated by Dr. Uma Sheshgiri
                  </p>
                  <p className="text-[11px] text-white/70">
                    MD, DGO • 40+ Years Clinical Continuity
                  </p>
                </div>
              </div>

            </div>

            {/* Category Filter Chips — frosted glass */}
            <div className="pt-6 flex flex-wrap gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-white text-[#250629] shadow-md"
                      : "bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Light content body ────────────────────────────────────── */}
        <div className="bg-[#FAF6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20 pt-4">
          
          {/* Featured Reading Card (from screen copy 2.png) */}
          <section className="group rounded-3xl sm:rounded-4xl bg-white border border-brand-pink-border p-6 sm:p-10 shadow-xs glow-card transition-all hover:shadow-[0_16px_50px_rgba(194,110,146,0.16)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-pink-dark">
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-pink-subtle border border-brand-pink-border">
                    Featured Reading
                  </span>
                  <span>• 6 min clinical read</span>
                </div>

                <Link href="/blog/choosing-womens-clinic-bengaluru" className="block group">
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-brand-charcoal group-hover:text-brand-purple transition-colors leading-snug">
                    Care anchored in forty years of dialogue, warmth, and quiet clinical certainty.
                  </h2>
                </Link>

                <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
                  Women&apos;s health often suffers from fractured transitions — switching doctors
                  between adolescence, pregnancy, and menopause. Here, we outline the therapeutic
                  impact of uninterrupted, longitudinal maternal and fertility guidance.
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-brand-charcoal font-medium">
                    <span className="h-2 w-2 rounded-full bg-brand-purple" />
                    <span>By Dr. Uma Sheshgiri</span>
                    <span className="text-brand-muted">• Senior Gynecologist &amp; Obstetrician</span>
                  </div>

                  <Link
                    href="/blog/choosing-womens-clinic-bengaluru"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline"
                  >
                    Read Full Guide <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <Link
                href="/blog/choosing-womens-clinic-bengaluru"
                className="lg:col-span-5 relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-pink-border block group/img"
              >
                <Image
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop"
                  alt="Doctor and patient consultation"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 right-3 text-center py-1.5 px-3 rounded-full bg-white/95 backdrop-blur-xs text-[10px] sm:text-[11px] font-medium text-brand-purple shadow-xs border border-brand-pink-border">
                  • In-Clinic Focus: High-continuity gynecology at New BEL Road
                </div>
              </Link>

            </div>
          </section>

          {/* 6 Blog Cards Grid (from screen copy 2.png) */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group rounded-3xl bg-white border border-brand-pink-border overflow-hidden shadow-xs hover:shadow-[0_16px_40px_rgba(194,110,146,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-pink-subtle">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Top tags badge */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-brand-pink-border text-[10px] font-semibold uppercase tracking-wider text-brand-purple shadow-2xs">
                        {article.tag}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-brand-charcoal group-hover:text-brand-purple transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0 border-t border-brand-pink-border/50 mt-4 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-brand-pink-subtle border border-brand-pink-border text-[10px] font-semibold text-brand-purple flex items-center justify-center">
                      US
                    </span>
                    <span className="text-brand-muted font-medium">
                      By Dr. Uma Sheshgiri
                    </span>
                  </div>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-pink-subtle text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </section>

          {/* Preventative Screening Milestones Banner */}
          <section className="rounded-3xl sm:rounded-4xl bg-gradient-to-br from-[#F8EEF4] to-[#F3E3EF] p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                  Diagnostic Clarity
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-normal">
                  Preventative Screening Milestones
                </h2>
                <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                  Timely screenings drastically reduce reproductive and gynecological complications.
                  Here is the evidence-based cadence practiced at VCUS Genesis.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-3">
                <div className="p-4 rounded-2xl bg-white border border-brand-pink-border shadow-2xs flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-brand-charcoal">
                      Annual Gynecological Check-Up &amp; Pap Smear
                    </h4>
                    <p className="text-xs text-brand-muted font-light">
                      Recommended from age 21 or when sexually active
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-brand-pink-subtle text-brand-purple text-xs font-semibold">
                    Annual
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-brand-pink-border shadow-2xs flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-brand-charcoal">
                      Follicular &amp; Ovarian Reserve Tracking (AMH)
                    </h4>
                    <p className="text-xs text-brand-muted font-light">
                      Preconception or fertility assessment
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-brand-pink-subtle text-brand-purple text-xs font-semibold">
                    Elective
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-brand-pink-border shadow-2xs flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-brand-charcoal">
                      Mammography &amp; Bone Density (DEXA)
                    </h4>
                    <p className="text-xs text-brand-muted font-light">
                      Recommended every 1-2 years after age 40
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-brand-pink-subtle text-brand-purple text-xs font-semibold">
                    Age 40+
                  </span>
                </div>
              </div>

            </div>
          </section>

          {/* CMS Footer Note Bar */}
          <div className="p-4 rounded-2xl bg-white/70 border border-brand-pink-border flex items-center gap-3 text-xs text-brand-muted font-light">
            <FileText className="h-4 w-4 text-brand-pink-dark shrink-0" />
            <span>
              More articles are added regularly. This section is structured to plug directly into a
              CMS or blog platform when you&apos;re ready to publish new posts.
            </span>
          </div>

          {/* Closing Banner */}
          <section className="relative overflow-hidden rounded-3xl sm:rounded-4xl bg-gradient-to-br from-[#250629] via-[#4A1B4F] to-[#331137] text-white p-8 sm:p-14">
            {/* Ambient glow */}
            <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-[#C26E92]/25 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl space-y-6">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink-light">
                Have a specific health topic or question?
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                Personalized guidance begins with unhurried listening.
              </h2>

              <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed">
                Dr. Uma Sheshgiri and our clinical team welcome both new and returning patients to our sanctuary at New BEL Road. Book a consultation or request an article topic for our next clinical note.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button
                  onClick={() => setBookingOpen(true)}
                  size="lg"
                  className="rounded-full bg-white text-brand-purple hover:bg-brand-pink-subtle font-semibold shadow-md"
                >
                  <CalendarCheck className="h-4 w-4 mr-2" />
                  Schedule Consultation
                </Button>

                <a
                  href="mailto:umasheshgiri.c@gmail.com?subject=Topic%20Suggestion%20for%20VCUS%20Genesis"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-all"
                >
                  <MessageSquare className="h-4 w-4" />
                  Suggest a Topic
                </a>
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
