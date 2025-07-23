"use client"

import Image from "next/image"
import { ExternalLink, Camera } from "lucide-react"

interface GalleryCardProps {
  year: string
  title: string
  description: string
  imageCount: number
  highlights: string[]
  oneDriveUrl: string
  coverImage: string
  featured?: boolean
}

export default function GalleryCard({
  year,
  title,
  description,
  imageCount,
  highlights,
  oneDriveUrl,
  coverImage,
  featured = false,
}: GalleryCardProps) {
  const handleViewGallery = () => {
    window.open(oneDriveUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
        featured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
      onClick={handleViewGallery}
    >
      {/* Background Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={coverImage || "/placeholder.svg?height=320&width=480"}
          alt={`${year} DFWTT Gallery`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Year Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">{year}</span>
        </div>

        {/* Photo Count */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
          <Camera className="h-4 w-4" />
          <span>{imageCount} photos</span>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className={`font-bold mb-2 ${featured ? "text-2xl" : "text-xl"}`}>{title}</h3>
        <p className="text-gray-200 text-sm mb-3 line-clamp-2">{description}</p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {highlights.slice(0, featured ? 4 : 2).map((highlight, index) => (
            <span key={index} className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
              {highlight}
            </span>
          ))}
        </div>

        {/* View Gallery Button */}
        <button className="bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors">
          <span>View Gallery</span>
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
