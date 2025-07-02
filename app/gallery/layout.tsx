import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Photo Gallery - DFWTT",
  description:
    "Browse through 20 years of DFWTT memories, tournaments, and community events. Over 4,000 photos documenting our table tennis journey from 2006 to 2025.",
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
