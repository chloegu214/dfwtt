import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink, Camera, Trophy, Users, Award, Newspaper, GraduationCap } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    id: 1,
    title: "2009 DFWTT Fall Open Tournament",
    date: "November 14, 2009",
    category: "Tournament",
    description:
      "87 players participated at the JCC. Ying Wang, newest resident to the Dallas area, won $300 in Singles Class A defeating 3-0 Yijun Feng ($200) in the final.",
    hasPhotos: true,
    hasResults: true,
    highlights: [
      "87 players",
      "Ying Wang champion",
      "International participants from Mexico",
      "Complete results available",
    ],
  },
  {
    id: 2,
    title: "Table Tennis Brain Therapy Story",
    date: "November 2009",
    category: "Program",
    description:
      "Paul Jerde, who suffered severe head injury from a bike accident, was recommended ping-pong as therapy. Coach Donna has been working with Paul to help his recovery using table tennis.",
    hasPhotos: true,
    hasResults: false,
    highlights: ["Brain injury recovery", "Therapeutic table tennis", "Coach Donna sessions", "Family support"],
  },
  {
    id: 3,
    title: "Paralympic Table Tennis Exhibition at UTA",
    date: "October 17, 2009",
    category: "Exhibition",
    description:
      "Coach Daniel was invited to participate in a Paralympic Sports Clinic at The University of Texas in Arlington (UTA) with U.S. Paralympic players Pam Fontaine and James Segrest.",
    hasPhotos: false,
    hasResults: false,
    highlights: ["UTA Movin' Mavs", "20+ athletes participated", "Paralympic demonstration", "Community exposure"],
  },
  {
    id: 4,
    title: "2009 ParaPanAmerican Table Tennis Championship",
    date: "September 27 - October 4, 2009",
    category: "Achievement",
    description:
      "USA Table Tennis Team sweeps 10 medals at the most important Regional Table Tennis competition in Margarita Island, Venezuela. Team USA finished 2nd in overall Gold medal count.",
    hasPhotos: true,
    hasResults: true,
    externalLink:
      "http://www.ipttc.org/results/international/2009/parapanam/index.htm?PHPSESSID=f8dbfb0734babfc4bdcd17a532c18ea3",
    highlights: [
      "10 medals total",
      "6 Gold, 2 Silver, 2 Bronze",
      "Coach Daniel Rutenberg Head Coach",
      "Mitchell Seidenfeld & Pamela Fontaine awards",
    ],
  },
  {
    id: 5,
    title: "Coppell High School Ping-Pong Club",
    date: "September 23, 2009",
    category: "Education",
    description:
      "Coaches Donna and Daniel were invited to participate in the kick-off of the 2009 CHS Ping-Pong Club season activities with over 50 students participating.",
    hasPhotos: false,
    hasResults: false,
    highlights: ["50+ students", "Second year program", "Ms. Binder sponsor", "Davy Mares President"],
  },
  {
    id: 6,
    title: "Donna Chen Recognition by DFWTT Members",
    date: "October 3, 2009",
    category: "Recognition",
    description:
      "Donna Chen was recognized by club members for her continued dedication and efforts in promoting table tennis in the DFW area for the past 15 years!",
    hasPhotos: true,
    hasResults: false,
    highlights: [
      "15 years of service",
      "Commemorative award",
      "Member appreciation",
      "Double Ten tournament presentation",
    ],
  },
  {
    id: 7,
    title: "DFWTT Double Ten Table Tennis Tournament",
    date: "October 3, 2009",
    category: "Tournament",
    description:
      "DFWTT celebrated its regular Double Ten tournament at Cimarron Rec Center with more than 90 players. Rick Carlisle, Dallas Mavericks' Head Coach made a special appearance!",
    hasPhotos: true,
    hasResults: true,
    externalLink: "http://bbs.feiyer.com/thread-1976-1-1.html",
    highlights: ["90+ players", "Rick Carlisle appearance", "Andrew Chen champion", "14 different events"],
  },
  {
    id: 8,
    title: "Table Tennis Exhibition at GENBAND",
    date: "September 2, 2009",
    category: "Exhibition",
    description:
      "Donna and Daniel were invited to GENBAND in Plano to kick-off their 1st Company wide ping-pong tournament with an exhibition for about 30 employees.",
    hasPhotos: false,
    hasResults: false,
    highlights: ["30 employees", "Company tournament kick-off", "Lunch time exhibition", "Door prize paddle"],
  },
  {
    id: 9,
    title: "JCC Maccabi Games 2009",
    date: "August 2009",
    category: "Achievement",
    description:
      "Team Dallas won 10 out of 12 possible medals in the table tennis competition in San Antonio. Under Coach Daniel Rutenberg's leadership, the team with 10 players excelled.",
    hasPhotos: true,
    hasResults: false,
    highlights: ["10 out of 12 medals", "4 Gold, 3 Silver, 3 Bronze", "San Antonio venue", "JOOLA USA support"],
  },
  {
    id: 10,
    title: "Rutenberg Recognition in Ecuador",
    date: "July 2009",
    category: "Recognition",
    description:
      "Coach Rutenberg gets recognized by Marlon Vite, a cadet player from Ecuador. Daniel helped Marlon from the sidelines at the US Open in Las Vegas to secure 2nd place in U-1750.",
    hasPhotos: false,
    hasResults: false,
    externalLink: "http://www.diariopinion.com/deportes/verArticulo.php?id=56732",
    highlights: ["Ecuador recognition", "US Open Las Vegas", "U-1750 2nd place", "International coaching"],
  },
  {
    id: 11,
    title: "DFWTT at US Open 2009 in Las Vegas",
    date: "July 1-4, 2009",
    category: "Tournament",
    description:
      "Coach Daniel Rutenberg participated at the US Open Table Championship in Las Vegas with more than 650 domestic and international players competing for over $29,000 total purse prize!",
    hasPhotos: true,
    hasResults: false,
    highlights: ["650+ players", "$29,000 purse", "57 different events", "Texas well represented with 40+ players"],
  },
  {
    id: 12,
    title: "2009 DFWTT Spring Round Robin Tournament",
    date: "June 6, 2009",
    category: "Tournament",
    description:
      "More than 80 players participated in this fun and popular round robin sanctioned event at the JCC in Dallas on 17 professional Butterfly tables.",
    hasPhotos: true,
    hasResults: true,
    highlights: ["80+ players", "Wang Shuai champion", "17 Butterfly tables", "Round robin format"],
  },
  {
    id: 13,
    title: "Dallas Morning News Article Feature",
    date: "June 2009",
    category: "Media",
    description:
      "Daniel Rutenberg was highlighted and quoted throughout an article about table tennis making a huge comeback. Club members Don Isgitt and Adam Moussa were also featured.",
    hasPhotos: false,
    hasResults: false,
    externalLink:
      "http://www.dallasnews.com/sharedcontent/dws/fea/lifetravel/stories/DN-nh_pingpong_0616gd.ART.State.Edition1.18c9605.html",
    highlights: [
      "Dallas Morning News",
      "Table tennis comeback story",
      "Don Isgitt & Adam Moussa featured",
      "2009 Spring Tournament coverage",
    ],
  },
  {
    id: 14,
    title: "DFWTT Exhibition at The Legacy at Willow Bend",
    date: "May 2009",
    category: "Exhibition",
    description:
      "Donna Chen and Daniel Rutenberg spent an afternoon demonstrating table tennis to new and prospective residents of the Legacy at Willow Bend retirement community in Plano.",
    hasPhotos: false,
    hasResults: false,
    highlights: ["35 people attended", "Retirement community", "Plano venue", "Senior outreach"],
  },
  {
    id: 15,
    title: "2nd DFWTT High School Table Tennis Tournament",
    date: "April 25, 2009",
    category: "Education",
    description:
      "Brandon Gardner from Birdville High School is the champion! 17 students representing 7 schools participated in this growing high school tournament at the JCC.",
    hasPhotos: true,
    hasResults: true,
    highlights: [
      "Brandon Gardner champion",
      "17 students",
      "7 schools represented",
      "Doubles the participation from previous year",
    ],
  },
  {
    id: 16,
    title: "Table Tennis Clinic at Southlake Carroll High School",
    date: "April 14, 2009",
    category: "Education",
    description:
      "Coach Daniel Rutenberg visited Southlake Carroll High School for a table tennis clinic and exhibition with over 60 kids from the 9th grade as part of their PE class.",
    hasPhotos: false,
    hasResults: false,
    highlights: ["60+ 9th graders", "PE class integration", "Skills and activities", "Potential club development"],
  },
  {
    id: 17,
    title: "JJ Pearce High School Table Tennis Club",
    date: "February 16, 2009",
    category: "Education",
    description:
      "Donna Chen and Daniel Rutenberg did a clinic and exhibition at JJ Pearce HS with the presence of one of the Principals and strong school support for the table tennis club.",
    hasPhotos: false,
    hasResults: false,
    highlights: ["Principal attendance", "School support", "Club development", "Student engagement"],
  },
  {
    id: 18,
    title: "2009 Texas Winter Games Tournament",
    date: "January 17, 2009",
    category: "Tournament",
    description:
      "Wang Shuai wins the 2009 tournament! DFWTT hosted the tournament at Staley Middle School gymnasiums in Frisco Texas with over 120 players from multiple states.",
    hasPhotos: true,
    hasResults: true,
    highlights: [
      "Wang Shuai champion",
      "120+ players",
      "19 Butterfly tables",
      "16 different categories",
      "Charity donations",
    ],
  },
]

const categoryColors = {
  Tournament: "bg-blue-100 text-blue-800 border-blue-200",
  Achievement: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Program: "bg-purple-100 text-purple-800 border-purple-200",
  Exhibition: "bg-indigo-100 text-indigo-800 border-indigo-200",
  Education: "bg-orange-100 text-orange-800 border-orange-200",
  Recognition: "bg-green-100 text-green-800 border-green-200",
  Media: "bg-pink-100 text-pink-800 border-pink-200",
}

const categoryIcons = {
  Tournament: Trophy,
  Achievement: Award,
  Program: Users,
  Exhibition: Users,
  Education: GraduationCap,
  Recognition: Award,
  Media: Newspaper,
}

export default function News2009Archive() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">2009 News Archive</h1>
          <p className="text-xl text-gray-600 mb-6">
            18 articles covering 35+ events • $1,514 raised for charity • International achievements
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="outline" className="bg-yellow-50">
              10 Paralympic medals in Venezuela
            </Badge>
            <Badge variant="outline" className="bg-purple-50">
              Therapeutic table tennis program
            </Badge>
            <Badge variant="outline" className="bg-pink-50">
              Dallas Morning News feature
            </Badge>
            <Badge variant="outline" className="bg-orange-50">
              High school tournament growth
            </Badge>
          </div>
        </div>

        {/* Year Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/news/archive/2010">2010</Link>
            </Button>
            <Button variant="default" size="sm" disabled>
              2009
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/news/archive/2008">2008</Link>
            </Button>
          </div>
        </div>

        {/* News Items */}
        <div className="space-y-6">
          {newsItems.map((item) => {
            const CategoryIcon = categoryIcons[item.category as keyof typeof categoryIcons]

            return (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          variant="outline"
                          className={categoryColors[item.category as keyof typeof categoryColors]}
                        >
                          <CategoryIcon className="w-3 h-3 mr-1" />
                          {item.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.date}
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </div>
                    <div className="flex gap-2 ml-4">
                      {item.hasPhotos && (
                        <Badge variant="secondary" className="text-xs">
                          <Camera className="w-3 h-3 mr-1" />
                          Photos
                        </Badge>
                      )}
                      {item.hasResults && (
                        <Badge variant="secondary" className="text-xs">
                          <Trophy className="w-3 h-3 mr-1" />
                          Results
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {item.highlights && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {item.externalLink && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={item.externalLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Back to Archives */}
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/news/archive">← Back to All Archives</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
