import Link from "next/link"
import { ArrowLeft, ExternalLink, Camera, Trophy } from "lucide-react"

const news2023 = [
  {
    date: "December 2, 2023",
    title: "2023 Winter World Peace TT Pictures",
    content:
      "Plano TT club hosted its Winter World Peace Table Tennis Tournament on December 2nd at the Tom Muehlenbeck center.",
    category: "Tournament",
    hasPhotos: true,
    links: [{ text: "Photos", url: "https://1drv.ms/f/s!AvhT8JQccNisicMhtKCiVszK8sHo6A?e=iHL3na" }],
  },
  {
    date: "December 1, 2023",
    title: "Heights Doubles Events",
    content: "Monthly Doubles event at the Heights Recreation Center (Richardson) on Friday night (December 1st).",
    category: "League",
  },
  {
    date: "October 28, 2023",
    title: "2023 DFWTT Fall Open",
    content:
      "DFWTT hosted its yearly Fall Open on October 28th. The tournament was held in Irving at the Cimarron Recreation Center.",
    category: "Tournament",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/f/s!AvhT8JQccNisibxe0QRC443RPocl_g?e=YaDw16" },
      { text: "Results", url: "/results/2023#2023FallOpen" },
    ],
  },
  {
    date: "October 21, 2023",
    title: "George Braithwaite Major Team League",
    content:
      "The George Braithwaite Major Team league event was held October 21 at the Marcus Recreation Center in Dallas.",
    category: "League",
  },
  {
    date: "September 23, 2023",
    title: "2023 Dallas Golden Games",
    content:
      "DFWTT hosted the Dallas Golden Games Table Tennis Tournament on September 23rd at the Marcus Recreation Center in Dallas. This event is part of the Dallas Park and Recreation's Golden Games which includes 9 different competitive sports.",
    category: "Tournament",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/f/s!AvhT8JQccNisiblU9TEGVZ0vKGtZnA?e=aXi9oy" },
      { text: "Results", url: "/results/2023#2023GoldenGames" },
    ],
  },
  {
    date: "September 9, 2023",
    title: "2023 Chinese Double Ten",
    content:
      "DFWTT hosted its yearly Chinese Double Ten Celebration tournament on September 9th. The tournament was held in Irving at the Cimarron Recreation Center.",
    category: "Cultural",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/f/s!AvhT8JQccNisibc8iSVLtglzn9QMhw?e=OAONUg" },
      { text: "Results", url: "/results/2023#2023DoubleTen" },
    ],
  },
  {
    date: "July 7, 2023",
    title: "2023 US National Championships",
    content:
      "The USATT held its US National Championships in Ft. Worth, Texas at the Ft. Worth Convention Center on July 3-7. Information and results from the tournament can be found on the USATT website.",
    category: "Championship",
    hasPhotos: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/f/s!AvhT8JQccNisiaUkqNskPQ-jLsW1bA?e=r8j9AH" },
      {
        text: "USATT Website",
        url: "https://www.teamusa.org/USA-Table-Tennis/2023-US-National-Table-Tennis-Championships",
      },
    ],
  },
  {
    date: "May 6, 2023",
    title: "2023 Spring World Peace TT Pictures",
    content:
      "Plano TT club hosted its Spring World Peace Table Tennis Tournament on May 6th at the Tom Muehlenbeck center.",
    category: "Tournament",
    hasPhotos: true,
    links: [{ text: "Photos", url: "https://1drv.ms/a/s!BPhT8JQccNisiZ9M1A32FXBC8FF7nQ" }],
  },
  {
    date: "April 16, 2023",
    title: "2023 NCTTA Championships",
    content:
      "The 2023 NCTTA Championships were held in Round Rock, TX on April 14-16th. Information and results of the tournament can be found at the NCTTA website.",
    category: "Championship",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/f/s!AvhT8JQccNisiZd1TAjyPy7wz-C6dQ?e=gJBQF2" },
      { text: "NCTTA Website", url: "http://www.nctta.org" },
    ],
  },
  {
    date: "March 25, 2023",
    title: "2023 DFWTT Spring Open",
    content:
      "DFWTT hosted its Spring Open on March 25th. The tournament was held in Irving at the Cimarron Recreation Center.",
    category: "Tournament",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/f/s!AvhT8JQccNisiZRKIvykCj15DEqukQ?e=M1xjn4" },
      { text: "Results", url: "/results/2023#2023SpringOpen" },
    ],
  },
  {
    date: "March 4, 2023",
    title: "2023 NCTTA South Regional",
    content:
      "Texas Wesleyan University hosted the NCTTA South Regional Championships on March 4th at the Sid Richardson Center in Fort Worth. Results of the tournament can be found at the NCTTA website.",
    category: "Regional",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisiY9XIRvR76sNgmGe7Q?e=f2WzSU" },
      { text: "NCTTA Results", url: "http://www.nctta.org/results" },
    ],
  },
  {
    date: "February 4, 2023",
    title: "2023 NCTTA Texas Division",
    content:
      "Texas Wesleyan University hosted the NCTTA Texas Division on February 4th at the Sid Richardson Center in Fort Worth. Results of the tournament can be found at the NCTTA website.",
    category: "Regional",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisiYtod31uW4MhfTU4Sw?e=nndfjk" },
      { text: "NCTTA Results", url: "http://www.nctta.org/results" },
    ],
  },
]

const categoryColors = {
  Training: "bg-purple-100 text-purple-800",
  Tournament: "bg-blue-100 text-blue-800",
  Championship: "bg-yellow-100 text-yellow-800",
  Regional: "bg-green-100 text-green-800",
  Youth: "bg-pink-100 text-pink-800",
  League: "bg-indigo-100 text-indigo-800",
  Cultural: "bg-orange-100 text-orange-800",
}

export default function News2023Page() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/news/archive"
            className="inline-flex items-center gap-2 text-green-200 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Archive
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">2023 News Archive</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            A landmark year featuring the US National Championships in Fort Worth, Dallas Golden Games, and the launch
            of team league competitions.
          </p>
          <div className="flex gap-6 mt-6 text-sm">
            <div>
              <span className="font-semibold">12</span> Articles
            </div>
            <div>
              <span className="font-semibold">42</span> Events
            </div>
            <div>
              <span className="font-semibold">$400+</span> Charity Raised
            </div>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {news2023.map((item, index) => (
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

      {/* Year Navigation */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link
              href="/news/archive/2022"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              2022 Archive
            </Link>
            <Link
              href="/news/archive/2024"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              2024 Archive →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
