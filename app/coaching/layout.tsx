import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Coaching - DFWTT",
  description:
    "Learn from USATT and ITTF certified coaches at DFWTT. Professional table tennis coaching for all ages and skill levels with proven results.",
}

export default function CoachingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
