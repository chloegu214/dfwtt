import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News & Updates - DFWTT",
  description:
    "Stay updated with the latest news, tournaments, training programs, and community events from Dallas Fort Worth Table Tennis.",
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
