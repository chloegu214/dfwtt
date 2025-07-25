import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Camera, Trophy, Heart, ExternalLink, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "2012 News Archive | DFWTT",
  description:
    "Complete archive of DFWTT news and events from 2012, including tournaments, charity programs, and community activities.",
}

const newsItems = [
  {
    id: "fall-world-peace-tt",
    date: "December 1, 2012",
    title: "2012 Fall World Peace TT Pictures",
    category: "Tournament",
    description: "Plano TT club hosted its Fall World Peace Table Tennis Tournament at the Tom Muehlenbeck center.",
    hasPhotos: true,
    photoLink:
      "https://onedrive.live.com/?id=ACD8701C94F053F8%2132634&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    photographer: "Grant Bergmann",
  },
  {
    id: "charity-hurricane-sandy",
    date: "November 12, 2012",
    title: "Charity Program Update - Hurricane Sandy Relief",
    category: "Charity",
    description: "DFWTT donated $202 to the American Red Cross to help victims of Hurricane Sandy.",
    amount: "$202",
    recipient: "American Red Cross",
  },
  {
    id: "fall-open-2012",
    date: "November 10, 2012",
    title: "2012 DFWTT Fall Open",
    category: "Tournament",
    description:
      "DFWTT hosted its yearly Fall Open at the JCC with matches on 16 tables with excellent wood flooring and lighting.",
    hasPhotos: true,
    hasResults: true,
    photoLink:
      "https://onedrive.live.com/?id=acd8701c94f053f8%2132390&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    resultsLink: "http://dfwtt.com/Results_2012.htm#2012FallOpen",
    photographer: "Grant Bergmann",
  },
  {
    id: "double-ten-2012",
    date: "September 29, 2012",
    title: "2012 DFWTT Double Ten Tournament",
    category: "Tournament",
    description:
      "DFWTT hosted the Chinese Double Ten Celebration tournament at the Cimarron recreation center with a record 101 players.",
    participants: "101 players",
    hasPhotos: true,
    hasResults: true,
    photoLink:
      "https://onedrive.live.com/?id=ACD8701C94F053F8%2132391&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    resultsLink: "http://dfwtt.com/Results_2012.htm#2012DoubleTen",
    photographer: "Grant Bergmann",
  },
  {
    id: "dorothea-taschner-passing",
    date: "August 20, 2012",
    title: "Dorothea Taschner Memorial",
    category: "Memorial",
    description:
      "Sad news to report that Dorothea Taschner, a longtime DFWTT tournament player, passed away. Our condolences go out to all her friends and family.",
    tributeLink: "http://www.tributes.com/show/Dorothea-Auguste-Taschner-94312463",
    memoryLink: "http://www.dfwtt.com/Memories.htm",
  },
  {
    id: "spring-world-peace-tt-2012",
    date: "May 12-13, 2012",
    title: "2012 Spring World Peace TT Pictures",
    category: "Tournament",
    description: "Plano TT club hosted its Spring World Peace Table Tennis Tournament at the Tom Muehlenbeck center.",
    hasPhotos: true,
    photoLink:
      "https://onedrive.live.com/?id=acd8701c94f053f8%2132633&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    photographer: "Grant Bergmann",
  },
  {
    id: "charity-heart-association",
    date: "April 28, 2012",
    title: "Charity Program Update - American Heart Association",
    category: "Charity",
    description:
      "DFWTT donated $120 to Cimarron Recreation Center (City of Irving) to raise funds for the American Heart Association.",
    amount: "$120",
    recipient: "American Heart Association (via Cimarron Recreation Center)",
  },
  {
    id: "nctta-nationals-2012",
    date: "April 12-15, 2012",
    title: "NCTTA National Championships",
    category: "Tournament",
    description:
      "The National College Table Tennis Championships were held in Plano at the Plano Sports Authority 2 location.",
    hasPhotos: true,
    photoLink:
      "https://onedrive.live.com/?id=ACD8701C94F053F8%2112114&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    photographer: "Grant Bergmann",
    organization: "NCTTA",
  },
  {
    id: "deca-challenge-2012",
    date: "April 22, 2012",
    title: "2012 Deca Challenge",
    category: "Event",
    description:
      "The Jewish Community Center hosted the Deca Challenge providing a variety of game competitions for men and women aged 50 and over.",
    venue: "Jewish Community Center",
    ageGroup: "50+",
  },
  {
    id: "spring-open-2012",
    date: "April 7, 2012",
    title: "2012 DFWTT Spring Open",
    category: "Tournament",
    description:
      "DFWTT hosted its yearly Spring Open tournament at the JCC featuring events for all different levels of play.",
    hasPhotos: true,
    hasResults: true,
    photoLink1:
      "https://onedrive.live.com/?id=ACD8701C94F053F8%2132392&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    photoLink2: "http://www.flickr.com/photos/43269950@N05/sets/72157629415921450/",
    resultsLink: "http://dfwtt.com/Results_2012.htm#2012SpringOpen",
    photographer1: "Grant Bergmann",
    photographer2: "Daniel Rutenberg",
    winners: {
      classA: "Razvan Cretu ($350), Jim Butler ($200)",
      classB: "Carlito Almirol ($75), Jack Zhang ($50)",
      u2450: "Zhedi Bai ($100), James Eddie Yang ($60)",
    },
  },
  {
    id: "winter-games-2012",
    date: "January 14, 2012",
    title: "2012 Texas Winter Games",
    category: "Tournament",
    description:
      "DFWTT hosted the Texas Winter Games Table Tennis Tournament in Frisco, Texas with comprehensive age and skill divisions.",
    hasPhotos: true,
    hasResults: true,
    photoLink: "http://www.flickr.com/photos/43269950@N05/sets/72157629093006619/",
    resultsLink: "http://dfwtt.com/Results_2012.htm#2012WinterGames",
    photographer: "Daniel Rutenberg",
    charity: "$162 donated to American Red Cross Disaster Relief Fund",
    winners: {
      classA: "Ludovic Gombos ($300), Chance Friend ($150)",
      classB: "John Stiles ($100), Joy Li ($50)",
      u2400: "Nelson Ramos ($100), Ketan Parmar ($50)",
    },
  },
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Tournament":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200"
    case "Charity":
      return "bg-green-100 text-green-800 hover:bg-green-200"
    case "Memorial":
      return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    case "Event":
      return "bg-purple-100 text-purple-800 hover:bg-purple-200"
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200"
  }
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Tournament":
      return <Trophy className="h-4 w-4" />
    case "Charity":
      return <Heart className="h-4 w-4" />
    case "Memorial":
      return <Users className="h-4 w-4" />
    case "Event":
      return <CalendarDays className="h-4 w-4" />
    default:
      return <CalendarDays className="h-4 w-4" />
  }
}

export default function Archive2012Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">2012 News Archive</h1>
          <p className="text-xl text-gray-600 mb-6">
            Complete coverage of DFWTT events, tournaments, and community activities from 2012
          </p>

          {/* Year Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-sm text-blue-800">Articles</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">$484</div>
              <div className="text-sm text-green-800">Charity Raised</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">20+</div>
              <div className="text-sm text-purple-800">Events Covered</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">101</div>
              <div className="text-sm text-orange-800">Record Turnout</div>
            </div>
          </div>

          {/* Year Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Link
              href="/news/archive/2013"
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm transition-colors"
            >
              2013
            </Link>
            <span className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm font-medium">2012</span>
            <Link
              href="/news/archive/2011"
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm transition-colors"
            >
              2011
            </Link>
          </div>
        </div>

        {/* News Items */}
        <div className="space-y-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getCategoryColor(item.category)}>
                        {getCategoryIcon(item.category)}
                        <span className="ml-1">{item.category}</span>
                      </Badge>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  {/* Special Details */}
                  {item.participants && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{item.participants}</span>
                    </div>
                  )}

                  {item.amount && (
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <Heart className="h-4 w-4" />
                      <span>
                        {item.amount} donated to {item.recipient}
                      </span>
                    </div>
                  )}

                  {item.charity && (
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <Heart className="h-4 w-4" />
                      <span>{item.charity}</span>
                    </div>
                  )}

                  {item.venue && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CalendarDays className="h-4 w-4" />
                      <span>Venue: {item.venue}</span>
                    </div>
                  )}

                  {item.ageGroup && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>Age Group: {item.ageGroup}</span>
                    </div>
                  )}

                  {item.organization && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Trophy className="h-4 w-4" />
                      <span>Organized by: {item.organization}</span>
                    </div>
                  )}

                  {/* Winners */}
                  {item.winners && (
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">Tournament Winners:</h4>
                      <div className="space-y-1 text-sm">
                        {item.winners.classA && (
                          <div>
                            <strong>Class A:</strong> {item.winners.classA}
                          </div>
                        )}
                        {item.winners.classB && (
                          <div>
                            <strong>Class B:</strong> {item.winners.classB}
                          </div>
                        )}
                        {item.winners.u2450 && (
                          <div>
                            <strong>U-2450:</strong> {item.winners.u2450}
                          </div>
                        )}
                        {item.winners.u2400 && (
                          <div>
                            <strong>U-2400:</strong> {item.winners.u2400}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {item.hasPhotos && item.photoLink && (
                      <a
                        href={item.photoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                      >
                        <Camera className="h-4 w-4" />
                        Photos by {item.photographer}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}

                    {item.photoLink1 && (
                      <a
                        href={item.photoLink1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                      >
                        <Camera className="h-4 w-4" />
                        Photos by {item.photographer1}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}

                    {item.photoLink2 && (
                      <a
                        href={item.photoLink2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                      >
                        <Camera className="h-4 w-4" />
                        Photos by {item.photographer2}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}

                    {item.hasResults && item.resultsLink && (
                      <a
                        href={item.resultsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-green-600 hover:text-green-800"
                      >
                        <Trophy className="h-4 w-4" />
                        Results
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}

                    {item.tributeLink && (
                      <a
                        href={item.tributeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Tribute Page
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}

                    {item.memoryLink && (
                      <a
                        href={item.memoryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Memory Article
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 text-center">
          <div className="flex justify-center gap-4">
            <Link
              href="/news/archive/2013"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← 2013 Archive
            </Link>
            <Link
              href="/news/archive"
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              All Archives
            </Link>
            <Link
              href="/news/archive/2011"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              2011 Archive →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
