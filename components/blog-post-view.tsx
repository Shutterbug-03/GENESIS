"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookingModal } from "@/components/booking-modal"
import { BlogPost } from "@/lib/blog-data"
import {
  Clock,
  Calendar,
  ChevronRight,
  CheckCircle2,
  Phone,
  CalendarCheck,
  MapPin,
  Share2,
  BookOpen,
  ArrowLeft,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogPostViewProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export function BlogPostView({ post, relatedPosts }: BlogPostViewProps) {
  const [bookingOpen, setBookingOpen] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F9]">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="flex-1">
        {/* ── Article Header Banner ────────────────────────────────── */}
        <section className="relative overflow-hidden pt-32 pb-14 sm:pt-36 lg:pt-40 lg:pb-18 bg-gradient-to-b from-[#220426] via-[#350A3A] to-[#450F4A] border-b border-[#5E1E64]/60">
          {/* Ambient glow orbs */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(242,201,220,0.14)_0%,transparent_70%)] blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-full bg-[radial-gradient(ellipse,rgba(194,110,146,0.16)_0%,transparent_70%)] blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-normal text-white/70 mb-5 flex-wrap"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-white/40 shrink-0" />
              <Link href="/blog" className="hover:text-white transition-colors">
                Clinical Library
              </Link>
              <ChevronRight className="h-3 w-3 text-white/40 shrink-0" />
              <span className="text-[#FAD6E7] font-medium truncate max-w-[240px] sm:max-w-none">
                {post.tag}
              </span>
            </nav>

            {/* Meta tags & chips */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
              <span className="px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-[#FAD6E7]">
                {post.tag}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-white/85">
                <Clock className="h-3.5 w-3.5 text-[#FAD6E7]" />
                {post.readTime}
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-white/85">
                <Calendar className="h-3.5 w-3.5 text-[#FAD6E7]" />
                Published {post.publishedAt}
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-[#FAD6E7]">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Medically Reviewed
              </span>
            </div>

            {/* Single H1 on this page for optimal SEO */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] text-white font-normal leading-[1.2] tracking-tight max-w-4xl mb-6">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-white/85 font-light leading-relaxed max-w-3xl mb-8">
              {post.subtitle}
            </p>

            {/* Author Attribution & Action Bar — Frosted luxury card */}
            <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-5 max-w-4xl">
              <div className="flex items-center gap-4 min-w-0">
                <div className="relative h-13 w-13 sm:h-14 sm:w-14 rounded-full overflow-hidden border-2 border-white/40 shadow-md shrink-0">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 space-y-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-sm sm:text-base font-semibold text-white truncate">
                      {post.author.name}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FAD6E7]/20 border border-[#FAD6E7]/30 text-[10px] font-semibold text-[#FAD6E7] uppercase tracking-wider">
                      Verified Clinician
                    </span>
                  </div>
                  <p className="text-xs text-white/80 font-light truncate">
                    {post.author.qualifications}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 shrink-0 self-start md:self-auto pt-2 md:pt-0 border-t md:border-t-0 border-white/15 w-full md:w-auto justify-end">
                <Button
                  onClick={handleShare}
                  variant="outline"
                  size="sm"
                  className="rounded-full bg-white/10 hover:bg-white/20 text-white border-white/25 text-xs px-4 py-2 backdrop-blur-sm"
                >
                  <Share2 className="h-3.5 w-3.5 mr-1.5" />
                  {copied ? "Link Copied!" : "Share"}
                </Button>
                <Button
                  onClick={() => setBookingOpen(true)}
                  size="sm"
                  className="rounded-full bg-white text-[#350A3A] hover:bg-[#FDF2F7] text-xs font-semibold px-5 py-2 shadow-md transition-all hover:scale-[1.02]"
                >
                  <CalendarCheck className="h-3.5 w-3.5 mr-1.5 text-[#7B2461]" />
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Main Body & Editorial Content ─────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left/Main Column: Article Body (7 cols on lg, 8 on xl) */}
            <article className="lg:col-span-8 space-y-12">
              
              {/* Featured Header Image */}
              <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-brand-pink-border shadow-sm bg-[#F5EBF1]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 text-center py-2 px-4 rounded-xl bg-white/95 backdrop-blur-xs text-xs text-brand-purple border border-brand-pink-border shadow-2xs">
                  {post.imageAlt}
                </div>
              </div>

              {/* Clinical Key Takeaways Box */}
              <section className="rounded-2xl sm:rounded-3xl bg-[#FBF5F8] border border-[#E9D1DE] p-6 sm:p-8 space-y-4 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-purple">
                  <BookOpen className="h-4 w-4" />
                  <span>Clinical Key Takeaways</span>
                </div>
                <h2 className="font-serif text-2xl font-normal text-brand-charcoal">
                  Essential Summary for Patients
                </h2>
                <ul className="space-y-3 pt-2">
                  {post.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-brand-charcoal/90 font-light leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-brand-pink-dark shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* In-Page Jump Links (Table of Contents) */}
              <nav aria-label="Table of Contents" className="rounded-2xl bg-white border border-brand-pink-border p-6 shadow-2xs">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-purple mb-4">
                  In This Clinical Guide
                </h3>
                <ol className="space-y-2.5">
                  {post.tableOfContents.map((item, idx) => (
                    <li key={item.id} className="text-sm">
                      <a
                        href={`#${item.id}`}
                        className="inline-flex items-center gap-2 text-brand-charcoal hover:text-brand-purple transition-colors font-light"
                      >
                        <span className="text-xs font-mono font-medium text-brand-pink-dark">
                          0{idx + 1}.
                        </span>
                        <span className="hover:underline underline-offset-4">{item.title}</span>
                      </a>
                    </li>
                  ))}
                  {post.faqs.length > 0 && (
                    <li className="text-sm">
                      <a
                        href="#faqs-section"
                        className="inline-flex items-center gap-2 text-brand-charcoal hover:text-brand-purple transition-colors font-light"
                      >
                        <span className="text-xs font-mono font-medium text-brand-pink-dark">
                          0{post.tableOfContents.length + 1}.
                        </span>
                        <span className="hover:underline underline-offset-4">Frequently Asked Questions</span>
                      </a>
                    </li>
                  )}
                </ol>
              </nav>

              {/* Article Content Sections */}
              <div className="space-y-12 text-brand-charcoal">
                {post.sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28 space-y-5">
                    <h2 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-normal border-b border-brand-pink-border/60 pb-3">
                      {section.heading}
                    </h2>

                    {section.content.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-base sm:text-lg text-brand-charcoal/85 font-light leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {/* Pull-quote Callout */}
                    {section.callout && (
                      <div className="my-6 p-6 rounded-2xl bg-gradient-to-r from-brand-pink-subtle/80 to-white border-l-4 border-brand-purple shadow-2xs">
                        <p className="font-serif text-lg sm:text-xl italic text-brand-purple leading-relaxed">
                          &ldquo;{section.callout}&rdquo;
                        </p>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* FAQs Section with rich schema match */}
              {post.faqs.length > 0 && (
                <section id="faqs-section" className="scroll-mt-28 pt-6 space-y-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-purple">
                    <HelpCircle className="h-4 w-4" />
                    <span>Frequently Asked Questions</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-brand-charcoal">
                    Common Questions About This Topic
                  </h2>

                  <div className="space-y-4">
                    {post.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl bg-white border border-brand-pink-border p-6 shadow-2xs space-y-2.5"
                      >
                        <h3 className="font-serif text-lg sm:text-xl font-medium text-brand-charcoal">
                          {faq.question}
                        </h3>
                        <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Full Author Profile Card */}
              <section className="rounded-3xl bg-white border border-brand-pink-border p-8 shadow-xs">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-2xl overflow-hidden border-2 border-brand-pink-border shadow-sm shrink-0">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
                        About the Author &amp; Clinician
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-normal text-brand-charcoal">
                      {post.author.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-purple font-medium">
                      {post.author.title}
                    </p>
                    <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                      {post.author.qualifications}. {post.author.experience}. Trained at M.R. Medical College, Bangalore Medical College, and Germany (Certified Diploma in ART), she brings gentle, humanized obstetrics, natural delivery guidance, and conservative fertility care to women in Bengaluru.
                    </p>
                  </div>
                </div>
              </section>

              {/* Bottom Consultation CTA Box */}
              <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#250629] via-[#4A1B4F] to-[#331137] text-white p-8 sm:p-12 shadow-md">
                <div className="relative z-10 max-w-xl space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#FAD6E7]">
                    Personalized Clinical Care
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-snug">
                    Schedule an unhurried consultation with Dr. Uma Sheshgiri
                  </h2>
                  <p className="text-sm text-white/85 font-light leading-relaxed">
                    Have questions about your reproductive health, pregnancy journey, or fertility timeline? We provide quiet, dedicated appointments at our New BEL Road sanctuary.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3.5">
                    <Button
                      onClick={() => setBookingOpen(true)}
                      size="lg"
                      className="rounded-full bg-white text-brand-purple hover:bg-brand-pink-subtle font-semibold shadow-md"
                    >
                      <CalendarCheck className="h-4 w-4 mr-2" />
                      Book an Appointment
                    </Button>
                    <a
                      href="tel:+919845000000"
                      className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-all"
                    >
                      <Phone className="h-4 w-4" />
                      Direct Clinic Call
                    </a>
                  </div>
                </div>
              </section>

            </article>

            {/* Right Column: Sticky Sidebar (4 cols) */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Sticky container */}
              <div className="sticky top-28 space-y-8">
                
                {/* Consultation Card */}
                <div className="rounded-3xl bg-white border border-brand-pink-border p-6 shadow-xs space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden border border-brand-pink-border shrink-0">
                      <Image
                        src="/images/dr_uma_square.jpg"
                        alt="Dr. Uma Sheshgiri"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-medium text-brand-charcoal">
                        Dr. Uma Sheshgiri
                      </h4>
                      <p className="text-xs text-brand-muted">
                        Senior Gynecologist &amp; ART Fellow
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-brand-muted font-light leading-relaxed">
                    Consultations are unhurried, evidence-based, and focused on your personal comfort.
                  </p>

                  <Button
                    onClick={() => setBookingOpen(true)}
                    className="w-full rounded-full bg-brand-purple hover:bg-brand-purple-hover text-white font-medium py-3 text-sm shadow-xs"
                  >
                    <CalendarCheck className="h-4 w-4 mr-2" />
                    Book Consultation
                  </Button>

                  <div className="pt-2 border-t border-brand-pink-border/50 space-y-2 text-xs text-brand-muted">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-brand-pink-dark shrink-0" />
                      <span>New BEL Road, RMV 2nd Stage, Bengaluru</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-brand-pink-dark shrink-0" />
                      <span>Mon – Sat: 10:00 AM – 1:30 PM &amp; 5:00 PM – 8:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-brand-pink-dark shrink-0" />
                      <a href="tel:+919845000000" className="hover:text-brand-purple font-medium">
                        +91 98450 12345 (Appointments)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Navigation / Related Guides */}
                <div className="rounded-3xl bg-white border border-brand-pink-border p-6 shadow-xs space-y-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
                    More Clinical Guides
                  </h4>

                  <div className="space-y-3">
                    {relatedPosts.map((rPost) => (
                      <Link
                        key={rPost.slug}
                        href={`/blog/${rPost.slug}`}
                        className="group block p-3 rounded-2xl hover:bg-brand-pink-subtle/50 transition-colors border border-transparent hover:border-brand-pink-border"
                      >
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-pink-dark">
                          {rPost.tag}
                        </span>
                        <h5 className="font-serif text-sm font-medium text-brand-charcoal group-hover:text-brand-purple transition-colors line-clamp-2 mt-1">
                          {rPost.title}
                        </h5>
                        <div className="flex items-center gap-2 mt-1.5 text-[11px] text-brand-muted">
                          <span>{rPost.readTime}</span>
                          <span>•</span>
                          <span className="flex items-center gap-0.5 text-brand-purple group-hover:translate-x-0.5 transition-transform">
                            Read guide <ChevronRight className="h-3 w-3" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline pt-2"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back to All 6 Clinical Guides
                  </Link>
                </div>

              </div>

            </aside>

          </div>
        </div>
      </main>

      <Footer />
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  )
}
