import NewsCard from "@/components/news-card"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"

const news2024 = [
  {
    title: "2024 DFWTT Fall Championship",
    excerpt:
      "Our annual Fall Championship concluded with record participation. Over 120 players competed across multiple divisions, showcasing the growing strength of our table tennis community.",
    date: "November 15, 2024",
    category: "Tournament",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2024-fall-championship",
    hasPhotos: true,
    hasResults: true,
  },
  {
    title: "Youth Development Program Success",
    excerpt:
      "Our youth development program reached new heights in 2024, with 15 junior players advancing to state-level competitions and 3 earning spots on regional teams.",
    date: "October 20, 2024",
    category: "Youth",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2024-youth-program-success",
  },
  {
    title: "New Coaching Certifications",
    excerpt:
      "Three DFWTT coaches earned advanced USATT certifications, enhancing our ability to provide world-class training to players of all levels.",
    date: "September 10, 2024",
    category: "Training",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2024-coaching-certifications",
  },
  {
    title: "Community Outreach Program Launch",
    excerpt:
      "DFWTT launched its community outreach program, bringing table tennis to local schools and community centers throughout the Dallas-Fort Worth area.",
    date: "August 5, 2024",
    category: "Community",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2024-community-outreach",
  },
  {
    title: "Summer Training Camp Highlights",
    excerpt:
      "Our intensive summer training camp welcomed 50 participants, featuring guest coaches from international competitions and advanced training techniques.",
    date: "July 12, 2024",
    category: "Training",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2024-summer-camp",
    hasPhotos: true,
  },
  {
    title: "2024 Spring Open Tournament",
    excerpt:
      "The Spring Open attracted players from across Texas and neighboring states, with competitive matches across all skill levels and age groups.",
    date: "April 18, 2024",
    category: "Tournament",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2024-spring-open",
    hasPhotos: true,
    hasResults: true,
  },
]

export default function Archive2024Page() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/news" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
              <ArrowLeft className="h-4 w-4" />
              Back to News
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">2024 News Archive</h1>
              <p className="text-gray-600">Complete coverage of DFWTT events and activities from 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news2024.map((article, index) => (
              <NewsCard key={index} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link
              href="/news/archive/2023"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              2023 Archive
            </Link>
            <Link
              href="/news"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Current News
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
