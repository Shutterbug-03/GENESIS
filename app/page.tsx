"use client"

import * as React from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { IconStrip } from "@/components/icon-strip"
import { AboutSection } from "@/components/about-section"
import { SplitSpecialist } from "@/components/split-specialist"
import { ServicesGrid } from "@/components/services-grid"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { BookingModal } from "@/components/booking-modal"

export default function Home() {
  const [bookingOpen, setBookingOpen] = React.useState(false)
  const [selectedService, setSelectedService] = React.useState<string | undefined>()

  const handleOpenBooking = () => {
    setSelectedService(undefined)
    setBookingOpen(true)
  }

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName)
    setBookingOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-sand">
      {/* Top Sticky Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* Hero Section — gradient ends at #FAF6F9 */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* ── Light canvas sections ─────────────────────────────────── */}
        <div className="relative bg-[#FAF6F9]">

          {/* Ambient glow bleeding down from hero into canvas */}
          <div className="absolute top-0 inset-x-0 h-64 pointer-events-none overflow-hidden" style={{zIndex: 0}}>
            <div className="absolute -top-32 left-1/4 w-[700px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(194,110,146,0.15)_0%,transparent_65%)] blur-3xl" />
            <div className="absolute -top-28 right-1/5 w-[550px] h-[350px] rounded-full bg-[radial-gradient(ellipse,rgba(110,45,117,0.10)_0%,transparent_65%)] blur-3xl" />
          </div>

          <IconStrip />
          <AboutSection />
          <SplitSpecialist onOpenBooking={handleOpenBooking} />
          <ServicesGrid onSelectService={handleSelectService} />

          {/* ▼ Light → Dark gradient bridge — seamless fade */}
          <div className="h-16 bg-gradient-to-b from-[#FAF6F9] via-[#F0DCE9] via-20% via-[#D4A0BE] via-40% via-[#A05882] via-62% via-[#652358] via-80% to-[#331137] pointer-events-none" />
        </div>

        {/* ── Dark "Why Choose Us" ────────────────────────────────────── */}
        <WhyChooseUs />

        {/* ▼ Dark → Light gradient bridge — seamless fade */}
        <div className="h-16 bg-gradient-to-b from-[#331137] via-[#652358] via-22% via-[#A05882] via-42% via-[#D4A0BE] via-65% via-[#F0DCE9] via-85% to-[#FAF6F9] pointer-events-none" />

        {/* ── Testimonials (light canvas) ──────────────────────────────── */}
        <Testimonials />

        {/* ▼ Light → Dark gradient bridge — seamless fade into Final CTA */}
        <div className="h-16 bg-gradient-to-b from-[#FAF6F9] via-[#F0DCE9] via-20% via-[#D4A0BE] via-40% via-[#A05882] via-62% via-[#652358] via-80% to-[#331137] pointer-events-none" />

        {/* ── Final CTA (dark, same bg as Why Choose Us: #331137) ──────── */}
        <FinalCta onOpenBooking={handleOpenBooking} />

        {/* ▼ Dark → Light gradient bridge — seamless fade into footer */}
        <div className="h-16 bg-gradient-to-b from-[#331137] via-[#652358] via-22% via-[#A05882] via-42% via-[#D4A0BE] via-65% via-[#F0DCE9] via-85% to-[#FAF6F9] pointer-events-none" />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Consultation / Callback Dialog */}
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} initialService={selectedService} />
    </div>
  )
}
