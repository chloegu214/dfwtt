import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Camera, Trophy, ExternalLink, MapPin, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "2022 News Archive - DFWTT",
  description:
    "Complete archive of DFWTT news and events from 2022, including tournaments, training programs, and community activities.",
}

export default function News2022Page() {
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
          <span>2022</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2022 News Archive</h1>

        {/* Year Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              2022 Highlights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-lg">10</div>
                <div className="text-muted-foreground">Major Events</div>
              </div>
              <div>
                <div className="font-semibold text-lg">Grant Bergmann</div>
                <div className="text-muted-foreground">Sportsmanship Award</div>
              </div>
              <div>
                <div className="font-semibold text-lg">US Team Trials</div>
                <div className="text-muted-foreground">Texas Wesleyan</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* News Articles */}
      <div className="space-y-6">
        {/* December 2022 */}
        <article className="border-l-4 border-l-green-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Tournament
              </Badge>
              <h2 className="text-xl font-semibold">2022 Winter World Peace TT Pictures</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              December 3, 2022
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            Plano TT club hosted its Winter World Peace Table Tennis Tournament at the Tom Muehlenbeck center.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Tom Muehlenbeck Center, Plano
            </span>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisiYohDRdzet6x1gcp4w?e=gUbHlX"
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
              <h2 className="text-xl font-semibold">2022 DFWTT Fall Open</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              November 12, 2022
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted its yearly Fall Open at the Cimarron Recreation Center in Irving. Grant Bergmann was given the
            sportsmanship award to show our appreciation for his hard work for table tennis.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Cimarron Recreation Center, Irving
            </span>
            <span className="flex items-center gap-1 text-yellow-600">
              <Award className="h-3 w-3" />
              Grant Bergmann - Sportsmanship Award
            </span>
            <a
              href="http://dfwtt.com/Results_2022.htm#2022FallOpen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisiYcaY0qT3TsSaY1ang?e=ub1GP9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-red-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Tournament
              </Badge>
              <h2 className="text-xl font-semibold">2022 Chinese Double Ten</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              September 24, 2022
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
              href="http://dfwtt.com/Results_2022.htm#2022DoubleTen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisiYMTttQSrQA3a9gD4Q?e=UnIL2D"
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
              <h2 className="text-xl font-semibold">2022 Dallas Golden Games</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              September 10, 2022
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            The Dallas Golden Games Table Tennis tournament was held at the Marcus Recreation Center. Registration was
            from July 25 through August 26, with early bird discount available before August 5.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Marcus Recreation Center, Dallas
            </span>
            <a
              href="http://dallasparks.org/483/Golden-Games"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Dallas Parks Website
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-purple-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Championship
              </Badge>
              <h2 className="text-xl font-semibold">2022 US National Team Trials Pictures</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              June 25 - July 1, 2022
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            The US National Team Trials was held inside the Sid Richardson Gymnasium at Texas Wesleyan University in
            Fort Worth. Grant Bergmann provided pictures from the different events throughout the tournament.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Texas Wesleyan University, Fort Worth
            </span>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisiPNrgdSQPKN04VDpOw?e=bg37X3"
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
              <h2 className="text-xl font-semibold">2022 DFWTT Summer Open</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              June 18, 2022
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted its Summer Open at the Cimarron Recreation Center in Irving.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Cimarron Recreation Center, Irving
            </span>
            <a
              href="http://dfwtt.com/Results_2022.htm#2022SummerOpen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisiPJaz2TCfj2lLHz8lA?e=u4nnNC"
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
                Tournament
              </Badge>
              <h2 className="text-xl font-semibold">2022 Spring World Peace TT Pictures</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              May 21, 2022
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            Plano TT club hosted its Spring World Peace Table Tennis Tournament at the Tom Muehlenbeck center.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Tom Muehlenbeck Center, Plano
            </span>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisiPAg4er9CzQl39zahQ?e=gtjHsU"
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
              <h2 className="text-xl font-semibold">2022 DFWTT Spring Open</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              April 16, 2022
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted its Spring Open at the Cimarron Recreation Center in Irving.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Cimarron Recreation Center, Irving
            </span>
            <a
              href="http://dfwtt.com/Results_2022.htm#2022SpringOpen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisiO53RJlXhEU7TAp5vw?e=UHMLg6"
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
              <h2 className="text-xl font-semibold">NCTTA South Regional Championships</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              February 26, 2022
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            Texas Wesleyan University hosted the NCTTA South Regional Championships at the Sid Richardson Center in Fort
            Worth.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Texas Wesleyan University, Fort Worth
            </span>
            <a
              href="http://www.nctta.org/results"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              NCTTA Results
            </a>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisiOcwMpH12CPJm11B4w?e=lRNHO3"
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
              <h2 className="text-xl font-semibold">2022 NCTTA Texas Division</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              February 13, 2022
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            Texas Wesleyan University hosted the NCTTA Texas Division at the Sid Richardson Center in Fort Worth.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Texas Wesleyan University, Fort Worth
            </span>
            <a
              href="http://www.nctta.org/results"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              NCTTA Results
            </a>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisiOU00S5R24kuHAKpWA?e=Jjsq7U"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos
            </a>
          </div>
        </article>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t">
        <Link href="/news/archive/2021" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
          ← 2021 Archive
        </Link>
        <Link href="/news/archive" className="text-muted-foreground hover:text-primary">
          All Archives
        </Link>
        <Link href="/news/archive/2023" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
          2023 Archive →
        </Link>
      </div>
    </div>
  )
}
