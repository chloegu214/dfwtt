import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tournament Scoreboard | DFWTT",
  description:
    "Complete tournament results and championship records from DFWTT competitions. Track player achievements, tournament winners, and competitive history from 2002-2025.",
  keywords:
    "table tennis, tournament results, scoreboard, DFWTT, Dallas Fort Worth, ping pong, championships, competition results",
}

export default function ScoreboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen">{children}</div>
}
