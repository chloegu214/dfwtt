import Link from "next/link"
import { ArrowLeft, ExternalLink, Camera, Trophy } from "lucide-react"

const news2024 = [
  {
    date: "December 15, 2024",
    title: "Winter 2025 George Braithwaite Major League",
    content:
      "DFWTT and GPPCTX are hosting the Winter 2025 George Braithwaite Major League tournaments on January 26 and March 23, 2025 in the Dallas area. Please contact Donna Chen if you are interested in joining the team.",
    category: "League",
  },
  {
    date: "November 2, 2024",
    title: "2024 DFWTT Fall Open",
    content:
      "DFWTT hosted its yearly Fall Open on November 2nd. The tournament was held in Irving at the Cimarron Recreation Center. From this tournament, DFWTT has donated $176 to the American Red Cross - Service to the Armed Forces fund.",
    category: "Tournament",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/f/s!AvhT8JQccNiskZRCiyCwhQ0hQYOF4Q?e=mNQkdZ" },
      { text: "Results", url: "/results/2024#2024FallOpen" },
    ],
  },
  {
    date: "September 21, 2024",
    title: "2024 Chinese Double Ten",
    content:
      "DFWTT hosted its yearly Chinese Double Ten Celebration tournament on September 21st at the Irving Cimarron Recreation Center.",
    category: "Cultural",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/f/s!AvhT8JQccNiskPpFGZp9bB0VYFdL-Q?e=VMIA8S" },
      { text: "Results", url: "/results/2024#2024DoubleTen" },
    ],
  },
  {
    date: "September 1, 2024",
    title: "George Braithwaite Major Team League Season 3",
    content:
      "DFWTT is hosting the George Braithwaite Major Team League season 3 from September 2024 to May 2025. Please contact Donna Chen if you are interested in joining the team.",
    category: "League",
  },
  {
    date: "August 31, 2024",
    title: "DFWTT Summer Coach Seth Pech",
    content:
      "For this summer, DFWTT had the privilege of having Seth Pech a professional table tennis athlete and coach (USATT 2500+) from his well known YouTube Channel PechPong. Seth coached at the DFW clubs for two months (July-August).",
    category: "Training",
    hasPhotos: true,
  },
  {
    date: "June 22, 2024",
    title: "2024 DFWTT Summer Open",
    content:
      "DFWTT hosted its Summer Open on June 22nd, and was held in Irving at the Cimarron Recreation Center. DFWTT has donated $160 to Welcome.US to support those seeking refuge in the US and help them thrive here.",
    category: "Tournament",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/f/s!AvhT8JQccNiskNxUF1cZ95Z2J_Ps_A?e=68cwe0" },
      { text: "Results", url: "/results/2024#2024SummerOpen" },
    ],
  },
  {
    date: "May 26, 2024",
    title: "2024 Scholastic National Championship",
    content:
      "AYTTO partnered with DFWTT and Pongspace to host the 2024 National Scholastic Team Championship at the Richardson Heights Recreation Center on May 26th.",
    category: "Youth",
    hasPhotos: true,
    links: [{ text: "Photos", url: "https://1drv.ms/f/s!AvhT8JQccNiskNImma2hzOFMZHAlaw?e=WMhAz9" }],
  },
  {
    date: "April 28, 2024",
    title: "2024 Texas State Championships",
    content:
      "The 2024 Texas State Championships were held in Ft. Worth, Texas at the Sid Richardson Center, on April 27-28th. Results of the tournament can be found at the Omni-Pong website.",
    category: "Championship",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/f/s!AvhT8JQccNiskMBYlz1PmFvt9u3PnA?e=0IIkAP" },
      { text: "Results", url: "https://www.omnipong.com/T-tourney.asp?t=103&r=3851" },
    ],
  },
  {
    date: "April 14, 2024",
    title: "2024 NCTTA Championships",
    content:
      "The 2024 NCTTA Championships were held in Eau Claire, Wisconsin on April 12-14th. Information and results of the tournament can be found at the NCTTA website.",
    category: "Championship",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/f/s!AvhT8JQccNiskI0JoBiB99DXZ8TkSg?e=S9QJqp" },
      { text: "NCTTA Website", url: "http://www.nctta.org" },
    ],
  },
  {
    date: "March 30, 2024",
    title: "DFWTT School Challenge",
    content:
      "The DFWTT School Challenge was held on March 30th at the Marcus Recreation Center (3003 Northhaven Rd, Dallas, TX 75229).",
    category: "Youth",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Results", url: "/results/2024#2024SchoolChallenge" },
      { text: "Photos", url: "https://photos.app.goo.gl/WKYzucUAtyLAnHBSA" },
    ],
  },
  {
    date: "March 24, 2024",
    title: "2024 Olympic Trials",
    content:
      "The Olympic Trials were held in West Monroe, Louisiana on March 21-24 at the West Monroe Sports & Events Facility.",
    category: "Championship",
    hasPhotos: true,
    links: [
      { text: "USATT Website", url: "https://www.usatt.org/2024-us-olympic-team-trials" },
      { text: "Photos", url: "https://1drv.ms/f/s!AvhT8JQccNisj9gnrvmMbCcQ3Ct8AA?e=R9PFaf" },
    ],
  },
  {
    date: "March 2, 2024",
    title: "2024 NCTTA South Regional",
    content:
      "Texas Wesleyan University hosted the NCTTA South Regional Championships on March 2nd at the Sid Richardson Center in Fort Worth. Results of the tournament can be found at the NCTTA website.",
    category: "Regional",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/f/s!AvhT8JQccNisj8B_XfJ3tetb9RwvrQ?e=2nwZBR" },
      { text: "NCTTA Results", url: "http://www.nctta.org/results" },
    ],
  },
  {
    date: "February 7, 2024",
    title: "Kid's After School Table Tennis",
    content:
      "Organized in partnership with American Youth Table Tennis. Free admission for 10 students who cannot afford top coaching. For others who would like to participate the cost is $20/day. Beginning February 7 to April 11 at Timberglen Recreation Center (Wednesdays) and Marcus Recreation Center (Thursdays) from 4:30pm to 5:30pm.",
    category: "Youth",
  },
  {
    date: "February 3, 2024",
    title: "2024 NCTTA Texas Division",
    content:
      "Texas Wesleyan University hosted the NCTTA Texas Division on February 3rd at the Sid Richardson Center in Fort Worth. Results of the tournament can be found at the NCTTA website.",
    category: "Regional",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/f/s!AvhT8JQccNisj7M-bniuAgUwMybAmQ?e=ypBghX" },
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
          <div className="flex gap-6 mt-6 text-sm">
            <div>
              <span className="font-semibold">14</span> Articles
            </div>
            <div>
              <span className="font-semibold">35</span> Events
            </div>
            <div>
              <span className="font-semibold">$486</span> Charity Raised
            </div>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {news2024.map((item, index) => (
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
              href="/news/archive/2023"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              2023 Archive
            </Link>
            <Link
              href="/news/archive"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              All Years
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
