import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink, Camera, Trophy, Users, Heart, Star } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    id: 1,
    title: "2012 Fall World Peace TT Pictures",
    date: "December 1, 2012",
    category: "Tournament",
    description: "Plano TT club hosted its Fall World Peace Table Tennis Tournament at the Tom Muehlenbeck center.",
    hasPhotos: true,
    hasResults: false,
    externalLink:
      "https://onedrive.live.com/?id=ACD8701C94F053F8%2132634&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    highlights: ["Grant Bergmann photography", "Tom Muehlenbeck center venue"],
  },
  {
    id: 2,
    title: "Hurricane Sandy Relief Donation",
    date: "November 12, 2012",
    category: "Charity",
    description:
      "DFWTT donated $202 to the American Red Cross to help victims of Hurricane Sandy, continuing the $2 per player pledge.",
    hasPhotos: false,
    hasResults: false,
    highlights: ["$202 donated", "American Red Cross", "$2 per player program"],
  },
  {
    id: 3,
    title: "2012 DFWTT Fall Open",
    date: "November 10, 2012",
    category: "Tournament",
    description: "DFWTT hosted its yearly Fall Open at the JCC on 16 tables with excellent wood flooring and lighting.",
    hasPhotos: true,
    hasResults: true,
    externalLink:
      "https://onedrive.live.com/?id=acd8701c94f053f8%2132390&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    highlights: ["16 tables at JCC", "Grant Bergmann photography", "Complete results available"],
  },
  {
    id: 4,
    title: "2012 DFWTT Double Ten Tournament",
    date: "September 29, 2012",
    category: "Tournament",
    description:
      "DFWTT hosted the Chinese Double Ten Celebration tournament at the Cimarron recreation center with a record 101 players.",
    hasPhotos: true,
    hasResults: true,
    externalLink:
      "https://onedrive.live.com/?id=ACD8701C94F053F8%2132391&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    highlights: ["Record 101 players", "Cimarron recreation center", "Grant Bergmann photography"],
  },
  {
    id: 5,
    title: "Dorothea Taschner Memorial",
    date: "August 20, 2012",
    category: "Memorial",
    description:
      "Sad news to report that Dorothea Taschner, a longtime DFWTT tournament player, passed away. Our condolences go out to all her friends and family.",
    hasPhotos: false,
    hasResults: false,
    externalLink: "http://www.tributes.com/show/Dorothea-Auguste-Taschner-94312463",
    highlights: ["Longtime DFWTT player", "Memorial tribute available", "Community remembrance"],
  },
  {
    id: 6,
    title: "2012 Spring World Peace TT Pictures",
    date: "May 12-13, 2012",
    category: "Tournament",
    description:
      "Plano TT club hosted its Spring World Peace Table Tennis Tournament at the Tom Muehlenbeck center over two days.",
    hasPhotos: true,
    hasResults: false,
    externalLink:
      "https://onedrive.live.com/?id=acd8701c94f053f8%2132633&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    highlights: ["Two-day tournament", "Tom Muehlenbeck center", "Grant Bergmann photography"],
  },
  {
    id: 7,
    title: "American Heart Association Donation",
    date: "April 28, 2012",
    category: "Charity",
    description:
      "DFWTT donated $120 to Cimarron Recreation Center (City of Irving) to raise funds for the American Heart Association.",
    hasPhotos: false,
    hasResults: false,
    highlights: ["$120 donated", "Cimarron Recreation Center", "American Heart Association support"],
  },
  {
    id: 8,
    title: "NCTTA National Championships",
    date: "April 12-15, 2012",
    category: "Tournament",
    description:
      "The National College Table Tennis Championships were held in Plano at the Plano Sports Authority 2 location, promoting table tennis at the collegiate level.",
    hasPhotos: true,
    hasResults: false,
    externalLink:
      "https://onedrive.live.com/?id=ACD8701C94F053F8%2112114&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    highlights: ["Plano Sports Authority venue", "Collegiate level competition", "Grant Bergmann photography"],
  },
  {
    id: 9,
    title: "2012 DFWTT Spring Open",
    date: "April 7, 2012",
    category: "Tournament",
    description:
      "DFWTT hosted its yearly Spring Open tournament at the JCC featuring events for all different levels of play, including USATT sanctioned and non-sanctioned events.",
    hasPhotos: true,
    hasResults: true,
    externalLink:
      "https://onedrive.live.com/?id=ACD8701C94F053F8%2132392&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    highlights: [
      "Class A: Razvan Cretu won $350",
      "Multiple prize categories",
      "Grant Bergmann & Daniel Rutenberg photography",
    ],
  },
  {
    id: 10,
    title: "2012 Deca Challenge",
    date: "April 22, 2012",
    category: "Program",
    description:
      "The Jewish Community Center hosted the Deca Challenge providing a variety of game competitions for men and women aged 50 and over.",
    hasPhotos: false,
    hasResults: false,
    highlights: ["Ages 50 and over", "JCC venue", "Multi-game competition"],
  },
  {
    id: 11,
    title: "2012 Texas Winter Games",
    date: "January 14, 2012",
    category: "Tournament",
    description:
      "DFWTT hosted the Texas Winter Games Table Tennis Tournament in Frisco Texas with comprehensive events and charity donation of $162 to American Red Cross.",
    hasPhotos: true,
    hasResults: true,
    externalLink: "http://www.flickr.com/photos/43269950@N05/sets/72157629093006619/",
    highlights: ["Class A: Ludovic Gombos won $300", "$162 donated to American Red Cross", "Frisco venue"],
  },
  {
    id: 12,
    title: "American Red Cross Disaster Relief",
    date: "January 14, 2012",
    category: "Charity",
    description:
      "In continued pledge to donate $2 for each player that participates in tournaments, DFWTT donated $162 to American Red Cross Disaster Relief Fund.",
    hasPhotos: false,
    hasResults: false,
    highlights: ["$162 donated", "American Red Cross", "Disaster Relief Fund"],
  },
]

const categoryColors = {
  Tournament: "bg-blue-100 text-blue-800 border-blue-200",
  Charity: "bg-green-100 text-green-800 border-green-200",
  Program: "bg-purple-100 text-purple-800 border-purple-200",
  Memorial: "bg-gray-100 text-gray-800 border-gray-200",
}

const categoryIcons = {
  Tournament: Trophy,
  Charity: Heart,
  Program: Users,
  Memorial: Star,
}

export default function News2012Archive() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">2012 News Archive</h1>
          <p className="text-xl text-gray-600 mb-6">12 articles covering 20+ events • $484 raised for charity</p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="outline" className="bg-blue-50">
              Record 101-player turnout
            </Badge>
            <Badge variant="outline" className="bg-green-50">
              Hurricane Sandy relief
            </Badge>
            <Badge variant="outline" className="bg-purple-50">
              NCTTA Championships in Plano
            </Badge>
            <Badge variant="outline" className="bg-gray-50">
              Memorial tribute to Dorothea Taschner
            </Badge>
          </div>
        </div>

        {/* Year Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/news/archive/2013">2013</Link>
            </Button>
            <Button variant="default" size="sm" disabled>
              2012
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/news/archive/2011">2011</Link>
            </Button>
          </div>
        </div>

        {/* News Items */}
        <div className="space-y-6">
          {newsItems.map((item) => {
            const CategoryIcon = categoryIcons[item.category as keyof typeof categoryIcons]

            return (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          variant="outline"
                          className={categoryColors[item.category as keyof typeof categoryColors]}
                        >
                          <CategoryIcon className="w-3 h-3 mr-1" />
                          {item.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.date}
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </div>
                    <div className="flex gap-2 ml-4">
                      {item.hasPhotos && (
                        <Badge variant="secondary" className="text-xs">
                          <Camera className="w-3 h-3 mr-1" />
                          Photos
                        </Badge>
                      )}
                      {item.hasResults && (
                        <Badge variant="secondary" className="text-xs">
                          <Trophy className="w-3 h-3 mr-1" />
                          Results
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {item.highlights && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {item.externalLink && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={item.externalLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Back to Archives */}
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/news/archive">← Back to All Archives</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
