import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sponsors & Partners - DFWTT",
  description:
    "Partner with DFWTT to support table tennis excellence in Dallas-Fort Worth. Sponsorship opportunities available for businesses and organizations.",
}

export default function SponsorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
