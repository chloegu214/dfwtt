"use client"

import GalleryCard from "@/components/gallery-card"
import { Calendar, Camera, Users, Trophy, Search, Filter } from "lucide-react"
import { useState } from "react"

const galleryData = [
  {
    year: "2025",
    title: "2025 Tournament Season",
    description:
      "Current year highlights including Summer Open, Spring tournaments, and special coaching programs with Seth Pech.",
    imageCount: 245,
    highlights: ["Summer Open", "Seth Pech Training", "School Challenge", "NCTTA Championships"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2025Gallery",
    coverImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    featured: true,
  },
  {
    year: "2024",
    title: "2024 Championship Year",
    description:
      "A remarkable year with record participation in tournaments and successful youth development programs.",
    imageCount: 312,
    highlights: ["Fall Championship", "Youth Program", "Community Outreach"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2024Gallery",
    coverImage: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    featured: true,
  },
  {
    year: "2023",
    title: "2023 Growth & Excellence",
    description: "Expansion to new locations and hosting of major regional tournaments.",
    imageCount: 289,
    highlights: ["Regional Championships", "New Locations", "Junior Development"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2023Gallery",
    coverImage: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    year: "2022",
    title: "2022 Recovery & Renewal",
    description: "Post-pandemic return to full tournament schedule and community engagement.",
    imageCount: 198,
    highlights: ["Tournament Return", "Safety Protocols", "Community Events"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2022Gallery",
    coverImage: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    year: "2021",
    title: "2021 Adaptation & Innovation",
    description: "Adapting to new challenges while maintaining our commitment to table tennis excellence.",
    imageCount: 156,
    highlights: ["Virtual Training", "Safety Measures", "Limited Tournaments"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2021Gallery",
    coverImage: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    year: "2020",
    title: "2020 Challenges & Resilience",
    description: "A year of adaptation and finding new ways to keep our community connected.",
    imageCount: 134,
    highlights: ["Early Season", "Community Support", "Virtual Events"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2020Gallery",
    coverImage: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  },
  {
    year: "2019",
    title: "2019 Peak Performance",
    description: "One of our most successful years with multiple championship victories and record membership.",
    imageCount: 387,
    highlights: ["Championship Wins", "Record Membership", "Elite Training"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2019Gallery",
    coverImage: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
  },
  {
    year: "2018",
    title: "2018 Competitive Excellence",
    description: "Strong tournament performances and continued growth in youth programs.",
    imageCount: 342,
    highlights: ["Tournament Success", "Youth Growth", "Coaching Excellence"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2018Gallery",
    coverImage: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  },
  {
    year: "2017",
    title: "2017 Community Building",
    description: "Focus on building stronger community connections and expanding outreach programs.",
    imageCount: 298,
    highlights: ["Community Events", "Outreach Programs", "New Members"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2017Gallery",
    coverImage: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  },
  {
    year: "2016",
    title: "2016 20th Anniversary",
    description: "Celebrating 20 years of DFWTT with special events and commemorative tournaments.",
    imageCount: 425,
    highlights: ["20th Anniversary", "Special Events", "Commemorative Tournaments"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2016Gallery",
    coverImage: "linear-gradient(135deg, #ff8a80 0%, #ffb74d 100%)",
  },
  {
    year: "2015",
    title: "2015 Expansion Era",
    description: "Major expansion with new facilities and increased tournament hosting capabilities.",
    imageCount: 267,
    highlights: ["Facility Expansion", "New Equipment", "Increased Capacity"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2015Gallery",
    coverImage: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
  },
  {
    year: "2014",
    title: "2014 Tournament Hub",
    description: "Establishing DFWTT as a premier tournament destination in the Southwest.",
    imageCount: 234,
    highlights: ["Major Tournaments", "Regional Recognition", "Elite Players"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2014Gallery",
    coverImage: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
  },
  {
    year: "2013",
    title: "2013 Growth Momentum",
    description: "Continued growth in membership and tournament participation.",
    imageCount: 189,
    highlights: ["Membership Growth", "Tournament Expansion", "Youth Programs"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2013Gallery",
    coverImage: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
  },
  {
    year: "2012",
    title: "2012 Olympic Year",
    description: "Olympic year inspiration with special events and increased community interest.",
    imageCount: 203,
    highlights: ["Olympic Inspiration", "Special Events", "Community Interest"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2012Gallery",
    coverImage: "linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)",
  },
  {
    year: "2011",
    title: "2011 Steady Progress",
    description: "Consistent growth and improvement in all aspects of club operations.",
    imageCount: 167,
    highlights: ["Steady Growth", "Operational Improvements", "Member Satisfaction"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2011Gallery",
    coverImage: "linear-gradient(135deg, #e0c3fc 0%, #9bb5ff 100%)",
  },
  {
    year: "2010",
    title: "2010 New Decade",
    description: "Starting the new decade with renewed energy and ambitious goals.",
    imageCount: 145,
    highlights: ["New Goals", "Fresh Energy", "Strategic Planning"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2010Gallery",
    coverImage: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  },
  {
    year: "2009",
    title: "2009 Resilience",
    description: "Maintaining strong community bonds during challenging economic times.",
    imageCount: 123,
    highlights: ["Community Bonds", "Economic Challenges", "Perseverance"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2009Gallery",
    coverImage: "linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)",
  },
  {
    year: "2008",
    title: "2008 Olympic Spirit",
    description: "Beijing Olympics year brought renewed interest and excitement to table tennis.",
    imageCount: 178,
    highlights: ["Beijing Olympics", "Renewed Interest", "Excitement"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2008Gallery",
    coverImage: "linear-gradient(135deg, #f78ca0 0%, #f9748f 100%)",
  },
  {
    year: "2007",
    title: "2007 Competitive Growth",
    description: "Increased competitive play and tournament participation.",
    imageCount: 156,
    highlights: ["Competitive Play", "Tournament Growth", "Player Development"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2007Gallery",
    coverImage: "linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)",
  },
  {
    year: "2006",
    title: "2006 Foundation Years",
    description: "Building the foundation for future growth with dedicated members and volunteers.",
    imageCount: 98,
    highlights: ["Foundation Building", "Dedicated Members", "Volunteer Spirit"],
    oneDriveUrl: "https://1drv.ms/f/s!DFWTT2006Gallery",
    coverImage: "linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)",
  },
]

const categories = [
  { id: "all", label: "All Years", icon: <Calendar className="h-4 w-4" /> },
  { id: "recent", label: "Recent (2020-2025)", icon: <Camera className="h-4 w-4" /> },
  { id: "2010s", label: "2010s", icon: <Users className="h-4 w-4" /> },
  { id: "2000s", label: "2000s", icon: <Trophy className="h-4 w-4" /> },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredGalleries = galleryData.filter((gallery) => {
    const matchesSearch =
      gallery.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gallery.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gallery.highlights.some((h) => h.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory =
      activeCategory === "all" ||
      (activeCategory === "recent" && Number.parseInt(gallery.year) >= 2020) ||
      (activeCategory === "2010s" && Number.parseInt(gallery.year) >= 2010 && Number.parseInt(gallery.year) < 2020) ||
      (activeCategory === "2000s" && Number.parseInt(gallery.year) < 2010)

    return matchesSearch && matchesCategory
  })

  const featuredGalleries = filteredGalleries.filter((g) => g.featured)
  const regularGalleries = filteredGalleries.filter((g) => !g.featured)

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">DFWTT Photo Gallery</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Explore nearly two decades of memories, tournaments, and community moments from Dallas Fort Worth Table
              Tennis. From our early foundation years to recent championship victories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-blue-100">
                <Calendar className="h-5 w-5" />
                <span>2006 - 2025</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <Camera className="h-5 w-5" />
                <span>4,000+ Photos</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <Trophy className="h-5 w-5" />
                <span>20 Years of Memories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search galleries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeCategory === category.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.icon}
                    <span className="hidden sm:inline">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Galleries */}
      {featuredGalleries.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Galleries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredGalleries.map((gallery, index) => (
                <GalleryCard key={gallery.year} {...gallery} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Galleries */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {activeCategory === "all"
                ? "All Galleries"
                : `${categories.find((c) => c.id === activeCategory)?.label} Galleries`}
            </h2>
            <span className="text-gray-600">{filteredGalleries.length} galleries</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regularGalleries.map((gallery, index) => (
              <GalleryCard key={gallery.year} {...gallery} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Gallery Statistics</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nearly two decades of capturing the spirit and growth of table tennis in Dallas-Fort Worth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {galleryData.reduce((sum, gallery) => sum + gallery.imageCount, 0).toLocaleString()}
              </div>
              <div className="text-gray-600">Total Photos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20</div>
              <div className="text-gray-600">Years Documented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Tournaments Captured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Players Featured</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
