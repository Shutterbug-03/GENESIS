import * as React from "react"
import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "header" | "footer" | "full" | "light"
  compact?: boolean
  className?: string
}

export function Logo({ variant = "header", compact = false, className = "" }: LogoProps) {
  if (variant === "light") {
    return (
      <Link href="/" className={`flex items-center ${compact ? "gap-2 sm:gap-2.5" : "gap-2.5 sm:gap-3"} group ${className}`}>
        {/* Exact Logo Emblem in soft frosted white circle */}
        <div
          className={`relative ${
            compact ? "h-8 w-8 min-[380px]:h-9 min-[380px]:w-9 sm:h-10 sm:w-10" : "h-10 w-10 sm:h-12 sm:w-12"
          } shrink-0 overflow-hidden rounded-full border border-white/50 bg-white p-0.5 sm:p-1 shadow-md transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] group-hover:scale-105`}
        >
          <Image
            src="/images/genesis_emblem_crop.jpg"
            alt="Genesis Emblem"
            fill
            sizes="48px"
            className="object-contain p-0.5"
            priority
          />
        </div>

        <div className="flex flex-col min-w-0">
          <span
            className={`font-serif ${
              compact ? "text-base min-[380px]:text-lg sm:text-xl" : "text-xl sm:text-2xl"
            } font-semibold tracking-tight text-white leading-none group-hover:text-[#FAD6E7] transition-colors`}
          >
            Genesis
          </span>
          <span
            className={`${
              compact
                ? "text-[7px] min-[360px]:text-[7.5px] min-[400px]:text-[8.5px] sm:text-[9px]"
                : "text-[8px] min-[380px]:text-[9px] sm:text-[10px]"
            } tracking-[0.14em] min-[380px]:tracking-[0.18em] sm:tracking-[0.20em] font-medium uppercase text-[#FAD6E7] mt-0.5 sm:mt-1 leading-none whitespace-nowrap`}
          >
            Women&apos;s Health &amp; Infertility
          </span>
        </div>
      </Link>
    )
  }

  if (variant === "full") {
    return (
      <Link href="/" className={`inline-flex flex-col items-center group ${className}`}>
        <div className="relative h-20 w-20 overflow-hidden rounded-full border border-brand-pink-border bg-white p-1 shadow-xs">
          <Image
            src="/images/genesis_emblem_crop.jpg"
            alt="Genesis Women's Health and Infertility Centre"
            fill
            sizes="80px"
            className="object-contain p-1"
            priority
          />
        </div>
        <div className="mt-2 text-center">
          <span className="font-serif text-2xl font-bold tracking-tight text-brand-purple">
            Genesis
          </span>
          <span className="block text-[9px] sm:text-[10px] tracking-[0.18em] font-medium uppercase text-brand-pink-dark mt-0.5 whitespace-nowrap">
            Women&apos;s Health and Infertility Centre
          </span>
        </div>
      </Link>
    )
  }

  return (
    <Link href="/" className={`flex items-center gap-2.5 sm:gap-3 group ${className}`}>
      {/* Exact Logo Emblem in soft glow container */}
      <div className="relative h-9 w-9 sm:h-11 sm:w-11 shrink-0 overflow-hidden rounded-full border border-brand-pink-border/80 bg-white p-0.5 sm:p-1 shadow-xs transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(194,110,146,0.35)] group-hover:scale-105">
        <Image
          src="/images/genesis_emblem_crop.jpg"
          alt="Genesis Emblem"
          fill
          sizes="48px"
          className="object-contain p-0.5"
          priority
        />
      </div>

      <div className="flex flex-col min-w-0">
        <span className="font-serif text-lg sm:text-2xl font-semibold tracking-tight text-brand-purple leading-none group-hover:text-brand-purple-dark transition-colors">
          Genesis
        </span>
        <span className="text-[7.5px] min-[360px]:text-[8px] sm:text-[9.5px] tracking-[0.14em] sm:tracking-[0.20em] font-medium uppercase text-brand-muted mt-0.5 sm:mt-1 leading-none whitespace-nowrap">
          Women&apos;s Health &amp; Infertility
        </span>
      </div>
    </Link>
  )
}
