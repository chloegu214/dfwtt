import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Camera, Trophy, Users, Award, Star, Heart, BookOpen } from "lucide-react"
import Link from "next/link"

export default function Archive2009() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">2009 News Archive</h1>
        <p className="text-lg text-muted-foreground mb-6">
          A groundbreaking year featuring therapeutic programs, international success, and media recognition
        </p>

        {/* Year Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009].map(
            (year) => (
              <Link key={year} href={`/news/archive/${year}`}>
                <Badge variant={year === 2009 ? "default" : "secondary"} className="hover:bg-primary/80">
                  {year}
                </Badge>
              </Link>
            ),
          )}
        </div>
      </div>

      <div className="space-y-6">
        {/* November 2009 */}
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
            <CardTitle className="text-xl">2009 DFWTT Fall Open Tournament</CardTitle>
            <CardDescription>November 14, 2009 • JCC Dallas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              87 players participated. Ying Wang, newest resident to the Dallas area, won $300 in Singles Class A,
              defeating Yijun Feng ($200) 3-0 in the final. Nelson Ramos ($100) and Andrew Chen were semi-finalists.
              International participants included players from Monterrey, Mexico.
            </p>
            <div className="flex gap-2">
              <Link
                href="/results/2009#2009FallOpen"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Complete Results
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* October 2009 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-blue-50">
                <Users className="w-3 h-3 mr-1" />
                Program
              </Badge>
              <Badge variant="outline" className="bg-red-50">
                <Heart className="w-3 h-3 mr-1" />
                Special
              </Badge>
            </div>
            <CardTitle className="text-xl">Therapeutic Table Tennis Program</CardTitle>
            <CardDescription>October 2009</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Groundbreaking story of Paul Jerde's brain injury recovery through table tennis. After being hit by a
              truck in June 2008, Paul suffered severe head injury with no speech capabilities and limited mobility. His
              occupational therapist recommended ping-pong as therapy. Coach Donna worked with Paul, who was able to
              hold his paddle and hit balls while his wife Patty and son Buzz encouraged him during sessions.
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
            <CardTitle className="text-xl">Paralympic Table Tennis Exhibition at UTA</CardTitle>
            <CardDescription>October 17, 2009 • University of Texas at Arlington</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Coach Daniel was invited to participate in a Paralympic Sports Clinic. Coach Daniel and U.S. Paralympic
              players Pam Fontaine and James Segrest demonstrated how table tennis is played for disabled players. Over
              20 athletes participated in this multi-sport event organized by UTA Movin' Mavs.
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
              <Badge variant="outline" className="bg-red-50">
                <Star className="w-3 h-3 mr-1" />
                Celebrity
              </Badge>
            </div>
            <CardTitle className="text-xl">DFWTT Double Ten Table Tennis Tournament</CardTitle>
            <CardDescription>October 3, 2009 • Cimarron Rec Center</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              More than 90 players participated in 14+ different events. Andrew Chen won the championship, defeating
              James Rautis in the finals. Rick Carlisle, Dallas Mavericks Head Coach, made a surprise appearance to
              watch the competition. Donna Chen was recognized with an award for her 15+ years of dedication to table
              tennis in the DFW area.
            </p>
            <div className="flex gap-2">
              <Link
                href="/results/2009#2009DoubleTen"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Complete Results
              </Link>
              <a
                href="http://bbs.feiyer.com/thread-1976-1-1.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <Camera className="w-4 h-4 mr-1" />
                Tournament Pictures
              </a>
            </div>
          </CardContent>
        </Card>

        {/* September 2009 */}
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
            <CardTitle className="text-xl">2009 ParaPanAmerican Table Tennis Championship</CardTitle>
            <CardDescription>September 27 - October 4, 2009 • Margarita Island, Venezuela</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              USA Table Tennis Team swept 10 medals (6 gold, 2 silver, 2 bronze) at the most important Regional Table
              Tennis competition. Team USA finished 2nd in overall Gold medal count. Mitchell Seidenfeld and Pamela
              Fontaine received "ITTF PTT 2009 Best Players of the American Region" Awards. Coach Daniel Rutenberg
              served as Head Coach.
            </p>
            <div className="flex gap-2">
              <a
                href="http://www.ipttc.org/results/international/2009/parapanam/index.htm?PHPSESSID=f8dbfb0734babfc4bdcd17a532c18ea3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Official Results
              </a>
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
            <CardTitle className="text-xl">Coppell High School Ping-Pong Club</CardTitle>
            <CardDescription>September 23, 2009</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Coaches Donna and Daniel participated in the kick-off of the 2009 CHS Ping-Pong Club season with over 50
              students. They made an exhibition demonstrating how table tennis is played and involved students in
              activities. This was CHS's second year showing determination and interest in the sport.
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
            <CardTitle className="text-xl">Table Tennis Exhibition at GENBAND</CardTitle>
            <CardDescription>September 2, 2009 • Plano, Texas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Donna and Daniel were invited to GENBAND in Plano to kick-off their 1st company-wide ping-pong tournament.
              About 30 employees spent their lunch time with DFWTT. The exhibition included demonstrations with mini and
              oversized paddles, and DFWTT gave away a brand new paddle as a door prize.
            </p>
          </CardContent>
        </Card>

        {/* August 2009 */}
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
            <CardTitle className="text-xl">JCC Maccabi Games 2009</CardTitle>
            <CardDescription>August 2009 • San Antonio, Texas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Team Dallas won 10 out of 12 possible medals in table tennis competition! Under Coach Daniel Rutenberg's
              leadership, the 10-player team won 4 Gold medals, 3 Silver medals, and 3 Bronze medals. Athletes played in
              Singles and Doubles in 13-14 and 15-16 age categories. Thanks to JOOLA USA for their continued support.
            </p>
          </CardContent>
        </Card>

        {/* July 2009 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-yellow-50">
                <Award className="w-3 h-3 mr-1" />
                Achievement
              </Badge>
            </div>
            <CardTitle className="text-xl">Rutenberg Gets Recognized in Ecuador</CardTitle>
            <CardDescription>July 2009</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Coach Rutenberg was recognized by Marlon Vite, a cadet player from Ecuador. Daniel helped Marlon from the
              sidelines at the US Open in Las Vegas to secure 2nd place in the U-1750 rating event. The story was
              featured in Ecuador's "Opinion Deportiva" newspaper.
            </p>
            <div className="flex gap-2">
              <a
                href="http://www.diariopinion.com/deportes/verArticulo.php?id=56732"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Full Story (Spanish)
              </a>
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
            </div>
            <CardTitle className="text-xl">DFWTT at US Open 2009</CardTitle>
            <CardDescription>July 1-4, 2009 • Las Vegas, Nevada</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Coach Daniel Rutenberg participated at the US Open Table Tennis Championship with over 650 domestic and
              international players competing for over $29,000 in prize money. Thomas Keinath (Slovakia) won Men's
              Singles, while Gao Jun (USA) won Women's Singles. Texas was well represented with over 40 players,
              including 20+ from the DFW area.
            </p>
          </CardContent>
        </Card>

        {/* June 2009 */}
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
            <CardTitle className="text-xl">2009 DFWTT Spring Round Robin Tournament</CardTitle>
            <CardDescription>June 6, 2009 • JCC Dallas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              More than 80 players participated on 17 professional Butterfly tables. Wang Shuai won the Sanctioned Open
              Division Class A, defeating Simhsay Tongkhuya 3-0. The defending doubles champions Sara Fu and Eddy James
              Young defeated Roger Blydes and Carlito Almirol in this year's tournament.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-purple-50">
                <BookOpen className="w-3 h-3 mr-1" />
                Media
              </Badge>
            </div>
            <CardTitle className="text-xl">Dallas Morning News Article</CardTitle>
            <CardDescription>June 2009</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Daniel Rutenberg was highlighted and quoted throughout a Dallas Morning News article about table tennis
              making a comeback as a fun and inexpensive sport, especially during economic times. Club members Don
              Isgitt and Adam Moussa were also featured, along with coverage of the 2009 Spring Tournament.
            </p>
            <div className="flex gap-2">
              <a
                href="http://www.dallasnews.com/sharedcontent/dws/fea/lifetravel/stories/DN-nh_pingpong_0616gd.ART.State.Edition1.18c9605.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Read Article
              </a>
            </div>
          </CardContent>
        </Card>

        {/* May 2009 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-red-50">
                <Star className="w-3 h-3 mr-1" />
                Exhibition
              </Badge>
            </div>
            <CardTitle className="text-xl">DFWTT Exhibition at The Legacy at Willow Bend</CardTitle>
            <CardDescription>May 2009 • Plano</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Donna Chen and Daniel Rutenberg spent an afternoon demonstrating table tennis at the newest resort-like
              retirement community. About 35 people attended and participated in the clinic, with many questions about
              the sport and lots of playing time.
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
            <CardTitle className="text-xl">DFWTT Club Championship</CardTitle>
            <CardDescription>May 15, 2009 • Cimarron Location</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              After several weeks of outstanding matches, the 2009 DFWTT Club Championship concluded. Over 40 players
              participated on Mondays and Fridays. Class A champion was Kareem Moussa, followed by Wally Devereaux in
              2nd place. Class B champion was Charlie Olisa, with Stan Vosburgh as runner-up.
            </p>
          </CardContent>
        </Card>

        {/* April 2009 */}
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
            <CardTitle className="text-xl">2nd DFWTT High School Table Tennis Tournament</CardTitle>
            <CardDescription>April 25, 2009 • JCC Dallas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Brandon Gardner from Birdville High School won the championship! 17 students representing Birdville HS,
              Greenhill School, JJ Pearce HS, McKinney Boyd HS, Rockwall Heath HS, Southlake Carroll, and St. Marks
              School of Dallas played singles and doubles. The tournament doubled the number of participating schools
              from the previous year.
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
            <CardTitle className="text-xl">Table Tennis Clinic at Southlake Carroll High School</CardTitle>
            <CardDescription>April 14, 2009</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Coach Daniel Rutenberg visited Southlake Carroll High School for a table tennis clinic and exhibition.
              Over 60 kids from the 9th grade participated as part of their PE class. Students were divided into various
              groups for different skills and table tennis-related activities.
            </p>
          </CardContent>
        </Card>

        {/* March 2009 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-yellow-50">
                <Award className="w-3 h-3 mr-1" />
                Achievement
              </Badge>
            </div>
            <CardTitle className="text-xl">Rutenberg Gets Recognized in Machala Ecuador</CardTitle>
            <CardDescription>April 13, 2009</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Coach Daniel Rutenberg was recognized by Marlon Vite, a 13-year-old Cadet Player from Ecuador's National
              Team. Daniel had helped Marlon from the sidelines in past US Open tournaments. The recognition was
              featured in "Opinion Deportiva" of Machala, Ecuador.
            </p>
          </CardContent>
        </Card>

        {/* February 2009 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-blue-50">
                <Users className="w-3 h-3 mr-1" />
                Education
              </Badge>
            </div>
            <CardTitle className="text-xl">JJ Pearce High School Table Tennis Club</CardTitle>
            <CardDescription>February 16, 2009</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Donna Chen and Daniel Rutenberg did a clinic and exhibition at JJ Pearce HS. They were delighted to have
              one of the Principals in attendance along with students. The support of the Principal and school showed
              strong commitment to this extracurricular activity.
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
            <CardTitle className="text-xl">JCC Maccabi Games 2009 Tryouts</CardTitle>
            <CardDescription>February 2009</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              More than 25 athletes participated in tryouts for Team Dallas to participate at the JCC Maccabi Games 2009
              in August. Daniel Rutenberg served as Team Dallas table tennis head coach.
            </p>
          </CardContent>
        </Card>

        {/* January 2009 */}
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
            <CardTitle className="text-xl">DFWTT 2009 Texas Winter Games Tournament</CardTitle>
            <CardDescription>January 17, 2009 • Staley Middle School, Frisco</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Wang Shuai won the 2009 tournament! Over 120 table tennis athletes from Austin, Houston, Wichita Falls,
              Oklahoma, California, Tyler, and DFW participated. Competition was held on 19 Butterfly tournament tables
              in 16 different categories. DFWTT donated $2 per player to Rainbow Days, a non-profit children's
              educational organization.
            </p>
            <div className="flex gap-2">
              <Link
                href="/results/2009#2009WinterGames"
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
            <CardDescription>2009</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              DFWTT launched its charity program, making a $2 donation for each participant at DFWTT tournaments to
              non-profit children's educational organizations. By the end of 2009, DFWTT had contributed $1,514 total to
              various causes.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      <div className="text-center text-sm text-muted-foreground">
        <p>2009 featured 18 articles covering 35+ events with $1,514 raised for charity</p>
        <p className="mt-2">
          <Link href="/news/archive" className="text-blue-600 hover:text-blue-800">
            ← Back to All Archives
          </Link>
        </p>
      </div>
    </div>
  )
}
