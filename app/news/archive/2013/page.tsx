import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Camera,
  Trophy,
  Users,
  Heart,
  ExternalLink,
  Award,
  GraduationCap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "2013 News Archive | DFWTT",
  description:
    "Complete archive of DFWTT news and events from 2013, including tournaments, charity activities, and community outreach programs.",
}

const newsItems = [
  {
    id: "charity-typhoon-haiyan",
    title: "Charity Program Update",
    date: "December 2013",
    category: "Charity",
    description:
      "DFWTT donated $200 to the American Red Cross (Typhoon Appeal & Disaster Response fund) to help with relief from the effects of Typhoon Haiyan in the Philippines.",
    amount: "$200",
  },
  {
    id: "after-school-program",
    title: "After School Table Tennis Program in Need",
    date: "October 31, 2013",
    category: "Community",
    description:
      "DFWTT responded to a request from Andria Mitchell at Eastern Hills High School, where stolen and destroyed table tennis tables needed replacement for their afterschool program. DFWTT donated 1½ repairable table tennis tables to help students in this less fortunate school district.",
    highlights: [
      "Supported Eastern Hills High School afterschool program",
      "Donated 1½ repairable table tennis tables",
      "Helped students facing challenges with homelessness, gangs, and low graduation rates",
    ],
  },
  {
    id: "grant-bergmann-appreciation",
    title: "A Special Thank You to Grant Bergmann",
    date: "November 2013",
    category: "Community",
    description:
      "Special recognition for Grant Bergmann, DFWTT's volunteer tournament photographer, who has contributed his time to table tennis for several years. He plays less and takes more pictures, ensuring everyone gets photographed and that pictures look good enough for publication. DFWTT began sending him tournament rosters in advance to ensure no participating players are missed.",
    highlights: [
      "Dedicated volunteer photographer for several years",
      "Sensitive to not interfere with play during tournaments",
      "Deeply appreciated by high-rated players",
      "Pictures available in Gallery and News sections",
    ],
  },
  {
    id: "fall-open-2013",
    title: "2013 DFWTT Fall Open",
    date: "November 9, 2013",
    category: "Tournament",
    description:
      "DFWTT hosted its yearly Fall Open tournament at the JCC. Players from all around the DFW area and outside competed in USATT sanctioned and non-sanctioned events.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!32386&parId=acd8701c94f053f8!32382&authkey=!AGLrj2HkWTn182E",
      },
      { label: "Results", url: "Results_2013.htm#2013FallOpen" },
    ],
  },
  {
    id: "chinese-double-ten-2013",
    title: "2013 DFWTT Double Ten",
    date: "September 21, 2013",
    category: "Tournament",
    description:
      "DFWTT hosted the Chinese Double Ten Celebration tournament at the Cimarron recreation center. A donation of $200 was made to Dallas Chinese Community Center.",
    hasPhotos: true,
    hasResults: true,
    amount: "$200 donated to Dallas Chinese Community Center",
    externalLinks: [
      {
        label: "Grant's Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!32387&parId=acd8701c94f053f8!32382&authkey=!ADf5XBzaUuY0IRs",
      },
      { label: "Daniel's Photos", url: "http://www.flickr.com/photos/43269950@N05/sets/72157635900763803/" },
      { label: "Results", url: "Results_2013.htm#2013DoubleTen" },
    ],
  },
  {
    id: "charity-firefighters-sep",
    title: "Charity Program Update",
    date: "September 2013",
    category: "Charity",
    description:
      "DFWTT donated $170 to the National Fallen Firefighters Foundation (Yarnell Hill NFFF Fire Hero Fund), supporting the families and co-workers of the firefighters who died in the line of duty.",
    amount: "$170",
  },
  {
    id: "spring-open-2013",
    title: "2013 DFWTT Spring Open",
    date: "June 15, 2013",
    category: "Tournament",
    description:
      "DFWTT hosted its yearly Spring Open Tournament at the JCC. Used 17 tables during USATT sanctioned and non-sanctioned events held throughout the day.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!32388&parId=acd8701c94f053f8!32382&authkey=!AKjAaZEqSgxbtbI",
      },
      { label: "Results", url: "Results_2013.htm#2013SpringOpen" },
    ],
  },
  {
    id: "world-peace-2013",
    title: "2013 World Peace TT Pictures",
    date: "May 11, 2013",
    category: "Tournament",
    description: "Grant Bergmann made available several pictures from the Plano TT Club's World Peace TT Tournament.",
    hasPhotos: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/?id=ACD8701C94F053F8%2132631&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
      },
    ],
  },
  {
    id: "mckinney-courthouse",
    title: "DFWTT was present in McKinney",
    date: "May 2013",
    category: "Community",
    description:
      "As part of the High Noon on the Courthouse Lawn activities in McKinney, DFWTT participated in free activities and entertainment from noon to 1pm. This initiative by the McKinney Performing Arts Center allowed DFWTT to promote table tennis and entertain residents, employees, and visitors of McKinney.",
    hasPhotos: true,
    highlights: [
      "Part of McKinney Performing Arts Center initiative",
      "Free entertainment and activities",
      "Promoted table tennis to the community",
    ],
  },
  {
    id: "rowlett-celebration",
    title: "Special Event May 3",
    date: "May 3, 2013",
    category: "Community",
    description:
      "DFWTT hosted a fun Table Tennis Club night in celebration of the new Rowlett Club location at Kick-Em Training Facility. Featured free fried chicken, soft drinks, and table tennis from 5:30pm - 7:30pm.",
    highlights: [
      "Celebration of new Rowlett location",
      "Free food and drinks provided",
      "Kick-Em Training Facility, 2502 Lawing Lane Unit B, Rowlett, TX 75088",
    ],
  },
  {
    id: "nctta-nationals-2013",
    title: "NCTTA National Championships",
    date: "April 12-14, 2013",
    category: "Tournament",
    description:
      "The National Collegiate Table Tennis Association held its national championships tournament in Rockford, Illinois. Texas Wesleyan University team won many of the championship titles.",
    hasPhotos: true,
    hasResults: true,
    highlights: ["Texas Wesleyan University won many championship titles"],
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!12123&parId=acd8701c94f053f8!32382&authkey=!AGY82olT3s7pTFY",
      },
      { label: "NCTTA Results", url: "http://www.nctta.org/" },
      {
        label: "USATT Results & Videos",
        url: "http://www.teamusa.org/USA-Table-Tennis/Events/2013/April/12/NCTTA-National-Championships.aspx",
      },
    ],
  },
  {
    id: "charity-rainbow-days-usatt",
    title: "Charity Program Update",
    date: "April 2013",
    category: "Charity",
    description:
      "DFWTT donated $100 to the Rainbow Days kids school program and $262 to the USATT Annual Giving Campaign program.",
    amount: "$362 total ($100 + $262)",
  },
  {
    id: "ittf-eligibility-rule",
    title: "ITTF International-eligibility rule",
    date: "March 2013",
    category: "Regulation",
    description:
      "Rule changes for athletes born in another country about the necessity to register with ITTF if they want to represent USA at World events.",
    hasResults: true,
    externalLinks: [{ label: "Rule Details", url: "Rules_Files/Eligibility- coaches clubs, web.pdf" }],
  },
  {
    id: "winter-games-2013",
    title: "2013 Texas Winter Games",
    date: "January 19, 2013",
    category: "Tournament",
    description: "DFWTT hosted the Texas Winter Games Table Tennis Tournament in Frisco, Texas.",
    hasPhotos: true,
    hasResults: true,
    externalLinks: [
      {
        label: "Photos",
        url: "https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!32389&parId=acd8701c94f053f8!32382&authkey=!ANfSXQdZeMdyPw0",
      },
      { label: "Results", url: "Results_2013.htm#2013WinterGames" },
    ],
  },
  {
    id: "paralympic-coach-award",
    title: "Paralympic Coach of the Year",
    date: "January 2013",
    category: "Award",
    description:
      "Coach Daniel Rutenberg was selected as Paralympic Coach of the Year for 2012. Congratulations for helping the US Para Team over the past several years.",
    externalLinks: [
      {
        label: "USATT Article",
        url: "http://www.teamusa.org/USA-Table-Tennis/Features/2013/January/09/National-Coaches-of-the-Year.aspx",
      },
    ],
  },
  {
    id: "new-year-commitment",
    title: "Happy New Year 2013!",
    date: "January 1, 2013",
    category: "Announcement",
    description:
      "DFWTT committed to support the USATT Annual Giving Campaign program for $1000 over the next four years. For each player in tournaments, DFWTT will donate $2 to the Campaign.",
    highlights: [
      "$1000 commitment over four years",
      "$2 donation per tournament participant",
      "Support for USATT Annual Giving Campaign",
    ],
  },
]

export default function Archive2013Page() {
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
        <h1 className="text-4xl font-bold mb-2">2013 News Archive</h1>
        <p className="text-xl text-muted-foreground">
          Complete coverage of DFWTT events from 2013 • {newsItems.length} articles • $732 raised for charity
        </p>
      </div>

      {/* Year Navigation */}
      <div className="flex justify-between items-center mb-8 p-4 bg-muted/50 rounded-lg">
        <div className="text-muted-foreground">
          <span className="text-sm">← Earlier archives</span>
        </div>
        <span className="font-semibold">2013</span>
        <Link href="/news/archive/2014">
          <Button variant="outline" size="sm">
            2014
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
                              : item.category === "Award"
                                ? "default"
                                : item.category === "Regulation"
                                  ? "outline"
                                  : item.category === "Announcement"
                                    ? "outline"
                                    : "default"
                      }
                    >
                      {item.category === "Tournament" && <Trophy className="h-3 w-3 mr-1" />}
                      {item.category === "Charity" && <Heart className="h-3 w-3 mr-1" />}
                      {item.category === "Community" && <Users className="h-3 w-3 mr-1" />}
                      {item.category === "Award" && <Award className="h-3 w-3 mr-1" />}
                      {item.category === "Regulation" && <GraduationCap className="h-3 w-3 mr-1" />}
                      {item.category === "Announcement" && <Users className="h-3 w-3 mr-1" />}
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
        <div className="text-muted-foreground">
          <span className="text-sm">← Earlier archives</span>
        </div>
        <Link href="/news/archive">
          <Button variant="outline">View All Archives</Button>
        </Link>
        <Link href="/news/archive/2014">
          <Button variant="outline">
            2014 Archive
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
