"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface RulesCardProps {
  title: string
  children: React.ReactNode
  icon?: React.ReactNode
  defaultOpen?: boolean
}

export default function RulesCard({ title, children, icon, defaultOpen = false }: RulesCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon && <div className="text-blue-600">{icon}</div>}
          <h3 className="text-lg font-semibold text-gray-900 text-left">{title}</h3>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
      </button>

      {isOpen && (
        <div className="px-6 pb-6 border-t border-gray-100">
          <div className="pt-4 text-gray-700 leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  )
}
