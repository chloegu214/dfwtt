import Link from "next/link"
import { ArrowRight } from "lucide-react"

const archiveData = [
  {
    year: "2025",
    description: "Current year featuring Seth Pech coaching program and major tournaments",
    articleCount: 8,
    highlights: ["Seth Pech Special Training", "Summer Open", "NCTTA Championships", "World University Games Trials"],
    totalEvents: 25,
    charityRaised: "$350+",
  },
  {
    year: "2024",
    description: "George Braithwaite Major League launch and coaching excellence",
    articleCount: 12,
    highlights: ["GBML Season 3", "Seth Pech Summer Coaching", "Fall Open", "Scholastic Nationals"],
    totalEvents: 35,
    charityRaised: "$516",
  },
  {
    year: "2023",
    description: "Dallas Golden Games and team league competitions",
    articleCount: 15,
    highlights: ["Dallas Golden Games", "US Nationals in Fort Worth", "Team League", "Fall Open"],
    totalEvents: 42,
    charityRaised: "$400+",
  },
  {
    year: "2022",
    description: "US National Team Trials and Grant Bergmann sportsmanship award",
    articleCount: 8,
    highlights: ["US National Team Trials", "Grant Bergmann Award", "Summer Open", "Double Ten"],
    totalEvents: 28,
    charityRaised: "$300+",
  },
  {
    year: "2021",
    description: "World Table Tennis Championships in Houston and Heights center opening",
    articleCount: 7,
    highlights: ["WTT Championships Houston", "Heights Center Opening", "Dallas Golden Games", "Fall Open"],
    totalEvents: 22,
    charityRaised: "$250+",
  },
  {
    year: "2020",
    description: "COVID-19 adaptations and safety protocols",
    articleCount: 4,
    highlights: ["COVID-19 Safety Protocols", "Dallas Senior Games", "Charity Tournament"],
    totalEvents: 12,
    charityRaised: "$1000",
  },
  {
    year: "2019",
    description: "US Open in Fort Worth and extensive tournament schedule",
    articleCount: 11,
    highlights: ["US Open Fort Worth", "TX State Championship", "Charity Programs", "Double Ten"],
    totalEvents: 38,
    charityRaised: "$514+",
  },
  {
    year: "2018",
    description: "Fall and Summer Opens with community engagement",
    articleCount: 9,
    highlights: ["Fall Open", "Summer Open", "Chinese Double Ten", "Dallas Senior Games"],
    totalEvents: 32,
    charityRaised: "$465+",
  },
  {
    year: "2017",
    description: "Raymond Sacco Para Table Tennis achievements and new T Bar M location",
    articleCount: 14,
    highlights: ["Raymond Sacco Para TT", "T Bar M Grand Opening", "Spring Open", "US Open"],
    totalEvents: 45,
    charityRaised: "$1824",
  },
  {
    year: "2016",
    description: "Dude Perfect collaboration and NCTTA Championships",
    articleCount: 8,
    highlights: ["Dude Perfect Show", "NCTTA Championships", "Fall Open", "Spring Open"],
    totalEvents: 28,
    charityRaised: "$618",
  },
]

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
                <div className="text-2xl font-bold text-white">300+</div>
                <div>Events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">$6K+</div>
                <div>Charity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {archiveData.map((year) => (
              <Link
                key={year.year}
                href={`/news/archive/${year.year}`}
                className="block bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all duration-200 p-6 group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600">{year.year}</h3>
                      <div className="flex gap-4 text-sm text-gray-500">
                        <span>{year.articleCount} articles</span>
                        <span>{year.totalEvents} events</span>
                        <span>{year.charityRaised} charity</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{year.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {year.highlights.map((highlight, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors ml-4 flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
