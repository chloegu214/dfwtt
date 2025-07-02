"use client"

import { Check, Star } from "lucide-react"

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  buttonText: string
  buttonAction: () => void
}

interface PricingCardProps extends PricingTier {}

export default function PricingCard({
  name,
  price,
  description,
  features,
  popular = false,
  buttonText,
  buttonAction,
}: PricingCardProps) {
  return (
    <div
      className={`relative bg-white rounded-xl shadow-lg border-2 p-8 ${
        popular ? "border-blue-500 scale-105" : "border-gray-200"
      } transition-transform hover:scale-105`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
            <Star className="h-4 w-4" />
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-2">{price}</div>
        <p className="text-gray-600">{description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={buttonAction}
        className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
          popular ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900"
        }`}
      >
        {buttonText}
      </button>
    </div>
  )
}
