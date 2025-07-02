import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Places to Play - DFWTT",
  description:
    "Find table tennis playing locations throughout the Dallas-Fort Worth area. Multiple recreation centers with quality facilities and flexible schedules.",
}

export default function PlacesToPlayLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
