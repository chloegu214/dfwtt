import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink, Camera, Trophy, Users, Heart, Award, Star } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    id: 1,
    title: "2010 Fall World Peace TT Pictures",
    date: "December 4, 2010",
    category: "Tournament",
    description: "Plano TT club hosted its Fall World Peace Table Tennis Tournament at the Tom Muehlenbeck center.",
    hasPhotos: true,
    hasResults: false,
    externalLink:
      "https://onedrive.live.com/?id=ACD8701C94F053F8!32638&cid=ACD8701C94F053F8&group=0&authkey=!AKcgmCROzFdmxwo",
    highlights: ["Tom Muehlenbeck center", "Grant Bergmann photography"],
  },
  {
    id: 2,
    title: "Taiwan Typhoon Relief Donation",
    date: "December 2010",
    category: "Charity",
    description:
      "A $316 donation is being sent to help school reconstruction plans after the August 8th, 2009 Typhoon disaster in Taiwan.",
    hasPhotos: false,
    hasResults: false,
    highlights: ["$316 donated", "Taiwan typhoon relief", "School reconstruction"],
  },
  {
    id: 3,
    title: "2010 DFWTT Fall Open Tournament",
    date: "November 13, 2010",
    category: "Tournament",
    description:
      "More than 80 players participated at the JCC in Dallas. Yjun Feng won $300 in the Singles Class A defeating Chance Friend ($200) in the final.",
    hasPhotos: true,
    hasResults: true,
    externalLink:
      "https://onedrive.live.com/?id=acd8701c94f053f8%2132397&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    highlights: ["80+ players", "Yjun Feng champion", "Grant Bergmann photography", "Daniel Rutenberg action shots"],
  },
  {
    id: 4,
    title: "Coach Rutenberg ITTF PTT Level 1 Certification",
    date: "November 2010",
    category: "Achievement",
    description:
      "Four USATT coaches completed their ITTF PTT Level 1 accreditation. Congratulations to Coach Rutenberg for this achievement!",
    hasPhotos: false,
    hasResults: false,
    externalLink: "http://www.usatt.org/news1/four_new_ittf_level_coaches.shtml",
    highlights: ["ITTF PTT Level 1", "USATT recognition", "Professional development"],
  },
  {
    id: 5,
    title: "DFWTT 2010 Chinese Double Ten Celebration Tournament",
    date: "October 9, 2010",
    category: "Tournament",
    description:
      "More than 70 players of different ages and skill levels participated in 13 different events at the Cimarron Recreation Center. Special guests from Taipei Economic & Cultural Office attended.",
    hasPhotos: true,
    hasResults: true,
    externalLink:
      "https://onedrive.live.com/?id=ACD8701C94F053F8%2132398&cid=ACD8701C94F053F8&group=0&authkey=%21AKcgmCROzFdmxwo",
    highlights: [
      "70+ players",
      "13 different events",
      "Russ Hamilton champion",
      "Taipei officials attendance",
      "Grant Bergmann photography",
    ],
  },
  {
    id: 6,
    title: "DFWTT at Hotel Zaza in Uptown Dallas",
    date: "October 1, 2010",
    category: "Exhibition",
    description:
      "DFW Table Tennis showcased the Olympic sport of table tennis at the prestigious Hotel Zaza in Uptown Dallas. Nelson Ramos and Daniel Rutenberg delighted guests and visitors.",
    hasPhotos: true,
    hasResults: false,
    highlights: ["Hotel Zaza venue", "Uptown Dallas", "Nelson Ramos & Daniel Rutenberg", "Dragonfly restaurant"],
  },
  {
    id: 7,
    title: "Cimarron Club Junior Program Growth",
    date: "September 2010",
    category: "Program",
    description:
      "Every Monday and Friday nights from 6 to 9 pm our members meet at Cimarron Club location. The Junior program continues to grow with kids having fun while learning fundamentals.",
    hasPhotos: true,
    hasResults: false,
    highlights: [
      "Monday & Friday 6-9 PM",
      "Growing junior program",
      "Fundamentals training",
      "High level matches on tables 5, 6, 7",
    ],
  },
  {
    id: 8,
    title: "Coach Daniel Rutenberg Earns ITTF Course Conductor Status",
    date: "September 2010",
    category: "Achievement",
    description:
      "Coach Daniel Rutenberg earned ITTF Course Conductor Status after attending seminars at the Olympic Training Center in Colorado Springs.",
    hasPhotos: false,
    hasResults: false,
    externalLink: "http://www.usatt.org/news1/usatt_coaches_ittf_status.shtml",
    highlights: ["ITTF Course Conductor", "Olympic Training Center", "Colorado Springs", "Glenn Tepper mentorship"],
  },
  {
    id: 9,
    title: "1st Copa Costa Rica 2010 - U.S. Paralympic Success",
    date: "August 10-15, 2010",
    category: "Achievement",
    description:
      "Coach Daniel Rutenberg led Team USA at the 1st Copa Costa Rica 2010 in San Jose, Costa Rica. Team USA won 6 medals in total at the different events.",
    hasPhotos: false,
    hasResults: true,
    externalLink: "http://www.ipttc.org/results/international/2010/costarica/index.htm",
    highlights: ["6 medals total", "San Jose, Costa Rica", "Coach Rutenberg leadership", "Paralympic competition"],
  },
  {
    id: 10,
    title: "JCC Maccabi Games 2010",
    date: "August 2010",
    category: "Achievement",
    description:
      "Team Dallas Table Tennis won 7 medals at the JCC Maccabi Games 2010 in Omaha, Nebraska. Athletes played in Open event and Doubles categories under Coach Daniel Rutenberg.",
    hasPhotos: true,
    hasResults: false,
    highlights: ["7 medals won", "Omaha, Nebraska", "3 Gold, 1 Silver, 3 Bronze", "JOOLA USA support"],
  },
  {
    id: 11,
    title: "World's Largest Table Tennis Paddle Record Attempt",
    date: "May 3, 2010",
    category: "Special",
    description:
      "Todd Thomas from Corinth Texas attempted to set a new Guinness world record by building the world's largest ping pong paddle - 106 inches tall, 70 inches diameter!",
    hasPhotos: true,
    hasResults: false,
    highlights: [
      "106 inches tall",
      "70 inches diameter",
      "Todd Thomas",
      "Guinness World Record attempt",
      "DFWTT logo featured",
    ],
  },
  {
    id: 12,
    title: "2010 DFWTT Spring Tournament",
    date: "April 17, 2010",
    category: "Tournament",
    description:
      "Andrew Chen won the tournament! At least 90 players entered in 19 different events on 17 sanctioned Butterfly tables at the JCC in Dallas.",
    hasPhotos: true,
    hasResults: true,
    externalLink: "http://www.flickr.com/photos/43269950@N05/sets/72157623821749421/",
    highlights: [
      "Andrew Chen champion",
      "90+ players",
      "19 different events",
      "17 Butterfly tables",
      "FNDR Foundation donation",
    ],
  },
  {
    id: 13,
    title: "First Annual Celebrity PurplePingPong Tournament",
    date: "March 14, 2010",
    category: "Celebrity",
    description:
      "Moody Coliseum at SMU hosted the Celebrity PurplePingPong Tournament featuring 16 celebrities and 12 top ranked national players. All proceeds benefited the Pancreatic Cancer Action Network.",
    hasPhotos: true,
    hasResults: true,
    externalLink: "http://www.flickr.com/photos/43269950@N05/sets/72157623640446870/",
    highlights: [
      "16 Celebrity teams",
      "12 national players",
      "Dirk Nowitzki, Rick Carlisle",
      "Nastia Liukin, Jason Terry",
      "Pancreatic Cancer benefit",
    ],
  },
  {
    id: 14,
    title: "NBA Halftime Table Tennis Exhibition",
    date: "March 3, 2010",
    category: "Exhibition",
    description:
      "Four Texas Wesleyan University table tennis athletes showcased table tennis at the Dallas Mavericks vs. Minnesota Timberwolves halftime show at American Airlines Center.",
    hasPhotos: true,
    hasResults: false,
    highlights: ["American Airlines Center", "19,000+ fans", "Texas Wesleyan athletes", "Coach Carlisle support"],
  },
  {
    id: 15,
    title: "2010 Texas Winter Games Tournament",
    date: "January 16, 2010",
    category: "Tournament",
    description:
      "Timothy Wang from Houston, Texas gets the Gold medal and wins the 2010 classic! 135 players from Houston, Wichita Falls, Oklahoma, Paris TX and DFW area competed.",
    hasPhotos: true,
    hasResults: true,
    highlights: [
      "Timothy Wang champion",
      "135 players",
      "$500 total purse Class A",
      "Haiti relief donation",
      "24 Butterfly tables",
    ],
  },
]

const categoryColors = {
  Tournament: "bg-blue-100 text-blue-800 border-blue-200",
  Charity: "bg-green-100 text-green-800 border-green-200",
  Program: "bg-purple-100 text-purple-800 border-purple-200",
  Achievement: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Exhibition: "bg-indigo-100 text-indigo-800 border-indigo-200",
  Celebrity: "bg-pink-100 text-pink-800 border-pink-200",
  Special: "bg-orange-100 text-orange-800 border-orange-200",
}

const categoryIcons = {
  Tournament: Trophy,
  Charity: Heart,
  Program: Users,
  Achievement: Award,
  Exhibition: Star,
  Celebrity: Star,
  Special: Star,
}

export default function News2010Archive() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">2010 News Archive</h1>
          <p className="text-xl text-gray-600 mb-6">
            15 articles covering 30+ events • Celebrity tournaments • World record attempts
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="outline" className="bg-pink-50">
              Celebrity PurplePingPong Tournament
            </Badge>
            <Badge variant="outline" className="bg-orange-50">
              World's Largest Paddle Record
            </Badge>
            <Badge variant="outline" className="bg-indigo-50">
              NBA Halftime Exhibition
            </Badge>
            <Badge variant="outline" className="bg-yellow-50">
              ITTF Certifications
            </Badge>
          </div>
        </div>

        {/* Year Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/news/archive/2011">2011</Link>
            </Button>
            <Button variant="default" size="sm" disabled>
              2010
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/news/archive/2009">2009</Link>
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
