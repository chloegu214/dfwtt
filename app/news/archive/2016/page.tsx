import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Camera, Trophy, ExternalLink, MapPin, Heart, Star, Tv } from "lucide-react"

export const metadata: Metadata = {
  title: "2016 News Archive - DFWTT",
  description:
    "Complete archive of DFWTT news and events from 2016, including tournaments, championships, and the Dude Perfect Show appearance.",
}

export default function News2016Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Link href="/news" className="hover:text-primary">News</Link>
          <span>/</span>
          <Link href="/news/archive" className="hover:text-primary">Archive</Link>
          <span>/</span>
          <span>2016</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2016 News Archive</h1>
        
        {/* Year Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              2016 Highlights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-lg">Dude Perfect Show</div>
                <div className="text-muted-foreground">CMT Television Appearance</div>
              </div>
              <div>
                <div className="font-semibold text-lg">US Nationals</div>
                <div className="text-muted-foreground">Las Vegas, Nevada</div>
              </div>
              <div>
                <div className="font-semibold text-lg">47mm Big Ball</div>
                <div className="text-muted-foreground">First Time Used</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* News Articles */}
      <div className="space-y-6">
        
        {/* December 2016 */}
        <article className="border-l-4 border-l-blue-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">Championship</Badge>
              <h2 className="text-xl font-semibold">2016 US Open</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              December 12-17, 2016
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
              href="https://1drv.ms/u/s!AvhT8JQccNisg-ZnH4okRQ90wBiL9g" 
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
              <Badge variant="outline" className="mb-2">Championship</Badge>
              <h2 className="text-xl font-semibold">2016 Texas State Championship</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              November 12-13, 2016
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            Texas Wesleyan University hosted its Texas State Championship at the Sid Richardson Center in Fort Worth.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Texas Wesleyan University, Fort Worth
            </span>
            <a 
              href="https://1drv.ms/u/s!AvhT8JQccNisg9F0H7mWCWb_GNVeSw" 
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
              <h2 className="text-xl font-semibold">2016 DFWTT Fall Open</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              November 5, 2016
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted its yearly Fall Open at the JCC (Jewish Community Center) in Dallas. 
            A total of 22 Butterfly tables were used in the USATT sanctioned and non-sanctioned events. 
            For the non-sanctioned Open Doubles event, the 47mm Big Ball was used for the first time. 
            The total prize money awarded for this tournament was $3,100. 
            Thank you to everyone who were able to attend this year's tournament.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              JCC, Dallas
            </span>
            <span className="flex items-center gap-1 text-orange-600">
              <Star className="h-3 w-3" />
              First Use of 47mm Big Ball
            </span>
            <span className="flex items-center gap-1 text-green-600">
              <Trophy className="h-3 w-3" />
              $3,100 Prize Money
            </span>
            <a 
              href="http://dfwtt.com/Results_2016.htm#2016FallOpen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a 
              href="https://1drv.ms/u/s!AvhT8JQccNisg9BOEyRvMzy1iZ_A9Q" 
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
              <Badge variant="outline" className="mb-2">Tournament</Badge>
              <h2 className="text-xl font-semibold">2016 Chinese Double Ten</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              September 17, 2016
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted its yearly Chinese Double Ten Celebration tournament at the Cimarron recreation center in Irving, Texas. 
            Thank you to everyone for the large turnout at this year's event.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Cimarron Recreation Center, Irving
            </span>
            <a 
              href="http://dfwtt.com/Results_2016.htm#2016DoubleTen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a 
              href="https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=ACD8701C94F053F8!58087&parId=ACD8701C94F053F8!32382&authkey=!AA1X6JfhYi4Wd7Y" 
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
              <Badge variant="outline" className="mb-2">Championship</Badge>
              <h2 className="text-xl font-semibold">2016 USATT National Championships</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              July 4-9, 2016
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            The USATT held its US National Championships in Las Vegas, Nevada. A summary of the results can be found on the official website. 
            William Zhang and Grant Bergmann were Semi-Finalists in the Senior Men's 75+ Doubles event.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Las Vegas, Nevada
            </span>
            <span className="flex items-center gap-1 text-yellow-600">
              <Award className="h-3 w-3" />
              Zhang/Bergmann - Senior 75+ Doubles Semi-Finalists
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
              href="https://onedrive.live.com/?authkey=%21AGqa55SsLFOLDzc&id=ACD8701C94F053F8%2156948&cid=ACD8701C94F053F8" 
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
              <Badge variant="outline" className="mb-2 bg-orange-50 text-orange-700 border-orange-200">Media</Badge>
              <h2 className="text-xl font-semibold">Dude Perfect Show</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              June 23, 2016 (Aired)
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            The Dude Perfect Show aired an episode which had Cory Cotton playing in our DFWTT Invitational Tournament back in March. 
            The episode aired on June 23 on the CMT (Country Music Television) network.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1 text-orange-600">
              <Tv className="h-3 w-3" />
              CMT Network Television
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              Cory Cotton Featured
            </span>
            <a 
              href="https://www.youtube.com/watch?v=8sXtjdKWQqA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Sneak Peek Video
            </a>
            <a 
              href="http://dudeperfect.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Dude Perfect Website
            </a>
            <a 
              href="https://1drv.ms/f/s!AvhT8JQccNisg6wGRzOR3im_psJnlA" 
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
              <Badge variant="outline" className="mb-2">Tournament</Badge>
              <h2 className="text-xl font-semibold">2016 Spring World Peace TT Pictures</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              May 14, 2016
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
              href="https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=ACD8701C94F053F8!51653&parId=ACD8701C94F053F8!32382&authkey=!AhYqdiq0bJ6SBy8" 
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
              <Badge variant="outline" className="mb-2">Tournament</Badge>
              <h2 className="text-xl font-semibold">Rose City Memorial Tournament</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              May 28, 2016
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            The Rose City TTC hosted a USATT sanctioned tournament in Tyler Texas.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Tyler, Texas
            </span>
            <a 
              href="http://www.teamusa.org/USA-Table-Tennis/Events/2016/May/28/Rose-City-Memorial-Tournament" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Tournament Info
            </a>
          </div>
        </article>

        <article className="border-l-4 border-l-blue-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">Tournament</Badge>
              <h2 className="text-xl font-semibold">2016 DFWTT Spring Open</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              April 30, 2016
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted its yearly Spring Open at the JCC (Jewish Community Center) and featured both USATT sanctioned and non-sanctioned events. 
            Congratulations to all the winners and thank you to everyone who attended our tournament.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              JCC, Dallas
            </span>
            <a 
              href="http://dfwtt.com/Results_2016.htm#2016SpringOpen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Results
            </a>
            <a 
              href="https://onedrive.live.com/?authkey=%21Akca%5FD2KIQSl5JQ&id=ACD8701C94F053F8%2149903&cid=ACD8701C94F053F8" 
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
              <Badge variant="outline" className="mb-2">Championship</Badge>
              <h2 className="text-xl font-semibold">NCTTA National Championships</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              March 25-27, 2016
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            The NCTTA Championships took place at the Round Rock Sports Center in Round Rock, Texas. 
            Results of the tournament are available on the NCTTA website.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Round Rock, Texas
            </span>
            <a 
              href="http://nctta.org/champs/2016/results.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              NCTTA Results
            </a>
            <a 
              href="https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!45361&parId=acd8701c94f053f8!32382&authkey=!AE4M5uHK2Vp6Zqk" 
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
              <Badge variant="outline" className="mb-2">Tournament</Badge>
              <h2 className="text-xl font-semibold">DFWTT Invitational Tournament</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              March 21, 2016
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            DFWTT hosted an Invitational Tournament at the Cimarron Recreation Center, in Irving Texas. 
            This tournament featured Cory Cotton from Dude Perfect.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Cimarron Recreation Center, Irving
            </span>
            <span className="flex items-center gap-1 text-orange-600">
              <Star className="h-3 w-3" />
              Featured Cory Cotton (Dude Perfect)
            </span>
            <a 
              href="https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!43462&parId=acd8701c94f053f8!32382&authkey=!ADklwK4gMqBXLBM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <Camera className="h-3 w-3" />
              Photos by Grant Bergmann
            </a>
          </div>
          
          {/* Tournament Results */}
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold mb-2">Final Results and Awards:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <div className="font-medium">Top 4:</div>
                <ul className="space-y-1">
                  <li>1st: Nelson Ramos ($300)</li>
                  <li>2nd: Ranjit Rayamajhi ($200)</li>
                  <li>3rd: Brandon Gardner ($150)</li>
                  <li>4th: Edvin Golestanyan ($100)</li>
                </ul>
              </div>
              <div>
                <div className="font-medium">Other Prize Winners:</div>
                <ul className="space-y-1">
                  <li>Kyle Drake, Allen Chuang, Alann Castillo, Stephen Kornegay ($50 each)</li>
                  <li>Danya Budiman, Stan Vosburgh, Tufan Beyatli, Hui Ling ($30 each)</li>
                  <li>Tommy Chau, Jeremy Wood, Cory Cotton, Ashish Khandelwal ($20 each)</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <article className="border-l-4 border-l-purple-500 pl-6 py-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="outline" className="mb-2">Championship</Badge>
              <h2 className="text-xl font-semibold">NCTTA South Regional Championships</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              February 20-21, 2016
            </div>
          </div>
          <p className="text-muted-foreground mb-3">
            Texas Wesleyan University hosted the NCTTA South Regional Championships at the Sid Richardson Center in Fort Worth.
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
              href="https://onedrive.live.com/redir.aspx?cid=acd8701c94f053f8&resid=acd8701c94f053f8!43078&parId=acd8701c94f053f8!32382&authkey=!AAnxLSiE3JI6ewY" 
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
              <h3 className="font-semibold text-green-900 mb-2">2016 Charity Impact</h3>
              <p className="text-green-800 text-sm mb-2">
                Throughout 2016, DFWTT continued its charitable giving program:
              </p>
              <ul className="text-green-800 text-sm space-y-1">
                \
