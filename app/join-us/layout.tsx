import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Join Us - DFWTT",
  description:
    "Join Dallas Fort Worth Table Tennis! Affordable membership options, professional coaching, tournaments, and training programs for all ages and skill levels.",
}

export default function JoinUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
