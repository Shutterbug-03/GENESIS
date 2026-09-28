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
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* Hero: deep plum gradient */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Light canvas sections */}
        <div className="relative bg-[#FAF6F9]">
          {/* Ambient glow from hero */}
          <div className="absolute top-0 inset-x-0 h-64 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute -top-32 left-1/4 w-[700px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(194,110,146,0.12)_0%,transparent_65%)] blur-3xl" />
            <div className="absolute -top-28 right-1/5 w-[550px] h-[350px] rounded-full bg-[radial-gradient(ellipse,rgba(110,45,117,0.08)_0%,transparent_65%)] blur-3xl" />
          </div>

          <IconStrip />
          <AboutSection />
          <SplitSpecialist onOpenBooking={handleOpenBooking} />
          <ServicesGrid onSelectService={handleSelectService} />

          {/* Seamless gradient bridge: light to dark */}
          <div className="h-20 bg-gradient-to-b from-[#FAF6F9] via-[#D4A0BE] via-50% to-[#331137] pointer-events-none" />
        </div>

        {/* Dark sanctuary sections */}
        <WhyChooseUs />

        {/* Gradient bridge: dark to light */}
        <div className="h-20 bg-gradient-to-b from-[#331137] via-[#D4A0BE] via-50% to-[#FAF6F9] pointer-events-none" />

        <Testimonials />

        {/* Gradient bridge: light to dark */}
        <div className="h-20 bg-gradient-to-b from-[#FAF6F9] via-[#D4A0BE] via-50% to-[#331137] pointer-events-none" />

        <FinalCta onOpenBooking={handleOpenBooking} />

        {/* Gradient bridge: dark to light (footer) */}
        <div className="h-16 bg-gradient-to-b from-[#331137] via-[#C26E92] via-50% to-[#FAF6F9] pointer-events-none" />
      </main>

      <Footer />

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} initialService={selectedService} />
    </div>
  )
}
