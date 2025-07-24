import Link from "next/link"
import { Calendar, Trophy, Users, Heart, GraduationCap, Star } from "lucide-react"

const archiveData = [
  {
    year: "2025",
    slug: "2025",
    description: "Current year featuring Seth Pech coaching program and major tournaments",
    articleCount: 8,
    highlights: ["Seth Pech Special Training", "Summer Open", "NCTTA Championships"],
    categories: ["Training", "Tournament", "Championship"],
    gradient: "from-purple-500 to-violet-600",
  },
  {
    year: "2024",
    slug: "2024",
    description: "George Braithwaite Major League launch and coaching excellence",
    articleCount: 12,
    highlights: ["GBML Season 3", "Seth Pech Summer Coaching", "Fall Open"],
    categories: ["League", "Training", "Tournament"],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    year: "2023",
    slug: "2023",
    description: "Dallas Golden Games and team league competitions",
    articleCount: 15,
    highlights: ["Dallas Golden Games", "US Nationals in Fort Worth", "Team League"],
    categories: ["Tournament", "Championship", "League"],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    year: "2022",
    slug: "2022",
    description: "US National Team Trials and Grant Bergmann sportsmanship award",
    articleCount: 8,
    highlights: ["US National Team Trials", "Grant Bergmann Award", "Summer Open"],
    categories: ["Championship", "Community", "Tournament"],
    gradient: "from-green-500 to-emerald-600",
  },
  {
    year: "2021",
    slug: "2021",
    description: "World Table Tennis Championships in Houston and Heights center opening",
    articleCount: 7,
    highlights: ["WTT Championships Houston", "Heights Center Opening", "Dallas Golden Games"],
    categories: ["Championship", "Facility", "Tournament"],
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    year: "2020",
    slug: "2020",
    description: "COVID-19 adaptations and safety protocols",
    articleCount: 4,
    highlights: ["COVID-19 Safety Protocols", "Dallas Senior Games", "Charity Tournament"],
    categories: ["Safety", "Tournament", "Charity"],
    gradient: "from-red-500 to-pink-600",
  },
  {
    year: "2019",
    slug: "2019",
    description: "US Open in Fort Worth and extensive tournament schedule",
    articleCount: 11,
    highlights: ["US Open Fort Worth", "TX State Championship", "Charity Programs"],
    categories: ["Championship", "Tournament", "Charity"],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    year: "2018",
    slug: "2018",
    description: "Fall and Summer Opens with community engagement",
    articleCount: 9,
    highlights: ["Fall Open", "Summer Open", "Chinese Double Ten"],
    categories: ["Tournament", "Community", "Cultural"],
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    year: "2017",
    slug: "2017",
    description: "Raymond Sacco Para Table Tennis achievements and new T Bar M location",
    articleCount: 14,
    highlights: ["Raymond Sacco Para TT", "T Bar M Grand Opening", "Spring Open"],
    categories: ["Para Sports", "Facility", "Tournament"],
    gradient: "from-orange-500 to-red-600",
  },
  {
    year: "2016",
    slug: "2016",
    description: "Dude Perfect collaboration and NCTTA Championships",
    articleCount: 8,
    highlights: ["Dude Perfect Show", "NCTTA Championships", "Fall Open"],
    categories: ["Media", "Championship", "Tournament"],
    gradient: "from-violet-500 to-purple-600",
  },
]

const categoryIcons = {
  Training: GraduationCap,
  Tournament: Trophy,
  Championship: Star,
  League: Users,
  Charity: Heart,
  Community: Users,
  Cultural: Users,
  Safety: Users,
  Facility: Users,
  "Para Sports": Users,
  Media: Users,
}

export default function NewsArchivePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">DFWTT News Archive</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Explore over a decade of Dallas Fort Worth Table Tennis history, from major championships to community
              events and everything in between.
            </p>
            <div className="flex justify-center gap-8 text-sm text-slate-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div>Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100+</div>
                <div>Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div>Events</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {archiveData.map((year) => (
              <Link
                key={year.year}
                href={`/news/archive/${year.slug}`}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`h-32 bg-gradient-to-br ${year.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-3xl font-bold">{year.year}</h3>
                    <p className="text-sm opacity-90">{year.articleCount} articles</p>
                  </div>
                  <Calendar className="absolute top-4 right-4 h-6 w-6 text-white/80" />
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">{year.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {year.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {year.categories.slice(0, 3).map((category) => {
                      const Icon = categoryIcons[category] || Users
                      return (
                        <span
                          key={category}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        >
                          <Icon className="h-3 w-3" />
                          {category}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Archive Statistics</h2>
            <p className="text-lg text-gray-600">A comprehensive look at DFWTT's rich history</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Tournaments Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$50K+</div>
              <div className="text-gray-600">Raised for Charity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">5000+</div>
              <div className="text-gray-600">Players Participated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600">Championships</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
