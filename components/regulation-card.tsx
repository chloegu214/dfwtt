"use client"

import type React from "react"
import { AlertTriangle, CheckCircle, XCircle, Info } from "lucide-react"

interface RegulationCardProps {
  title: string
  children: React.ReactNode
  type?: "warning" | "info" | "success" | "danger"
  icon?: React.ReactNode
}

const typeStyles = {
  warning: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    icon: "text-yellow-600",
    title: "text-yellow-800",
  },
  info: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: "text-blue-600",
    title: "text-blue-800",
  },
  success: {
    bg: "bg-green-50",
    border: "border-green-200",
    icon: "text-green-600",
    title: "text-green-800",
  },
  danger: {
    bg: "bg-red-50",
    border: "border-red-200",
    icon: "text-red-600",
    title: "text-red-800",
  },
}

const defaultIcons = {
  warning: <AlertTriangle className="h-6 w-6" />,
  info: <Info className="h-6 w-6" />,
  success: <CheckCircle className="h-6 w-6" />,
  danger: <XCircle className="h-6 w-6" />,
}

export default function RegulationCard({ title, children, type = "info", icon }: RegulationCardProps) {
  const styles = typeStyles[type]
  const displayIcon = icon || defaultIcons[type]

  return (
    <div className={`${styles.bg} ${styles.border} border rounded-xl p-6`}>
      <div className="flex items-start gap-4">
        <div className={`${styles.icon} flex-shrink-0 mt-1`}>{displayIcon}</div>
        <div className="flex-1">
          <h3 className={`${styles.title} text-lg font-bold mb-3`}>{title}</h3>
          <div className="text-gray-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}
