"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Phone, Menu, X, ArrowRight, MapPin, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

interface NavbarProps {
  onOpenBooking: () => void
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [visible, setVisible] = React.useState(true)
  const lastScrollY = React.useRef(0)
  const pathname = usePathname()

  // Lock body scroll when mobile navigation drawer is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY)
      setScrolled(currentScrollY > 20)

      if (currentScrollY <= 60) {
        // At or near top: always show
        setVisible(true)
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Scrolling DOWN: hide navbar (if mobile menu is not active)
        if (!mobileMenuOpen) {
          setVisible(false)
        }
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Scrolling UP: reveal navbar immediately
        setVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mobileMenuOpen])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About & Team" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <>
      {/* Mobile Drawer Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-xs transition-opacity animate-in fade-in duration-200 pointer-events-auto"
          aria-hidden="true"
        />
      )}

      {/* Fixed Top Navigation Layer — Auto-hides on down-scroll, reveals on up-scroll */}
      <div
        className={`fixed top-0 inset-x-0 z-50 pointer-events-none transition-transform duration-300 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        
        {/* Top Clinical Announcement Bar — Only shown on tablet/desktop, hidden on mobile for clean breathing room */}
        <div
          className={`hidden sm:block pointer-events-auto w-full transition-all duration-300 overflow-hidden bg-[#1C0420]/95 backdrop-blur-md border-b border-white/10 ${
            scrolled ? "max-h-0 opacity-0 -translate-y-2" : "max-h-12 opacity-100 translate-y-0"
          }`}
        >
          <div className="max-w-7xl mx-auto py-1.5 px-4 text-center text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.2em] uppercase font-medium text-[#FAD6E7] flex items-center justify-center">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-pink mr-2 shrink-0 animate-pulse" />
            <span className="truncate">
              WELCOMING PATIENTS AT NEW BEL ROAD, BENGALURU • OVER 40 YEARS OF COMPASSIONATE CONTINUITY
            </span>
          </div>
        </div>

        {/* Floating Pill Header Wrapper with generous luxury breathing room */}
        <div className="w-full px-3.5 sm:px-6 pt-3 sm:pt-4 flex flex-col items-center">
          <header
            className={`pointer-events-auto w-full max-w-6xl rounded-full transition-all duration-300 flex items-center justify-between border shadow-lg ${
              scrolled
                ? "bg-[#250629]/95 backdrop-blur-2xl border-white/25 shadow-[0_16px_40px_rgba(20,2,24,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] py-2 px-3 sm:px-5"
                : "bg-[#250629]/90 backdrop-blur-xl border-white/20 shadow-[0_10px_32px_rgba(20,2,24,0.35),inset_0_1px_0_rgba(255,255,255,0.15)] py-2 sm:py-2.5 px-3.5 sm:px-6"
            }`}
          >
            {/* Left: Brand Logo with emblem */}
            <Logo variant="light" compact className="shrink-0" />

            {/* Center: Desktop Nav Links (Capsule segmented pills) */}
            <nav className="hidden md:flex items-center gap-1 bg-white/[0.08] p-1 rounded-full border border-white/10 backdrop-blur-xs">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href)

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs sm:text-[13px] font-medium px-4 py-1.5 rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-white/25 text-white font-semibold shadow-xs"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Right: Actions (Direct Phone + Consultation CTA + Mobile Trigger) */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              {/* Direct Telephone for Clinical Desk */}
              <a
                href="tel:+919900098736"
                className="hidden xl:flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full text-[#FAD6E7] hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Phone className="h-3.5 w-3.5 text-[#FAD6E7]" />
                <span>+91 99000 98736</span>
              </a>

              {/* Consultation CTA Button - visible on tablet and desktop, hidden on narrow mobile to give logo full width */}
              <Button
                onClick={onOpenBooking}
                className="hidden sm:inline-flex rounded-full text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 bg-white text-[#250629] hover:bg-[#FDF2F8] shadow-sm hover:shadow-[0_0_22px_rgba(255,255,255,0.45)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer shrink-0"
              >
                <span>Book a Consultation</span>
              </Button>

              {/* Mobile Menu Trigger (min 44px tap target) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="flex md:hidden h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/15 active:bg-white/25 transition-colors cursor-pointer shrink-0"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </header>

          {/* Floating Mobile Nav Drawer */}
          {mobileMenuOpen && (
            <div className="pointer-events-auto mt-2 w-full max-w-6xl max-h-[85vh] overflow-y-auto rounded-[28px] bg-[#220426]/98 backdrop-blur-2xl border border-white/20 p-4 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.7)] animate-in fade-in slide-in-from-top-3 duration-200">
              {/* Specialist Context Badge */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.07] border border-white/10 mb-3.5">
                <div className="relative h-11 w-11 min-w-11 min-h-11 aspect-square rounded-full overflow-hidden border border-[#FAD6E7]/40 shrink-0">
                  <Image
                    src="/images/dr_uma_clinic.jpg"
                    alt="Dr. Uma Sheshgiri"
                    fill
                    sizes="44px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-serif font-medium text-white truncate">Dr. Uma Sheshgiri</p>
                    <span className="text-[10px] text-[#FAD6E7] font-semibold">MD, DGO</span>
                  </div>
                  <p className="text-[10px] text-[#FAD6E7]/80 flex items-center gap-1 mt-0.5">
                    <Award className="h-3 w-3 shrink-0 text-brand-pink" />
                    <span className="truncate">40+ Yrs Clinical Practice • New BEL Rd</span>
                  </p>
                </div>
              </div>

              {/* Navigation Links with min 48px height */}
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href)
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm font-medium px-4 min-h-[46px] rounded-xl transition-all flex items-center justify-between active:scale-[0.99] ${
                        isActive
                          ? "bg-white/20 text-white font-semibold shadow-xs"
                          : "text-white/85 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className={`h-4 w-4 ${isActive ? "text-[#FAD6E7]" : "text-white/40"}`} />
                    </Link>
                  )
                })}
              </nav>

              {/* Clinic Location & Hours Summary */}
              <div className="mt-3.5 pt-3 border-t border-white/10 space-y-2 text-[11px] text-[#FAD6E7]/85 font-light">
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-brand-pink shrink-0 mt-0.5" />
                  <span className="leading-tight">3rd Floor, SL Complex, New BEL Road, Bengaluru – 560094</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-brand-pink shrink-0" />
                  <span>Mon – Sat: 10:00 AM – 1:30 PM &bull; 5:00 PM – 8:00 PM</span>
                </div>
              </div>

              {/* Bottom Action CTAs */}
              <div className="pt-3.5 mt-3 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href="tel:+919900098736"
                  className="flex items-center justify-center gap-2 text-xs font-semibold min-h-[46px] rounded-full text-[#FAD6E7] bg-white/10 border border-white/15 hover:bg-white/20 active:bg-white/30 transition-all"
                >
                  <Phone className="h-3.5 w-3.5 text-[#FAD6E7]" />
                  <span>Direct Call: +91 99000 98736</span>
                </a>
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenBooking()
                  }}
                  className="w-full rounded-full min-h-[46px] shadow-sm font-semibold bg-white text-[#250629] hover:bg-[#FDF2F8] active:bg-white/90 cursor-pointer text-sm"
                >
                  Book a Consultation
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
