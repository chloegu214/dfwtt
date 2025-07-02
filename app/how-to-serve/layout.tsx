import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How to Serve Legally in Table Tennis - DFWTT",
  description:
    "Complete step-by-step guide to legal table tennis serving. Learn all 7 ITTF service laws with visual examples, common mistakes, and practice tips.",
}

export default function HowToServeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
