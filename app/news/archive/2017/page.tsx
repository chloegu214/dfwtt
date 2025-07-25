import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Camera, Trophy, ExternalLink, Users, MapPin, Award, Star, DollarSign, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "2017 News Archive - DFWTT",
  description:
    "Complete archive of DFWTT news and events from 2017, including Raymond Sacco's Paralympic achievements, T Bar M opening, and major tournaments.",
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
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="font-semibold text-lg">Raymond Sacco</div>
                <div className="text-muted-foreground">Paralympic Success</div>
              </div>
              <div>
                <div className="font-semibold text-lg">T Bar M Opening</div>
                <div className="text-muted-foreground">New Club Location</div>
              </div>
              <div>
                <div className="font-semibold text-lg">$1,824</div>
                <div className="text-muted-foreground">Raised for Raymond</div>
              </div>
              <div>
                <div className="font-semibold text-lg">15+ Events</div>
                <div className="text-muted-foreground">Tournaments & Programs</div>
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
              <Badge variant="outline" className="mb-2 bg-red-50 text-red-700 border-red-200">
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
            Raymond Sacco participated in his first international Para Table Tennis Tournament in Costa Rica. DFWTT
            organized a fundraiser to help Raymond cover his trip expenses, collecting donations during the Fall
            Tournament and donating $2 for each player that participated.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1 text-red-600">
              <DollarSign className="h-3 w-3" />
              $1,824 Total Raised
            </span>
            <span className="flex items-center gap-1">
              <Heart className="h-3 w-3" />
              Community Support
            </span>
          </div>
        </article>

        <article className="border-l-4 border-l-orange-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2 bg-orange-50 text-orange-700 border-orange-200">
                Program
              </Badge>
              <h2 className="text-xl font-semibold">Saturday 2-Man Teams at TBarM</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              September 16 - October 7, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            The Saturday 2-Man Team competition returned at the TBarM. This new program was designed to make matches
            more varied and fun while pushing games to a higher level with cash prize money.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, Dallas
            </span>
            <span className="flex items-center gap-1">
              <Trophy className="h-3 w-3" />
              Cash Prizes
            </span>
          </div>
        </article>

        <article className="border-l-4 border-l-green-500 pl-6 py-4">
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
              href="https://1drv.ms/f/s!AvhT8JQccNishLAQqwbB0X89R-WmnQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos by Grant Bergmann
            </a>
            <a
              href="http://dfwtt.com/Results_2017.htm#2017DoubleTen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-orange-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2 bg-orange-50 text-orange-700 border-orange-200">
                Program
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
            Singles competition" to give matches more variety and fun while pushing games to a higher level.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, Dallas
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              Saturday 2:15pm-5pm
            </span>
          </div>
        </article>

        <article className="border-l-4 border-l-blue-500 pl-6 py-4">
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
              href="https://1drv.ms/f/s!AvhT8JQccNishKgFC4z-gz5rn5EcHA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos by Grant Bergmann
            </a>
            <a
              href="http://dfwtt.com/Results_2017.htm#2017_July_SchoolTournament"
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

        <article className="border-l-4 border-l-blue-500 pl-6 py-4">
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
              href="https://goo.gl/photos/faJXj6JqW56a89qy9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos
            </a>
            <a
              href="http://dfwtt.com/Results_2017.htm#2017_May_SchoolTournament"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
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
              href="https://1drv.ms/u/s!AvhT8JQccNishIp1rPlJkA6ewGYBkw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos by Grant Bergmann
            </a>
            <a
              href="http://dfwtt.com/Results_2017.htm#2017SpringOpen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-purple-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2 bg-purple-50 text-purple-700 border-purple-200">
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
            tournament are on the NCTTA website.
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

        <article className="border-l-4 border-l-orange-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2 bg-orange-50 text-orange-700 border-orange-200">
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
            DFWTT had its Grand Opening Celebration for the new club at T Bar M Racquet Club in Dallas. The scheduled
            hours are Saturday and Sunday from 2:00pm to 5:00pm. This location was also used for the 2017 DFWTT Spring
            Open tournament.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, Dallas
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
              <Badge variant="outline" className="mb-2 bg-purple-50 text-purple-700 border-purple-200">
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
            Worth. Results of the tournament can be found at the NCTTA website.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Fort Worth, Texas
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
              <Badge variant="outline" className="mb-2 bg-yellow-50 text-yellow-700 border-yellow-200">
                Senior Games
              </Badge>
              <h2 className="text-xl font-semibold">2017 Dallas Senior Games</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              February 25, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted the Dallas Senior Games Table Tennis Tournament. This event was part of the Dallas Park and
            Recreation's Senior Games which included 12 different competitive sports. The table tennis events took place
            at the T Bar M Racquet Club in Dallas.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />T Bar M Racquet Club, Dallas
            </span>
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
              href="http://dfwtt.com/Results_2017.htm#2017DallasSeniorGames"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-purple-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2 bg-purple-50 text-purple-700 border-purple-200">
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
            Results of the tournament can be found at the NCTTA website.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Fort Worth, Texas
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

        <article className="border-l-4 border-l-blue-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">
                Tournament
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
            Winter Games were eligible to compete in the National State Games of America in Grand Rapids, Michigan.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              JCC, Dallas
            </span>
            <a
              href="https://1drv.ms/u/s!AvhT8JQccNisg-95tLm8FWkFEc7GVg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos by Grant Bergmann
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
          </div>
        </article>

        {/* Charity Program Updates */}
        <article className="border-l-4 border-l-red-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2 bg-red-50 text-red-700 border-red-200">
                Charity
              </Badge>
              <h2 className="text-xl font-semibold">Charity Program Updates</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              Throughout 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            In DFWTT's continued pledge to donate $2 for each player that participates in tournaments, donations were
            made to: Dallas Chinese Community Center ($200), American Red Cross Disaster Relief fund ($198), Texas Table
            Tennis Club at UT Austin ($112), and National Fallen Firefighters Foundation ($214).
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1 text-red-600">
              <Heart className="h-3 w-3" />
              Multiple Charitable Donations
            </span>
            <span className="flex items-center gap-1">
              <DollarSign className="h-3 w-3" />
              $724 Total Donated
            </span>
          </div>
        </article>
      </div>

      {/* Year Navigation */}
      <div className="mt-12 flex justify-center gap-2">
        <Link
          href="/news/archive/2016"
          className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md text-sm transition-colors"
        >
          ← 2016
        </Link>
        <Link
          href="/news/archive"
          className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md text-sm transition-colors"
        >
          Archive
        </Link>
        <Link
          href="/news/archive/2018"
          className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md text-sm transition-colors"
        >
          2018 →
        </Link>
      </div>
    </div>
  )
}
