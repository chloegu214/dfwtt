import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Calendar, Camera, Trophy, Users, Heart, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "2016 News Archive | DFWTT",
  description:
    "Complete archive of DFWTT news and events from 2016, including tournaments, charity activities, and community outreach.",
}

const newsItems = [
  {
    id: "us-open-2016",
    title: "2016 US Open",
    date: "December 12-17, 2016",
    category: "Tournament",
    description: "USATT held its US Open tournament in Las Vegas, Nevada.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      { label: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisg-ZnH4okRQ90wBiL9g" },
      { label: "Results", url: "http://register.usatt.org/tournaments/results.php" },
    ],
  },
  {
    id: "charity-firefighters-dec",
    title: "Charity Program Update",
    date: "December 2016",
    category: "Charity",
    description:
      "DFWTT donated $208 to National Fallen Firefighters Foundation in continued pledge to donate $2 for each tournament participant.",
    amount: "$208",
  },
  {
    id: "tx-state-championship-2016",
    title: "2016 Texas State Championship",
    date: "November 12-13, 2016",
    category: "Tournament",
    description:
      "Texas Wesleyan University hosted its Texas State Championship at the Sid Richardson Center in Fort Worth.",
    hasPhotos: true,
    externalLinks: [{ label: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisg9F0H7mWCWb_GNVeSw" }],
  },
  {
    id: "fall-open-2016",
    title: "2016 DFWTT Fall Open",
    date: "November 5, 2016",
    category: "Tournament",
    description:
      "DFWTT hosted its yearly Fall Open at the JCC in Dallas. Featured 22 Butterfly tables and introduced the 47mm Big Ball for the first time in the non-sanctioned Open Doubles event. Total prize money awarded was $3,100.",
    hasPhotos: true,
    hasResults: true,
    highlights: ["First use of 47mm Big Ball", "$3,100 in prize money", "22 Butterfly tables"],
    externalLinks: [
      { label: "Photos", url: "https://1drv.ms/u/s!AvhT8JQccNisg9BOEyRvMzy1iZ_A9Q" },
      { label: "Results", url: "Results_2016.htm#2016FallOpen" },
    ],
  },
  {
    id: "charity-chinese-center-nov",
    title: "Charity Program Update",
    date: "November 2016",
    category: "Charity",
    description: "DFWTT donated $210 to the Dallas Chinese Community Center.",
    amount: "$210",
  },
  {
    id: "chinese-double-ten-2016",
    title: "2016 Chinese Double Ten",
    date: "September 17, 2016",
    category: "Tournament",
    description:
      "DFWTT hosted its yearly Chinese Double Ten Celebration tournament at the Cimarron recreation center in Irving, Texas.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=ACD8701C94F053F8!58087&parId=ACD8701C94F053F8!32382&authkey=!AA1X6JfhYi4Wd7Y",
      },
      { label: "Results", url: "Results_2016.htm#2016DoubleTen" },
    ],
  },
  {
    id: "usatt-nationals-2016",
    title: "2016 USATT National Championships",
    date: "July 4-9, 2016",
    category: "Tournament",
    description:
      "USATT held its US National Championships in Las Vegas, Nevada. William Zhang and Grant Bergmann were Semi-Finalists in the Senior Men's 75+ Doubles event.",
    hasPhotos: true,
    hasResults: true,
    highlights: ["William Zhang & Grant Bergmann Semi-Finalists in Senior Men's 75+ Doubles"],
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/?authkey=%21AGqa55SsLFOLDzc&id=ACD8701C94F053F8%2156948&cid=ACD8701C94F053F8",
      },
      { label: "Results", url: "http://register.usatt.org/tournaments/results.php" },
    ],
  },
  {
    id: "dude-perfect-show",
    title: "Dude Perfect Show",
    date: "June 23, 2016",
    category: "Media",
    description:
      "The Dude Perfect Show aired an episode featuring Cory Cotton playing in the DFWTT Invitational Tournament from March. The episode aired on CMT (Country Music Television) network.",
    hasPhotos: true,
    highlights: ["Featured on CMT network", "Cory Cotton participated in DFWTT tournament"],
    externalLinks: [
      { label: "Video Preview", url: "https://www.youtube.com/watch?v=8sXtjdKWQqA" },
      { label: "Dude Perfect Website", url: "http://dudeperfect.com/" },
      { label: "Photos", url: "https://1drv.ms/f/s!AvhT8JQccNisg6wGRzOR3im_psJnlA" },
    ],
  },
  {
    id: "charity-canada-wildfires",
    title: "Charity Program Update",
    date: "June 2016",
    category: "Charity",
    description: "DFWTT donated $200 to the American Red Cross - Canada Wildfires fund.",
    amount: "$200",
  },
  {
    id: "spring-world-peace-2016",
    title: "2016 Spring World Peace TT Pictures",
    date: "May 14, 2016",
    category: "Tournament",
    description: "Plano TT club hosted its Spring World Peace Table Tennis Tournament at the Tom Muehlenbeck center.",
    hasPhotos: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=ACD8701C94F053F8!51653&parId=ACD8701C94F053F8!32382&authkey=!AhYqdiq0bJ6SBy8",
      },
    ],
  },
  {
    id: "rose-city-memorial",
    title: "Rose City Memorial Tournament",
    date: "May 28, 2016",
    category: "Tournament",
    description: "The Rose City TTC hosted a USATT sanctioned tournament in Tyler, Texas.",
    hasResults: true,
    externalLinks: [
      {
        label: "Tournament Info",
        url: "http://www.teamusa.org/USA-Table-Tennis/Events/2016/May/28/Rose-City-Memorial-Tournament",
      },
    ],
  },
  {
    id: "spring-open-2016",
    title: "2016 DFWTT Spring Open",
    date: "April 30, 2016",
    category: "Tournament",
    description:
      "DFWTT hosted its yearly Spring Open at the JCC in Dallas, featuring both USATT sanctioned and non-sanctioned events.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/?authkey=%21Akca%5FD2KIQSl5JQ&id=ACD8701C94F053F8%2149903&cid=ACD8701C94F053F8",
      },
      { label: "Results", url: "Results_2016.htm#2016SpringOpen" },
    ],
  },
  {
    id: "nctta-nationals-2016",
    title: "NCTTA National Championships",
    date: "March 25-27, 2016",
    category: "Tournament",
    description: "The NCTTA Championships took place at the Round Rock Sports Center in Round Rock, Texas.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!45361&parId=acd8701c94f053f8!32382&authkey=!AE4M5uHK2Vp6Zqk",
      },
      { label: "Results", url: "http://nctta.org/champs/2016/results.html" },
    ],
  },
  {
    id: "dfwtt-invitational-2016",
    title: "DFWTT Invitational Tournament",
    date: "March 21, 2016",
    category: "Tournament",
    description:
      "DFWTT hosted an Invitational Tournament at the Cimarron Recreation Center in Irving, Texas. Featured detailed prize money distribution with Nelson Ramos taking 1st place ($300).",
    hasPhotos: true,
    highlights: [
      "1st: Nelson Ramos ($300)",
      "2nd: Ranjit Rayamajhi ($200)",
      "3rd: Brandon Gardner ($150)",
      "4th: Edvin Golestanyan ($100)",
    ],
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!43462&parId=acd8701c94f053f8!32382&authkey=!ADklwK4gMqBXLBM",
      },
    ],
  },
  {
    id: "nctta-south-regional-2016",
    title: "NCTTA South Regional Championships",
    date: "February 20-21, 2016",
    category: "Tournament",
    description:
      "Texas Wesleyan University hosted the NCTTA South Regional Championships at the Sid Richardson Center in Fort Worth.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!43078&parId=acd8701c94f053f8!32382&authkey=!AAnxLSiE3JI6ewY",
      },
      { label: "Results", url: "http://www.nctta.org/results" },
    ],
  },
]

export default function Archive2016Page() {
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
        <h1 className="text-4xl font-bold mb-2">2016 News Archive</h1>
        <p className="text-xl text-muted-foreground">
          Complete coverage of DFWTT events from 2016 • {newsItems.length} articles • $618 raised for charity
        </p>
      </div>

      {/* Year Navigation */}
      <div className="flex justify-between items-center mb-8 p-4 bg-muted/50 rounded-lg">
        <Link href="/news/archive/2015">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            2015
          </Button>
        </Link>
        <span className="font-semibold">2016</span>
        <Link href="/news/archive/2017">
          <Button variant="outline" size="sm">
            2017
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
                            : item.category === "Media"
                              ? "outline"
                              : "default"
                      }
                    >
                      {item.category === "Tournament" && <Trophy className="h-3 w-3 mr-1" />}
                      {item.category === "Charity" && <Heart className="h-3 w-3 mr-1" />}
                      {item.category === "Media" && <Users className="h-3 w-3 mr-1" />}
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
        <Link href="/news/archive/2015">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            2015 Archive
          </Button>
        </Link>
        <Link href="/news/archive">
          <Button variant="outline">View All Archives</Button>
        </Link>
        <Link href="/news/archive/2017">
          <Button variant="outline">
            2017 Archive
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
