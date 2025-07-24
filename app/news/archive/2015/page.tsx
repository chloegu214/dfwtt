import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Calendar, Camera, Trophy, Users, Heart, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "2015 News Archive | DFWTT",
  description:
    "Complete archive of DFWTT news and events from 2015, including tournaments, charity activities, and community outreach.",
}

const newsItems = [
  {
    id: "usatt-nationals-2015",
    title: "2015 USATT National Championships",
    date: "December 14-19, 2015",
    category: "Tournament",
    description: "USATT held its US National Championships in Las Vegas, Nevada.",
    hasPhotos: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!39474&parId=acd8701c94f053f8!32382&authkey=!ADfA0ZAM8FGEZ24",
      },
    ],
  },
  {
    id: "charity-refugee-crisis",
    title: "Charity Program Update",
    date: "December 2015",
    category: "Charity",
    description: "DFWTT donated $250 to the American Red Cross - European Refugee and Migration Crisis.",
    amount: "$250",
  },
  {
    id: "tx-state-championship-2015",
    title: "2015 TX State Championship",
    date: "November 14-15, 2015",
    category: "Tournament",
    description:
      "Texas Wesleyan University hosted its Texas State Championship at the Sid Richardson Center in Fort Worth.",
    hasPhotos: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!33721&parId=acd8701c94f053f8!32382&authkey=!AHea19PZZ3uT3x8",
      },
    ],
  },
  {
    id: "fall-open-2015",
    title: "2015 DFWTT Fall Open",
    date: "November 7, 2015",
    category: "Tournament",
    description:
      "DFWTT hosted its yearly Fall Open tournament at the JCC in Dallas, Texas. Used 18 tables during USATT sanctioned and non-sanctioned events with around 83 participants.",
    hasPhotos: true,
    hasResults: true,
    highlights: ["83 participants", "18 tables used", "Local and out-of-state players"],
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!33414&parId=acd8701c94f053f8!32382&authkey=!AF3ov9BaSG7WoQo",
      },
      { label: "Results", url: "Results_2015.htm#2015FallOpen" },
    ],
  },
  {
    id: "school-challenge-2015",
    title: "2015 DFWTT School Challenge",
    date: "October 24, 2015",
    category: "Tournament",
    description:
      "The 1st DFW area school challenge, organized by DFWTT, was held at the QD Academy in Plano. Students from elementary, middle, and high school were eligible to compete.",
    hasPhotos: true,
    hasResults: true,
    highlights: ["First-ever DFW area school challenge", "Elementary through high school students"],
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!33279&parId=acd8701c94f053f8!32382&authkey=!ABBMqxLOnSftjF4",
      },
      { label: "Results", url: "Results_2015.htm#2015SchoolChallenge" },
    ],
  },
  {
    id: "charity-chinese-center-oct",
    title: "Charity Program Update",
    date: "October 2015",
    category: "Charity",
    description: "DFWTT donated $200 to the Dallas Chinese Community Center.",
    amount: "$200",
  },
  {
    id: "chinese-double-ten-2015",
    title: "2015 Chinese Double Ten",
    date: "September 12, 2015",
    category: "Tournament",
    description:
      "DFWTT hosted its yearly Chinese Double Ten Celebration tournament at the Cimarron recreation center in Irving, Texas.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/?id=ACD8701C94F053F8!32402&cid=ACD8701C94F053F8&group=0&authkey=!ANdJXHy0E74-DWk",
      },
      { label: "Results", url: "Results_2015.htm#2015DoubleTen" },
    ],
  },
  {
    id: "joola-teams-south",
    title: "2015 Joola Teams South",
    date: "August 22-23, 2015",
    category: "Tournament",
    description:
      "North American Table Tennis hosted the Joola Teams South tournament at Round Rock Sports Center in Round Rock, Texas.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!31618&parId=acd8701c94f053f8!32382&authkey=!ArUFmlQOlMpbsFU&Bpub=SDX.SkyDrive&Bsrc=Share&ref=name",
      },
      { label: "Results", url: "http://www.natabletennis.com/tournaments/results.php" },
    ],
  },
  {
    id: "charity-firefighters-aug",
    title: "Charity Program Update",
    date: "August 2015",
    category: "Charity",
    description:
      "DFWTT donated $200 to National Fallen Firefighters Foundation. Their mission is to honor and remember America's fallen fire heroes, provide resources to assist their survivors in rebuilding their lives, and work within the fire service community to reduce firefighter deaths and injuries.",
    amount: "$200",
  },
  {
    id: "olympic-events-women",
    title: "100+ Women's Summer Olympic Sport Events",
    date: "Summer 2015",
    category: "Community",
    description:
      "A group of women came to the Cimarron location for group coaching as part of their goal to participate in all 100+ women's Summer Olympic sport events. The group included Laura Spivey, Jeffiner Fornuff, Ruth Ann Francis, and Leigh Batten, working toward completing their team table tennis event before their trip to Rio for the 2016 Olympics.",
    hasPhotos: true,
    highlights: [
      "Unique Olympic challenge project",
      "Completed ~80 of 111 events",
      "Goal to finish before Rio 2016 Olympics",
    ],
    externalLinks: [],
  },
  {
    id: "spring-open-2015",
    title: "2015 DFWTT Spring Open",
    date: "June 13, 2015",
    category: "Tournament",
    description:
      "DFWTT hosted its yearly Spring Open at the JCC in Dallas. Used 18 tables during USATT sanctioned and non-sanctioned events.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!29601&parId=acd8701c94f053f8!32382&authkey=!AKZlG40rry3QNh8",
      },
      { label: "Results", url: "Results_2015.htm#2015SpringOpen" },
    ],
  },
  {
    id: "world-peace-2015",
    title: "2015 World Peace TT Pictures",
    date: "April 25, 2015",
    category: "Tournament",
    description: "Plano TT club hosted its World Peace Table Tennis Tournament at the Tom Muehlenbeck center.",
    hasPhotos: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/?id=ACD8701C94F053F8%2132630&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
      },
    ],
  },
  {
    id: "nctta-nationals-2015",
    title: "NCTTA National Championships",
    date: "April 10-12, 2015",
    category: "Tournament",
    description: "The NCTTA Championships took place at the University of Wisconsin - Eau Claire.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/?id=ACD8701C94F053F8%2126468&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
      },
      { label: "Results & Video", url: "http://www.nctta.org/content/2015-championships" },
    ],
  },
  {
    id: "pan-am-trials-2015",
    title: "Pan Am and National Team Trials",
    date: "March 6-8, 2015",
    category: "Tournament",
    description: "Texas Wesleyan University hosted the Pan Am and National Team Trials at the Sid Richardson Center.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/?id=ACD8701C94F053F8%2124862&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
      },
      {
        label: "Results & Video",
        url: "http://www.teamusa.org/USA-Table-Tennis/Events/2015/March/06/2015-Pan-Am-and-National-Team-Trials",
      },
    ],
  },
  {
    id: "nctta-south-regional-2015",
    title: "NCTTA South Regional Championships",
    date: "February 21, 2015",
    category: "Tournament",
    description:
      "Texas Wesleyan University hosted the NCTTA South Regional Championships at the Sid Richardson Center in Fort Worth.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/?id=ACD8701C94F053F8%2124586&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
      },
      { label: "Results", url: "http://www.nctta.org/results" },
    ],
  },
  {
    id: "charity-usatt-campaign",
    title: "Charity Program Update",
    date: "February 2015",
    category: "Charity",
    description:
      "DFWTT donated $250 to support the USATT Annual Giving Campaign program. The USATT Annual Fund helps support ongoing programs including the Juniors and Cadets, National Teams, Paralympic Programs, and sport promotion through USATT events and programs.",
    amount: "$250",
  },
  {
    id: "nctta-texas-division",
    title: "NCTTA Texas Division Tournament",
    date: "February 7, 2015",
    category: "Tournament",
    description:
      "Texas Wesleyan University hosted the NCTTA Texas Division Tournament at the Sid Richardson Center in Fort Worth.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/?id=acd8701c94f053f8!32637&cid=ACD8701C94F053F8&group=0&authkey=!AKcgmCROzFdmxwo",
      },
      { label: "Results", url: "http://www.nctta.org/results" },
    ],
  },
  {
    id: "winter-games-2015",
    title: "2015 Texas Winter Games",
    date: "January 17, 2015",
    category: "Tournament",
    description:
      "DFWTT hosted the Texas Winter Games Table Tennis Tournament inside the two Staley Middle School gymnasiums in Frisco, Texas. Part of the Texas Amateur Athletic Federation (TAAF) Winter Games of Texas. Medal winners were eligible to compete in the National State Games of America in Lincoln, Nebraska on July 28 - August 2, 2015.",
    hasPhotos: true,
    hasResults: true,
    highlights: ["Qualification for National State Games of America", "Olympic style competitions for all ages"],
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!23041&parId=acd8701c94f053f8!32382&authkey=!ABI5kJSVBk8knZk",
      },
      { label: "Results", url: "Results_2015.htm#2015WinterGames" },
      { label: "TAAF Info", url: "http://www.taaf.com/" },
      { label: "State Games Info", url: "http://www.sga2015.com/" },
    ],
  },
]

export default function Archive2015Page() {
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
        <h1 className="text-4xl font-bold mb-2">2015 News Archive</h1>
        <p className="text-xl text-muted-foreground">
          Complete coverage of DFWTT events from 2015 • {newsItems.length} articles • $900 raised for charity
        </p>
      </div>

      {/* Year Navigation */}
      <div className="flex justify-between items-center mb-8 p-4 bg-muted/50 rounded-lg">
        <Link href="/news/archive/2014">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            2014
          </Button>
        </Link>
        <span className="font-semibold">2015</span>
        <Link href="/news/archive/2016">
          <Button variant="outline" size="sm">
            2016
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
                            : item.category === "Community"
                              ? "outline"
                              : "default"
                      }
                    >
                      {item.category === "Tournament" && <Trophy className="h-3 w-3 mr-1" />}
                      {item.category === "Charity" && <Heart className="h-3 w-3 mr-1" />}
                      {item.category === "Community" && <Users className="h-3 w-3 mr-1" />}
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
        <Link href="/news/archive/2014">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            2014 Archive
          </Button>
        </Link>
        <Link href="/news/archive">
          <Button variant="outline">View All Archives</Button>
        </Link>
        <Link href="/news/archive/2016">
          <Button variant="outline">
            2016 Archive
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
