import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Camera, Trophy, Heart, Award, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "2014 News Archive | DFWTT",
  description:
    "Complete archive of DFWTT news and events from 2014, including tournaments, charity activities, and community outreach.",
}

const newsItems = [
  {
    id: "charity-fallen-firefighters",
    date: "December 2014",
    title: "Charity Program Update",
    category: "charity",
    description:
      "DFWTT donated $128 to the National Fallen Firefighters Foundation through our continued pledge to donate $2 for each tournament participant.",
    hasPhotos: false,
    hasResults: false,
  },
  {
    id: "fall-world-peace-tt",
    date: "November 15, 2014",
    title: "2014 Fall World Peace TT Pictures",
    category: "tournament",
    description: "Plano TT club hosted its Fall World Peace Table Tennis Tournament at the Tom Muehlenbeck center.",
    hasPhotos: true,
    hasResults: false,
    externalLinks: [
      {
        label: "Grant Bergmann Photos",
        url: "https://onedrive.live.com/?id=acd8701c94f053f8!20166&cid=ACD8701C94F053F8&group=0&authkey=!AKcgmCROzFdmxwo",
      },
    ],
  },
  {
    id: "2014-fall-open",
    date: "November 8, 2014",
    title: "2014 DFWTT Fall Open",
    category: "tournament",
    description:
      "DFWTT hosted its yearly Fall Open tournament at the JCC. All different levels of players competed in USATT sanctioned and non-sanctioned events.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Grant Bergmann Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!19858&parId=acd8701c94f053f8!32382&authkey=!ACnqpLkX0H9bmQY",
      },
      { label: "Results", url: "/results/2014#2014FallOpen" },
    ],
  },
  {
    id: "charity-chinese-community",
    date: "September 2014",
    title: "Charity Program Update",
    category: "charity",
    description: "DFWTT donated $200 to the Dallas Chinese Community Center as part of our ongoing charity program.",
    hasPhotos: false,
    hasResults: false,
  },
  {
    id: "2014-double-ten",
    date: "September 13, 2014",
    title: "2014 Chinese Double Ten",
    category: "tournament",
    description: "DFWTT hosted the Chinese Double Ten Celebration tournament at the Cimarron recreation center.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Grant Bergmann Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!19315&parId=acd8701c94f053f8!32382&authkey=!APhu3g6piRYgboM",
      },
      { label: "Results", url: "/results/2014#2014DoubleTen" },
    ],
  },
  {
    id: "college-table-tennis",
    date: "August 2014",
    title: "College Table Tennis",
    category: "education",
    description:
      "Lindenwood University in St. Charles, Missouri shared information about their collegiate table tennis program.",
    hasPhotos: false,
    hasResults: false,
  },
  {
    id: "charity-red-cross",
    date: "June 2014",
    title: "Charity Program Update",
    category: "charity",
    description:
      "DFWTT donated $190 to the American Red Cross Disaster Relief fund through our tournament participation pledge.",
    hasPhotos: false,
    hasResults: false,
  },
  {
    id: "2014-spring-open",
    date: "June 14, 2014",
    title: "2014 DFWTT Spring Open",
    category: "tournament",
    description:
      "DFWTT hosted its yearly Spring Open Tournament at the JCC with 17 tables used for USATT sanctioned and non-sanctioned events.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Grant Bergmann Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!18805&parId=acd8701c94f053f8!32382&authkey=!ADAntc01NHkNzvY",
      },
      { label: "Results", url: "/results/2014#2014SpringOpen" },
    ],
  },
  {
    id: "2014-world-peace-tt",
    date: "May 17, 2014",
    title: "2014 World Peace TT Pictures",
    category: "tournament",
    description: "Plano TT club hosted its World Peace Table Tennis Tournament at the Tom Muehlenbeck center.",
    hasPhotos: true,
    hasResults: false,
    externalLinks: [
      {
        label: "Grant Bergmann Photos",
        url: "https://onedrive.live.com/?id=ACD8701C94F053F8%2132632&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
      },
    ],
  },
  {
    id: "tms-college-championships",
    date: "April 4-6, 2014",
    title: "2014 TMS College TT Championships",
    category: "tournament",
    description:
      "National Collegiate Table Tennis Association hosted the TMS College Table Tennis Championships in Monroeville, Pennsylvania.",
    hasPhotos: true,
    hasResults: false,
    externalLinks: [
      { label: "NCTTA Website", url: "http://nctta.org/champs/2014/" },
      {
        label: "Grant Bergmann Photos",
        url: "https://onedrive.live.com/?id=ACD8701C94F053F8%2132635&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
      },
    ],
  },
  {
    id: "usatt-team-trials",
    date: "March 7-9, 2014",
    title: "2014 USATT Team Trials",
    category: "tournament",
    description:
      "Texas Wesleyan University hosted the National Team Trials at the Sid Richardson Center in Fort Worth for 2014 World Championships qualification.",
    hasPhotos: true,
    hasResults: false,
    externalLinks: [
      {
        label: "USATT Website",
        url: "http://www.teamusa.org/USA-Table-Tennis/Events/2014/March/07/2014-US-National-Team-Trials",
      },
      {
        label: "Grant Bergmann Photos",
        url: "https://onedrive.live.com/?id=ACD8701C94F053F8%2132636&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
      },
    ],
  },
  {
    id: "charity-usatt-campaign",
    date: "February 2014",
    title: "Charity Program Update",
    category: "charity",
    description:
      "DFWTT donated $250, including $20 from Warren Lemma, to support the USATT Annual Giving Campaign program for Juniors/Cadets, National Teams, and Paralympic Programs.",
    hasPhotos: false,
    hasResults: false,
  },
  {
    id: "2014-winter-games",
    date: "January 18, 2014",
    title: "2014 Texas Winter Games",
    category: "tournament",
    description:
      "DFWTT hosted the Texas Winter Games Table Tennis Tournament at Staley Middle School gymnasiums in Frisco. Medal winners qualified for National State Games of America in Lincoln, Nebraska.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Grant Bergmann Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!32385&parId=acd8701c94f053f8!32382&authkey=!AErApXgkXhyz3uU",
      },
      { label: "Results", url: "/results/2014#2014WinterGames" },
      { label: "State Games Info", url: "http://www.sga2015.com/" },
    ],
  },
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case "tournament":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200"
    case "charity":
      return "bg-green-100 text-green-800 hover:bg-green-200"
    case "education":
      return "bg-purple-100 text-purple-800 hover:bg-purple-200"
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200"
  }
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "tournament":
      return <Trophy className="h-4 w-4" />
    case "charity":
      return <Heart className="h-4 w-4" />
    case "education":
      return <GraduationCap className="h-4 w-4" />
    default:
      return <CalendarDays className="h-4 w-4" />
  }
}

export default function NewsArchive2014() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">2014 News Archive</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Complete coverage of DFWTT activities from 2014, featuring 12 articles covering 20+ events with $768 raised for charity.
        </p>
        
        {/* Year Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Link href="/news/archive/2015">
            <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              2015
            </Badge>
          </Link>
          <Badge variant="default">2014</Badge>
          <Link href="/news/archive/2013">
            <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              2013
            </Badge>
          </Link>
          <Link href="/news/archive/2012">
            <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              2012
            </Badge>
          </Link>
          <Link href="/news/archive/2011">
            <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              2011
            </Badge>
          </Link>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <CalendarDays className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Articles</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-yellow-600" />
                <div>
                  <p className="text-2xl font-bold">20+</p>
                  <p className="text-sm text-muted-foreground">Events</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-600" />
                <div>
                  <p className="text-2xl font-bold">$768</p>
                  <p className="text-sm text-muted-foreground">Charity Raised</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold">USATT</p>
                  <p className="text-sm text-muted-foreground">Team Trials</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-6">
        {newsItems.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Badge className={getCategoryColor(item.category)}>
                      {getCategoryIcon(item.category)}
                      <span className="ml-1 capitalize">{item.category}</span>
                    </Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </div>
                <div className="flex space-x-2">
                  {item.hasPhotos && (
                    <Badge variant="secondary" className="text-xs">
                      <Camera\
