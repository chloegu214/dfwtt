import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Camera, Trophy, Users, Award, Star, Heart, Zap } from "lucide-react"
import Link from "next/link"

export default function Archive2010() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">2010 News Archive</h1>
        <p className="text-lg text-muted-foreground mb-6">
          A landmark year featuring celebrity tournaments, world records, and international achievements
        </p>

        {/* Year Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009].map(
            (year) => (
              <Link key={year} href={`/news/archive/${year}`}>
                <Badge variant={year === 2010 ? "default" : "secondary"} className="hover:bg-primary/80">
                  {year}
                </Badge>
              </Link>
            ),
          )}
        </div>
      </div>

      <div className="space-y-6">
        {/* December 2010 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-blue-50">
                <Camera className="w-3 h-3 mr-1" />
                Photos
              </Badge>
            </div>
            <CardTitle className="text-xl">Fall World Peace TT Pictures</CardTitle>
            <CardDescription>December 4, 2010</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Plano TT club hosted its Fall World Peace Table Tennis Tournament at the Tom Muehlenbeck center. Grant
              Bergmann made his photos available from the tournament.
            </p>
            <div className="flex gap-2">
              <a
                href="https://onedrive.live.com/?id=ACD8701C94F053F8!32638&cid=ACD8701C94F053F8&group=0&authkey=!AKcgmCROzFdmxwo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                View Photos
              </a>
            </div>
          </CardContent>
        </Card>

        {/* November 2010 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-green-50">
                <Trophy className="w-3 h-3 mr-1" />
                Tournament
              </Badge>
              <Badge variant="outline" className="bg-purple-50">
                <Camera className="w-3 h-3 mr-1" />
                Photos
              </Badge>
              <Badge variant="outline" className="bg-orange-50">
                Results
              </Badge>
            </div>
            <CardTitle className="text-xl">2010 DFWTT Fall Open Tournament</CardTitle>
            <CardDescription>November 13, 2010 • JCC Dallas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              More than 80 players participated. Yijun Feng won $300 in Singles Class A, defeating Chance Friend ($200)
              in the final. Nelson Ramos and Petri Heinonen were semi-finalists. Multiple divisions and age categories
              were contested.
            </p>
            <div className="flex gap-2">
              <Link
                href="/results/2010#2010FallOpen"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Results
              </Link>
              <a
                href="https://onedrive.live.com/?id=acd8701c94f053f8%2132397&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <Camera className="w-4 h-4 mr-1" />
                Grant's Photos
              </a>
              <a
                href="http://www.flickr.com/photos/43269950@N05/sets/72157625315681827/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <Camera className="w-4 h-4 mr-1" />
                Flickr Gallery
              </a>
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
            <CardTitle className="text-xl">Coach Rutenberg Achieves ITTF PTT Level 1 Certification</CardTitle>
            <CardDescription>November 2010</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Four USATT coaches completed their ITTF PTT Level 1 accreditation, including Coach Daniel Rutenberg.
            </p>
            <div className="flex gap-2">
              <a
                href="http://www.usatt.org/news1/four_new_ittf_level_coaches.shtml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                USATT Article
              </a>
            </div>
          </CardContent>
        </Card>

        {/* October 2010 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-green-50">
                <Trophy className="w-3 h-3 mr-1" />
                Tournament
              </Badge>
              <Badge variant="outline" className="bg-purple-50">
                <Camera className="w-3 h-3 mr-1" />
                Photos
              </Badge>
              <Badge variant="outline" className="bg-orange-50">
                Results
              </Badge>
              <Badge variant="outline" className="bg-red-50">
                <Users className="w-3 h-3 mr-1" />
                Special
              </Badge>
            </div>
            <CardTitle className="text-xl">DFWTT 2010 Chinese Double Ten Celebration Tournament</CardTitle>
            <CardDescription>October 9, 2010 • Cimarron Recreation Center, Irving</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              More than 70 players participated in 13 different events. Russ Hamilton won the championship, defeating
              Yijun Feng in the finals. Jason Lai, Deputy Director-General of the Taipei Economic & Cultural Office in
              Houston, and Stella Fang attended the tournament.
            </p>
            <div className="flex gap-2">
              <Link
                href="/results/2010#2010ChineseDoubleTen"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Results
              </Link>
              <a
                href="https://onedrive.live.com/?id=ACD8701C94F053F8%2132398&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <Camera className="w-4 h-4 mr-1" />
                Grant's Photos
              </a>
              <a
                href="http://www.flickr.com/photos/43269950@N05/sets/72157625164396672/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <Camera className="w-4 h-4 mr-1" />
                Flickr Gallery
              </a>
            </div>
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
            <CardTitle className="text-xl">DFWTT at Hotel Zaza in Uptown Dallas</CardTitle>
            <CardDescription>October 1, 2010</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              DFW Table Tennis showcased the Olympic sport at the prestigious Hotel Zaza. Nelson Ramos and Daniel
              Rutenberg delighted guests at the luxurious boutique hotel, starting at the driveway next to Dragonfly
              restaurant and moving to the Zaza Art House.
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
            <CardTitle className="text-xl">Coach Daniel Rutenberg Earns ITTF Course Conductor Status</CardTitle>
            <CardDescription>October 2010</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Coach Rutenberg achieved ITTF Course Conductor status, adding to his growing list of international
              certifications.
            </p>
            <div className="flex gap-2">
              <a
                href="http://www.usatt.org/news1/usatt_coaches_ittf_status.shtml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                USATT Article
              </a>
            </div>
          </CardContent>
        </Card>

        {/* September 2010 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-yellow-50">
                <Award className="w-3 h-3 mr-1" />
                Achievement
              </Badge>
            </div>
            <CardTitle className="text-xl">ITTF PTT Level 1 Coaching Certification Seminars</CardTitle>
            <CardDescription>September 5-11, 2010 • Olympic Training Center, Colorado Springs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Coach Daniel Rutenberg attended the first ever ITTF PTT Level 1 Coaching Certification and Course
              Conductor Seminars in the USA. 23 coaches nationwide participated, with Glenn Tepper (ITTF Executive
              Director of Development) as course conductor.
            </p>
            <div className="flex gap-2">
              <a
                href="http://www.ittf.com/_front_page/ittf_full_story1.asp?ID=22040&Category=General&Competition_ID=&"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                ITTF Article
              </a>
            </div>
          </CardContent>
        </Card>

        {/* August 2010 */}
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
            <CardTitle className="text-xl">
              1st Copa Costa Rica 2010 - U.S. Paralympic Table Tennis Wins 6 Medals
            </CardTitle>
            <CardDescription>August 10-15, 2010 • San Jose, Costa Rica</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Coach Daniel Rutenberg led Team USA at the 1st Copa Costa Rica 2010. Team USA won 6 medals total in Open,
              Singles by Class, and Team competitions across the different Paralympic classes.
            </p>
            <div className="flex gap-2">
              <a
                href="http://www.ipttc.org/results/international/2010/costarica/index.htm"
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
            <CardTitle className="text-xl">JCC Maccabi Games 2010</CardTitle>
            <CardDescription>August 2010 • Omaha, Nebraska</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Team Dallas Table Tennis won 7 medals at the JCC Maccabi Games 2010. Under Coach Daniel Rutenberg's
              leadership, the 3-player team (Jonathan Ochstein, Kevin Chaiken, Samuel Waranch) won 3 Gold, 1 Silver, and
              3 Bronze medals. Thanks to JOOLA USA for their continued support.
            </p>
          </CardContent>
        </Card>

        {/* July 2010 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-green-50">
                <Trophy className="w-3 h-3 mr-1" />
                Tournament
              </Badge>
            </div>
            <CardTitle className="text-xl">JCC Juniors Closed Tournament</CardTitle>
            <CardDescription>July 28, 2010 • JCC Dallas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              11 players ages 10-17 were invited to play in preparation for Team Dallas attending the JCC Maccabi Games.
              The tournament included excellent Cadet and Junior players from around the Metroplex and 2 international
              players from Venezuela.
            </p>
          </CardContent>
        </Card>

        {/* June 2010 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-blue-50">
                <Users className="w-3 h-3 mr-1" />
                Program
              </Badge>
            </div>
            <CardTitle className="text-xl">Paralympic Table Tennis Camp</CardTitle>
            <CardDescription>June 12-13, 2010 • Newington, CT</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              DFWTT participated in the Paralympic Table Tennis Camp, continuing efforts to develop disabled athletes in
              table tennis.
            </p>
            <div className="flex gap-2">
              <a
                href="http://www.usatt.org/news1/paralympic_tt_camp.shtml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                USATT Article
              </a>
            </div>
          </CardContent>
        </Card>

        {/* May 2010 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-yellow-50">
                <Award className="w-3 h-3 mr-1" />
                Achievement
              </Badge>
            </div>
            <CardTitle className="text-xl">USATT Appoints New Para Table Tennis National Coach</CardTitle>
            <CardDescription>May 2010</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Daniel Rutenberg was named Paralympics National Team Coach by USATT, expanding his role in developing
              Paralympic table tennis.
            </p>
            <div className="flex gap-2">
              <a
                href="http://www.usatt.org/news1/rutenberg.shtml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                USATT Announcement
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-red-50">
                <Zap className="w-3 h-3 mr-1" />
                Special
              </Badge>
            </div>
            <CardTitle className="text-xl">World's Largest Table Tennis Paddle Record Attempt</CardTitle>
            <CardDescription>May 3, 2010 • Cimarron Club</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Todd Thomas from Corinth, Texas attempted to set a new Guinness world record with the world's largest ping
              pong paddle. The paddle measured 106 inches (8.8 feet) tall, 70 inches (5.8 feet) in diameter, and 2¾
              inches thick. Scott Ryan, USATT Certified Referee, worked with Todd to ensure the paddle met all
              requirements.
            </p>
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
            <CardTitle className="text-xl">Charity Program Donation</CardTitle>
            <CardDescription>May 2010</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              A $100 donation went to Rainbow Days towards their kids reading program. The non-profit organization
              provides important life skills children need to overcome adversity and stay drug-free.
            </p>
            <div className="flex gap-2">
              <a
                href="http://www.rdikids.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Rainbow Days
              </a>
            </div>
          </CardContent>
        </Card>

        {/* April 2010 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-green-50">
                <Trophy className="w-3 h-3 mr-1" />
                Tournament
              </Badge>
              <Badge variant="outline" className="bg-purple-50">
                <Camera className="w-3 h-3 mr-1" />
                Photos
              </Badge>
              <Badge variant="outline" className="bg-orange-50">
                Results
              </Badge>
              <Badge variant="outline" className="bg-pink-50">
                <Heart className="w-3 h-3 mr-1" />
                Charity
              </Badge>
            </div>
            <CardTitle className="text-xl">2010 DFWTT Spring Tournament</CardTitle>
            <CardDescription>April 17, 2010 • JCC Dallas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Andrew Chen won the tournament! At least 90 players entered 19 different events on 17 sanctioned Butterfly
              tables. The tournament attracted players from across Texas and featured both sanctioned and non-sanctioned
              events. DFWTT donated $2 per player to FNDR Foundation for kids' education.
            </p>
            <div className="flex gap-2">
              <Link
                href="/results/2010#2010SpringOpen"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Results
              </Link>
              <a
                href="http://www.flickr.com/photos/43269950@N05/sets/72157623821749421/"
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

        {/* March 2010 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-red-50">
                <Star className="w-3 h-3 mr-1" />
                Celebrity
              </Badge>
              <Badge variant="outline" className="bg-purple-50">
                <Camera className="w-3 h-3 mr-1" />
                Photos
              </Badge>
              <Badge variant="outline" className="bg-pink-50">
                <Heart className="w-3 h-3 mr-1" />
                Charity
              </Badge>
            </div>
            <CardTitle className="text-xl">First Annual Celebrity PurplePingPong Tournament</CardTitle>
            <CardDescription>March 14, 2010 • Moody Coliseum, SMU</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Historic event featuring 16 Celebrity Teams and 12 top-ranked national table tennis players to benefit the
              Pancreatic Cancer Action Network. Celebrities included Dirk Nowitzki, Jason Terry, JJ Barea, Nastia
              Liukin, Caron Butler, and Coach Rick Carlisle. Team V. Liukin won the Celebrity Championship, while Mark
              Hazinski won the Table Tennis Challenge.
            </p>
            <div className="flex gap-2">
              <a
                href="http://www.flickr.com/photos/43269950@N05/sets/72157623640446870/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <Camera className="w-4 h-4 mr-1" />
                Tournament Pictures
              </a>
              <a
                href="http://www.pancan.org/pingpong/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Official Website
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-red-50">
                <Star className="w-3 h-3 mr-1" />
                Celebrity
              </Badge>
              <Badge variant="outline" className="bg-red-50">
                <Star className="w-3 h-3 mr-1" />
                Exhibition
              </Badge>
            </div>
            <CardTitle className="text-xl">NBA Halftime Table Tennis Exhibition</CardTitle>
            <CardDescription>March 3, 2010 • American Airlines Center</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Four Texas Wesleyan University table tennis athletes showcased table tennis during halftime of the Dallas
              Mavericks vs. Minnesota Timberwolves game. Mark Hazinski, Sara Fu Hazinski, Chance Friend, and Aldis
              Presley entertained over 19,000 fans for 4 minutes, promoting the upcoming Purple Ping Pong tournament.
            </p>
            <div className="flex gap-2">
              <a
                href="http://friends.mavs.com/photo/albums/texas-wesleyan-table-tennis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <Camera className="w-4 h-4 mr-1" />
                Post-Game Photos
              </a>
            </div>
          </CardContent>
        </Card>

        {/* January 2010 */}
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
            <CardTitle className="text-xl">DFWTT 2010 Texas Winter Games Tournament</CardTitle>
            <CardDescription>January 16, 2010 • Staley Middle School, Frisco</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Timothy Wang from Houston won the 2010 classic! 135 players from Houston, Wichita Falls, Oklahoma, Paris
              TX, and DFW area competed in 22 different categories on 24 Butterfly tournament tables. The tournament
              featured both USATT sanctioned and non-sanctioned events. Funds were donated to Haiti relief efforts.
            </p>
            <div className="flex gap-2">
              <Link
                href="/results/2010#2010WinterGames"
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
            <CardTitle className="text-xl">2009 Coach of the Year Announcement</CardTitle>
            <CardDescription>January 2010</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Daniel Rutenberg was awarded the 2009 Paralympic Coach of the Year by USATT, joining three other coaches
              recognized for their dedication to athletes and the sport of table tennis.
            </p>
            <div className="flex gap-2">
              <a
                href="http://www.usatt.org/news1/2009_coaches+_of_the_year.shtml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                USATT Announcement
              </a>
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
            <CardTitle className="text-xl">Charity Program Update</CardTitle>
            <CardDescription>January 2010</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              A $316 donation was sent to help school reconstruction plans after the August 8, 2009 Typhoon disaster in
              Taiwan. DFWTT's ongoing charity program has contributed $2,442 total to various organizations.
            </p>
            <div className="flex gap-2">
              <a
                href="http://www.ocac.gov.tw/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                OCAC Website
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      <div className="text-center text-sm text-muted-foreground">
        <p>
          2010 featured 15 articles covering 30+ events with major celebrity involvement and international achievements
        </p>
        <p className="mt-2">
          <Link href="/news/archive" className="text-blue-600 hover:text-blue-800">
            ← Back to All Archives
          </Link>
        </p>
      </div>
    </div>
  )
}
