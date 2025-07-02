import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Table Tennis Equipment | DFWTT - Best Prices on Professional Gear",
  description:
    "Get the best prices on professional table tennis equipment from top brands like Butterfly, Yasaka, Nittaku, STIGA, JUIC, and Newgy. Contact Donna Chen at (214) 240-5975 for unbeatable deals.",
  keywords:
    "table tennis equipment, ping pong gear, butterfly, yasaka, nittaku, stiga, juic, newgy, robo-pong, table tennis robots, paddles, rubbers, tables, dallas fort worth",
  openGraph: {
    title: "Table Tennis Equipment | DFWTT",
    description:
      "Professional table tennis equipment at the best prices. Contact Donna Chen for personalized recommendations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Table Tennis Equipment | DFWTT",
    description: "Get the best prices on professional table tennis equipment from top brands.",
  },
}

export default function EquipmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
