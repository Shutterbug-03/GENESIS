"use client"

import * as React from "react"
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react"

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  className?: string
}

/**
 * Taste-Skill compliant scroll reveal (Section 5.C)
 * GPU-safe (animates transform & opacity only), respects prefers-reduced-motion.
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 24,
  className = "",
  ...props
}: FadeInProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier spring feel
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  staggerDelay?: number
  className?: string
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  className = "",
  ...props
}: StaggerContainerProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduce ? 0 : staggerDelay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  yOffset?: number
}

export function StaggerItem({
  children,
  className = "",
  yOffset = 20,
  ...props
}: StaggerItemProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface DoubleBezelProps {
  children: React.ReactNode
  className?: string
  shellClassName?: string
  coreClassName?: string
  dark?: boolean
}

/**
 * Double-Bezel Nested Architecture (High-End Visual Design Section 4.A)
 * Machined outer shell + concentric inner core container for hardware-level tactile depth.
 */
export function DoubleBezel({
  children,
  className = "",
  shellClassName = "",
  coreClassName = "",
  dark = false,
}: DoubleBezelProps) {
  return (
    <div
      className={`p-1.5 rounded-[2rem] transition-all duration-500 ${
        dark
          ? "bg-white/[0.06] border border-white/10 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.5)] hover:border-white/20 hover:bg-white/[0.09]"
          : "bg-white/60 border border-brand-pink-border/60 shadow-[0_16px_40px_-10px_rgba(74,27,79,0.06)] hover:border-brand-pink hover:bg-white/80 hover:shadow-[0_24px_50px_-12px_rgba(194,110,146,0.18)]"
      } ${shellClassName} ${className}`}
    >
      <div
        className={`rounded-[calc(2rem-6px)] transition-all duration-300 ${
          dark
            ? "bg-[#1E0422] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
            : "bg-white border border-white/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)]"
        } ${coreClassName}`}
      >
        {children}
      </div>
    </div>
  )
}
