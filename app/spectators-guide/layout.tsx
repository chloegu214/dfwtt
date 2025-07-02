import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Spectator's Guide to Table Tennis - DFWTT",
  description:
    "Complete guide to understanding table tennis rules, scoring, etiquette, and terminology. Learn everything you need to know to appreciate the world's fastest racket sport.",
}

export default function SpectatorsGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
