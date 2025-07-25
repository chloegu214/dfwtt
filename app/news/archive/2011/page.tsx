import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink, Camera, Trophy, Users, Heart, GraduationCap, Newspaper } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    id: 1,
    title: "TT College Scholarship Opportunity",
    date: "December 2011",
    category: "Education",
    description:
      "Lindenwood University in St. Charles, Missouri (St. Louis area) is expanding their collegiate table tennis program with financial assistance available for table tennis players at all levels.",
    hasPhotos: false,
    hasResults: false,
    highlights: ["Lindenwood University", "All skill levels", "Financial assistance available"],
  },
  {
    id: 2,
    title: "2011 Fall World Peace TT Pictures",
    date: "December 3-4, 2011",
    category: "Tournament",
    description:
      "Plano TT club hosted its Fall World Peace Table Tennis Tournament at the Tom Muehlenbeck center over two days.",
    hasPhotos: true,
    hasResults: false,
    externalLink:
      "https://onedrive.live.com/?id=ACD8701C94F053F8%2132639&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    highlights: ["Two-day tournament", "Tom Muehlenbeck center", "Grant Bergmann photography"],
  },
  {
    id: 3,
    title: "2011 DFWTT Fall Open Tournament",
    date: "November 12, 2011",
    category: "Tournament",
    description:
      "DFWTT hosted its yearly Fall Open tournament at the JCC with $140 donation sent to Rainbow Days Inc for their kids school program.",
    hasPhotos: true,
    hasResults: true,
    externalLink:
      "https://onedrive.live.com/?id=ACD8701C94F053F8%2132393&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    highlights: ["Class A: Cheng Li won $400", "$140 donated to Rainbow Days Inc", "Grant Bergmann photography"],
  },
  {
    id: 4,
    title: "2011 DFWTT Double Ten Tournament",
    date: "October 2011",
    category: "Tournament",
    description:
      "Pictures are now available from the DFWTT Double Ten tournament with $200 donated to the Dallas Chinese Community Center.",
    hasPhotos: true,
    hasResults: true,
    externalLink: "http://www.flickr.com/photos/43269950@N05/sets/72157627753677228/",
    highlights: [
      "$200 donated to Dallas Chinese Community Center",
      "Daniel Rutenberg & Grant Bergmann photography",
      "Complete results available",
    ],
  },
  {
    id: 5,
    title: "American Red Cross Disaster Relief",
    date: "June 28, 2011",
    category: "Charity",
    description:
      "Another contribution in the amount of $143 was given to the DFWTT charity program by one of our members, donated to the American Red Cross Disaster Relief Fund.",
    hasPhotos: false,
    hasResults: false,
    highlights: ["$143 donated", "Member contribution", "American Red Cross Disaster Relief"],
  },
  {
    id: 6,
    title: "Texas Disasters Relief Fund",
    date: "May 24, 2011",
    category: "Charity",
    description:
      "DFWTT donated $224 to the American Red Cross Disaster Relief Fund for Texas Wildfires, Spring Floods, and Tornadoes. Special thanks to Joe Hebert for his generous $50 contribution!",
    hasPhotos: false,
    hasResults: false,
    highlights: ["$224 donated", "Joe Hebert $50 contribution", "Texas disaster relief"],
  },
  {
    id: 7,
    title: "2011 Spring World Peace TT Pictures",
    date: "May 14-15, 2011",
    category: "Tournament",
    description:
      "Plano TT club hosted its Spring World Peace Table Tennis Tournament at the Tom Muehlenbeck center over two days.",
    hasPhotos: true,
    hasResults: false,
    externalLink:
      "https://onedrive.live.com/?id=ACD8701C94F053F8%2132640&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    highlights: ["Two-day tournament", "Tom Muehlenbeck center", "Grant Bergmann photography"],
  },
  {
    id: 8,
    title: "2011 DFWTT Spring Open Tournament",
    date: "April 16, 2011",
    category: "Tournament",
    description:
      "More than 87 players participated in the tournament at the JCC in Dallas. Shaui Wang won $500 in the Open Singles Class A defeating Nelson Ramos ($250) in the final.",
    hasPhotos: true,
    hasResults: true,
    externalLink: "http://www.flickr.com/photos/43269950@N05/sets/72157626494259267/",
    highlights: ["87+ players", "Shaui Wang won $500", "School Challenge event", "Daniel Rutenberg photography"],
  },
  {
    id: 9,
    title: "Paralympic Table Tennis Training Program Launch",
    date: "April 2011",
    category: "Program",
    description:
      "Every Saturdays at the JCC Club, Coach Rutenberg started a training session for disabled table tennis athletes in the area, running from 3:15 to 5:30 p.m.",
    hasPhotos: false,
    hasResults: false,
    highlights: ["Saturday sessions", "JCC Club location", "3:15-5:30 p.m.", "Coach Rutenberg leadership"],
  },
  {
    id: 10,
    title: "Dorothea Taschner Magazine Feature",
    date: "January 2011",
    category: "Media",
    description:
      "A longtime DFWTT tournament player, Dorothea Taschner, had an interesting magazine article written about her in the January edition of Plano Profile.",
    hasPhotos: false,
    hasResults: false,
    externalLink: "http://www.planoprofile.com",
    highlights: ["Plano Profile magazine", "Long history in table tennis", "Trophy collection featured"],
  },
  {
    id: 11,
    title: "2011 Texas Winter Games DFWTT Tournament",
    date: "January 15, 2011",
    category: "Tournament",
    description:
      "Chance Friend wins the 2011 classic! DFWTT hosted the tournament at Staley Middle School gymnasiums in Frisco, Texas with over 100 players and $200 donated to charity.",
    hasPhotos: true,
    hasResults: true,
    externalLink:
      "https://onedrive.live.com/?id=ACD8701C94F053F8%2132396&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    highlights: [
      "Chance Friend champion",
      "100+ players",
      "$100 to Rainbow Days Inc",
      "$100 to FNDR Foundation",
      "Grant Bergmann photography",
    ],
  },
]

const categoryColors = {
  Tournament: "bg-blue-100 text-blue-800 border-blue-200",
  Charity: "bg-green-100 text-green-800 border-green-200",
  Program: "bg-purple-100 text-purple-800 border-purple-200",
  Education: "bg-orange-100 text-orange-800 border-orange-200",
  Media: "bg-pink-100 text-pink-800 border-pink-200",
}

const categoryIcons = {
  Tournament: Trophy,
  Charity: Heart,
  Program: Users,
  Education: GraduationCap,
  Media: Newspaper,
}

export default function News2011Archive() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">2011 News Archive</h1>
          <p className="text-xl text-gray-600 mb-6">11 articles covering 25+ events • $707 raised for charity</p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="outline" className="bg-purple-50">
              Paralympic Training Program Launch
            </Badge>
            <Badge variant="outline" className="bg-blue-50">
              Chance Friend's Winter Games Victory
            </Badge>
            <Badge variant="outline" className="bg-orange-50">
              College Scholarship Opportunities
            </Badge>
            <Badge variant="outline" className="bg-pink-50">
              Dorothea Taschner Media Feature
            </Badge>
          </div>
        </div>

        {/* Year Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/news/archive/2012">2012</Link>
            </Button>
            <Button variant="default" size="sm" disabled>
              2011
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/news/archive/2010">2010</Link>
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
