import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Camera, Trophy, Heart, ExternalLink, Users, Award, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "2011 News Archive | DFWTT",
  description:
    "Complete archive of DFWTT news and events from 2011, including tournaments, charity programs, and the Paralympic training program launch.",
}

const newsItems = [
  {
    id: "tt-college-scholarship",
    date: "December 2011",
    title: "TT College Scholarship Opportunity",
    category: "Education",
    description:
      "Lindenwood University in St. Charles, Missouri (St. Louis area) is expanding their collegiate table tennis program with financial assistance available for players at all levels.",
    university: "Lindenwood University",
    location: "St. Charles, Missouri",
    infoLink: "Newsletter_Files/TT College Scholarship.pdf",
  },
  {
    id: "fall-world-peace-tt-2011",
    date: "December 3-4, 2011",
    title: "2011 Fall World Peace TT Pictures",
    category: "Tournament",
    description: "Plano TT club hosted its Fall World Peace Table Tennis Tournament at the Tom Muehlenbeck center.",
    hasPhotos: true,
    photoLink:
      "https://onedrive.live.com/?id=ACD8701C94F053F8%2132639&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    photographer: "Grant Bergmann",
  },
  {
    id: "fall-open-2011",
    date: "November 12, 2011",
    title: "2011 DFWTT Fall Open Tournament",
    category: "Tournament",
    description:
      "DFWTT hosted its yearly Fall Open tournament at the JCC with comprehensive USATT sanctioned and non-sanctioned events.",
    hasPhotos: true,
    hasResults: true,
    photoLink:
      "https://onedrive.live.com/?id=ACD8701C94F053F8%2132393&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    resultsLink: "http://www.dfwtt.com/Results_File/Results_2011.htm#2011FallOpen",
    photographer: "Grant Bergmann",
    charity: "$140 donated to Rainbow Days Inc for kids school program",
    winners: {
      classA: "Cheng Li ($400), Ludovic Gombos ($250)",
      classB: "Bernard Lemal ($100), Brandon Gardner ($70)",
      u2400: "Ludovic Gombos ($100), Tuan Anh Tran ($70)",
      doubles: "Tuan Anh Tran & Jingwen Hui",
    },
  },
  {
    id: "double-ten-2011",
    date: "October 2011",
    title: "2011 DFWTT Double Ten Tournament",
    category: "Tournament",
    description:
      "Pictures are now available from the DFWTT Double Ten tournament with photos from both Daniel Rutenberg and Grant Bergmann.",
    hasPhotos: true,
    hasResults: true,
    photoLink1: "http://www.flickr.com/photos/43269950@N05/sets/72157627753677228/",
    photoLink2:
      "https://onedrive.live.com/?id=acd8701c94f053f8!32394&cid=ACD8701C94F053F8&group=0&authkey=!AKcgmCROzFdmxwo",
    resultsLink: "http://www.dfwtt.com/Results_File/Results_2011.htm#2011DoubleTen",
    photographer1: "Daniel Rutenberg",
    photographer2: "Grant Bergmann",
    charity: "$200 donated to Dallas Chinese Community Center",
  },
  {
    id: "charity-member-contribution",
    date: "June 28, 2011",
    title: "Charity Program Update - Member Contribution",
    category: "Charity",
    description:
      "Another contribution in the amount of $143 was given to the DFWTT charity program by one of our members.",
    amount: "$143",
    recipient: "American Red Cross Disaster Relief Fund",
  },
  {
    id: "charity-disaster-relief",
    date: "May 24, 2011",
    title: "Charity Program Update - Texas Disaster Relief",
    category: "Charity",
    description:
      "DFWTT donated $224 to help those who suffered in recent Texas Wildfires, Spring Floods, and Tornadoes. Special thanks to Joe Hebert for his generous $50 contribution!",
    amount: "$224 (including $50 from Joe Hebert)",
    recipient: "American Red Cross Disaster Relief Fund",
    disasters: "Texas Wildfires, Spring Floods, and Tornadoes",
  },
  {
    id: "spring-world-peace-tt-2011",
    date: "May 14-15, 2011",
    title: "2011 Spring World Peace TT Pictures",
    category: "Tournament",
    description: "Plano TT club hosted its Spring World Peace Table Tennis Tournament at the Tom Muehlenbeck center.",
    hasPhotos: true,
    photoLink:
      "https://onedrive.live.com/?id=ACD8701C94F053F8%2132640&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    photographer: "Grant Bergmann",
  },
  {
    id: "spring-open-2011",
    date: "April 16, 2011",
    title: "2011 DFWTT Spring Open Tournament",
    category: "Tournament",
    description:
      "More than 87 players participated in our tournament at the JCC in Dallas featuring both USATT sanctioned and non-sanctioned events.",
    participants: "87+ players",
    hasPhotos: true,
    hasResults: true,
    photoLink: "http://www.flickr.com/photos/43269950@N05/sets/72157626494259267/",
    resultsLink: "http://www.dfwtt.com/Results_File/Results_2011.htm#2011SpringOpen",
    photographer: "Daniel Rutenberg",
    referee: "Ken Potts",
    organizer: "Donna Chen",
    winners: {
      openA: "Shaui Wang ($500), Nelson Ramos ($250), James Eddie Yang ($150)",
      openB: "Carlito Almirol ($150), Eddie Young ($100)",
      doublesA: "Russ Hamilton & Shaui Wang ($120), Shaui Wang & James Eddie Yang ($80)",
      doublesB: "Kyle Drake & James Rautis ($70), John Stiles & Jon Savage ($30)",
    },
    schoolChallenge: "8 two-man teams from Burleson Texas and Kinder Louisiana",
  },
  {
    id: "paralympic-program-launch",
    date: "April 2011",
    title: "Paralympic Table Tennis Training Program Launch",
    category: "Program",
    description:
      "Coach Rutenberg started a training session every Saturday at the JCC Club for disabled table tennis athletes in the area.",
    schedule: "Saturdays 3:15-5:30 PM",
    venue: "JCC Club",
    contact: "rutenbergd@aol.com",
    requirements: "Minimum 3 athletes required",
    coach: "Daniel Rutenberg",
  },
  {
    id: "dorothea-magazine-article",
    date: "January 2011",
    title: "Magazine Article - Dorothea Taschner",
    category: "Media",
    description:
      "Longtime DFWTT tournament player Dorothea Taschner was featured in an interesting magazine article in the January edition of Plano Profile.",
    magazine: "Plano Profile",
    websiteLink: "http://www.planoprofile.com",
    articleLink1: "Gallery_2011_Files/Dorothea1.jpg",
    articleLink2: "Gallery_2011_Files/Dorothea2.jpg",
  },
  {
    id: "winter-games-2011",
    date: "January 15, 2011",
    title: "2011 Texas Winter Games DFWTT Tournament",
    category: "Tournament",
    description:
      "Chance Friend wins the 2011 classic! DFWTT hosted the tournament at Staley Middle School gymnasiums in Frisco with over 100 players from multiple states.",
    champion: "Chance Friend",
    participants: "100+ players",
    states: "Texas, Oklahoma, Arkansas",
    venue: "Staley Middle School gymnasiums, Frisco",
    tables: "18 Butterfly tables",
    events: "20 different category events",
    hasPhotos: true,
    hasResults: true,
    photoLink:
      "https://onedrive.live.com/?id=ACD8701C94F053F8%2132396&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    resultsLink: "http://www.dfwtt.com/Results_File/Results_2011.htm#2011WinterGames",
    photographer: "Grant Bergmann",
    director: "Donna Chen",
    referee: "Scott Ryan",
    coach: "Daniel Rutenberg",
    charity: "$100 to Rainbow Days Inc, $100 to FNDR Foundation",
    qualification: "State Games of America, San Diego, CA (August 4-7, 2011)",
    finalMatch: "Chance Friend defeated Shaui Wang 3-2 in a thrilling 5-game final",
  },
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Tournament":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200"
    case "Charity":
      return "bg-green-100 text-green-800 hover:bg-green-200"
    case "Program":
      return "bg-purple-100 text-purple-800 hover:bg-purple-200"
    case "Education":
      return "bg-orange-100 text-orange-800 hover:bg-orange-200"
    case "Media":
      return "bg-pink-100 text-pink-800 hover:bg-pink-200"
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
    case "Program":
      return <Users className="h-4 w-4" />
    case "Education":
      return <GraduationCap className="h-4 w-4" />
    case "Media":
      return <Award className="h-4 w-4" />
    default:
      return <CalendarDays className="h-4 w-4" />
  }
}

export default function Archive2011Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">2011 News Archive</h1>
          <p className="text-xl text-gray-600 mb-6">
            Complete coverage of DFWTT events, tournaments, and community activities from 2011
          </p>

          {/* Year Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">11</div>
              <div className="text-sm text-blue-800">Articles</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">$707</div>
              <div className="text-sm text-green-800">Charity Raised</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">25+</div>
              <div className="text-sm text-purple-800">Events Covered</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">NEW</div>
              <div className="text-sm text-orange-800">Paralympic Program</div>
            </div>
          </div>

          {/* Year Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Link
              href="/news/archive/2012"
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm transition-colors"
            >
              2012
            </Link>
            <span className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm font-medium">2011</span>
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

                  {item.champion && (
                    <div className="flex items-center gap-2 text-sm text-yellow-600">
                      <Award className="h-4 w-4" />
                      <span>Champion: {item.champion}</span>
                    </div>
                  )}

                  {item.finalMatch && (
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Final Match:</h4>
                      <p className="text-sm">{item.finalMatch}</p>
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

                  {item.disasters && (
                    <div className="flex items-center gap-2 text-sm text-red-600">
                      <Heart className="h-4 w-4" />
                      <span>Relief for: {item.disasters}</span>
                    </div>
                  )}

                  {item.university && (
                    <div className="flex items-center gap-2 text-sm text-orange-600">
                      <GraduationCap className="h-4 w-4" />
                      <span>
                        {item.university}, {item.location}
                      </span>
                    </div>
                  )}

                  {item.schedule && (
                    <div className="flex items-center gap-2 text-sm text-purple-600">
                      <CalendarDays className="h-4 w-4" />
                      <span>Schedule: {item.schedule}</span>
                    </div>
                  )}

                  {item.venue && item.category === "Program" && (
                    <div className="flex items-center gap-2 text-sm text-purple-600">
                      <Users className="h-4 w-4" />
                      <span>Venue: {item.venue}</span>
                    </div>
                  )}

                  {item.coach && (
                    <div className="flex items-center gap-2 text-sm text-purple-600">
                      <Users className="h-4 w-4" />
                      <span>Coach: {item.coach}</span>
                    </div>
                  )}

                  {item.magazine && (
                    <div className="flex items-center gap-2 text-sm text-pink-600">
                      <Award className="h-4 w-4" />
                      <span>Featured in: {item.magazine}</span>
                    </div>
                  )}

                  {item.states && (
                    <div className="flex items-center gap-2 text-sm text-blue-600">
                      <Users className="h-4 w-4" />
                      <span>Participants from: {item.states}</span>
                    </div>
                  )}

                  {item.qualification && (
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Qualification Opportunity:</h4>
                      <p className="text-sm">{item.qualification}</p>
                    </div>
                  )}

                  {item.schoolChallenge && (
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">School Challenge:</h4>
                      <p className="text-sm">{item.schoolChallenge}</p>
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
                        {item.winners.u2400 && (
                          <div>
                            <strong>U-2400:</strong> {item.winners.u2400}
                          </div>
                        )}
                        {item.winners.doubles && (
                          <div>
                            <strong>Doubles:</strong> {item.winners.doubles}
                          </div>
                        )}
                        {item.winners.openA && (
                          <div>
                            <strong>Open A:</strong> {item.winners.openA}
                          </div>
                        )}
                        {item.winners.openB && (
                          <div>
                            <strong>Open B:</strong> {item.winners.openB}
                          </div>
                        )}
                        {item.winners.doublesA && (
                          <div>
                            <strong>Doubles A:</strong> {item.winners.doublesA}
                          </div>
                        )}
                        {item.winners.doublesB && (
                          <div>
                            <strong>Doubles B:</strong> {item.winners.doublesB}
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

                    {item.infoLink && (
                      <a
                        href={item.infoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-orange-600 hover:text-orange-800"
                      >
                        <GraduationCap className="h-4 w-4" />
                        More Info
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}

                    {item.websiteLink && (
                      <a
                        href={item.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-pink-600 hover:text-pink-800"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Magazine Website
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}

                    {item.articleLink1 && (
                      <a
                        href={item.articleLink1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-pink-600 hover:text-pink-800"
                      >
                        <Award className="h-4 w-4" />
                        Article Page 1
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}

                    {item.articleLink2 && (
                      <a
                        href={item.articleLink2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-pink-600 hover:text-pink-800"
                      >
                        <Award className="h-4 w-4" />
                        Article Page 2
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
              href="/news/archive/2012"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← 2012 Archive
            </Link>
            <Link
              href="/news/archive"
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              All Archives
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
