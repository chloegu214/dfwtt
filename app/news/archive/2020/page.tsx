import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Camera, Trophy, ExternalLink, Users, MapPin, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "2020 News Archive - DFWTT",
  description:
    "Complete archive of DFWTT news and events from 2020, including COVID-19 adaptations and limited tournament activities.",
}

export default function News2020Page() {
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
          <span>2020</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2020 News Archive</h1>

        {/* Year Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              2020 Highlights - COVID-19 Impact Year
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-lg">Limited</div>
                <div className="text-muted-foreground">Events Due to COVID</div>
              </div>
              <div>
                <div className="font-semibold text-lg">Timberglen</div>
                <div className="text-muted-foreground">Location Reopening</div>
              </div>
              <div>
                <div className="font-semibold text-lg">$1,000</div>
                <div className="text-muted-foreground">Charity Donation</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* News Articles */}
      <div className="space-y-6">
        {/* September 2020 */}
        <article className="border-l-4 border-l-green-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2 bg-orange-50 text-orange-700 border-orange-200">
                COVID Update
              </Badge>
              <h2 className="text-xl font-semibold">Timberglen Location Opening</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              Starting September 14, 2020
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            The Timberglen location opened every week on Monday and Wednesday from 5:30-8:00pm. All players must follow
            COVID-19 policies and have a signed USATT waiver and release form.
            <strong className="text-red-600">
              {" "}
              Update: Must wear a mask at all times, even when playing at the table.
            </strong>
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Timberglen Recreation Center
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              Monday & Wednesday 5:30-8:00 PM
            </span>
            <span className="flex items-center gap-1 text-orange-600">
              <AlertTriangle className="h-3 w-3" />
              COVID-19 Protocols Required
            </span>
          </div>
        </article>

        <article className="border-l-4 border-l-yellow-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Competition
              </Badge>
              <h2 className="text-xl font-semibold">2020 Dallas Senior Games</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              March 7, 2020
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted the Dallas Senior Games Table Tennis Tournament at the Timberglen Recreation Center in Dallas.
            This event was part of the Dallas Park and Recreation's Senior Games which included 12 different competitive
            sports.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Timberglen Recreation Center, Dallas
            </span>
            <a
              href="http://dfwtt.com/Results_2020.htm#2020DallasSeniorGames"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNish_UIezOawkP8V2cl6Q?e=cPZnjr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos by Grant Bergmann
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-purple-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Championship
              </Badge>
              <h2 className="text-xl font-semibold">2020 NCTTA South Regional Championships</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              February 29, 2020
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
              href="https://1drv.ms/u/s!AvhT8JQccNish-ofOT7T4gSZ6wZG-w?e=8c8O6p"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos by Grant Bergmann
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-purple-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Championship
              </Badge>
              <h2 className="text-xl font-semibold">2020 NCTTA Texas Division</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              February 9, 2020
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
              href="https://1drv.ms/u/s!AvhT8JQccNish-U0PR7xRs-TNRW-HA?e=z9dFmL"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos by Grant Bergmann
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-red-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Charity
              </Badge>
              <h2 className="text-xl font-semibold">2020 DFWTT Charity Tournament</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              January 25, 2020
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted a charity tournament at the Cimarron Recreation Center in Irving, Texas. This tournament was
            for the benefit of firefighters and the police force. A donation of $1000 ($500 to police and $500 to
            firefighters) was made.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Cimarron Recreation Center, Irving
            </span>
            <span className="flex items-center gap-1 text-green-600">
              <Trophy className="h-3 w-3" />
              $1,000 Donated to First Responders
            </span>
            <a
              href="http://dfwtt.com/Results_2020.htm#2020Charity"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNish94h7UdAryNlyomwpg?e=c3M8uH"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos by Grant Bergmann
            </a>
          </div>
        </article>
      </div>

      {/* COVID-19 Impact Notice */}
      <Card className="mt-8 border-orange-200 bg-orange-50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-orange-900 mb-2">2020 COVID-19 Impact</h3>
              <p className="text-orange-800 text-sm">
                The 2020 season was significantly impacted by the COVID-19 pandemic. Many tournaments were cancelled or
                postponed, and facilities operated under strict health protocols. The Timberglen location reopened in
                September with mandatory mask requirements and social distancing measures.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t">
        <Link href="/news/archive/2019" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
          ← 2019 Archive
        </Link>
        <Link href="/news/archive" className="text-muted-foreground hover:text-primary">
          All Archives
        </Link>
        <Link href="/news/archive/2021" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
          2021 Archive →
        </Link>
      </div>
    </div>
  )
}
