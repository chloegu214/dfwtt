import Image from "next/image"
import Link from "next/link"
import { Calendar, ExternalLink, Camera, Trophy } from "lucide-react"

interface NewsCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  image?: string
  slug: string
  featured?: boolean
  hasPhotos?: boolean
  hasResults?: boolean
  readTime?: string
}

export default function NewsCard({
  title,
  excerpt,
  date,
  category,
  image,
  slug,
  featured = false,
  hasPhotos = false,
  hasResults = false,
  readTime = "3 min read",
}: NewsCardProps) {
  const cardClasses = featured
    ? "col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    : "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"

  return (
    <Link href={`/news/${slug}`} className={cardClasses}>
      <div className={`${featured ? "md:flex" : ""}`}>
        <div className={`relative ${featured ? "md:w-1/2" : ""}`}>
          <Image
            src={image || "/placeholder.svg?height=200&width=400"}
            alt={title}
            width={featured ? 600 : 400}
            height={featured ? 300 : 200}
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">{category}</span>
          </div>
          {(hasPhotos || hasResults) && (
            <div className="absolute top-4 right-4 flex gap-2">
              {hasPhotos && (
                <div className="bg-black/50 text-white p-2 rounded-full">
                  <Camera className="h-4 w-4" />
                </div>
              )}
              {hasResults && (
                <div className="bg-black/50 text-white p-2 rounded-full">
                  <Trophy className="h-4 w-4" />
                </div>
              )}
            </div>
          )}
        </div>

        <div className={`p-6 ${featured ? "md:w-1/2" : ""}`}>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>

          <h3 className={`font-bold text-gray-900 mb-3 line-clamp-2 ${featured ? "text-2xl" : "text-lg"}`}>{title}</h3>

          <p className={`text-gray-600 line-clamp-3 ${featured ? "text-base" : "text-sm"}`}>{excerpt}</p>

          <div className="mt-4 flex items-center gap-2 text-blue-600 font-medium text-sm">
            <span>Read more</span>
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
