import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Trophy, Users, Award, Star, Heart, BookOpen, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function Archive2008() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">2008 News Archive</h1>
        <p className="text-lg text-muted-foreground mb-6">
          A year of expansion featuring school programs, major tournaments, and community outreach
        </p>

        {/* Year Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008].map(
            (year) => (
              <Link key={year} href={`/news/archive/${year}`}>
                <Badge variant={year === 2008 ? "default" : "secondary"} className="hover:bg-primary/80">
                  {year}
                </Badge>
              </Link>
            ),
          )}
        </div>
      </div>

      <div className="space-y-6">
        {/* October 2008 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-blue-50">
                <Users className="w-3 h-3 mr-1" />
                Education
              </Badge>
            </div>
            <CardTitle className="text-xl">Coppell High School Table Tennis Exhibition</CardTitle>
            <CardDescription>October 17, 2008</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              DFWTT did a table tennis exhibition for the newest Coppell HS table tennis club with more than 75
              students. The club showed true colors, enthusiasm, and good talent for the sport. Daniel and Donna
              demonstrated fundamentals and got students involved in activities.
            </p>
          </CardContent>
        </Card>

        {/* September 2008 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-blue-50">
                <Users className="w-3 h-3 mr-1" />
                Education
              </Badge>
            </div>
            <CardTitle className="text-xl">JJ Pearce High School Table Tennis Club Clinic</CardTitle>
            <CardDescription>September 25, 2008</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              DFWTT did a table tennis clinic for the JJ Pearce High School table tennis club with another strong start
              to the academic year. More than 20 club members attended this first practice. Thanks to Mrs. Heider (club
              sponsor) and Allen Hung (club President) for their continued support.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-red-50">
                <Star className="w-3 h-3 mr-1" />
                Exhibition
              </Badge>
            </div>
            <CardTitle className="text-xl">Table Tennis Exhibition at Collin Creek Mall</CardTitle>
            <CardDescription>September 13, 2008 • Plano, Texas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              DFWTT participated in the 2nd annual Youth Explore Sports at Collin Creek Mall alongside many other
              Olympic sports. Donna Chen and Daniel Rutenberg introduced table tennis to Plano and Collin County
              residents with an exhibition where community members got involved.
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
            <CardTitle className="text-xl">2008 Double Ten Tournament</CardTitle>
            <CardDescription>September 27, 2008 • Cimarron Rec Center, Irving</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              More than 72 players participated on 14 tables celebrating Taiwanese festivities. Russ Hamilton won the
              championship, defeating Alex Wang in a spectacular match. Sara Fu and Eddie James Yang won the doubles
              competition, defeating Russ Hamilton & Kevin Tsai in the final. 15 different events were played.
            </p>
            <div className="flex gap-2">
              <Link
                href="/results/2008#2008DoubleTen"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Complete Results
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* August 2008 */}
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
            <CardTitle className="text-xl">JCC Maccabi Games 2008</CardTitle>
            <CardDescription>August 2008 • San Diego, California</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Team Dallas was well represented with 4 athletes and brought back three bronze medals in Singles Age 15-16
              and Doubles Ages 13-14 & 15-16 categories. More than 35 teenagers from 12 different cities represented
              table tennis. Team Dallas athletes: Alex Kaufman, Benji Leiner, Andrew Rubinett, and Teddy Garber.
            </p>
          </CardContent>
        </Card>

        {/* July 2008 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-purple-50">
                <BookOpen className="w-3 h-3 mr-1" />
                Media
              </Badge>
            </div>
            <CardTitle className="text-xl">Dallas Morning News Interview</CardTitle>
            <CardDescription>July 4, 2008</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Daniel Rutenberg was interviewed by the Dallas Morning News about the US Open 2008, providing insights
              into the tournament and the sport of table tennis.
            </p>
            <div className="flex gap-2">
              <a
                href="http://www.dallasnews.com/sharedcontent/dws/news/localnews/stories/070408dnmetpingpong.1c418ef8.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Read Interview
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-red-50">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Warning
              </Badge>
            </div>
            <CardTitle className="text-xl">Warning on Illegal Long Pips Rubbers</CardTitle>
            <CardDescription>July 1, 2008</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              USATT reminded players that a number of rubbers have been banned by the ITTF effective July 1, 2008.
              Players were advised to check the ITTF list of approved table tennis equipment to ensure compliance.
            </p>
            <div className="flex gap-2">
              <a
                href="http://www.ittf.com/ittf_equipment/pdf/Racket_list_no_29B.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                ITTF Equipment List
              </a>
            </div>
          </CardContent>
        </Card>

        {/* May 2008 */}
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
              <Badge variant="outline" className="bg-pink-50">
                <Heart className="w-3 h-3 mr-1" />
                Charity
              </Badge>
            </div>
            <CardTitle className="text-xl">DFWTT 2008 Spring Tournament</CardTitle>
            <CardDescription>May 31, 2008 • JCC Dallas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Ludovic Gombos won the DFWTT 2008 Spring Tournament! Over 100 players entered with competition on 17
              Butterfly tables in Giant Round Robin format. Gombos defeated Timothy Wang (Houston) in the 5th game after
              a classic match. The tournament attracted players from Texas, Oklahoma, and Louisiana. DFWTT donated $2
              per player to children's education and earthquake relief in China.
            </p>
            <div className="flex gap-2">
              <Link
                href="/results/2008#2008SpringOpen"
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
              <Badge variant="outline" className="bg-blue-50">
                <Users className="w-3 h-3 mr-1" />
                Education
              </Badge>
            </div>
            <CardTitle className="text-xl">JJ Pearce High School Table Tennis Club Exhibition</CardTitle>
            <CardDescription>May 8, 2008</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              DFWTT did a table tennis exhibition for the newest JJ Pearce High School Table Tennis Club. With
              attendance from the assistant Principal, sponsored teachers, faculty, and club members, DFWTT demonstrated
              how table tennis is played and got students involved in fundamentals and drills.
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
              <Badge variant="outline" className="bg-blue-50">
                <Users className="w-3 h-3 mr-1" />
                Education
              </Badge>
            </div>
            <CardTitle className="text-xl">1st High School Invitational Table Tennis Championship</CardTitle>
            <CardDescription>May 4, 2008 • JCC Dallas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Stephen Shropshire (Jesuit) defeated Allen Hung (JJ Pearce) 3-0 in Class A finals to win the first
              championship! Alex Kaufman (JCC Akiba) won Class B. 17 players representing 4 different area high schools
              participated in this experimental event to set foundations for an annual high school tournament.
            </p>
            <div className="flex gap-2">
              <Link
                href="/results/2008#2008HSInvitational"
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
              <Badge variant="outline" className="bg-yellow-50">
                <Award className="w-3 h-3 mr-1" />
                Achievement
              </Badge>
            </div>
            <CardTitle className="text-xl">14 New Butterfly Tables Assembled</CardTitle>
            <CardDescription>May 4, 2008</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              DFWTT received 14 new Match Rollway tables that were assembled and ready for use! These sanctioned tables
              were used in the upcoming Spring Tournament. Special thanks to volunteers Vic, Teres, Tom, Larry, Carl,
              Allysa, Andrew, and Aston for helping with assembly.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-blue-50">
                <Users className="w-3 h-3 mr-1" />
                Education
              </Badge>
            </div>
            <CardTitle className="text-xl">Table Tennis for the 1st Time in McKinney Texas</CardTitle>
            <CardDescription>May 2, 2008 • Reuben Johnson Elementary School</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              DFWTT was present at Reuben Johnson Elementary School where over 350 students saw table tennis for the
              first time. Students were split by grades (3rd, 4th, 5th) and learned about table tennis history, when it
              became Olympic, and had hands-on experience playing against Newgy's Robo-pong 2040. Thanks to Lisa Stout
              and the PE Teachers team.
            </p>
          </CardContent>
        </Card>

        {/* April 2008 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-blue-50">
                <Users className="w-3 h-3 mr-1" />
                Program
              </Badge>
            </div>
            <CardTitle className="text-xl">NEW - After School Program in Plano, Texas</CardTitle>
            <CardDescription>April 22, 2008 • Jessie Marie Riddle Elementary School</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              DFWTT started its newest after school program with unconditional support from Coach Gregg Hatt. Over 20
              kids ages 6-11 were excited to learn about table tennis. Parents got involved in initial drills and had
              opportunity to share with their kids. The program runs every Tuesday evening.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-blue-50">
                <Users className="w-3 h-3 mr-1" />
                Education
              </Badge>
            </div>
            <CardTitle className="text-xl">JJ Pearce High School Table Tennis Club Formation</CardTitle>
            <CardDescription>April 2008</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Congratulations to JJ Pearce High School in Richardson for creating their table tennis club! With DFWTT's
              support, advice, and expertise, JJ Pearce managed to get 5 tables and 72 registered club members. Special
              thanks to Allen Hung, Mrs. Kim Heider, and Mrs. Marilynn Moore for their efforts.
            </p>
          </CardContent>
        </Card>

        {/* February 2008 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-green-50">
                <Trophy className="w-3 h-3 mr-1" />
                Tournament
              </Badge>
            </div>
            <CardTitle className="text-xl">Maccabi Games 2008 Tryouts</CardTitle>
            <CardDescription>February 2008</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Over 30 athletes participated in table tennis tryouts to secure 4 spots for Team Dallas representing JCC
              Dallas in the Maccabi Games 2008 in San Diego, California. Practices were underway twice a week under Head
              Coach Daniel Rutenberg's coordination.
            </p>
          </CardContent>
        </Card>

        {/* January 2008 */}
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
              <Badge variant="outline" className="bg-pink-50">
                <Heart className="w-3 h-3 mr-1" />
                Charity
              </Badge>
            </div>
            <CardTitle className="text-xl">DFW Table Tennis 2008 Texas Winter Games</CardTitle>
            <CardDescription>January 12, 2008 • Frisco Athletic Center</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Ludovic Gombos won the 2008 DFWTT Texas Winter Games Tournament! Over 70 table tennis athletes from
              Austin, Houston, Minneapolis, Arkansas, Oklahoma, and DFW participated. Newgy Industries donated a
              Robo-Pong 2040 that was raffled among players and spectators, won by Junior Player Sam Lu. DFWTT donated
              $2 per player to Rainbow Days.
            </p>
            <div className="flex gap-2">
              <Link
                href="/results/2008#2008WinterGames"
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
            <CardDescription>2008</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              DFWTT started a new initiative to help organizations devoted to children's education. For each participant
              at DFWTT tournaments, DFWTT makes a $2 donation to non-profit children's educational organizations. By
              2008, DFWTT had contributed $735 total.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      <div className="text-center text-sm text-muted-foreground">
        <p>2008 featured comprehensive coverage with school program expansion and community outreach</p>
        <p className="mt-2">
          <Link href="/news/archive" className="text-blue-600 hover:text-blue-800">
            ← Back to All Archives
          </Link>
        </p>
      </div>
    </div>
  )
}
