import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Charitable Giving - DFWTT",
  description:
    "DFWTT has donated over $15,031 to charity through our tournament participation program. Every player contributes $2 per tournament to support community causes.",
}

export default function PatronsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
