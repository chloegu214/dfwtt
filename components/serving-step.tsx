"use client"

import Image from "next/image"
import { CheckCircle, XCircle, AlertTriangle, Play } from "lucide-react"

interface ServingStepProps {
  stepNumber: number
  title: string
  lawReference: string
  description: string
  legalExample?: string
  illegalExamples?: string[]
  imageSrc: string
  imageAlt: string
  videoPlaceholder?: boolean
  keyPoints?: string[]
  intention?: string
}

export default function ServingStep({
  stepNumber,
  title,
  lawReference,
  description,
  legalExample,
  illegalExamples = [],
  imageSrc,
  imageAlt,
  videoPlaceholder = false,
  keyPoints = [],
  intention,
}: ServingStepProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center">
            <span className="text-xl font-bold">{stepNumber}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-blue-100 text-sm">{lawReference}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Main Description */}
        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>

        {/* Image and Video */}
        <div className="mb-6">
          <div className="relative">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={600}
              height={400}
              className="w-full rounded-lg border border-gray-200"
            />
            {videoPlaceholder && (
              <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-4">
                  <Play className="h-8 w-8 text-blue-600" />
                </div>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">{imageAlt}</p>
        </div>

        {/* Legal Example */}
        {legalExample && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-green-800 mb-1">Legal Method</h4>
                <p className="text-green-700 text-sm">{legalExample}</p>
              </div>
            </div>
          </div>
        )}

        {/* Illegal Examples */}
        {illegalExamples.length > 0 && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-start gap-2">
              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Illegal Methods</h4>
                <ul className="space-y-1">
                  {illegalExamples.map((example, index) => (
                    <li key={index} className="text-red-700 text-sm flex items-start gap-1">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Key Points */}
        {keyPoints.length > 0 && (
          <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Key Points to Remember</h4>
            <ul className="space-y-1">
              {keyPoints.map((point, index) => (
                <li key={index} className="text-blue-700 text-sm flex items-start gap-1">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Intention */}
        {intention && (
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-yellow-800 mb-1">Intention of This Rule</h4>
                <p className="text-yellow-700 text-sm">{intention}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
