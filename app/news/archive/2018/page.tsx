import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Camera, Trophy, ExternalLink, Users, MapPin, Heart, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "2018 News Archive - DFWTT",
  description:
    "Complete archive of DFWTT news and events from 2018, including tournaments, championships, and community activities.",
}

export default function News2018Page() {
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
          <span>2018</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2018 News Archive</h1>

        {/* Year Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              2018 Highlights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-lg">US Open</div>
                <div className="text-muted-foreground">Orlando, Florida</div>
              </div>
              <div>
                <div className="font-semibold text-lg">4 Major Opens</div>
                <div className="text-muted-foreground">Winter, Spring, Summer, Fall</div>
              </div>
              <div>
                <div className="font-semibold text-lg">Team Events</div>
                <div className="text-muted-foreground">Saturday Competitions</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* News Articles */}
      <div className="space-y-6">
        {/* December 2018 */}
        <article className="border-l-4 border-l-blue-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Championship
              </Badge>
              <h2 className="text-xl font-semibold">2018 US Open Pictures</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              December 17-22, 2018
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            The USATT held its US Open tournament in Orlando, Florida. A summary of the results can be found on the
            official website.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Orlando, Florida
            </span>
            <a
              href="https://www.teamusa.org/USA-Table-Tennis/2018-US-Open-Championships/Draws-and-Results"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results Summary
            </a>
            <a
              href="https://1drv.ms/f/s!AvhT8JQccNishtJ6ZNyXLRDYvq0FoA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos by Grant Bergmann
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-green-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Tournament
              </Badge>
              <h2 className="text-xl font-semibold">2018 Winter World Peace TT Pictures</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              December 1, 2018
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
              href="https://1drv.ms/f/s!AvhT8JQccNishq98VwBRJsSeYmilMg"
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
              <h2 className="text-xl font-semibold">2018 DFWTT Fall Open</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              November 10-11, 2018
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted its Fall Open at the T Bar M Racquet Club in Dallas. The USATT rating events were held on
            Saturday and the non-rating events were held on Sunday. Thanks to everyone who attended the tournament.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, Dallas
            </span>
            <a
              href="http://dfwtt.com/Results_2018.htm#2018FallOpen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/f/s!AvhT8JQccNishq0ij2uFzwnpoG_qUg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos by Grant Bergmann
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-orange-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Competition
              </Badge>
              <h2 className="text-xl font-semibold">Saturday's Team Competition</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              October 13, 2018
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            On Saturdays at TBarM, there is usually a 2-Man or 3-Man Team competition taking place. The recent 3-Man
            team event included the Avila family from Puerto Rico.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, Dallas
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              Featured Avila Family from Puerto Rico
            </span>
            <a
              href="http://dfwtt.com/Results_TBarM_Teams.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-red-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Tournament
              </Badge>
              <h2 className="text-xl font-semibold">2018 Chinese Double Ten</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              September 29, 2018
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted its yearly Chinese Double Ten Celebration tournament at the T Bar M Racquet Club in Dallas.
            DFWTT donated $157.49 to the Dallas Chinese Community Center.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, Dallas
            </span>
            <span className="flex items-center gap-1 text-green-600">
              <Heart className="h-3 w-3" />
              $157.49 Donated to DCCC
            </span>
            <a
              href="http://dfwtt.com/Results_2018.htm#2018DoubleTen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/f/s!AvhT8JQccNishqU-Cn0pv9ok7XLUag"
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
                Tournament
              </Badge>
              <h2 className="text-xl font-semibold">2018 Special Doubles Event</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              June 24, 2018
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted a Special Doubles Event at the T Bar M Racquet Club. The teams included Class A (U-4100), Class
            B (U-3600), and Class C (U-2600).
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, Dallas
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />3 Skill Classes
            </span>
            <a
              href="http://dfwtt.com/Results_TBarM_Teams.htm#SpecialDoubles"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-blue-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Tournament
              </Badge>
              <h2 className="text-xl font-semibold">2018 DFWTT Summer Open</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              June 2-3, 2018
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted its Summer Open at the T Bar M Racquet Club in Dallas. The non-rating events were held on
            Saturday and the USATT rating events were held on Sunday.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, Dallas
            </span>
            <a
              href="http://dfwtt.com/Results_2018.htm#2018SummerOpen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/f/s!AvhT8JQccNishp0bURiF9TYSLbIVVw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Non-Rating Photos
            </a>
            <a
              href="https://1drv.ms/f/s!AvhT8JQccNishp1al_rQi5TR6XALXA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Rating Photos
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-green-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Tournament
              </Badge>
              <h2 className="text-xl font-semibold">2018 Spring World Peace TT Pictures</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              May 12, 2018
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
              href="https://1drv.ms/f/s!AvhT8JQccNishpgxUz0oiT3cIWYYBw"
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
              <h2 className="text-xl font-semibold">NCTTA National Championships</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              April 20-22, 2018
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            The 2018 iSet College Table Tennis Championships took place in Round Rock, Texas. Results and videos of the
            tournament are available on the NCTTA website.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Round Rock, Texas
            </span>
            <a
              href="http://www.nctta.org/champs/2018/results.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              NCTTA Results
            </a>
            <a
              href="https://1drv.ms/f/s!AvhT8JQccNishocm00Et9DE5-W38VA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos by Grant Bergmann
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-yellow-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Competition
              </Badge>
              <h2 className="text-xl font-semibold">2018 Dallas Senior Games</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              March 23, 2018
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted the Dallas Senior Games Table Tennis Tournament at the T Bar M Racquet Club in Dallas. This
            event was part of the Dallas Park and Recreation's Senior Games which included 10 different competitive
            sports.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, Dallas
            </span>
            <a
              href="http://dfwtt.com/Results_2018.htm#2018DallasSeniorGames"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/f/s!AvhT8JQccNishfQ0WoIvYsS12W-wtw"
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
              <h2 className="text-xl font-semibold">NCTTA South Regional Championships</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              February 24-25, 2018
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
              href="https://1drv.ms/f/s!AvhT8JQccNishfEYuo-xq30fxy7gsg"
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
              <h2 className="text-xl font-semibold">2018 DFWTT Winter Open</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              February 17, 2018
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted its Winter Open at the T Bar M Racquet Club in Dallas and featured a USATT sanctioned Open
            Singles Round Robin event, and also non-sanctioned events including Open Singles and Open Doubles.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, Dallas
            </span>
            <a
              href="http://dfwtt.com/Results_2018.htm#2018WinterOpen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/f/s!AvhT8JQccNisheFoEWH5lSBQLu9KgQ"
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
              <h2 className="text-xl font-semibold">2018 DFWTT Charity Tournament</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              January 27, 2018
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted a charity tournament at the Mustang Park Recreation Center in Irving, Texas. This tournament
            was for the benefit of firefighters and the police force. A donation of $500 was made to the Dallas Fire
            Fighters Association Local 58 Relief Fund. A donation of $500 was made to Assist the Officer Foundation
            (ATO), Fredrick Frazier, Dallas Police Association.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Mustang Park Recreation Center, Irving
            </span>
            <span className="flex items-center gap-1 text-green-600">
              <Heart className="h-3 w-3" />
              $1,000 Donated to First Responders
            </span>
            <a
              href="http://dfwtt.com/Results_2018.htm#2018Charity"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/f/s!AvhT8JQccNishbJ9RIiwS7RuqiEMrw"
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

      {/* Charity Impact Summary */}
      <Card className="mt-8 border-green-200 bg-green-50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Heart className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 mb-2">2018 Charity Impact</h3>
              <p className="text-green-800 text-sm mb-2">
                Throughout 2018, DFWTT continued its charitable giving program:
              </p>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• $158 to American Red Cross - California Wildfires fund</li>
                <li>• $157.49 to Dallas Chinese Community Center</li>
                <li>• $150 to Shared Hope International</li>
                <li>• $1,000 to firefighters and police ($500 each)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t">
        <Link href="/news/archive/2017" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
          ← 2017 Archive
        </Link>
        <Link href="/news/archive" className="text-muted-foreground hover:text-primary">
          All Archives
        </Link>
        <Link href="/news/archive/2019" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
          2019 Archive →
        </Link>
      </div>
    </div>
  )
}
