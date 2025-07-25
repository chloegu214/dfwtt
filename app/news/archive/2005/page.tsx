import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Trophy, Users, Award, Star } from "lucide-react"
import Link from "next/link"

export default function Archive2005() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">2005 News Archive</h1>
        <p className="text-lg text-muted-foreground mb-6">
          A historic year featuring Dallas hosting the JCC Maccabi Games and Team Dallas winning 16 medals
        </p>

        {/* Year Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007,
            2006, 2005,
          ].map((year) => (
            <Link key={year} href={`/news/archive/${year}`}>
              <Badge variant={year === 2005 ? "default" : "secondary"} className="hover:bg-primary/80">
                {year}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {/* August 2005 */}
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
              <Badge variant="outline" className="bg-red-50">
                <Star className="w-3 h-3 mr-1" />
                Special
              </Badge>
            </div>
            <CardTitle className="text-xl">JCC Maccabi Games 2005 - Team Dallas Wins 16 Medals!</CardTitle>
            <CardDescription>August 2005 • Dallas, Texas (Host City)</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Historic achievement! Team Dallas won 16 table tennis medals during the summer Jewish Community Center
              (JCC) Maccabi Games 2005 in Dallas, Texas. For the first time ever, Dallas hosted the games, showcasing
              hospitality with opening ceremonies at the Resistol Rodeo Arena featuring Dallas Cowboys cheerleaders and
              opening remarks by Mark Cuban, owner of the Dallas Mavericks.
            </p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold mb-2">Team Dallas Athletes:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div>
                  <strong>Girls:</strong> Zoe Zalta, Natalie Weltman, Julie Weltman, Nicole Danielewitz, Samantha Subar,
                  Carly Rosemore
                </div>
                <div>
                  <strong>Boys:</strong> Bennett Aaron, Adam Bates, Ryan Bates, Bryan Cytron, Sahar David, Michael
                  Genecov, Zac Moskowitz, Lee Perkins, Jeffrey Stulmaker, Danny Weiner, Sol Weiner
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* January - August 2005 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-blue-50">
                <Users className="w-3 h-3 mr-1" />
                Program
              </Badge>
            </div>
            <CardTitle className="text-xl">Intensive 7-Month Training Program</CardTitle>
            <CardDescription>January - August 2005</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Team Dallas worked very hard for well over 7 months with practices twice a week between January and August
              2005. From an initial group of 47 young players ages 12-16 who tried out, Team Dallas ended with a roster
              of 17 talented players (6 girls & 11 boys). All practices and invitational exchange tournaments were
              conducted at the JCC in Dallas.
            </p>
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold mb-2">Coaching Staff:</h4>
              <p className="text-sm">
                <strong>Head Coach:</strong> Daniel Rutenberg (USATT Certified Coach)
                <br />
                <strong>Assistant Coach:</strong> Lance Rosemore
              </p>
            </div>
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
            <CardTitle className="text-xl">Tournament Logistics and Support</CardTitle>
            <CardDescription>August 2005 • JCC Maccabi Games</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              The Dallas JCC in cooperation with DFWTT through Donna Chen's leadership provided all logistics and
              support before and during the summer games. Yaser Salah (DFWTT member), Bob Weinfeld and Matt Pizette
              (Maccabi Games Table Tennis Chairmen) provided additional help ensuring smooth tournament operations. The
              tournament was run on 8 tables total (6 Stiga and 2 Butterfly) using 3-star orange Butterfly balls, all
              provided by DFWTT.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-purple-50">
                <Star className="w-3 h-3 mr-1" />
                International
              </Badge>
            </div>
            <CardTitle className="text-xl">International Competition</CardTitle>
            <CardDescription>August 2005 • 4-Day Competition</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              During the 4-day table tennis competition, there were more than 1,000 games played and well over 12,000
              points scored. The competition was represented by 46 players from 15 cities from Canada, Israel, Mexico,
              and the U.S. This was truly the experience of a lifetime for these talented athletes, earning stories of
              athletic success, camaraderie, and sportsmanship.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-red-50">
                <Star className="w-3 h-3 mr-1" />
                Celebrity
              </Badge>
            </div>
            <CardTitle className="text-xl">Opening Ceremonies with Dallas Cowboys Cheerleaders</CardTitle>
            <CardDescription>August 2005 • Resistol Rodeo Arena</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Dallas hosted the 2005 games and showed its hospitality with opening ceremonies at the Resistol Rodeo
              Arena, which included a performance by the Dallas Cowboys cheerleaders and opening remarks by Mark Cuban,
              owner of the Dallas Mavericks Basketball team. The American Airlines Center was used for the closing
              ceremonies, with opportunities to visit local sights.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-blue-50">
                <Users className="w-3 h-3 mr-1" />
                Program
              </Badge>
            </div>
            <CardTitle className="text-xl">Olympic-Style Games Experience</CardTitle>
            <CardDescription>August 2005</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              At the Olympic-style Maccabi Games, more than 1,400 Jewish athletes ages 13-16 from all over the world
              tested their skills in baseball, basketball, bowling, dance, golf, NFL flag football, soccer, softball,
              swimming, table tennis, tennis, track and field, and volleyball. The games featured social, educational,
              and spiritual programming offering a unique Jewish experience. Each team participated in the Day of Caring
              and Sharing, engaging in social action projects dedicated to improving the communities they visit.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-yellow-50">
                <Award className="w-3 h-3 mr-1" />
                Achievement
              </Badge>
            </div>
            <CardTitle className="text-xl">DFWTT Raises the Bar for Maccabi Games Table Tennis</CardTitle>
            <CardDescription>2005</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              The Dallas JCC with the invaluable assistance of DFWTT raised the bar for what table tennis is and should
              be at the Maccabi Games! The tournament exceeded Maccabi Games expectations with professional draw
              designs, score keeping, and information management. DFWTT's involvement established new standards for
              table tennis competition at the games.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      <div className="text-center text-sm text-muted-foreground">
        <p>2005 was a historic year with Dallas hosting the JCC Maccabi Games and Team Dallas winning 16 medals</p>
        <p className="mt-2">
          <Link href="/news/archive" className="text-blue-600 hover:text-blue-800">
            ← Back to All Archives
          </Link>
        </p>
      </div>
    </div>
  )
}
