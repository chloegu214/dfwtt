import Link from "next/link"
import { Calendar, ExternalLink, Camera, Trophy, ArrowLeft } from "lucide-react"

const news2022 = [
  {
    date: "December 3, 2022",
    title: "2022 Winter World Peace TT Pictures",
    content:
      "Plano TT club hosted its Winter World Peace Table Tennis Tournament on December 3rd at the Tom Muehlenbeck center. This annual event brings together players from the community for friendly competition.",
    category: "Tournament",
    hasPhotos: true,
    links: [{ text: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisiYohDRdzet6x1gcp4w?e=gUbHlX" }],
  },
  {
    date: "November 12, 2022",
    title: "2022 DFWTT Fall Open",
    content:
      "DFWTT hosted its yearly Fall Open on November 12th. The tournament was held in Irving at the Cimarron Recreation Center. Grant Bergmann was given the sportsmanship award, to show our appreciation for his hard work for table tennis.",
    category: "Tournament",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisiYcaY0qT3TsSaY1ang?e=ub1GP9" },
      { text: "Results", url: "/results/2022#2022FallOpen" },
    ],
  },
  {
    date: "September 24, 2022",
    title: "2022 Chinese Double Ten",
    content:
      "DFWTT hosted its yearly Chinese Double Ten Celebration tournament on September 24th. The tournament was held in Irving at the Cimarron Recreation Center.",
    category: "Tournament",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisiYMTttQSrQA3a9gD4Q?e=UnIL2D" },
      { text: "Results", url: "/results/2022#2022DoubleTen" },
    ],
  },
  {
    date: "September 10, 2022",
    title: "2022 Dallas Golden Games",
    content:
      "The Dallas Golden Games held its Table Tennis tournament on September 10 (Saturday) at the Marcus Recreation Center. Registration was available from July 25 through August 26, 2022, with an early bird discount for those registering before August 5.",
    category: "Tournament",
    links: [{ text: "Dallas Park & Recreation", url: "http://dallasparks.org/483/Golden-Games" }],
  },
  {
    date: "July 1, 2022",
    title: "2022 US National Team Trials Pictures",
    content:
      "The US National Team Trials was held inside the Sid Richardson Gymnasium at Texas Wesleyan University in Fort Worth. The tournament ran from June 25th to July 1st, determining team selections for international competition.",
    category: "Competition",
    hasPhotos: true,
    links: [{ text: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisiPNrgdSQPKN04VDpOw?e=bg37X3" }],
  },
  {
    date: "June 18, 2022",
    title: "2022 DFWTT Summer Open",
    content:
      "DFWTT hosted its Summer Open on June 18th. The tournament was held in Irving at the Cimarron Recreation Center.",
    category: "Tournament",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisiPJaz2TCfj2lLHz8lA?e=u4nnNC" },
      { text: "Results", url: "/results/2022#2022SummerOpen" },
    ],
  },
  {
    date: "May 21, 2022",
    title: "2022 Spring World Peace TT Pictures",
    content:
      "Plano TT club hosted its Spring World Peace Table Tennis Tournament on May 21st at the Tom Muehlenbeck center. This community event featured players of all skill levels.",
    category: "Tournament",
    hasPhotos: true,
    links: [{ text: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisiPAg4er9CzQl39zahQ?e=gtjHsU" }],
  },
  {
    date: "April 16, 2022",
    title: "2022 DFWTT Spring Open",
    content:
      "DFWTT hosted its Spring Open on April 16th. The tournament was held in Irving at the Cimarron Recreation Center.",
    category: "Tournament",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisiO53RJlXhEU7TAp5vw?e=UHMLg6" },
      { text: "Results", url: "/results/2022#2022SpringOpen" },
    ],
  },
  {
    date: "February 26, 2022",
    title: "NCTTA South Regional Championships",
    content:
      "Texas Wesleyan University hosted the NCTTA South Regional Championships on February 26th at the Sid Richardson Center in Fort Worth. This event determined regional champions for collegiate table tennis.",
    category: "Championship",
    hasPhotos: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisiOcwMpH12CPJm11B4w?e=lRNHO3" },
      { text: "NCTTA Results", url: "http://www.nctta.org/results" },
    ],
  },
  {
    date: "February 13, 2022",
    title: "2022 NCTTA Texas Division",
    content:
      "Texas Wesleyan University hosted the NCTTA Texas Division on February 13th at the Sid Richardson Center in Fort Worth. This was the state-level collegiate championship.",
    category: "Championship",
    hasPhotos: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisiOU00S5R24kuHAKpWA?e=Jjsq7U" },
      { text: "NCTTA Results", url: "http://www.nctta.org/results" },
    ],
  },
]

const categoryColors = {
  Tournament: "bg-blue-100 text-blue-800",
  Championship: "bg-yellow-100 text-yellow-800",
  Competition: "bg-green-100 text-green-800",
}

export default function News2022Page() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/news/archive" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Archive
          </Link>
          <h1 className="text-4xl font-bold mb-4">2022 News Archive</h1>
          <div className="flex flex-wrap gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>10 articles</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              <span>Major Events: US National Team Trials, NCTTA Championships</span>
            </div>
          </div>
        </div>
      </section>

      {/* Year Summary */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">2022 Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-blue-600">Grant Bergmann Award</div>
                <div className="text-gray-600">
                  Received sportsmanship award at Fall Open for dedication to table tennis
                </div>
              </div>
              <div>
                <div className="font-semibold text-blue-600">National Team Trials</div>
                <div className="text-gray-600">US National Team Trials held at Texas Wesleyan University</div>
              </div>
              <div>
                <div className="font-semibold text-blue-600">Regular Tournaments</div>
                <div className="text-gray-600">Four DFWTT Opens plus collegiate championships</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {news2022.map((item, index) => (
              <article key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-gray-500">{item.date}</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[item.category] || "bg-gray-100 text-gray-800"}`}
                      >
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    {item.hasPhotos && (
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Camera className="h-3 w-3" />
                        Photos
                      </span>
                    )}
                    {item.hasResults && (
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Trophy className="h-3 w-3" />
                        Results
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{item.content}</p>

                {item.links && (
                  <div className="flex flex-wrap gap-3">
                    {item.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target={link.url.startsWith("http") ? "_blank" : "_self"}
                        rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        {link.text}
                        {link.url.startsWith("http") && <ExternalLink className="h-3 w-3" />}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/news/archive/2021" className="text-blue-600 hover:text-blue-700 font-medium">
              ← 2021 Archive
            </Link>
            <Link href="/news/archive" className="text-gray-600 hover:text-gray-700">
              All Years
            </Link>
            <Link href="/news/archive/2023" className="text-blue-600 hover:text-blue-700 font-medium">
              2023 Archive →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
