import NewsCard from "@/components/news-card"
import Link from "next/link"
import { Calendar, Archive, Search } from "lucide-react"

const featuredNews = {
  title: "Special Training Program with Coach Seth Pech",
  excerpt:
    "DFWTT is privileged to have Seth Pech, a professional table tennis athlete and coach (USATT 2500+) known from his YouTube Channel PechPong. Seth will be coaching at DFW clubs for four months (April-August), bringing professional experience from Germany and Sweden.",
  date: "June 15, 2025",
  category: "Training",
  image: "/placeholder.svg?height=300&width=600",
  slug: "seth-pech-special-training",
  featured: true,
  readTime: "4 min read",
}

const newsArticles = [
  {
    title: "2025 DFWTT Summer Open Results",
    excerpt:
      "DFWTT hosted its Summer Open on June 14th at the Cimarron Recreation Center in Irving. The tournament raised $170 for the American Red Cross Disaster Relief Fund.",
    date: "June 14, 2025",
    category: "Tournament",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2025-summer-open-results",
    hasPhotos: true,
    hasResults: true,
  },
  {
    title: "2025 World University Games Trials",
    excerpt:
      "Collegiate National Team trials were held in Rockford, Illinois on April 3rd, determining five WUG team positions for the upcoming event in Rhine-Ruhr, Germany.",
    date: "April 3, 2025",
    category: "Competition",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2025-wug-trials",
    hasPhotos: true,
  },
  {
    title: "2025 NCTTA Championships",
    excerpt:
      "The 2025 NCTTA Championships were held in Rockford, Illinois on April 3-6th. Complete information and results available on the NCTTA website.",
    date: "April 6, 2025",
    category: "Championship",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2025-nctta-championships",
    hasPhotos: true,
    hasResults: true,
  },
  {
    title: "2025 DFWTT School Challenge",
    excerpt:
      "The DFWTT School Challenge was held on March 29th at the Marcus Recreation Center, serving as a qualifying event for the AYTTO 2025 Scholastic National Championship.",
    date: "March 29, 2025",
    category: "Youth",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2025-school-challenge",
    hasPhotos: true,
    hasResults: true,
  },
  {
    title: "2025 DFWTT Spring Open Success",
    excerpt:
      "DFWTT hosted its Spring Open on March 22nd at the Cimarron Recreation Center, raising $180 for the American Red Cross Disaster Relief Fund.",
    date: "March 22, 2025",
    category: "Tournament",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2025-spring-open-results",
    hasPhotos: true,
    hasResults: true,
  },
  {
    title: "2025 NCTTA South Regional Championships",
    excerpt:
      "Texas Wesleyan University hosted the NCTTA South Regional Championships on February 22nd at the Sid Richardson Center in Fort Worth.",
    date: "February 22, 2025",
    category: "Regional",
    image: "/placeholder.svg?height=200&width=400",
    slug: "2025-nctta-south-regional",
    hasPhotos: true,
    hasResults: true,
  },
]

const archiveYears = [
  { year: "2024", slug: "2024" },
  { year: "2023", slug: "2023" },
  { year: "2022", slug: "2022" },
  { year: "2021", slug: "2021" },
  { year: "2020", slug: "2020" },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">DFWTT News & Updates</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Stay up to date with the latest tournaments, training programs, and community events from Dallas Fort
              Worth Table Tennis.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
              <Link
                href="/news/archive"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <Archive className="h-4 w-4" />
                View Archive
              </Link>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search news..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            <NewsCard {...featuredNews} />
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <NewsCard key={index} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">News Archive</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our complete news archive to see DFWTT's history of tournaments, achievements, and
              community events.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {archiveYears.map((archive) => (
              <Link
                key={archive.year}
                href={`/news/archive/${archive.slug}`}
                className="bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg p-6 text-center transition-colors"
              >
                <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-gray-900">{archive.year}</h3>
                <p className="text-sm text-gray-600">View {archive.year} news</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
