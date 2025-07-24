import Link from "next/link"
import { Calendar, ExternalLink, Camera, Trophy, ArrowLeft } from "lucide-react"

const news2021 = [
  {
    date: "November 29, 2021",
    title: "2021 WTT Championships",
    content:
      "The World Table Tennis Championships were held in Houston, Texas at the George R Brown Convention Center on November 23-29th. This was a major international event hosted in Texas.",
    category: "Championship",
    hasPhotos: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisiNV7gEIboJry69njfw?e=2JSau7" },
      { text: "Results & Summary", url: "https://worldtabletennis.com/results?selectedTab=COMPLETED" },
    ],
  },
  {
    date: "November 13, 2021",
    title: "2021 DFWTT Fall Open",
    content:
      "DFWTT hosted its yearly Fall Open on November 13th. The tournament was held in Dallas at the Bachman Recreation Center.",
    category: "Tournament",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisiMsC-FGbYlSJ0pRSEQ?e=U6s32Y" },
      { text: "Results", url: "/results/2021#2021FallOpen" },
    ],
  },
  {
    date: "October 17, 2021",
    title: "2021 DFWTT League Singles",
    content:
      "Starting October 17, DFWTT began League Singles at the Heights Recreation Center (Most Sundays 2:10 - 4:50 pm). This provided regular competitive play for members.",
    category: "League",
    links: [{ text: "Information", url: "/join-us" }],
  },
  {
    date: "October 9, 2021",
    title: "2021 Chinese Double Ten",
    content:
      "DFWTT hosted its yearly Chinese Double Ten Celebration tournament on October 9th. The tournament was held in Irving at the Cimarron Recreation Center.",
    category: "Tournament",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisiMdMffcXjgXp_8ik8Q?e=hdQdQf" },
      { text: "Results", url: "/results/2021#2021DoubleTen" },
    ],
  },
  {
    date: "September 18, 2021",
    title: "2021 Dallas Golden Games",
    content:
      "DFWTT hosted the Dallas Golden Games Table Tennis Tournament on September 18th at the Marcus Recreation Center in Dallas. This event is part of the Dallas Park and Recreation's Golden Games which includes 8 different competitive sports.",
    category: "Tournament",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisiMUlx2xwdg4uD6jN0A?e=hgxJ5f" },
      { text: "Results", url: "/results/2021#2021DallasGoldenGames" },
    ],
  },
  {
    date: "August 29, 2021",
    title: "2021 DFWTT League Singles - August Session",
    content:
      "DFWTT started League Singles at the Heights Recreation Center (Every Sunday 2:10 - 4:50 pm, from August 29 to September 26). This provided regular competitive opportunities for players.",
    category: "League",
    links: [{ text: "Information", url: "/join-us" }],
  },
  {
    date: "July 25, 2021",
    title: "Heights Recreation Center Grand Opening",
    content:
      "Grand opening of the Heights Recreation Center location in Richardson, Sunday afternoons 2:00 to 5:00 pm. Free sessions were offered on July 25, August 1, and August 8.",
    category: "Facility",
    hasPhotos: true,
  },
  {
    date: "July 9, 2021",
    title: "2021 USATT National Championships",
    content:
      "The USATT held its US National Championships in Las Vegas, Nevada on July 4-9. This was the premier national tournament for table tennis in the United States.",
    category: "Championship",
    hasPhotos: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisiLsUNPiI65PgMkHO8g?e=RND9xb" },
      { text: "Results Summary", url: "https://omnipong.com/T-tourney.asp?t=103&r=1861" },
      { text: "USATT Website", url: "http://www.teamusa.org/USA-Table-Tennis" },
    ],
  },
  {
    date: "May 26, 2021",
    title: "2021 US National & Jr Pan Am Games Team Trials",
    content:
      "The US National & Jr Pan Am Games Team Trials was held (May 21-26) inside the Sid Richardson Gymnasium at Texas Wesleyan University in Fort Worth. This event determined team selections for international competition.",
    category: "Competition",
    hasPhotos: true,
    links: [
      { text: "US National Team Trials Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisiJxQIxtrt62H8ufKGw?e=TbJ3rH" },
      {
        text: "Jr Pan Am Games Team Trials Photos",
        url: "https://1drv.ms/u/s!AvhT8JQccNisiJ5k-QJNrfNW2e1Xbw?e=KyNxTA",
      },
      {
        text: "USATT Tournament Info",
        url: "https://www.teamusa.org/USA-Table-Tennis/Team-USA/2021-Adult-National-Team-and-Junior-Pan-Am-Trials",
      },
    ],
  },
]

const categoryColors = {
  Championship: "bg-yellow-100 text-yellow-800",
  Tournament: "bg-blue-100 text-blue-800",
  Competition: "bg-green-100 text-green-800",
  League: "bg-indigo-100 text-indigo-800",
  Facility: "bg-purple-100 text-purple-800",
}

export default function News2021Page() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/news/archive" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Archive
          </Link>
          <h1 className="text-4xl font-bold mb-4">2021 News Archive</h1>
          <div className="flex flex-wrap gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>9 articles</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              <span>Major Events: WTT Championships, US National Championships</span>
            </div>
          </div>
        </div>
      </section>

      {/* Year Summary */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">2021 Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-blue-600">Major Championships</div>
                <div className="text-gray-600">WTT Championships in Houston, USATT Nationals in Las Vegas</div>
              </div>
              <div>
                <div className="font-semibold text-blue-600">New Facility</div>
                <div className="text-gray-600">Heights Recreation Center opened in Richardson</div>
              </div>
              <div>
                <div className="font-semibold text-blue-600">Regular Programs</div>
                <div className="text-gray-600">League Singles program launched at Heights center</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {news2021.map((item, index) => (
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
            <Link href="/news/archive/2020" className="text-blue-600 hover:text-blue-700 font-medium">
              ← 2020 Archive
            </Link>
            <Link href="/news/archive" className="text-gray-600 hover:text-gray-700">
              All Years
            </Link>
            <Link href="/news/archive/2022" className="text-blue-600 hover:text-blue-700 font-medium">
              2022 Archive →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
