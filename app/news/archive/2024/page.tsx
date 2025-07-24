import NewsCard from "@/components/news-card"
import Link from "next/link"
import { ArrowLeft, Calendar, Trophy, Users, Heart } from "lucide-react"

const year2024News = [
  {
    title: "Winter 2025 George Braithwaite Major League",
    excerpt:
      "DFWTT and GPPCTX are hosting the Winter 2025 George Braithwaite Major League tournaments on January 26 and March 23, 2025 in the Dallas area.",
    date: "December 15, 2024",
    category: "League",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2024-gbml-winter-announcement",
    hasPhotos: false,
  },
  {
    title: "2024 DFWTT Fall Open Results",
    excerpt:
      "DFWTT hosted its yearly Fall Open on November 2nd at the Cimarron Recreation Center in Irving. The tournament raised $176 for the American Red Cross Service to the Armed Forces fund.",
    date: "November 2, 2024",
    category: "Tournament",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2024-fall-open-results",
    hasPhotos: true,
    hasResults: true,
  },
  {
    title: "2024 Chinese Double Ten Celebration",
    excerpt:
      "DFWTT hosted its yearly Chinese Double Ten Celebration tournament on September 21st at the Irving Cimarron Recreation Center with great community participation.",
    date: "September 21, 2024",
    category: "Cultural",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2024-double-ten-celebration",
    hasPhotos: true,
    hasResults: true,
  },
  {
    title: "George Braithwaite Major Team League Season 3",
    excerpt:
      "DFWTT is hosting the George Braithwaite Major Team League season 3 from September 2024 to May 2025. Contact Donna Chen to join the team.",
    date: "September 1, 2024",
    category: "League",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2024-gbml-season-3",
    hasPhotos: false,
  },
  {
    title: "Summer Training with Coach Seth Pech",
    excerpt:
      "DFWTT had the privilege of having Seth Pech, a professional table tennis athlete and coach (USATT 2500+) from his YouTube Channel PechPong, coaching at DFW clubs for two months.",
    date: "August 31, 2024",
    category: "Training",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2024-seth-pech-summer-training",
    hasPhotos: true,
  },
  {
    title: "2024 DFWTT Summer Open Success",
    excerpt:
      "DFWTT hosted its Summer Open on June 22nd at the Cimarron Recreation Center in Irving. DFWTT donated $160 to Welcome.US to support those seeking refuge in the US.",
    date: "June 22, 2024",
    category: "Tournament",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2024-summer-open-results",
    hasPhotos: true,
    hasResults: true,
  },
  {
    title: "2024 Scholastic National Championship",
    excerpt:
      "AYTTO partnered with DFWTT and Pongspace to host the 2024 National Scholastic Team Championship at the Richardson Heights Recreation Center on May 26th.",
    date: "May 26, 2024",
    category: "Youth",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2024-scholastic-nationals",
    hasPhotos: true,
  },
  {
    title: "2024 Texas State Championships",
    excerpt:
      "The 2024 Texas State Championships were held in Fort Worth, Texas at the Sid Richardson Center on April 27-28th with excellent competition across all divisions.",
    date: "April 28, 2024",
    category: "Championship",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2024-texas-state-championships",
    hasPhotos: true,
    hasResults: true,
  },
  {
    title: "2024 NCTTA Championships",
    excerpt:
      "The 2024 NCTTA Championships were held in Eau Claire, Wisconsin on April 12-14th. Information and results available on the NCTTA website.",
    date: "April 14, 2024",
    category: "Championship",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2024-nctta-championships",
    hasPhotos: true,
    hasResults: true,
  },
  {
    title: "2024 Olympic Trials",
    excerpt:
      "The Olympic Trials were held in West Monroe, Louisiana on March 21-24 at the West Monroe Sports & Events Facility with top US players competing.",
    date: "March 24, 2024",
    category: "Championship",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2024-olympic-trials",
    hasPhotos: true,
  },
  {
    title: "DFWTT School Challenge 2024",
    excerpt:
      "The DFWTT School Challenge was held on March 30th at the Marcus Recreation Center, welcoming elementary, middle and high school students.",
    date: "March 30, 2024",
    category: "Youth",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2024-school-challenge",
    hasPhotos: true,
    hasResults: true,
  },
  {
    title: "Kids After School Table Tennis Program",
    excerpt:
      "Organized in partnership with American Youth Table Tennis, offering free admission for 10 students and $20/day for others from February 7 to April 11.",
    date: "February 7, 2024",
    category: "Youth",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2024-kids-after-school-program",
    hasPhotos: false,
  },
]

const stats2024 = [
  { label: "Tournaments Hosted", value: "12", icon: Trophy },
  { label: "Players Participated", value: "800+", icon: Users },
  { label: "Charity Donations", value: "$516", icon: Heart },
  { label: "Training Sessions", value: "60+", icon: Calendar },
]

export default function News2024Page() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/news/archive"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Archive
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">2024 News Archive</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A year of growth with the George Braithwaite Major League launch, professional coaching with Seth Pech, and
            continued community engagement through tournaments and charity events.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats2024.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <Icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {year2024News.map((article, index) => (
              <NewsCard key={index} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Year Navigation */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4">
            <Link
              href="/news/archive/2025"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              2025 →
            </Link>
            <Link
              href="/news/archive/2023"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              ← 2023
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
