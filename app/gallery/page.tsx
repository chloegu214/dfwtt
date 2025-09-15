"use client"

import GalleryCard from "@/components/gallery-card"
import { Calendar, Camera, Users, Trophy, Search, Filter } from "lucide-react"
import { useState } from "react"

const galleryData = [
  {
    year: "2025",
    title: "Dallas Golden Games 2025",
    description:
      "Dallas Park and Recreation's Golden Games.",
    imageCount: 27,
    highlights: ["Golden Games"],
    oneDriveUrl: "https://1drv.ms/f/c/acd8701c94f053f8/EhEummqAirZDuLaKZS1NQlgBcmecO2mhAPFyy8K0Mu4DNQ?e=t6ty3K",
    coverImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    featured: true,
  },  
  {
    year: "2025",
    title: "DFWTT Summer Open 2025",
    description:
      "Current year highlights including Summer Open and Spring tournaments with excellent participation and competitive play.",
    imageCount: 245,
    highlights: ["Summer Open", "High Participation", "Competitive Matches"],
    oneDriveUrl: "https://1drv.ms/f/c/acd8701c94f053f8/El8ezZL6Ck9CsqmW_NV_pLEBRpNTjPuKHhzNbAluW6OjtQ?e=h8SN9f",
    coverImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    featured: true,
  },
  {
    year: "2025",
    title: "DFWTT Spring Open 2025",
    description:
      "Spring tournament featuring strong competition and community engagement from players across the region.",
    imageCount: 180,
    highlights: ["Spring Tournament", "Regional Players", "Community Event", "Strong Competition"],
    oneDriveUrl: "https://1drv.ms/f/s!AvhT8JQccNiskd0IooDhNIPDRqueWQ?e=8EdMEj",
    coverImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    featured: true,
  },
  {
    year: "2024",
    title: "DFWTT Fall Open 2024",
    description: "Fall championship featuring record participation and exceptional tournament organization.",
    imageCount: 312,
    highlights: ["Fall Championship", "Record Participation", "Tournament Excellence", "Community Growth"],
    oneDriveUrl: "https://1drv.ms/f/s!AvhT8JQccNiskZRCiyCwhQ0hQYOF4Q?e=mNQkdZ",
    coverImage: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    year: "2024",
    title: "Chinese Double Ten 2024",
    description: "Annual Double Ten celebration tournament with traditional festivities and competitive matches.",
    imageCount: 198,
    highlights: ["Double Ten Celebration", "Traditional Event", "Cultural Festival", "Competitive Play"],
    oneDriveUrl: "https://1drv.ms/f/s!AvhT8JQccNiskPpFGZp9bB0VYFdL-Q?e=VMIA8S",
    coverImage: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    year: "2024",
    title: "DFWTT Summer Open 2024",
    description: "Summer tournament with excellent weather and outstanding player performances throughout the event.",
    imageCount: 267,
    highlights: ["Summer Tournament", "Great Weather", "Outstanding Play", "Player Excellence"],
    oneDriveUrl: "https://1drv.ms/f/s!AvhT8JQccNiskNxUF1cZ95Z2J_Ps_A?e=68cwe0",
    coverImage: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    year: "2023",
    title: "DFWTT Fall Open 2023",
    description: "Fall tournament showcasing regional talent and competitive excellence in table tennis.",
    imageCount: 289,
    highlights: ["Regional Championships", "Talent Showcase", "Competitive Excellence", "Fall Tournament"],
    oneDriveUrl: "https://1drv.ms/f/s!AvhT8JQccNisibxe0QRC443RPocl_g?e=YaDw16",
    coverImage: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    year: "2023",
    title: "Dallas Golden Games 2023",
    description: "Prestigious Golden Games tournament featuring top-level competition and community celebration.",
    imageCount: 234,
    highlights: ["Golden Games", "Prestigious Event", "Top Competition", "Community Celebration"],
    oneDriveUrl: "https://1drv.ms/f/s!AvhT8JQccNisiblU9TEGVZ0vKGtZnA?e=aXi9oy",
    coverImage: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    year: "2023",
    title: "Chinese Double Ten 2023",
    description: "Traditional Double Ten celebration with cultural activities and competitive tournament play.",
    imageCount: 198,
    highlights: ["Double Ten Festival", "Cultural Activities", "Traditional Celebration", "Tournament Play"],
    oneDriveUrl: "https://1drv.ms/f/s!AvhT8JQccNisibc8iSVLtglzn9QMhw?e=OAONUg",
    coverImage: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    year: "2023",
    title: "DFWTT Spring Open 2023",
    description: "Spring tournament marking the return to full competitive schedule with excellent participation.",
    imageCount: 156,
    highlights: ["Spring Tournament", "Full Schedule Return", "Excellent Participation", "Competitive Play"],
    oneDriveUrl: "https://1drv.ms/f/s!AvhT8JQccNisiZRKIvykCj15DEqukQ?e=M1xjn4",
    coverImage: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    year: "2022",
    title: "DFWTT Fall Open 2022",
    description: "Post-pandemic return to full tournament schedule with renewed energy and community engagement.",
    imageCount: 198,
    highlights: ["Tournament Return", "Renewed Energy", "Community Engagement", "Full Schedule"],
    oneDriveUrl: "https://1drv.ms/u/s!AvhT8JQccNisiYcaY0qT3TsSaY1ang?e=ub1GP9",
    coverImage: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    year: "2022",
    title: "Chinese Double Ten 2022",
    description: "Double Ten celebration tournament with traditional festivities and competitive matches.",
    imageCount: 167,
    highlights: ["Double Ten Celebration", "Traditional Festivities", "Competitive Matches", "Cultural Event"],
    oneDriveUrl: "https://1drv.ms/u/s!AvhT8JQccNisiYMTttQSrQA3a9gD4Q?e=UnIL2D",
    coverImage: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    year: "2022",
    title: "DFWTT Summer Open 2022",
    description: "Summer tournament featuring excellent competition and community spirit during recovery period.",
    imageCount: 145,
    highlights: ["Summer Competition", "Community Spirit", "Recovery Period", "Excellent Play"],
    oneDriveUrl: "https://1drv.ms/u/s!AvhT8JQccNisiPJaz2TCfj2lLHz8lA?e=u4nnNC",
    coverImage: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    year: "2022",
    title: "DFWTT Spring Open 2022",
    description: "Spring tournament marking continued recovery and growth in tournament participation.",
    imageCount: 123,
    highlights: ["Spring Tournament", "Continued Recovery", "Growth in Participation", "Community Building"],
    oneDriveUrl: "https://1drv.ms/u/s!AvhT8JQccNisiO53RJlXhEU7TAp5vw?e=UHMLg6",
    coverImage: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    year: "2021",
    title: "DFWTT Fall Open 2021",
    description: "Fall tournament adapting to new challenges while maintaining competitive excellence.",
    imageCount: 156,
    highlights: ["Adaptation", "New Challenges", "Competitive Excellence", "Safety Measures"],
    oneDriveUrl: "https://1drv.ms/u/s!AvhT8JQccNisiMsC-FGbYlSJ0pRSEQ?e=U6s32Y",
    coverImage: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    year: "2021",
    title: "Chinese Double Ten 2021",
    description: "Double Ten celebration with modified format while preserving traditional tournament spirit.",
    imageCount: 134,
    highlights: ["Modified Format", "Traditional Spirit", "Double Ten Festival", "Community Resilience"],
    oneDriveUrl: "https://1drv.ms/u/s!AvhT8JQccNisiMdMffcXjgXp_8ik8Q?e=hdQdQf",
    coverImage: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    year: "2021",
    title: "Dallas Golden Games 2021",
    description: "Golden Games tournament showcasing resilience and dedication to table tennis excellence.",
    imageCount: 112,
    highlights: ["Golden Games", "Resilience", "Dedication", "Tournament Excellence"],
    oneDriveUrl: "https://1drv.ms/u/s!AvhT8JQccNisiMUlx2xwdg4uD6jN0A?e=hgxJ5f",
    coverImage: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    year: "2020",
    title: "Dallas Senior Games 2020",
    description: "Senior Games tournament adapted for challenging times with community support and safety protocols.",
    imageCount: 89,
    highlights: ["Senior Games", "Community Support", "Safety Protocols", "Adapted Format"],
    oneDriveUrl: "https://1drv.ms/u/s!AvhT8JQccNish_UIezOawkP8V2cl6Q?e=cPZnjr",
    coverImage: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  },
  {
    year: "2020",
    title: "DFWTT Charity Tournament 2020",
    description: "Charity tournament bringing community together for a good cause during unprecedented times.",
    imageCount: 67,
    highlights: ["Charity Event", "Community Unity", "Good Cause", "Unprecedented Times"],
    oneDriveUrl: "https://1drv.ms/u/s!AvhT8JQccNish94h7UdAryNlyomwpg?e=c3M8uH",
    coverImage: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  },
  {
    year: "2019",
    title: "DFWTT Fall Open 2019",
    description: "Peak performance year with multiple championship victories and record membership growth.",
    imageCount: 387,
    highlights: ["Championship Victories", "Record Membership", "Peak Performance", "Elite Competition"],
    oneDriveUrl: "https://1drv.ms/u/s!AvhT8JQccNish6svfVCQw-NGrbbwfA?e=aQLQgy",
    coverImage: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
  },
  {
    year: "2019",
    title: "Chinese Double Ten 2019",
    description: "Traditional Double Ten celebration with cultural festivities and competitive tournament action.",
    imageCount: 298,
    highlights: ["Cultural Festivities", "Traditional Celebration", "Competitive Action", "Community Event"],
    oneDriveUrl: "https://1drv.ms/u/s!AvhT8JQccNish513pAijRMe4wqWj5w?e=fottgI",
    coverImage: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
  },
  {
    year: "2019",
    title: "TX State Championship 2019",
    description: "Texas State Championship featuring the best players from across the state in elite competition.",
    imageCount: 342,
    highlights: ["State Championship", "Elite Competition", "Best Players", "Statewide Event"],
    oneDriveUrl: "https://1drv.ms/u/s!AvhT8JQccNish5kdi5mIEES8VK8WCQ?e=H2kTuK",
    coverImage: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
  },
  {
    year: "2019",
    title: "DFWTT Spring Open 2019",
    description: "Spring tournament with excellent participation and competitive matches throughout the event.",
    imageCount: 267,
    highlights: ["Spring Tournament", "Excellent Participation", "Competitive Matches", "Community Engagement"],
    oneDriveUrl: "https://photos.app.goo.gl/QJGy25HZzRXphNv87",
    coverImage: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
  },
  {
    year: "2019",
    title: "Dallas Senior Games 2019",
    description: "Senior Games tournament celebrating veteran players and their continued dedication to the sport.",
    imageCount: 189,
    highlights: ["Senior Games", "Veteran Players", "Continued Dedication", "Sport Celebration"],
    oneDriveUrl: "https://1drv.ms/f/s!AvhT8JQccNishuYf5P0z1l7WXFXTWA",
    coverImage: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
  },
  {
    year: "2019",
    title: "DFWTT Charity Tournament 2019",
    description: "Annual charity tournament combining competitive play with community service and fundraising.",
    imageCount: 156,
    highlights: ["Charity Tournament", "Community Service", "Fundraising", "Competitive Play"],
    oneDriveUrl: "https://1drv.ms/f/s!AvhT8JQccNisht43--vFSQUTJ-cV2Q",
    coverImage: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
  },
  {
    year: "2018",
    title: "DFWTT Fall Open 2018",
    description: "Fall tournament showcasing competitive excellence and continued growth in youth programs.",
    imageCount: 342,
    highlights: ["Competitive Excellence", "Youth Growth", "Fall Tournament", "Program Development"],
    oneDriveUrl: "https://1drv.ms/f/s!AvhT8JQccNishq0ij2uFzwnpoG_qUg",
    coverImage: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  },
  {
    year: "2018",
    title: "DFWTT Chinese Double Ten 2018",
    description: "Double Ten celebration featuring traditional festivities and competitive tournament matches.",
    imageCount: 234,
    highlights: ["Double Ten Festival", "Traditional Festivities", "Tournament Matches", "Cultural Celebration"],
    oneDriveUrl: "https://1drv.ms/f/s!AvhT8JQccNishqU-Cn0pv9ok7XLUag",
    coverImage: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  },
  {
    year: "2018",
    title: "DFWTT Summer Open 2018",
    description: "Summer tournament with both rating and non-rating divisions for players of all skill levels.",
    imageCount: 298,
    highlights: ["Rating Divisions", "Non-Rating Play", "All Skill Levels", "Summer Tournament"],
    oneDriveUrl: "https://1drv.ms/f/s!AvhT8JQccNishp0bURiF9TYSLbIVVw",
    coverImage: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  },
  {
    year: "2018",
    title: "Dallas Senior Games 2018",
    description: "Senior Games tournament celebrating the experience and skill of veteran table tennis players.",
    imageCount: 167,
    highlights: ["Senior Games", "Veteran Players", "Experience", "Skill Celebration"],
    oneDriveUrl: "https://1drv.ms/f/s!AvhT8JQccNishfQ0WoIvYsS12W-wtw",
    coverImage: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  },
  {
    year: "2018",
    title: "DFWTT Winter Open 2018",
    description: "Winter tournament providing competitive opportunities during the colder months of the year.",
    imageCount: 145,
    highlights: ["Winter Tournament", "Competitive Opportunities", "Cold Weather Play", "Year-Round Activity"],
    oneDriveUrl: "https://1drv.ms/f/s!AvhT8JQccNisheFoEWH5lSBQLu9KgQ",
    coverImage: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  },
  {
    year: "2018",
    title: "DFWTT Charity Tournament 2018",
    description:
      "Charity tournament combining competitive table tennis with community outreach and fundraising efforts.",
    imageCount: 123,
    highlights: ["Charity Event", "Community Outreach", "Fundraising", "Competitive Play"],
    oneDriveUrl: "https://1drv.ms/f/s!AvhT8JQccNishbJ9RIiwS7RuqiEMrw",
    coverImage: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  },
  {
    year: "2017",
    title: "DFWTT Fall Open 2017",
    description: "Fall tournament focusing on community building and expanding outreach programs.",
    imageCount: 298,
    highlights: ["Community Building", "Outreach Programs", "Fall Tournament", "Program Expansion"],
    oneDriveUrl: "https://1drv.ms/f/s!AvhT8JQccNishLoZaHLNMrxXg5mIGw",
    coverImage: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  },
  {
    year: "2017",
    title: "DFWTT Chinese Double Ten 2017",
    description: "Double Ten celebration with traditional cultural elements and competitive tournament play.",
    imageCount: 234,
    highlights: ["Double Ten Festival", "Cultural Elements", "Traditional Celebration", "Tournament Play"],
    oneDriveUrl: "https://1drv.ms/f/s!AvhT8JQccNishLAQqwbB0X89R-WmnQ",
    coverImage: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  },
  {
    year: "2017",
    title: "DFWTT Spring Open 2017",
    description: "Spring tournament with strong community participation and competitive matches.",
    imageCount: 189,
    highlights: ["Spring Tournament", "Community Participation", "Competitive Matches", "Strong Turnout"],
    oneDriveUrl: "https://1drv.ms/u/s!AvhT8JQccNishIp1rPlJkA6ewGYBkw",
    coverImage: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  },
  {
    year: "2017",
    title: "Dallas Senior Games 2017",
    description: "Senior Games tournament with additional award ceremonies celebrating veteran achievements.",
    imageCount: 167,
    highlights: ["Senior Games", "Award Ceremonies", "Veteran Achievements", "Recognition Events"],
    oneDriveUrl: "https://1drv.ms/u/s!AvhT8JQccNisg_gjOH3K1E9lyIpXnQ",
    coverImage: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  },
  {
    year: "2017",
    title: "Texas Winter Games 2017",
    description: "Texas Winter Games tournament providing competitive opportunities during winter months.",
    imageCount: 145,
    highlights: ["Winter Games", "Competitive Opportunities", "Winter Tournament", "Statewide Event"],
    oneDriveUrl: "https://1drv.ms/u/s!AvhT8JQccNisg-95tLm8FWkFEc7GVg",
    coverImage: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
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
                <span>2008 - 2025</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <Camera className="h-5 w-5" />
                <span>6,000+ Photos</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <Trophy className="h-5 w-5" />
                <span>17 Years of Memories</span>
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
                <GalleryCard key={`${gallery.year}-${index}`} {...gallery} />
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
              <GalleryCard key={`${gallery.year}-${index}`} {...gallery} />
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
              <div className="text-4xl font-bold text-blue-600 mb-2">17</div>
              <div className="text-gray-600">Years Documented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Tournaments Captured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2000+</div>
              <div className="text-gray-600">Players Featured</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
