import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sunday Singles Round Robin | DFWTT",
  description:
    "Weekly Sunday Singles Round Robin tournament results from Dallas Fort Worth Table Tennis. View historical results, player rankings, and competitive statistics across multiple skill divisions.",
  keywords: [
    "table tennis",
    "ping pong",
    "round robin",
    "tournament results",
    "Dallas",
    "Fort Worth",
    "DFWTT",
    "singles competition",
    "weekly tournament",
    "player rankings",
    "table tennis results",
    "competitive play",
  ],
  openGraph: {
    title: "Sunday Singles Round Robin | DFWTT",
    description: "Weekly Sunday Singles Round Robin tournament results from Dallas Fort Worth Table Tennis.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunday Singles Round Robin | DFWTT",
    description: "Weekly Sunday Singles Round Robin tournament results from Dallas Fort Worth Table Tennis.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SundayRRLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
