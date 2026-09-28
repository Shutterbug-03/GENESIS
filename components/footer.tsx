"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { Phone, MapPin, EnvelopeSimple, Medal } from "@phosphor-icons/react"
import { Logo } from "@/components/logo"

export function Footer() {
  const reduce = useReducedMotion()

  return (
    <footer className="bg-[#FAF6F9] text-brand-charcoal py-14 sm:py-18 mt-auto border-t border-brand-pink-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-10 border-b border-brand-pink-border/50"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >

          {/* Brand column */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="header" />
            <p className="text-sm text-brand-muted max-w-sm font-light leading-relaxed pt-1">
              Genesis Women&apos;s Health and Infertility Center, gynecology, obstetrics and fertility care led by Dr. Uma Sheshgiri, MBBS, DGO, MD (OBG).
            </p>
            <div className="pt-1">
              {/* Double-bezel award badge */}
              <div className="p-0.5 rounded-full inline-flex bg-white/60 border border-brand-pink-border/60 shadow-[0_4px_12px_-4px_rgba(194,110,146,0.14)]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] text-xs text-brand-purple font-medium">
                  <Medal size={13} className="text-brand-pink-dark" />
                  Excellence in Maternal and Reproductive Medicine
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">Clinical Pathways</h4>
            <ul className="space-y-2 text-sm text-brand-muted">
              {[
                { href: "/services#cosmetic-gynaecology", label: "Cosmetic Gynaecology" },
                { href: "/services", label: "Gynecology Care" },
                { href: "/services", label: "Obstetrics & Maternity" },
                { href: "/services", label: "Fertility Support" },
                { href: "/services", label: "Preventive Screening" },
                { href: "/about", label: "About Dr. Uma Sheshgiri" },
                { href: "/blog", label: "Medical Blog & Guides" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-brand-purple transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">Care Sanctuary &amp; Location</h4>
            <ul className="space-y-3.5 text-sm text-brand-muted font-light">
              <li>
                <a
                  href="https://maps.app.goo.gl/Pw7MaNok4CQYsD8p7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-brand-purple transition-colors duration-200 group"
                >
                  <MapPin size={16} className="text-brand-pink-dark shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="leading-snug">
                    <strong className="font-medium text-brand-charcoal block">VCUS Genesis</strong>
                    3rd Floor, SL Complex, Amarajyoti Layout, New BEL Road, Bengaluru, Karnataka 560094
                    <span className="block text-[11px] text-brand-purple font-medium mt-1">Get Google Maps Directions &#8594;</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919900098736"
                  className="flex items-center gap-3 hover:text-brand-purple transition-colors duration-200 group"
                >
                  <Phone size={15} className="text-brand-pink-dark shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-brand-charcoal group-hover:text-brand-purple">+91 99000 98736 / +91 80 2360 7777</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:umasheshgiri@gmail.com"
                  className="flex items-center gap-3 hover:text-brand-purple transition-colors duration-200 group"
                >
                  <EnvelopeSimple size={15} className="text-brand-pink-dark shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-brand-charcoal group-hover:text-brand-purple">umasheshgiri@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

        </motion.div>

        {/* Geographic Service Footprint */}
        <div className="pt-6 pb-6 border-b border-brand-pink-border/40 text-xs text-brand-muted/80 font-light leading-relaxed">
          <p className="font-medium text-brand-charcoal mb-1 text-[11px] uppercase tracking-wider">
            Serving Patients Across North &amp; Central Bengaluru:
          </p>
          <p className="text-[11.5px]">
            New BEL Road • RMV 2nd Stage • Sadashivanagar • Sanjaynagar • Mathikere • Yeshwanthpur • Malleshwaram • Hebbal • RT Nagar • Dollars Colony • Vidyaranyapura • Yelahanka • Jalahalli • Ganga Nagar.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted/78 font-light text-center sm:text-left">
          <div>
            &copy; 2026 Genesis Women&apos;s Health and Infertility Center. All rights reserved.
          </div>
          <div className="text-brand-purple font-medium">
            Dr. Uma Sheshgiri, MBBS, DGO, MD (OBG), Chairman, IMA-AMS
          </div>
        </div>
      </div>
    </footer>
  )
}
