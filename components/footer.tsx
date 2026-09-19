import * as React from "react"
import Link from "next/link"
import { Phone, MapPin, Mail, Award } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-[#FAF6F9] text-brand-charcoal py-12 sm:py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-8 border-b border-brand-pink-border/60">
          
          {/* Brand & Tagline Column */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="header" />
            
            <p className="text-sm text-brand-muted max-w-sm font-light leading-relaxed pt-1">
              Genesis Women&apos;s Health &amp; Infertility Center — gynecology,
              obstetrics and fertility care led by Dr. Uma Sheshgiri, MD, DGO.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-brand-pink-border text-xs text-brand-purple font-medium shadow-xs">
                <Award className="h-3.5 w-3.5 text-brand-pink-dark" />
                Excellence in Maternal &amp; Reproductive Medicine
              </span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-muted">
              <li>
                <Link href="/" className="hover:text-brand-purple transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-purple transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-purple transition-colors">
                  About &amp; Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-purple transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Care Sanctuary & Contact Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
              Care Sanctuary &amp; Contact
            </h4>

            <ul className="space-y-3.5 text-sm text-brand-muted font-light">
              <li>
                <a
                  href="https://maps.app.goo.gl/Pw7MaNok4CQYsD8p7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-brand-purple transition-colors group"
                >
                  <MapPin className="h-4 w-4 text-brand-pink-dark shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="leading-snug">
                    3rd Floor, SL Complex, Amarajyoti Layout, New BEL Road, Bengaluru – 560094
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+919900098736"
                  className="flex items-center gap-3 hover:text-brand-purple transition-colors group"
                >
                  <Phone className="h-4 w-4 text-brand-pink-dark shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-brand-charcoal group-hover:text-brand-purple">
                    +91 99000 98736
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:umasheshgiri.c@gmail.com"
                  className="flex items-center gap-3 hover:text-brand-purple transition-colors group"
                >
                  <Mail className="h-4 w-4 text-brand-pink-dark shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-brand-charcoal group-hover:text-brand-purple">
                    umasheshgiri.c@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted/80 font-light text-center sm:text-left">
          <div>
            &copy; 2026 Genesis Women&apos;s Health &amp; Infertility Center. New BEL Road, Bengaluru, Karnataka
          </div>
          <div className="flex items-center gap-2 text-brand-purple font-medium">
            <span>Dr. Uma Sheshgiri, MD, DGO</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
