import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community Outreach - DFWTT",
  description:
    "DFWTT promotes table tennis throughout Dallas-Fort Worth through exhibitions, clinics, and community partnerships. We bring table tennis to schools, malls, churches, and community events.",
}

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
