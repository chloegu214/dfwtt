import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Camera, Trophy, ExternalLink, Users, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "2021 News Archive - DFWTT",
  description:
    "Complete archive of DFWTT news and events from 2021, including tournaments, training programs, and community activities.",
}

export default function News2021Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Link href="/news" className="hover:text-primary">
            News
          </Link>
          <span>/</span>
          <Link href="/news/archive" className="hover:text-primary">
            Archive
          </Link>
          <span>/</span>
          <span>2021</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2021 News Archive</h1>

        {/* Year Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              2021 Highlights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-lg">9</div>
                <div className="text-muted-foreground">Major Events</div>
              </div>
              <div>
                <div className="font-semibold text-lg">WTT Championships</div>
                <div className="text-muted-foreground">Houston, Texas</div>
              </div>
              <div>
                <div className="font-semibold text-lg">Heights Center</div>
                <div className="text-muted-foreground">New Location Opening</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* News Articles */}
      <div className="space-y-6">
        {/* November 2021 */}
        <article className="border-l-4 border-l-red-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Championship
              </Badge>
              <h2 className="text-xl font-semibold">2021 WTT Championships</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              November 23-29, 2021
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            The World Table Tennis Championships were held in Houston, Texas at the George R Brown Convention Center.
            Results and summary can be found on the official website.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="https://worldtabletennis.com/results?selectedTab=COMPLETED"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisiNV7gEIboJry69njfw?e=2JSau7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos by Grant Bergmann
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-blue-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Tournament
              </Badge>
              <h2 className="text-xl font-semibold">2021 DFWTT Fall Open</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              November 13, 2021
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted its yearly Fall Open at the Bachman Recreation Center in Dallas.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Bachman Recreation Center, Dallas
            </span>
            <a
              href="http://dfwtt.com/Results_2021.htm#2021FallOpen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisiMsC-FGbYlSJ0pRSEQ?e=U6s32Y"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-purple-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Training
              </Badge>
              <h2 className="text-xl font-semibold">2021 DFWTT League Singles</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              Starting October 17, 2021
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            Starting our League Singles at the Heights Recreation Center (Most Sundays 2:10 - 4:50 pm).
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Heights Recreation Center
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              Sunday League
            </span>
          </div>
        </article>

        <article className="border-l-4 border-l-red-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Tournament
              </Badge>
              <h2 className="text-xl font-semibold">2021 Chinese Double Ten</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              October 9, 2021
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted its yearly Chinese Double Ten Celebration tournament at the Cimarron Recreation Center in
            Irving.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Cimarron Recreation Center, Irving
            </span>
            <a
              href="http://dfwtt.com/Results_2021.htm#2021DoubleTen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisiMdMffcXjgXp_8ik8Q?e=hdQdQf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-yellow-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Competition
              </Badge>
              <h2 className="text-xl font-semibold">2021 Dallas Golden Games</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              September 18, 2021
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted the Dallas Golden Games Table Tennis Tournament at the Marcus Recreation Center. This event is
            part of the Dallas Park and Recreation's Golden Games which includes 8 different competitive sports.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Marcus Recreation Center, Dallas
            </span>
            <a
              href="http://dfwtt.com/Results_2021.htm#2021DallasGoldenGames"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisiMUlx2xwdg4uD6jN0A?e=hgxJ5f"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-green-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Facility
              </Badge>
              <h2 className="text-xl font-semibold">Heights Recreation Center Opening</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              July 25, August 1, 8, 2021
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            Grand opening of the Heights Recreation Center location in Richardson, Sunday afternoons 2:00 to 5:00 pm.
            Free play offered on July 25, August 1, and August 8.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Heights Recreation Center, Richardson
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              Sunday 2:00-5:00 PM
            </span>
          </div>
        </article>

        <article className="border-l-4 border-l-blue-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Championship
              </Badge>
              <h2 className="text-xl font-semibold">2021 USATT National Championships</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              July 4-9, 2021
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            The USATT held its US National Championships in Las Vegas, Nevada.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Las Vegas, Nevada
            </span>
            <a
              href="https://omnipong.com/T-tourney.asp?t=103&r=1861"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results Summary
            </a>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisiLsUNPiI65PgMkHO8g?e=RND9xb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-purple-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Championship
              </Badge>
              <h2 className="text-xl font-semibold">2021 US National & Jr Pan Am Games Team Trials</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              May 21-26, 2021
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            The US National & Jr Pan Am Games Team Trials was held inside the Sid Richardson Gymnasium at Texas Wesleyan
            University in Fort Worth. Tournament information and video streams were available on the USATT website.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Texas Wesleyan University, Fort Worth
            </span>
            <a
              href="https://www.teamusa.org/USA-Table-Tennis/Team-USA/2021-Adult-National-Team-and-Junior-Pan-Am-Trials"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              USATT Info
            </a>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisiJxQIxtrt62H8ufKGw?e=TbJ3rH"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              US National Photos
            </a>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisiJ5k-QJNrfNW2e1Xbw?e=KyNxTA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Jr Pan Am Photos
            </a>
          </div>
        </article>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t">
        <Link href="/news/archive/2020" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
          ← 2020 Archive
        </Link>
        <Link href="/news/archive" className="text-muted-foreground hover:text-primary">
          All Archives
        </Link>
        <Link href="/news/archive/2022" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
          2022 Archive →
        </Link>
      </div>
    </div>
  )
}
