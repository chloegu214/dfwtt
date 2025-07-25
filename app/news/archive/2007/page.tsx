import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Trophy, Award, Star, Heart } from "lucide-react"
import Link from "next/link"

export default function Archive2007() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">2007 News Archive</h1>
        <p className="text-lg text-muted-foreground mb-6">
          A milestone year featuring the inaugural Winter Games of Texas and major achievements
        </p>

        {/* Year Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007,
          ].map((year) => (
            <Link key={year} href={`/news/archive/${year}`}>
              <Badge variant={year === 2007 ? "default" : "secondary"} className="hover:bg-primary/80">
                {year}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {/* November 2007 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-green-50">
                <Trophy className="w-3 h-3 mr-1" />
                Tournament
              </Badge>
            </div>
            <CardTitle className="text-xl">Ismaili Jamatkhana NST Games</CardTitle>
            <CardDescription>November 24-26, 2007 • Plano Sports Authority</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              DFWTT participated in the Ismaili Jamatkhana NST Games during Thanksgiving weekend. Scott Ryan, Larry
              Sangren, and Daniel Rutenberg provided logistics and ran the table tennis tournament. Coach Rutenberg
              provided two clinic sessions for community kids and youth. Athletes participated to qualify for the
              International Golden Jubilee Games 2008 in Kenya.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-green-50">
                <Trophy className="w-3 h-3 mr-1" />
                Tournament
              </Badge>
              <Badge variant="outline" className="bg-orange-50">
                Results
              </Badge>
            </div>
            <CardTitle className="text-xl">2007 DFWTT Fall Open Tournament</CardTitle>
            <CardDescription>November 10, 2007 • JCC Dallas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Ludovic Gombos won the tournament, taking $300 in prize money! Timothy Wang and Courtney Roberts finished
              2nd and 3rd with $200 and $100 respectively. Over 50+ players entered this traditional event. The final
              match featured amazing shots, classical loops and re-loops, and smart service strategies.
            </p>
            <div className="flex gap-2">
              <Link
                href="/results/2007#2007FallOpen2"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Complete Results
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* September 2007 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-green-50">
                <Trophy className="w-3 h-3 mr-1" />
                Tournament
              </Badge>
              <Badge variant="outline" className="bg-orange-50">
                Results
              </Badge>
            </div>
            <CardTitle className="text-xl">DFWTT Fall Open Sanctioned Tournament</CardTitle>
            <CardDescription>September 29, 2007 • JCC Dallas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              71 players participated with over 357 matches in the sanctioned event. Mark Hazinski and Ludovic Gombos
              finished 1st and 2nd in Open Division A. Elite players included Courtney Roberts, Sara Fu (defending
              Double Ten champion), Ines Perhoc, and Nelson Ramos. Significant number of Cadets, Juniors, and Senior
              players participated.
            </p>
            <div className="flex gap-2">
              <Link
                href="/results/2007#2007FallOpen"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Complete Results
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-pink-50">
                <Heart className="w-3 h-3 mr-1" />
                Charity
              </Badge>
            </div>
            <CardTitle className="text-xl">Charity Program Launch</CardTitle>
            <CardDescription>September 2007</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              DFWTT started a new initiative with the Fall Open Tournament. For each participant at DFWTT tournaments,
              DFWTT makes a $2 donation to a non-profit children's educational organization, beginning the club's
              commitment to community support.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-green-50">
                <Trophy className="w-3 h-3 mr-1" />
                Tournament
              </Badge>
              <Badge variant="outline" className="bg-orange-50">
                Results
              </Badge>
            </div>
            <CardTitle className="text-xl">2007 Double Ten Tournament</CardTitle>
            <CardDescription>September 2007 • Cimarron Rec Center</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Over 70 players celebrated the traditional annual "Double Ten" Tournament during Taiwanese festivities.
              Sara Fu, one of the newest additions to the Texas Wesleyan University Team, won the Open Division A
              Singles, with Alex Wong in 2nd place and Rodovan Polasek in 3rd. 13 different events were played.
            </p>
            <div className="flex gap-2">
              <Link
                href="/results/2007#2007DoubleTen"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Complete Results
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* August 2007 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-red-50">
                <Star className="w-3 h-3 mr-1" />
                Celebrity
              </Badge>
            </div>
            <CardTitle className="text-xl">"Balls of Fury" Movie Screening</CardTitle>
            <CardDescription>August 27, 2007 • 7:30 PM</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              DFWTT was invited to participate in the advance screening of "Balls of Fury," a film featuring table
              tennis. Thanks to Moroch Partners and Rogue Pictures, DFWTT put together this first-ever movie party for
              members. Over 250 people attended the packed theater, including many DFWTT players. DFWTT showcased proper
              table tennis during the event.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-green-50">
                <Trophy className="w-3 h-3 mr-1" />
                Tournament
              </Badge>
              <Badge variant="outline" className="bg-yellow-50">
                <Award className="w-3 h-3 mr-1" />
                Achievement
              </Badge>
            </div>
            <CardTitle className="text-xl">JCC Maccabi Games 2007</CardTitle>
            <CardDescription>August 2007 • Houston, Texas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Team Dallas traveled to Houston and was represented by 4 athletes, grabbing one Bronze medal in the
              Singles Category Age 13-14. More than 47 total table tennis athletes representing 14 cities across the
              U.S. participated. Team Dallas practiced twice a week from May through July. Athletes: Aaron Alterman,
              Joey Blatt, Alex Kaufman, and Ethan Presscot.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-red-50">
                <Heart className="w-3 h-3 mr-1" />
                Special
              </Badge>
            </div>
            <CardTitle className="text-xl">Special Thank You to Calvin Chen's Family</CardTitle>
            <CardDescription>July 2007</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Calvin, Sue, and Alan Chen were acknowledged for their continued support to DFWTT's efforts in providing
              table tennis activities for youth in the DFW area. The Chen family helped sponsor the Invitational
              Tournament at the JCC, showing unconditional support that was greatly appreciated.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-green-50">
                <Trophy className="w-3 h-3 mr-1" />
                Tournament
              </Badge>
            </div>
            <CardTitle className="text-xl">DFWTT at US Open July 2007</CardTitle>
            <CardDescription>July 2007 • Las Vegas, Nevada</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              About 770 domestic and international players were present for the 2007 US Open Championship. DFWTT was
              well represented. Special congratulations to Anurag Matharasi and Ben Norton for their great performance.
              Anurag and partner Andrew Chen won the Doubles under 3200 category. Aleksandar Karakasevic (Serbia) won
              Men's Singles, Yuka Shiosaka (Japan) won Women's Singles.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-green-50">
                <Trophy className="w-3 h-3 mr-1" />
                Tournament
              </Badge>
              <Badge variant="outline" className="bg-orange-50">
                Results
              </Badge>
            </div>
            <CardTitle className="text-xl">JCC Juniors Closed Tournament</CardTitle>
            <CardDescription>July 22, 2007 • JCC Dallas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              20 players between ages 8-19 played over 100 matches in a preparatory tournament for Team Dallas attending
              JCC Maccabi Games. The tournament featured well-diversified Cadet and Junior players from around the
              Metroplex. This was the 3rd year DFWTT conducted this invitational tournament, coordinated between DFWTT
              and JCC Dallas.
            </p>
            <div className="flex gap-2">
              <Link
                href="/results/2007#2007ClosedJr"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Tournament Results
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* June 2007 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-yellow-50">
                <Award className="w-3 h-3 mr-1" />
                Achievement
              </Badge>
            </div>
            <CardTitle className="text-xl">International Direct Marketer of the Year 2007</CardTitle>
            <CardDescription>June 2007</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Daniel Rutenberg was recognized by the Direct Marketing Association, International Council with the
              International Direct Marketer of the Year 2007 Award. This is the highest distinction and honor provided
              by the Direct Marketing Industry. Congratulations to Coach Daniel for his efforts on and off table tennis!
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-green-50">
                <Trophy className="w-3 h-3 mr-1" />
                Tournament
              </Badge>
            </div>
            <CardTitle className="text-xl">DFWTT Summer Tournament</CardTitle>
            <CardDescription>June 2007</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              52 players entered the DFWTT Summer tournament, playing 246 matches. The tournament started as a Giant
              Round Robin where players qualified for their respective divisions. Cheng-Yi Du won the tournament,
              followed by Keith Evans (2nd) and Ludovic Gombos (3rd). James Smith and Meredith Elston won doubles,
              defeating Alex Wang and Ian Chan.
            </p>
          </CardContent>
        </Card>

        {/* April 2007 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-green-50">
                <Trophy className="w-3 h-3 mr-1" />
                Tournament
              </Badge>
            </div>
            <CardTitle className="text-xl">DFWTT Spring Open</CardTitle>
            <CardDescription>April 2007 • JCC Dallas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Over 100 players participated in the classic DFWTT Spring Tournament. The JCC provided excellent lighting,
              flooring, and space for 18 tournament tables. 66 players entered the sanctioned competition, playing 344
              matches. Tran Tuan won the Open category, with Timothy Wang from Houston finishing 2nd.
            </p>
          </CardContent>
        </Card>

        {/* January 2007 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-red-50">
                <Star className="w-3 h-3 mr-1" />
                Exhibition
              </Badge>
            </div>
            <CardTitle className="text-xl">Table Tennis Exhibition at First United Methodist Church</CardTitle>
            <CardDescription>January 27, 2007 • Coppell</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              DFWTT attended the 2nd Pre-Super Bowl Ping-Pong Tournament organized by the First United Methodist Church
              of Coppell (FUMCC). Coaches Kim Kill-soo, Donna Chen, and Daniel Rutenberg demonstrated table tennis to
              over 100 church members. DFWTT congratulated FUMCC for promoting table tennis in their community.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-green-50">
                <Trophy className="w-3 h-3 mr-1" />
                Tournament
              </Badge>
              <Badge variant="outline" className="bg-red-50">
                <Star className="w-3 h-3 mr-1" />
                Special
              </Badge>
            </div>
            <CardTitle className="text-xl">Inaugural Winter Games of Texas</CardTitle>
            <CardDescription>January 2007 • Frisco, Texas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              DFWTT organized and coordinated table tennis activities for the inaugural Winter Games of Texas! With over
              100 players, table tennis made its debut at the Winter Games with sanctioned and non-sanctioned
              tournaments. Courtney Roberts won Open Class A, defeating Petri Heinonen in a classic offensive vs.
              defensive match. Timothy Wang from Houston won the U-2400 event.
            </p>
            <div className="flex gap-2">
              <a
                href="http://www.taaf.com/site/images/stories/wintergames/downloads/wg_2007_tabletennis_results.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Complete Results
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      <div className="text-center text-sm text-muted-foreground">
        <p>2007 featured the inaugural Winter Games of Texas and major program expansion</p>
        <p className="mt-2">
          <Link href="/news/archive" className="text-blue-600 hover:text-blue-800">
            ← Back to All Archives
          </Link>
        </p>
      </div>
    </div>
  )
}
