import Link from "next/link"
import { ArrowLeft, ExternalLink, Camera, Trophy } from "lucide-react"

const news2016 = [
  {
    date: "December 17, 2016",
    title: "2016 US Open",
    content:
      "The USATT held its US Open tournament in Las Vegas, Nevada on December 12-17. A summary of the results can be found on the USATT website.",
    category: "Championship",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisg-ZnH4okRQ90wBiL9g" },
      { text: "Results", url: "http://register.usatt.org/tournaments/results.php" },
    ],
  },
  {
    date: "December 1, 2016",
    title: "Charity Program Update",
    content:
      "In our continued pledge to donate $2 for each player that participates in our tournaments, DFWTT has donated $208 to National Fallen Firefighters Foundation.",
    category: "Charity",
  },
  {
    date: "November 13, 2016",
    title: "2016 Texas State Championship",
    content:
      "Texas Wesleyan University hosted its Texas State Championship on November 12th and 13th at the Sid Richardson Center in Fort Worth.",
    category: "Championship",
    hasPhotos: true,
    links: [{ text: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisg9F0H7mWCWb_GNVeSw" }],
  },
  {
    date: "November 5, 2016",
    title: "2016 DFWTT Fall Open",
    content:
      "DFWTT hosted its yearly Fall Open at the JCC in Dallas. A total of 22 Butterfly tables were used in the USATT sanctioned and non-sanctioned events. For the non-sanctioned Open Doubles event, the 47mm Big Ball was used for the first time. The total prize money awarded was $3,100.",
    category: "Tournament",
    hasPhotos: true,
    hasResults: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisg9BOEyRvMzy1iZ_A9Q" },
      { text: "Results", url: "/results/2016#2016FallOpen" },
    ],
  },
  {
    date: "October 15, 2016",
    title: "Charity Program Update",
    content:
      "In our continued pledge to donate $2 for each player that participates in our tournaments, DFWTT has donated $210 to the Dallas Chinese Community Center.",
    category: "Charity",
  },
  {
    date: "September 17, 2016",
    title: "2016 Chinese Double Ten",
    content:
      "DFWTT hosted its yearly Chinese Double Ten Celebration tournament at the Cimarron recreation center in Irving, Texas. Thank you to everyone for the large turnout at this year's event.",
    category: "Cultural",
    hasPhotos: true,
    hasResults: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=ACD8701C94F053F8!58087&parId=ACD8701C94F053F8!32382&authkey=!AA1X6JfhYi4Wd7Y",
      },
      { text: "Results", url: "/results/2016#2016DoubleTen" },
    ],
  },
  {
    date: "July 9, 2016",
    title: "2016 USATT National Championships",
    content:
      "The USATT held its US National Championships in Las Vegas, Nevada on July 4-9. William Zhang and Grant Bergmann were Semi-Finalists in the Senior Men's 75+ Doubles event.",
    category: "Championship",
    hasPhotos: true,
    hasResults: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/?authkey=%21AGqa55SsLFOLDzc&id=ACD8701C94F053F8%2156948&cid=ACD8701C94F053F8",
      },
      { text: "Results", url: "http://register.usatt.org/tournaments/results.php" },
    ],
  },
  {
    date: "June 23, 2016",
    title: "Dude Perfect Show",
    content:
      "The Dude Perfect Show aired an episode which had Cory Cotton playing in our DFWTT Invitational Tournament back in March. The episode aired on June 23 on the CMT (Country Music Television) network.",
    category: "Media",
    hasPhotos: true,
    links: [
      { text: "Photos", url: "https://1drv.ms/f/s!AvhT8JQccNisg6wGRzOR3im_psJnlA" },
      { text: "Sneak Peek Video", url: "https://www.youtube.com/watch?v=8sXtjdKWQqA" },
      { text: "Dude Perfect Website", url: "http://dudeperfect.com/" },
    ],
  },
  {
    date: "June 1, 2016",
    title: "Charity Program Update",
    content:
      "In our continued pledge to donate $2 for each player that participates in our tournaments, DFWTT has donated $200 to the American Red Cross - Canada Wildfires fund.",
    category: "Charity",
  },
  {
    date: "May 28, 2016",
    title: "Rose City Memorial Tournament",
    content: "The Rose City TTC hosted a USATT sanctioned tournament on May 28, in Tyler Texas.",
    category: "Tournament",
    links: [
      {
        text: "Tournament Info",
        url: "http://www.teamusa.org/USA-Table-Tennis/Events/2016/May/28/Rose-City-Memorial-Tournament",
      },
    ],
  },
  {
    date: "May 14, 2016",
    title: "2016 Spring World Peace TT",
    content: "Plano TT club hosted its Spring World Peace Table Tennis Tournament at the Tom Muehlenbeck center.",
    category: "Tournament",
    hasPhotos: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=ACD8701C94F053F8!51653&parId=ACD8701C94F053F8!32382&authkey=!AhYqdiq0bJ6SBy8",
      },
    ],
  },
  {
    date: "April 30, 2016",
    title: "2016 DFWTT Spring Open",
    content:
      "DFWTT hosted its yearly Spring Open at the JCC in Dallas, featuring both USATT sanctioned and non-sanctioned events. Congratulations to all the winners and thank you to everyone who attended our tournament.",
    category: "Tournament",
    hasPhotos: true,
    hasResults: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/?authkey=%21Akca%5FD2KIQSl5JQ&id=ACD8701C94F053F8%2149903&cid=ACD8701C94F053F8",
      },
      { text: "Results", url: "/results/2016#2016SpringOpen" },
    ],
  },
  {
    date: "March 27, 2016",
    title: "2016 NCTTA National Championships",
    content:
      "The NCTTA Championships took place March 25th - 27th at the Round Rock Sports Center in Round Rock, Texas. Results of the tournament are available at the NCTTA website.",
    category: "Championship",
    hasPhotos: true,
    hasResults: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!45361&parId=acd8701c94f053f8!32382&authkey=!AE4M5uHK2Vp6Zqk",
      },
      { text: "NCTTA Results", url: "http://nctta.org/champs/2016/results.html" },
    ],
  },
  {
    date: "March 21, 2016",
    title: "DFWTT Invitational Tournament",
    content:
      "DFWTT hosted an Invitational Tournament at the Cimarron Recreation Center in Irving Texas. Nelson Ramos won 1st place ($300), followed by Ranjit Rayamajhi in 2nd ($200), Brandon Gardner in 3rd ($150), and Edvin Golestanyan in 4th ($100).",
    category: "Tournament",
    hasPhotos: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!43462&parId=acd8701c94f053f8!32382&authkey=!ADklwK4gMqBXLBM",
      },
    ],
  },
  {
    date: "February 21, 2016",
    title: "2016 NCTTA South Regional Championships",
    content:
      "Texas Wesleyan University hosted the NCTTA South Regional Championships on February 20th - 21st at the Sid Richardson Center in Fort Worth. Results of the tournament can be found at the NCTTA website.",
    category: "Regional",
    hasPhotos: true,
    hasResults: true,
    links: [
      {
        text: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!43078&parId=acd8701c94f053f8!32382&authkey=!AAnxLSiE3JI6ewY",
      },
      { text: "NCTTA Results", url: "http://www.nctta.org/results" },
    ],
  },
]

const categoryColors = {
  Tournament: "bg-blue-100 text-blue-800",
  Championship: "bg-yellow-100 text-yellow-800",
  Regional: "bg-green-100 text-green-800",
  Cultural: "bg-orange-100 text-orange-800",
  Charity: "bg-purple-100 text-purple-800",
  Media: "bg-pink-100 text-pink-800",
}

export default function News2016Page() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">2016 News Archive</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A memorable year featuring the introduction of the 47mm Big Ball, the Dude Perfect Show appearance, and
            continued growth in tournament participation and charity contributions.
          </p>
          <div className="flex gap-6 mt-6 text-sm">
            <div>
              <span className="font-semibold">14</span> Articles
            </div>
            <div>
              <span className="font-semibold">25</span> Events
            </div>
            <div>
              <span className="font-semibold">$618</span> Charity Raised
            </div>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {news2016.map((item, index) => (
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
              href="/news/archive/2015"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              2015 Archive
            </Link>
            <Link
              href="/news/archive/2017"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              2017 Archive
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
