import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Trophy, Users, Award, Star } from "lucide-react"
import Link from "next/link"

export default function Archive2006() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">2006 News Archive</h1>
        <p className="text-lg text-muted-foreground mb-6">
          A year of growth featuring major tournaments, youth development, and national recognition
        </p>

        {/* Year Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007,
            2006,
          ].map((year) => (
            <Link key={year} href={`/news/archive/${year}`}>
              <Badge variant={year === 2006 ? "default" : "secondary"} className="hover:bg-primary/80">
                {year}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {/* November 2006 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-green-50">
                <Trophy className="w-3 h-3 mr-1" />
                Tournament
              </Badge>
            </div>
            <CardTitle className="text-xl">Fall 2006 Open Tournament</CardTitle>
            <CardDescription>November 2006 • Cimarron, Irving TX</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              67 players participated with 337 matches played during intense competition. Ludovic Gombos won the Open
              Championship, with Winfrey Addy from Oklahoma finishing in 2nd place. The tournament featured multiple
              rating events and age categories.
            </p>
          </CardContent>
        </Card>

        {/* October 2006 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-green-50">
                <Trophy className="w-3 h-3 mr-1" />
                Tournament
              </Badge>
            </div>
            <CardTitle className="text-xl">2006 Double Ten Tournament</CardTitle>
            <CardDescription>October 2006</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              The traditional Double Ten tournament was once again a complete success. This non-sanctioned tournament
              provided events based on age, singles, and doubles. Russ Hamilton won the Singles Division, followed by
              Alex Wong (2nd) and Rodovan Polasek (3rd). In Women's Division, Serena Kong finished 1st, Judy Chen 2nd,
              and Helen Deng 3rd.
            </p>
          </CardContent>
        </Card>

        {/* August 2006 */}
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
            <CardTitle className="text-xl">JCC Maccabi Games 2006</CardTitle>
            <CardDescription>August 2006 • Phoenix, Arizona</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Team Dallas ended with two finalist medals during the summer JCC Maccabi Games 2006. 10 players ages 12-16
              tried out for 2 spots to represent Team Dallas. More than 500 games were played with over 5,000 points
              scored during the 4-day competition. 39 athletes from 12 cities represented table tennis, including U.S.,
              Australia, Mexico, and Israel. Athletes: Collin Ray and Andrew Rubinett.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-red-50">
                <Star className="w-3 h-3 mr-1" />
                Special
              </Badge>
            </div>
            <CardTitle className="text-xl">Meeting with World Champion Tybie Sommer</CardTitle>
            <CardDescription>August 2006 • JCC Maccabi Games</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              All table tennis athletes during the JCC Maccabi Games had an opportunity to meet Tybie (Thelma) Sommer,
              former World Mixed Doubles champion (with Dick Miles). They listened to her successful story about her
              World Championship experience in 1948!
            </p>
          </CardContent>
        </Card>

        {/* April 2006 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-green-50">
                <Trophy className="w-3 h-3 mr-1" />
                Tournament
              </Badge>
              <Badge variant="outline" className="bg-blue-50">
                <Users className="w-3 h-3 mr-1" />
                Program
              </Badge>
            </div>
            <CardTitle className="text-xl">NCTTA and ACUI Collegiate Championships</CardTitle>
            <CardDescription>April 2006 • Texas Wesleyan, Fort Worth</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              DFWTT participated in the National Collegiate Table Tennis Association (NCTTA) and ACUI Collegiate
              Championships. Donna Chen and Daniel Rutenberg were involved in planning, execution, and participation
              under the Sport Information division. Their volunteer contribution helped ensure the success of this
              important table tennis community event.
            </p>
          </CardContent>
        </Card>

        {/* March 2006 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-green-50">
                <Trophy className="w-3 h-3 mr-1" />
                Tournament
              </Badge>
            </div>
            <CardTitle className="text-xl">Spring 2006 Open Tournament</CardTitle>
            <CardDescription>March 2006 • Cimarron, Irving TX</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              112 players participated with 530 matches played! Ludovic Gombos from Texas Wesleyan University won the
              tournament, defeating his teammate Courtney Roberts who finished in 2nd place. The tournament featured
              multiple divisions, rating events, and age categories, establishing it as a major regional competition.
            </p>
          </CardContent>
        </Card>

        {/* Early 2006 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-red-50">
                <Star className="w-3 h-3 mr-1" />
                Exhibition
              </Badge>
            </div>
            <CardTitle className="text-xl">Clinic at First United Methodist of Coppell</CardTitle>
            <CardDescription>Early 2006</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              DFWTT started the year with a clinic and exhibition at the First United Methodist of Coppell. Kim Kill-Soo
              and Daniel Rutenberg demonstrated how table tennis is played to over 100 church members during their 1st
              Pre-Super Bowl Ping Pong Tournament.
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
            <CardTitle className="text-xl">Daniel Rutenberg: USATT Volunteer Coach of the Year 2005</CardTitle>
            <CardDescription>2006 Recognition</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Daniel Rutenberg was awarded the recognition of Volunteer Coach of the Year 2005 by USATT and was one of
              the top 5 finalists for the Volunteer Coach of the Year Award by the United States Olympic Committee.
              Coach Rutenberg was the first-ever top 5 finalist nominated by the USOC for Volunteer Coach of the Year.
              Congratulations Daniel!
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
            <CardTitle className="text-xl">DFWTT Youth Training Program Growth</CardTitle>
            <CardDescription>2006</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              The DFWTT Youth Training Program continued its growth and became one of the most significant activities in
              developing young players and contributing to the table tennis community in the DFW area. The after-school
              and specialized training programs provided quality training for those stepping into table tennis,
              especially at a young age. Supported by coaches: Donna Chen, Coach Li, Keith Evans, and Daniel Rutenberg.
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
            <CardTitle className="text-xl">JCC Maccabi Games Program Development</CardTitle>
            <CardDescription>2006</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              DFWTT was involved with the Jewish Community Center (JCC) Maccabi Games program. Team Dallas held
              practices twice a week for well over 5 months between March and August 2006. An invitational championship
              was held prior to the Games. The program was coordinated by Daniel Rutenberg, Head Coach Team Dallas for
              table tennis.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      <div className="text-center text-sm text-muted-foreground">
        <p>2006 featured major tournament growth and the establishment of comprehensive youth programs</p>
        <p className="mt-2">
          <Link href="/news/archive" className="text-blue-600 hover:text-blue-800">
            ← Back to All Archives
          </Link>
        </p>
      </div>
    </div>
  )
}
