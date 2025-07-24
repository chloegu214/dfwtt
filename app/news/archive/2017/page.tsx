import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Camera, Trophy, ExternalLink, Users, MapPin, Heart, Award, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "2017 News Archive - DFWTT",
  description:
    "Complete archive of DFWTT news and events from 2017, including tournaments, championships, and Raymond Sacco achievements.",
}

export default function News2017Page() {
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
          <span>2017</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2017 News Archive</h1>

        {/* Year Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              2017 Highlights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-lg">Raymond Sacco</div>
                <div className="text-muted-foreground">Para Table Tennis Success</div>
              </div>
              <div>
                <div className="font-semibold text-lg">T Bar M Opening</div>
                <div className="text-muted-foreground">New Club Location</div>
              </div>
              <div>
                <div className="font-semibold text-lg">$1,824</div>
                <div className="text-muted-foreground">Raised for Raymond</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* News Articles */}
      <div className="space-y-6">
        {/* December 2017 */}
        <article className="border-l-4 border-l-blue-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Championship
              </Badge>
              <h2 className="text-xl font-semibold">2017 US Open</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              December 17-22, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            The USATT held its US Open tournament in Las Vegas, Nevada. A summary of the results can be found on the
            official website.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Las Vegas, Nevada
            </span>
            <a
              href="http://register.usatt.org/tournaments/results.php"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results Summary
            </a>
            <a
              href="https://1drv.ms/f/s!AvhT8JQccNishYRwDrFdwR19aM072Q"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos by Grant Bergmann
            </a>
            <a
              href="https://1drv.ms/f/s!AvhT8JQccNishYJyxiEvUtmjKnioBw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Finals Photos
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-yellow-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2 bg-yellow-50 text-yellow-700 border-yellow-200">
                Para Sports
              </Badge>
              <h2 className="text-xl font-semibold">2017 US Para Open in Las Vegas</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              December 13-16, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            Raymond Sacco wins a silver medal in Class 11 at the 2017 US Para Open in Las Vegas. Congratulations
            Raymond!!
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Las Vegas, Nevada
            </span>
            <span className="flex items-center gap-1 text-yellow-600">
              <Award className="h-3 w-3" />
              Raymond Sacco - Silver Medal Class 11
            </span>
          </div>
        </article>

        <article className="border-l-4 border-l-purple-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2 bg-purple-50 text-purple-700 border-purple-200">
                Para Sports
              </Badge>
              <h2 className="text-xl font-semibold">
                Raymond Sacco gets internationally classified in Class 11 in Costa Rica
              </h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              November 27 - December 3, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            Raymond got officially classified as a Class 11 Paralympic athlete and now is eligible to play in the Para
            Table Tennis ITTF Tour. It's very important for Raymond to be internationally classified in Class 11, so
            that he can now play in international events. Raymond is a potential medal contender for the Para
            Panamerican Games in 2019 and also has a big chance to represent the USA in the 2020 Paralympic Games in
            Tokyo.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Costa Rica
            </span>
            <span className="flex items-center gap-1 text-purple-600">
              <Star className="h-3 w-3" />
              International Classification Achieved
            </span>
          </div>
        </article>

        <article className="border-l-4 border-l-green-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Tournament
              </Badge>
              <h2 className="text-xl font-semibold">2017 Winter World Peace TT Pictures</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              December 2, 2017
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
              href="https://1drv.ms/f/s!AvhT8JQccNishMcoJsp8Po6g60RxkA"
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
              <h2 className="text-xl font-semibold">2017 DFWTT Fall Open</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              November 11, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted its yearly Fall Open at the T Bar M Racquet Club and featured both USATT sanctioned Open
            Singles and Ratings events, and also non-sanctioned Open Doubles events. There were 92 players who competed
            at the tournament. Thanks to everyone who attended this year's tournament.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, Dallas
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              92 Players
            </span>
            <a
              href="http://dfwtt.com/Results_2017.htm#2017FallOpen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/f/s!AvhT8JQccNishLoZaHLNMrxXg5mIGw"
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
                Fundraiser
              </Badge>
              <h2 className="text-xl font-semibold">Raymond Sacco Fundraiser</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              November 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            Raymond Sacco participated in his first international Para Table Tennis Tournament in Costa Rica. Through
            this fundraiser, we helped Raymond cover his trip expenses. DFWTT donated $2 for each player that
            participated in the Fall Tournament to Raymond's cause.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1 text-green-600">
              <Heart className="h-3 w-3" />
              $1,824 Total Raised
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              Community Support
            </span>
          </div>

          {/* Fundraiser Details */}
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold mb-2">Fundraiser Contributors:</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• DFWTT: $400 (92 players × $4 each)</li>
              <li>• Cheng Li Wu: $100</li>
              <li>• Tournament attendees: $232</li>
              <li>• John Trabold: $250 (matching challenge)</li>
              <li>• Sam Lisook: $100</li>
              <li>• Anonymous contributions: $392</li>
              <li>• Tianming Xie: $100</li>
              <li>• Takatoshi Mii: $100</li>
              <li>• Eric & Heidi Gn: $50</li>
              <li>• Norman Hines: $100</li>
            </ul>
          </div>
        </article>

        <article className="border-l-4 border-l-orange-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Competition
              </Badge>
              <h2 className="text-xl font-semibold">Saturday 2-Man Team at TBarM</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              September 16 - October 7, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            The Saturday 2-Man Team competition returned at the TBarM. It took place every Saturday from September 16 to
            October 7. The purpose was to make matches more variety and fun in pushing games to a higher level.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, Dallas
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              Saturday 2:15-5:00 PM
            </span>
          </div>
        </article>

        <article className="border-l-4 border-l-red-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Tournament
              </Badge>
              <h2 className="text-xl font-semibold">2017 Chinese Double Ten</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              September 9, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted its yearly Chinese Double Ten Celebration tournament at the T Bar M Racquet Club in Dallas.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, Dallas
            </span>
            <a
              href="http://dfwtt.com/Results_2017.htm#2017DoubleTen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/f/s!AvhT8JQccNishLAQqwbB0X89R-WmnQ"
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
              <h2 className="text-xl font-semibold">Saturday Handicap Singles at TBarM</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              August 5-26, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            After 2 months of the "2-man team competition", DFWTT introduced another new program—"Saturday Handicap
            Singles competition in August at the TBarM" starting on August 5. The same purpose was to give matches more
            variety and fun in pushing games to a higher level.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, Dallas
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              Saturday 2:15-5:00 PM
            </span>
          </div>
        </article>

        <article className="border-l-4 border-l-purple-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Tournament
              </Badge>
              <h2 className="text-xl font-semibold">2017 DFWTT School Tournament</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              July 16, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted a school tournament at the T Bar M Racquet Club in Dallas. Events included Open Singles and
            Open Doubles round robin.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, Dallas
            </span>
            <a
              href="http://dfwtt.com/Results_2017.htm#2017_July_SchoolTournament"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/f/s!AvhT8JQccNishKgFC4z-gz5rn5EcHA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos by Grant Bergmann
            </a>
            <a
              href="https://photos.app.goo.gl/K16BuLCaSnN5Aptt1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Award Photos
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-blue-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Championship
              </Badge>
              <h2 className="text-xl font-semibold">2017 USATT National Championships</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              July 3-8, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            The USATT held its US National Championships in Las Vegas, Nevada. A summary of the results can be found on
            the official website.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Las Vegas, Nevada
            </span>
            <a
              href="http://register.usatt.org/tournaments/results.php"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results Summary
            </a>
            <a
              href="https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=ACD8701C94F053F8!69418&parId=ACD8701C94F053F8!32382&authkey=!Av7BKQ_bNNsMxG8"
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
              <h2 className="text-xl font-semibold">2017 DFWTT School Tournament</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              May 28, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted a school tournament at the T Bar M Racquet Club in Dallas. Events included Open Singles and
            Open Doubles round robin.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, Dallas
            </span>
            <a
              href="http://dfwtt.com/Results_2017.htm#2017_May_SchoolTournament"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://goo.gl/photos/faJXj6JqW56a89qy9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Tournament Photos
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-green-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Tournament
              </Badge>
              <h2 className="text-xl font-semibold">2017 Spring World Peace TT Pictures</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              May 13, 2017
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
              href="https://1drv.ms/u/s!AvhT8JQccNishI07GgLwJcbSzR2S8A"
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
              <h2 className="text-xl font-semibold">2017 DFWTT Spring Open</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              April 29, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted its yearly Spring Open at the T Bar M Racquet Club and featured both USATT sanctioned and
            non-sanctioned events. There were 99 players who competed in these events. Thanks to everyone who attended
            the tournament.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, Dallas
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              99 Players
            </span>
            <a
              href="http://dfwtt.com/Results_2017.htm#2017SpringOpen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNishIp1rPlJkA6ewGYBkw"
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
              April 7-9, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            The TMS College Table Tennis Championships took place in Eau Claire, Wisconsin. Results and videos of the
            tournament are available on the NCTTA website.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Eau Claire, Wisconsin
            </span>
            <a
              href="http://www.nctta.org/champs/2017/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              NCTTA Website
            </a>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisg_8gnst576s_WWnZEw"
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
                Facility
              </Badge>
              <h2 className="text-xl font-semibold">DFWTT New Location Grand Opening</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              March 25, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            On March 25, DFWTT had its Grand Opening Celebration for the new club at T Bar M Racquet Club in Dallas. The
            scheduled hours will be Saturday and Sunday from 2:00pm to 5:00pm. This location will also be used for the
            2017 DFWTT Spring Open tournament on April 29th.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, 6060 Dilbeck Ln, Dallas TX 75240
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              Saturday & Sunday 2:00-5:00 PM
            </span>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisg_5pPTsnzTt8bW7yUg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Opening Photos by Grant Bergmann
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
              February 25-26, 2017
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
              href="https://1drv.ms/u/s!AvhT8JQccNisg_hdjvRVc8VTitqxag"
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
              <h2 className="text-xl font-semibold">2017 Dallas Senior Games</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              February 25, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted the Dallas Senior Games Table Tennis Tournament at the T Bar M Racquet Club in Dallas. This
            event was part of the Dallas Park and Recreation's Senior Games which included 12 different competitive
            sports.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, Dallas
            </span>
            <a
              href="http://dfwtt.com/Results_2017.htm#2017DallasSeniorGames"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisg_gjOH3K1E9lyIpXnQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos by Grant Bergmann
            </a>
            <a
              href="https://goo.gl/photos/tCHtfVBShyE92X2F9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Award Photos
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-purple-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Championship
              </Badge>
              <h2 className="text-xl font-semibold">NCTTA N. Texas Division</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              February 12, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            Texas Wesleyan University hosted the NCTTA North Texas Division at the Sid Richardson Center in Fort Worth.
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
              href="https://1drv.ms/u/s!AvhT8JQccNisg_ErYuWeEqVXaN9Z1Q"
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
                Championship
              </Badge>
              <h2 className="text-xl font-semibold">2017 Texas Winter Games</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              January 14, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted the Texas Winter Games Table Tennis Tournament at the JCC (Jewish Community Center) in Dallas.
            This was part of the Texas Amateur Athletic Federation (TAAF) Winter Games of Texas. Medal winners from the
            Winter Games of Texas will be eligible to compete in the National State Games of America, which will take
            place in Grand Rapids, Michigan on August 3 - August 6, 2017.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              JCC, Dallas
            </span>
            <a
              href="http://www.taaf.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              TAAF Website
            </a>
            <a
              href="http://www.stategamesofamerica.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              State Games of America
            </a>
            <a
              href="http://dfwtt.com/Results_2017.htm#2017WinterGames"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisg-95tLm8FWkFEc7GVg"
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

      {/* Raymond Sacco Achievement Summary */}
      <Card className="mt-8 border-yellow-200 bg-yellow-50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Award className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-900 mb-2">2017 Raymond Sacco Achievements</h3>
              <p className="text-yellow-800 text-sm mb-2">
                2017 was a breakthrough year for Raymond Sacco in Para Table Tennis:
              </p>
              <ul className="text-yellow-800 text-sm space-y-1">
                <li>• International classification as Class 11 Paralympic athlete in Costa Rica</li>
                <li>• Silver medal at 2017 US Para Open in Las Vegas</li>
                <li>• Community fundraising effort raised $1,824 for international competition</li>
                <li>• Qualified for ITTF Para Table Tennis Tour</li>
                <li>• Positioned for 2019 Para Panamerican Games and 2020 Paralympic Games</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t">
        <Link href="/news/archive/2016" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
          ← 2016 Archive
        </Link>
        <Link href="/news/archive" className="text-muted-foreground hover:text-primary">
          All Archives
        </Link>
        <Link href="/news/archive/2018" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
          2018 Archive →
        </Link>
      </div>
    </div>
  )
}
