import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Camera, Trophy, ExternalLink, Users, MapPin, Award, Star } from "lucide-react"

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
          <Link href="/news" className="hover:text-primary">News</Link>
          <span>/</span>
          <Link href="/news/archive" className="hover:text-primary">Archive</Link>
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
              <Badge variant="outline" className="mb-2">Championship</Badge>
              <h2 className="text-xl font-semibold">2017 US Open</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              December 17-22, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            The USATT held its US Open tournament in Las Vegas, Nevada. A summary of the results can be found on the official website.
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
              <Badge variant="outline" className="mb-2 bg-yellow-50 text-yellow-700 border-yellow-200">Para Sports</Badge>
              <h2 className="text-xl font-semibold">2017 US Para Open in Las Vegas</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              December 13-16, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            Raymond Sacco wins a silver medal in Class 11 at the 2017 US Para Open in Las Vegas. Congratulations Raymond!!
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
              <Badge variant="outline" className="mb-2 bg-purple-50 text-purple-700 border-purple-200">Para Sports</Badge>
              <h2 className="text-xl font-semibold">Raymond Sacco gets internationally classified in Class 11 in Costa Rica</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              November 27 - December 3, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            Raymond got officially classified as a Class 11 Paralympic athlete and now is eligible to play in the Para Table Tennis ITTF Tour. 
            It's very important for Raymond to be internationally classified in Class 11, so that he can now play in international events. 
            Raymond is a potential medal contender for the Para Panamerican Games in 2019 and also has a big chance to represent the USA in the 2020 Paralympic Games in Tokyo.
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
              <Badge variant="outline" className="mb-2">Tournament</Badge>
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
              <Badge variant="outline" className="mb-2">Tournament</Badge>
              <h2 className="text-xl font-semibold">2017 DFWTT Fall Open</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              November 11, 2017
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted its yearly Fall Open at the T Bar M Racquet Club and featured both USATT sanctioned Open Singles and Ratings events, 
            and also non-sanctioned Open Doubles events. There were 92 players who competed at the tournament. 
            Thanks to everyone who attended this year's tournament.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              T Bar M Racquet Club, Dallas
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
              href="https://1drv.ms/f/s!AvhT8JQccNishLoZaHLNMrxXg5mIGw"\
