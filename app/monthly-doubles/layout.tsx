import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Monthly Doubles Championships | DFWTT",
  description:
    "Complete results from Dallas-Fort Worth Table Tennis monthly doubles tournaments. View Class A, B, and C division results with comprehensive rankings and partnership records.",
  keywords: [
    "table tennis doubles",
    "DFWTT doubles",
    "Dallas table tennis tournaments",
    "Fort Worth ping pong doubles",
    "monthly doubles championships",
    "table tennis partnerships",
    "doubles rankings",
    "Heights doubles tournament",
  ],
  openGraph: {
    title: "Monthly Doubles Championships | DFWTT",
    description:
      "Complete results from Dallas-Fort Worth Table Tennis monthly doubles tournaments featuring Class A, B, and C divisions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monthly Doubles Championships | DFWTT",
    description:
      "Complete results from Dallas-Fort Worth Table Tennis monthly doubles tournaments featuring Class A, B, and C divisions.",
  },
}

export default function MonthlyDoublesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen">{children}</div>
}
