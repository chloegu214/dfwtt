import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Table Tennis Regulations - DFWTT",
  description:
    "Official ITTF table tennis regulations including equipment rules, booster ban, serving requirements, and tournament testing procedures. Stay compliant with current regulations.",
}

export default function RulesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
