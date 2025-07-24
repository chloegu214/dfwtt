import Link from "next/link"
import { ArrowLeft, ExternalLink, Camera, Trophy } from "lucide-react"

const news2015 = [
  {
    date: "December 19, 2015",
    title: "2015 USATT National Championships",
    content:
      "The USATT held its US National Championships in Las Vegas, Nevada on December 14-19. Grant Bergmann was able to capture many photos of the players during the tournament.",
    category: "Championship",
    hasPhotos: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!39474&parId=acd8701c94f053f8!32382&authkey=!ADfA0ZAM8FGEZ24",
      },
    ],
  },
  {
    date: "December 1, 2015",
    title: "Charity Program Update",
    content:
      "In our continued pledge to donate $2 for each player that participates in our tournaments, DFWTT has donated $250 to the American Red Cross - European Refugee and Migration Crisis.",
    category: "Charity",
  },
  {
    date: "November 15, 2015",
    title: "2015 TX State Championship",
    content:
      "Texas Wesleyan University hosted its Texas State Championship on November 14th and 15th at the Sid Richardson Center in Fort Worth.",
    category: "Championship",
    hasPhotos: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!33721&parId=acd8701c94f053f8!32382&authkey=!AHea19PZZ3uT3x8",
      },
    ],
  },
  {
    date: "November 7, 2015",
    title: "2015 DFWTT Fall Open",
    content:
      "DFWTT hosted its yearly Fall Open tournament at the JCC in Dallas, Texas. A total of 18 tables were used during the USATT sanctioned and non-sanctioned events. There were around 83 participants, which included local area players and some out of state players. Emil Santos won Class A Open Singles, with Rachid El Boubou in 2nd and Bruno Ventura Dos Anjos in 3rd.",
    category: "Tournament",
    hasPhotos: true,
    hasResults: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!33414&parId=acd8701c94f053f8!32382&authkey=!AF3ov9BaSG7WoQo",
      },
      { text: "Results", url: "/results/2015#2015FallOpen" },
    ],
  },
  {
    date: "October 24, 2015",
    title: "2015 DFWTT School Challenge",
    content:
      "The 1st DFW area school challenge, organized by DFWTT, was held at the QD Academy in Plano. Students from elementary, middle, and high school were eligible to compete in the tournament.",
    category: "Youth",
    hasPhotos: true,
    hasResults: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!33279&parId=acd8701c94f053f8!32382&authkey=!ABBMqxLOnSftjF4",
      },
      { text: "Results", url: "/results/2015#2015SchoolChallenge" },
    ],
  },
  {
    date: "October 1, 2015",
    title: "Charity Program Update",
    content:
      "In our continued pledge to donate $2 for each player that participates in our tournaments, DFWTT has donated $200 to the Dallas Chinese Community Center.",
    category: "Charity",
  },
  {
    date: "September 12, 2015",
    title: "2015 Chinese Double Ten",
    content:
      "DFWTT hosted its yearly Chinese Double Ten Celebration tournament at the Cimarron recreation center in Irving, Texas. Congratulations to all the winners and thank you to everyone who participated in the tournament.",
    category: "Cultural",
    hasPhotos: true,
    hasResults: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/?id=ACD8701C94F053F8!32402&cid=ACD8701C94F053F8&group=0&authkey=!ANdJXHy0E74-DWk",
      },
      { text: "Results", url: "/results/2015#2015DoubleTen" },
    ],
  },
  {
    date: "August 23, 2015",
    title: "2015 Joola Teams South",
    content:
      "North American Table Tennis hosted the Joola Teams South tournament on August 22-23 at Round Rock Sports Center in Round Rock, Texas. Results of the tournament can be found at the NATT website.",
    category: "Tournament",
    hasPhotos: true,
    hasResults: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!31618&parId=acd8701c94f053f8!32382&authkey=!ArUFmlQOlMpbsFU&Bpub=SDX.SkyDrive&Bsrc=Share&ref=name",
      },
      { text: "NATT Results", url: "http://www.natabletennis.com/tournaments/results.php" },
    ],
  },
  {
    date: "August 1, 2015",
    title: "Charity Program Update",
    content:
      "In our continued pledge to donate $2 for each player that participates in our tournaments, DFWTT has donated $200 to National Fallen Firefighters Foundation. Their mission is to honor and remember America's fallen fire heroes, provide resources to assist their survivors in rebuilding their lives, and work within the fire service community to reduce firefighter deaths and injuries.",
    category: "Charity",
  },
  {
    date: "July 15, 2015",
    title: "100+ Women's Summer Olympic Sport Events",
    content:
      "A group of women came to the Cimarron location for a group coaching lesson as part of their goal to participate in all 100+ women's Summer Olympic sport events. The group included Laura Spivey, Jeffiner Fornuff, Ruth Ann Francis, and Leigh Batten. They started with singles table tennis in February 2014 and have completed approximately 80 of the 111 events, with a goal to finish by their trip to Rio for the 2016 Summer Olympic Games.",
    category: "Special",
    hasPhotos: true,
  },
  {
    date: "June 13, 2015",
    title: "2015 DFWTT Spring Open",
    content:
      "DFWTT hosted its yearly Spring Open at the JCC in Dallas. A total of 18 tables were used during the USATT sanctioned and non-sanctioned events. Thanks to everyone for joining us at this year's event.",
    category: "Tournament",
    hasPhotos: true,
    hasResults: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!29601&parId=acd8701c94f053f8!32382&authkey=!AKZlG40rry3QNh8",
      },
      { text: "Results", url: "/results/2015#2015SpringOpen" },
    ],
  },
  {
    date: "April 25, 2015",
    title: "2015 World Peace TT Pictures",
    content: "Plano TT club hosted its World Peace Table Tennis Tournament at the Tom Muehlenbeck center.",
    category: "Tournament",
    hasPhotos: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/?id=ACD8701C94F053F8%2132630&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
      },
    ],
  },
  {
    date: "April 12, 2015",
    title: "NCTTA National Championships",
    content:
      "The NCTTA Championships took place April 10th - 12th at the University of Wisconsin - Eau Claire. Results and video of the tournament are available at the NCTTA website.",
    category: "Championship",
    hasPhotos: true,
    hasResults: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/?id=ACD8701C94F053F8%2126468&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
      },
      { text: "NCTTA Website", url: "http://www.nctta.org/content/2015-championships" },
    ],
  },
  {
    date: "March 8, 2015",
    title: "Pan Am and National Team Trials",
    content:
      "Texas Wesleyan University hosted the Pan Am and National Team Trials during March 6th - 8th at the Sid Richardson Center. Results and video of the matches are available on the USATT website.",
    category: "Championship",
    hasPhotos: true,
    hasResults: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/?id=ACD8701C94F053F8%2124862&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
      },
      {
        text: "USATT Website",
        url: "http://www.teamusa.org/USA-Table-Tennis/Events/2015/March/06/2015-Pan-Am-and-National-Team-Trials",
      },
    ],
  },
  {
    date: "February 21, 2015",
    title: "NCTTA South Regional Championships",
    content:
      "Texas Wesleyan University hosted the NCTTA South Regional Championships on February 21st at the Sid Richardson Center in Fort Worth. Results of the tournament can be found at the NCTTA website.",
    category: "Regional",
    hasPhotos: true,
    hasResults: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/?id=ACD8701C94F053F8%2124586&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
      },
      { text: "NCTTA Results", url: "http://www.nctta.org/results" },
    ],
  },
  {
    date: "February 15, 2015",
    title: "Charity Program Update",
    content:
      "In our continued pledge to donate $2 for each player that participates in our tournaments, DFWTT has donated $250 to support the USATT Annual Giving Campaign program. The USATT Annual Fund will help support ongoing programs including the Juniors and Cadets, National Teams, Paralympic Programs, and sport promotion through USATT events and programs.",
    category: "Charity",
  },
  {
    date: "February 7, 2015",
    title: "NCTTA Texas Division Tournament",
    content:
      "Texas Wesleyan University hosted the NCTTA Texas Division Tournament on February 7th at the Sid Richardson Center in Fort Worth. Results of the tournament can be found at the NCTTA website.",
    category: "Regional",
    hasPhotos: true,
    hasResults: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/?id=acd8701c94f053f8!32637&cid=ACD8701C94F053F8&group=0&authkey=!AKcgmCROzFdmxwo",
      },
      { text: "NCTTA Results", url: "http://www.nctta.org/results" },
    ],
  },
  {
    date: "January 17, 2015",
    title: "2015 Texas Winter Games",
    content:
      "DFWTT hosted the Texas Winter Games Table Tennis Tournament inside the two Staley Middle School gymnasiums in Frisco, Texas. This was part of the Texas Amateur Athletic Federation (TAAF) Winter Games of Texas. Medal winners from the Winter Games of Texas will be eligible to compete in the National State Games of America in Lincoln, Nebraska on July 28 - August 2, 2015.",
    category: "Championship",
    hasPhotos: true,
    hasResults: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!23041&parId=acd8701c94f053f8!32382&authkey=!ABI5kJSVBk8knZk",
      },
      { text: "Results", url: "/results/2015#2015WinterGames" },
      { text: "TAAF Website", url: "http://www.taaf.com/" },
      { text: "State Games Info", url: "http://www.sga2015.com/" },
    ],
  },
]

const categoryColors = {
  Tournament: "bg-blue-100 text-blue-800",
  Championship: "bg-yellow-100 text-yellow-800",
  Regional: "bg-green-100 text-green-800",
  Youth: "bg-pink-100 text-pink-800",
  Cultural: "bg-orange-100 text-orange-800",
  Charity: "bg-purple-100 text-purple-800",
  Special: "bg-indigo-100 text-indigo-800",
}

export default function News2015Page() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">2015 News Archive</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A year of firsts including the inaugural DFWTT School Challenge, the unique 100+ Women's Olympic Events
            story, and continued expansion of tournament offerings and charitable giving.
          </p>
          <div className="flex gap-6 mt-6 text-sm">
            <div>
              <span className="font-semibold">17</span> Articles
            </div>
            <div>
              <span className="font-semibold">30</span> Events
            </div>
            <div>
              <span className="font-semibold">$900</span> Charity Raised
            </div>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {news2015.map((item, index) => (
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
              href="/news/archive"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              All Years
            </Link>
            <Link
              href="/news/archive/2016"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              2016 Archive
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
