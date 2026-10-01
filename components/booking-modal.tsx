"use client"

import * as React from "react"
import { Phone, MessageCircle, CheckCircle2, Clock, User, Heart, Loader2, AlertCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialService?: string
}

export function BookingModal({ open, onOpenChange, initialService }: BookingModalProps) {
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    service: initialService || "Gynecology Care",
    preferredTime: "Morning (10:00 AM - 1:30 PM)",
    notes: "",
  })

  const [prevInitialService, setPrevInitialService] = React.useState(initialService)
  if (initialService !== prevInitialService) {
    setPrevInitialService(initialService)
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage(null)

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Unable to send your request. Please call our clinic directly.")
      }

      setSubmitted(true)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please call +91 99000 98736 directly."
      setErrorMessage(msg)
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setSubmitted(false)
    setLoading(false)
    setErrorMessage(null)
    setFormData({
      name: "",
      phone: "",
      service: initialService || "Gynecology Care",
      preferredTime: "Morning (10:00 AM - 1:30 PM)",
      notes: "",
    })
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        onOpenChange(val)
        if (!val) {
          setTimeout(resetForm, 300)
        }
      }}
    >
      <DialogContent className="max-w-lg border-brand-pink-border/80 bg-[#FCF8FB] p-6 sm:p-8 shadow-[0_16px_50px_rgba(74,27,79,0.15)] glow-pink-md rounded-3xl">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-pink-subtle border border-brand-pink-border text-brand-purple text-xs">
              <Heart className="h-3.5 w-3.5 fill-brand-pink/50 text-brand-purple" />
            </span>
            <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-purple">
              VCUS Genesis Care Sanctuary
            </span>
          </div>
          <DialogTitle className="font-serif text-2xl sm:text-3xl font-medium text-brand-charcoal">
            Book an Unhurried Consultation
          </DialogTitle>
          <DialogDescription className="text-brand-muted text-sm mt-1">
            Connect directly with Dr. Uma Sheshgiri&apos;s team at New BEL Road, Bengaluru.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-pink-subtle border border-brand-pink-border text-brand-purple glow-pink-sm">
              <CheckCircle2 className="h-8 w-8 text-brand-pink-dark" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif text-2xl font-medium text-brand-charcoal">
                Consultation Request Received
              </h4>
              <p className="text-sm text-brand-muted max-w-sm mx-auto">
                Thank you, <span className="font-medium text-brand-charcoal">{formData.name || "there"}</span>. Our clinical coordinator will reach out to you at{" "}
                <span className="font-medium text-brand-purple">{formData.phone || "+91 99000 98736"}</span> shortly to confirm your scheduled appointment.
              </p>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+919900098736"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-purple px-6 py-2.5 text-sm font-medium text-white hover:bg-brand-purple-dark shadow-sm transition-colors"
              >
                <Phone className="h-4 w-4" /> Call Clinic Now
              </a>
              <Button
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="rounded-full border-brand-pink-border text-brand-purple hover:bg-brand-pink-subtle"
              >
                Close
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-5 pt-2">
            {/* Quick Contact Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:+919900098736"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-brand-pink-border/80 hover:border-brand-purple hover:shadow-xs transition-all group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-pink-subtle text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-wider text-brand-muted">
                    Call Directly
                  </div>
                  <div className="text-sm font-semibold text-brand-charcoal group-hover:text-brand-purple transition-colors">
                    +91 99000 98736
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/919900098736?text=Hello%20VCUS%20Genesis%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20consultation%20with%20Dr.%20Uma%20Sheshgiri."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F7FBF8] border border-[#D9ECD6] hover:border-[#25D366] hover:shadow-xs transition-all group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#128C7E] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-wider text-brand-muted">
                    WhatsApp Chat
                  </div>
                  <div className="text-sm font-semibold text-brand-charcoal">
                    Instant Connect
                  </div>
                </div>
              </a>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-brand-pink-border/60 w-full" />
              <span className="bg-[#FCF8FB] px-3 text-[11px] text-brand-muted uppercase tracking-wider">
                Or request a reserved slot
              </span>
            </div>

            {/* Appointment Request Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-brand-charcoal mb-1">
                  Your Full Name <span className="text-brand-pink-dark">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-brand-pink-border bg-white py-2.5 pl-10 pr-3.5 text-sm text-brand-charcoal placeholder:text-brand-muted/60 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-brand-charcoal mb-1">
                  Phone Number <span className="text-brand-pink-dark">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-brand-pink-border bg-white py-2.5 pl-10 pr-3.5 text-sm text-brand-charcoal placeholder:text-brand-muted/60 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-brand-charcoal mb-1">
                    Care Pathway
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-xl border border-brand-pink-border bg-white py-2.5 px-3 text-sm text-brand-charcoal focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple"
                  >
                    <option>Gynecology Care</option>
                    <option>Obstetrics &amp; Maternity</option>
                    <option>Fertility Support</option>
                    <option>Cosmetic Gynaecology</option>
                    <option>Vaginal Rejuvenation</option>
                    <option>Vaginal Tightening</option>
                    <option>Labiaplasty</option>
                    <option>Post Delivery Vaginal Restoration</option>
                    <option>Treatment for Vaginal Dryness</option>
                    <option>Stress Urinary Incontinence Treatment</option>
                    <option>PRP Therapy for Intimate Wellness</option>
                    <option>Preventive Screening</option>
                    <option>Menopause &amp; Midlife</option>
                    <option>Diagnostics &amp; Labs</option>
                    {!["Gynecology Care", "Obstetrics & Maternity", "Fertility Support", "Cosmetic Gynaecology", "Vaginal Rejuvenation", "Vaginal Tightening", "Labiaplasty", "Post Delivery Vaginal Restoration", "Treatment for Vaginal Dryness", "Stress Urinary Incontinence Treatment", "PRP Therapy for Intimate Wellness", "Preventive Screening", "Menopause & Midlife", "Diagnostics & Labs"].includes(formData.service) && (
                      <option value={formData.service}>{formData.service}</option>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-brand-charcoal mb-1">
                    Preferred Slot
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-brand-muted pointer-events-none" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full rounded-xl border border-brand-pink-border bg-white py-2.5 pl-8 pr-3 text-sm text-brand-charcoal focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple"
                    >
                      <option>Morning (10:00 AM - 1:30 PM)</option>
                      <option>Evening (5:00 PM - 8:00 PM)</option>
                      <option>Saturday (10:00 AM - 3:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800 flex items-start gap-2.5">
                  <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p>{errorMessage}</p>
                    <div className="flex items-center gap-3 pt-1">
                      <a href="tel:+919900098736" className="font-semibold text-brand-purple underline">
                        Call +91 99000 98736
                      </a>
                      <a
                        href="https://wa.me/919900098736"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#128C7E] underline"
                      >
                        WhatsApp Us
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full mt-2 rounded-full bg-brand-purple py-3 text-sm font-medium text-white hover:bg-brand-purple-dark shadow-sm hover:shadow-[0_0_25px_rgba(194,110,146,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Connecting to Care Sanctuary...</span>
                  </>
                ) : (
                  <span>Request Consultation Confirmation</span>
                )}
              </Button>

              <p className="text-center text-[11px] text-brand-muted">
                Consultations by prior appointment to prevent crowding &amp; delays. New BEL Road, Bengaluru.
              </p>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
