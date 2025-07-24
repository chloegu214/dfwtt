import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Calendar, Camera, Trophy, Heart, ExternalLink, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "2014 News Archive | DFWTT",
  description:
    "Complete archive of DFWTT news and events from 2014, including tournaments, charity activities, and collegiate championships.",
}

const newsItems = [
  {
    id: "charity-firefighters-dec",
    title: "Charity Program Update",
    date: "December 2014",
    category: "Charity",
    description:
      "DFWTT donated $128 to the National Fallen Firefighters Foundation in continued pledge to donate $2 for each tournament participant.",
    amount: "$128",
  },
  {
    id: "fall-world-peace-2014",
    title: "2014 Fall World Peace TT Pictures",
    date: "November 15, 2014",
    category: "Tournament",
    description: "Plano TT club hosted its Fall World Peace Table Tennis Tournament at the Tom Muehlenbeck center.",
    hasPhotos: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/?id=acd8701c94f053f8!20166&cid=ACD8701C94F053F8&group=0&authkey=!AKcgmCROzFdmxwo",
      },
    ],
  },
  {
    id: "fall-open-2014",
    title: "2014 DFWTT Fall Open",
    date: "November 8, 2014",
    category: "Tournament",
    description:
      "DFWTT hosted its yearly Fall Open tournament at the JCC. All different levels of players competed in USATT sanctioned and non-sanctioned events.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!19858&parId=acd8701c94f053f8!32382&authkey=!ACnqpLkX0H9bmQY",
      },
      { label: "Results", url: "Results_2014.htm#2014FallOpen" },
    ],
  },
  {
    id: "charity-chinese-center-nov",
    title: "Charity Program Update",
    date: "November 2014",
    category: "Charity",
    description: "DFWTT donated $200 to the Dallas Chinese Community Center.",
    amount: "$200",
  },
  {
    id: "chinese-double-ten-2014",
    title: "2014 Chinese Double Ten",
    date: "September 13, 2014",
    category: "Tournament",
    description: "DFWTT hosted the Chinese Double Ten Celebration tournament at the Cimarron recreation center.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!19315&parId=acd8701c94f053f8!32382&authkey=!APhu3g6piRYgboM",
      },
      { label: "Results", url: "Results_2014.htm#2014DoubleTen" },
    ],
  },
  {
    id: "college-table-tennis",
    title: "College Table Tennis",
    date: "August 2014",
    category: "Education",
    description:
      "Lindenwood University in St. Charles, Missouri shared information about their collegiate table tennis program.",
    hasResults: true,
    externalLinks: [{ label: "Program Info", url: "Newsletter_Files/Recruitment Flyer - August 2014.pdf" }],
  },
  {
    id: "charity-red-cross-aug",
    title: "Charity Program Update",
    date: "August 2014",
    category: "Charity",
    description: "DFWTT donated $190 to the American Red Cross Disaster Relief fund.",
    amount: "$190",
  },
  {
    id: "spring-open-2014",
    title: "2014 DFWTT Spring Open",
    date: "June 14, 2014",
    category: "Tournament",
    description:
      "DFWTT hosted its yearly Spring Open Tournament at the JCC. Used 17 tables during USATT sanctioned and non-sanctioned events held throughout the day.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!18805&parId=acd8701c94f053f8!32382&authkey=!ADAntc01NHkNzvY",
      },
      { label: "Results", url: "Results_2014.htm#2014SpringOpen" },
    ],
  },
  {
    id: "world-peace-2014",
    title: "2014 World Peace TT Pictures",
    date: "May 17, 2014",
    category: "Tournament",
    description: "Plano TT club hosted its World Peace Table Tennis Tournament at the Tom Muehlenbeck center.",
    hasPhotos: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/?id=ACD8701C94F053F8%2132632&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
      },
    ],
  },
  {
    id: "tms-college-championships",
    title: "2014 TMS College TT Championships",
    date: "April 4-6, 2014",
    category: "Tournament",
    description:
      "National Collegiate Table Tennis Association hosted the TMS College Table Tennis Championships in Monroeville, Pennsylvania. The NCTTA is a non-profit organization established exclusively for promoting the sport of table tennis at the college level.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/?id=ACD8701C94F053F8%2132635&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
      },
      { label: "Results & Video", url: "http://nctta.org/champs/2014/" },
    ],
  },
  {
    id: "usatt-team-trials-2014",
    title: "2014 USATT Team Trials",
    date: "March 7-9, 2014",
    category: "Tournament",
    description:
      "Texas Wesleyan University hosted the National Team Trials at the Sid Richardson Center in Fort Worth. The top men and women players qualified to represent the USA at the 2014 World Championships.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/?id=ACD8701C94F053F8%2132636&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
      },
      {
        label: "Results & Video",
        url: "http://www.teamusa.org/USA-Table-Tennis/Events/2014/March/07/2014-US-National-Team-Trials",
      },
    ],
  },
  {
    id: "charity-usatt-campaign-mar",
    title: "Charity Program Update",
    date: "March 2014",
    category: "Charity",
    description:
      "DFWTT donated $250, which includes $20 from Warren Lemma, to support the USATT Annual Giving Campaign program. The USATT Annual Fund helps support ongoing programs including the Juniors/Cadets, National Teams, USATT Enhancement Fund, Paralympic Programs, and the USATT Foundation.",
    amount: "$250",
    highlights: ["Included $20 donation from Warren Lemma"],
  },
  {
    id: "winter-games-2014",
    title: "2014 Texas Winter Games",
    date: "January 18, 2014",
    category: "Tournament",
    description:
      "DFWTT hosted the Texas Winter Games Table Tennis Tournament inside the two Staley Middle School gymnasiums in Frisco, Texas. Part of the Texas Amateur Athletic Federation (TAAF) Winter Games of Texas. Medal winners were eligible to compete in the National State Games of America in Lincoln, Nebraska on July 28 - August 2, 2015.",
    hasPhotos: true,
    hasResults: true,
    highlights: ["Qualification for National State Games of America", "Olympic style competitions for all ages"],
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!32385&parId=acd8701c94f053f8!32382&authkey=!AErApXgkXhyz3uU",
      },
      { label: "Results", url: "Results_2014.htm#2014WinterGames" },
      { label: "TAAF Info", url: "http://www.taaf.com/" },
      { label: "State Games Info", url: "http://www.sga2015.com/" },
    ],
  },
]

export default function Archive2014Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/news/archive">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Archives
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Year Archive</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-2">2014 News Archive</h1>
        <p className="text-xl text-muted-foreground">
          Complete coverage of DFWTT events from 2014 • {newsItems.length} articles • $768 raised for charity
        </p>
      </div>

      {/* Year Navigation */}
      <div className="flex justify-between items-center mb-8 p-4 bg-muted/50 rounded-lg">
        <Link href="/news/archive/2013">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            2013
          </Button>
        </Link>
        <span className="font-semibold">2014</span>
        <Link href="/news/archive/2015">
          <Button variant="outline" size="sm">
            2015
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>

      {/* News Items */}
      <div className="space-y-6">
        {newsItems.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant={
                        item.category === "Tournament"
                          ? "default"
                          : item.category === "Charity"
                            ? "secondary"
                            : item.category === "Education"
                              ? "outline"
                              : "default"
                      }
                    >
                      {item.category === "Tournament" && <Trophy className="h-3 w-3 mr-1" />}
                      {item.category === "Charity" && <Heart className="h-3 w-3 mr-1" />}
                      {item.category === "Education" && <GraduationCap className="h-3 w-3 mr-1" />}
                      {item.category}
                    </Badge>
                    {item.hasPhotos && (
                      <Badge variant="outline" className="text-xs">
                        <Camera className="h-3 w-3 mr-1" />
                        Photos
                      </Badge>
                    )}
                    {item.hasResults && (
                      <Badge variant="outline" className="text-xs">
                        <Trophy className="h-3 w-3 mr-1" />
                        Results
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl mb-1">{item.title}</CardTitle>
                  <CardDescription className="text-sm font-medium">
                    {item.date}
                    {item.amount && <span className="ml-2 text-green-600 font-semibold">{item.amount}</span>}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{item.description}</p>

              {item.highlights && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Highlights:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {item.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.externalLinks && item.externalLinks.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.externalLinks.map((link, index) => (
                    <Button key={index} variant="outline" size="sm" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t">
        <Link href="/news/archive/2013">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            2013 Archive
          </Button>
        </Link>
        <Link href="/news/archive">
          <Button variant="outline">View All Archives</Button>
        </Link>
        <Link href="/news/archive/2015">
          <Button variant="outline">
            2015 Archive
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
