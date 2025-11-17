"use client"

import { useState } from "react"
import { TournamentResultCard } from "@/components/tournament-result-card"
import { YearFilter } from "@/components/year-filter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Trophy, Calendar, Users } from "lucide-react"

// Tournament data - organized by year
const tournamentData = {
  "2025": [
    {
      title: "DFWTT Fall Open",
      date: "November 15, 2025",
      events: [
        {
          category: "U-2250",
          first: "Iago Bittencourt",
          second: "Winfred Addy",
          third: "Masood Hyder",
          fourth: "Yizhou Zhao",
        },
        {
          category: "U-1850",
          first: "George Banu",
          second: "Dennis Yonghong Fang",
          third: "Kanika Dusad",
          fourth: "Tesilimi O. Iioh",
        },
        {
          category: "O-1700",
          first: "Pablo Frias",
          second: "Aravind Parthasarathy",
          third: "Hemant Kshirsagar",
          fourth: "Mark Sabedra",
        },
        {
          category: "U-1350",
          first: "Dennis Ochei",
          second: "Viraaj Gupa",
          third: "Xianju Bi",
          fourth: "Viraaj Vemula",
        },
        {
          category: "U-1200",
          first: "Abdul Bello",
          second: "NK Krishnamoorthy",
          third: "Satvik Vitta",
          fourth: "Franklin Du",
        },
        {
          category: "Open Singles",
          first: "Iago Bittencourt",
          second: "Nicholas Yuji Hato Yamane",
          third: "Winfred Addy",
          fourth: "Yizhou Zhao",
        },
        {
          category: "U-4000 Doubles",
          first: "Masood Hyder / Zain Shakir",
          second: "Sudhanva Bharadwaj / Mourya Peram",
          third: "Travis Qualls / Mark Sabedra",
          fourth: "Amir Dan / Arjun Nanjundappa",
        },
      ],
    },    
    {
      title: "Chinese Double Ten",
      date: "September 27, 2025",
      events: [
        {
          category: "80 & Over Singles",
          first: "Grant Bergmann",
          second: "William T Garrard",
        },
        {
          category: "70-79 Singles",
          first: "Hong Wang",
          second: "Yee-Chaung See",
          third: "Chon Phan",          
        },
        {
          category: "65-69 Singles",
          first: "Mark Chen",
          second: "Dennis Ochei",
          third: "Girish Karalatti",
        },
        {
          category: "60-64 Singles",
          first: "Shoaping Jiang",
          second: "Sherieff Osmi",
          third: "David Williams",
        },
        {
          category: "50-59 Singles",
          first: "Allen Chuang",
          second: "Devang Desai",
          third: "Hemant Kshirsagar",         
        },
        {
          category: "40-49 Singles",
          first: "Arjun Namundappa",
          second: "Ravi Rao",
          third: "Amir Dan",
        },
        {
          category: "20-39 Singles",
          first: "Travis Qualls",
          second: "Xianju Bi",
        },
        {
          category: "Women Singles",
          first: "Linda Sterm",
          second: "Red Jones",
          third: "Annie Xiang",          
        },
        {
          category: "14-19 Singles",
          first: "Ryan Kattady",
          second: "Shalini Biswas",
          third: "Rithvica Menderkar",          
        },
        {
          category: "12-13 Singles",
          first: "Leia Desai",
          second: "Vivaan Ubale",
          third: "Shrreshth Shah",
        },
        {
          category: "10-11 Singles",
          first: "Amudhan Elango",
          second: "Tri Maxwell Minh Pham",
          third: "Viraaj Vemula",
        },
        {
          category: "8-9 Singles",
          first: "Mia Li",
          second: "Rudransh Sinha",
          third: "Gabriel Zhu",         
        },
        {
          category: "Under 8 Singles",
          first: "Agastya Arjun",
          second: "Pavani Vishnubhotia",
          third: "Jaxon Chan",
        },
        {
          category: "Open Singles Class A",
          first: "Jack Liau",
          second: "Masood Hyder",
          third: "Jason Luo",         
        },
        {
          category: "Open Singles Class B",
          first: "Takatoshi Mii",
          second: "Allen Chuang",
          third: "Satvika Upperla",          
        },
        {
          category: "Open Singles Class C",
          first: "Devang Desai",
          second: "Grady Thompson",
          third: "Amudhan Elango",
        }, 
        {
          category: "Open Singles Class D",
          first: "Xianju Bi",
          second: "Viraaj Vemula",
          third: "Tri Maxwell Minh Pham",
        },                                     
        {
          category: "Open Doubles Class B",
          first: "Mark Sebedra / Travis Qualls",
          second: "Takatoshi Mii / Allen Chuang",
          third: "Hai Tran / Vincent Pham",         
        },
        {
          category: "Open Doubles Class C",
          first: "Amudhan Elango / Kathiravan Elango",
          second: "Hong Wang / Mark Chen",
          third: "Dhananjay Ubale / Niraj Kumar",          
        },
        {
          category: "Open Doubles Class D",
          first: "Red Jones / James Rautis",
          second: "Viaaj Vemula / Tri Maxwell Minh Pham",
          third: "Sherrief Osmi / Franklin Du",
        },
      ],
    },        
    {
      title: "Dallas Golden Games",
      date: "September 6, 2025",
      events: [
        {
          category: "Women Singles 80-84",
          first: "Dolores Zimmerman"
        },
        {
          category: "Men Singles 90 & Over",
          first: "William Zhang",
        },
        {
          category: "Men Singles 80-84",
          first: "Grant Bergmann",
          second: "William Garrard",
        },
        {
          category: "Men Singles 75-79",
          first: "Che Nguyen",
          second: "Yee-Chaung See",
        },
        {
          category: "Men Singles 65-69",
          first: "Kyle Drake",
        },
        {
          category: "Men Singles 60-64",
          first: "Dennis Ochei",
          second: "Hai Tran",
        },
        {
          category: "Men Singles 55-59",
          first: "Takotoshi Mii",
          second: "Allen Chuang",
          third: "Joseph Ho",
        },
        {
          category: "Men Singles 50-54",
          first: "Jay Liu",
        },
         {
          category: "Doubles 85-90",
          first: "Grant Bergmann / William Zhang",
        },
        {
          category: "Doubles 80-84",
          first: "Dolores Zimmerman / Sheriff Osmi",
        },
        {
          category: "Doubles 70-79",
          first: "Yee-Chaung See / Hai Tran",
          second: "Che Nguyen / Jay Liu",
        },
        {
          category: "Doubles 50-69",
          first: "Kyle Drake / Joseph Ho",
          second: "Takatoshi Mii / Allen Chuang",
        },                                                      
      ],
    },    
    {
      title: "DFWTT Summer Open",
      date: "June 14, 2025",
      events: [
        {
          category: "U-2250",
          first: "Dhruv Dusad",
          second: "Zhongxu An",
          third: "Yashwanth Sathish / Swar Patel",
        },
        {
          category: "U-1850",
          first: "Zain Shakir",
          second: "Saahaj Gade",
          third: "",
        },
        {
          category: "O-1700",
          first: "Kanika Dusad",
          second: "Hsu Kyaw Thway",
          third: "",
        },
        {
          category: "U-1350",
          first: "Julia Liu",
          second: "Amudhan Elango",
          third: "",
        },
        {
          category: "U-1200",
          first: "Julia Liu",
          second: "Eeshaay Grover",
          third: "",
        },
        {
          category: "Open Singles",
          first: "Ojo Onaolapo",
          second: "Winfred Addy",
          third: "Dhruv Dusad / Zhongxu An",
        },
        {
          category: "O-4000 Doubles",
          first: "Ranjit Rayamajhi / Michael Chang",
          second: "Dhruv Dusad / Saheb Bhatia",
          third: "",
        },
        {
          category: "U-4000 Doubles",
          first: "Sudhanva Bharadwaj / Mourya Peram",
          second: "Travis Qualls / Mark Sabedra",
          third: "",
        },
      ],
    },
    {
      title: "DFWTT School Challenge",
      date: "March 29, 2025",
      events: [
        {
          category: "High School Singles - Class A",
          first: "Michael Chang (St Mark's School of Texas)",
          second: "Dhruv Dusad (Coppell High School)",
          third: "Kathleen Lin (McKinney North High School)",
          fourth: "Philip Kim (Great Heart High School)",
        },
        {
          category: "High School Doubles - Class A",
          first: "Dhruv Dusad / Philip Kim (Coppell HS / Great Heart HS)",
          second: "Michael Chang / Kathleen Lin (St Mark's / McKinney North HS)",
          third: "",
        },
        {
          category: "High School Singles - Class B",
          first: "Saheb Bhatia (Coppell High School)",
          second: "Ahan Chandle (Coppell High School)",
          third: "Himesh Anumala (Texas Academy of Math and Science)",
          fourth: "Sebastian Ting (Texas Academy of Math and Science)",
        },
        {
          category: "Middle School Singles - Class A",
          first: "Arjun Dharangaonkar (Coppell Middle School East)",
          second: "Kanika Dusad (Coppell Middle School East)",
          third: "",
        },
        {
          category: "Elementary School Singles",
          first: "Siddanth Kodem (The Lamplighter Elementary School)",
          second: "Gabriel Zhu (Old Settlers Elementary School)",
          third: "Joself Zhu (Old Settlers Elementary School)",
        },
      ],
    },
    {
      title: "DFWTT Spring Open",
      date: "March 22, 2025",
      events: [
        {
          category: "U-2250",
          first: "Lago Bittencourt",
          second: "Winfred Addy",
          third: "Heitor Buscariolo / Yang Wang",
        },
        {
          category: "U-1750",
          first: "Amir Dan",
          second: "Maruthi Mourya Peram",
          third: "",
        },
        {
          category: "O-1650",
          first: "Qihao Lin",
          second: "Saheb Bhatia",
          third: "",
        },
        {
          category: "U-1250",
          first: "Chris Prout",
          second: "Om Apshankar",
          third: "",
        },
        {
          category: "U-1050",
          first: "Xianju Bi",
          second: "Kapil Tewari",
          third: "",
        },
        {
          category: "Open Singles",
          first: "Carlos Hernandez",
          second: "Lago Bittencourt",
          third: "Heitor Buscariolo / Winfred Addy",
        },
      ],
    },
  ],
  "2024": [
    {
      title: "DFWTT Fall Open",
      date: "November 2, 2024",
      events: [
        {
          category: "U-2200",
          first: "Lago Bittencourt",
          second: "Heitor Buscariolo",
          third: "Winfred Addy / Dhruv Dusad",
        },
        {
          category: "U-1700",
          first: "Devang Desai",
          second: "Travis Qualls",
          third: "",
        },
        {
          category: "U-1600",
          first: "Vishruth Raghuram",
          second: "Saheb Bhatia",
          third: "",
        },
        {
          category: "U-1200",
          first: "Aravind Parthasarathy",
          second: "Vedanth Aswin",
          third: "",
        },
        {
          category: "U-1000",
          first: "Dennis Ochei",
          second: "Xianju Bi",
          third: "",
        },
        {
          category: "Open Singles",
          first: "Jonatan Mcdonald",
          second: "Eduardo Tomoike",
          third: "Joshua Max / Winfred Addy",
        },
      ],
    },
    {
      title: "Chinese Double Ten",
      date: "September 21, 2024",
      events: [
        {
          category: "Open Singles Class A",
          first: "Keith Pech",
          second: "Dhruv Dusad",
          third: "Sara Won",
        },
        {
          category: "Open Singles Class B",
          first: "Allen Chuang",
          second: "Yizhou Zhao",
          third: "Ivan Tsai",
        },
        {
          category: "Open Singles Class C",
          first: "Kanika Dusad",
          second: "Terrence Liu",
          third: "Ahan Chande",
        },
        {
          category: "Open Singles Class D",
          first: "Viraaj Vemula",
          second: "Ameena Lakhani",
          third: "Anshuk Gotur",
        },
      ],
    },
    {
      title: "DFWTT Summer Open",
      date: "June 22, 2024",
      events: [
        {
          category: "U-2200",
          first: "Winfred Addy",
          second: "Pratyush Mohanty",
          third: "Sera Won / Theo Stephens",
        },
        {
          category: "U-1700",
          first: "Omar Villarreal",
          second: "Arvind Subramanyam",
          third: "",
        },
        {
          category: "U-1600",
          first: "Zain Shakir",
          second: "Whit Saxon",
          third: "",
        },
        {
          category: "U-1200",
          first: "Kanika Dusad",
          second: "Amudhan Elango",
          third: "",
        },
        {
          category: "U-1000",
          first: "Richa Nallan",
          second: "David Hough",
          third: "",
        },
        {
          category: "Open Singles",
          first: "Santiago Montes",
          second: "Eday Enrique Gomez Rojas",
          third: "Joshua Mak / Michael Chang",
        },
      ],
    },
    {
      title: "DFWTT School Challenge",
      date: "March 30, 2024",
      events: [
        {
          category: "High School Singles",
          first: "Dhruv Dusad (Coppell High School)",
          second: "Philip Kim (Great Heart High School)",
          third: "Hyoeun Won (Flower Mound High School) / Sera Won (Flower Mound High School)",
        },
        {
          category: "Middle School Class A Singles",
          first: "Yizhou Zhao (Mathews ES)",
          second: "Vihaan Desaraju (Coppell Middle School East)",
          third: "Ivan Tsai (Coppell Middle School East)",
          fourth: "Arjun Dharangaonkar (Coppell Middle School East)",
        },
        {
          category: "Middle School Class B Singles",
          first: "Rohan Yellapragada (Creek Valley Middle School)",
          second: "Anshuk Gotur (Wilson ES Coppell)",
          third: "Shalini Biswas (Coppell West Middle School)",
        },
      ],
    },
  ],
  "2023": [
    {
      title: "DFWTT Fall Open",
      date: "October 28, 2023",
      events: [
        {
          category: "U-2100",
          first: "Faraz Kasmani",
          second: "Dhruv Dusad",
          third: "",
        },
        {
          category: "U-1700",
          first: "Sach Raghuvanshi",
          second: "Aliaksandr Suvorau",
          third: "",
        },
        {
          category: "U-1600",
          first: "Vihaan Desaraju",
          second: "Ivan Tsai",
          third: "",
        },
        {
          category: "U-1200",
          first: "William Roberts",
          second: "Zachary Hendrickson",
          third: "",
        },
        {
          category: "U-1000",
          first: "Sudhir Kumar",
          second: "Vedanth Aswin",
          third: "",
        },
        {
          category: "Open Singles",
          first: "Cole Ryberg",
          second: "Raheel Salim",
          third: "Faraz Kasmani / Max Dillow",
        },
      ],
    },
    {
      title: "Dallas Golden Games",
      date: "September 23, 2023",
      events: [
        {
          category: "Women Singles 80-84",
          first: "Miki Snell",
          second: "Dolores Zimmerman",
          third: "",
        },
        {
          category: "Men Singles 90 & Over",
          first: "William Zhang",
          second: "",
          third: "",
        },
        {
          category: "Men Singles 80-84",
          first: "Grant Bergmann",
          second: "William Garrard",
          third: "John Wood",
        },
        {
          category: "Men Singles 75-79",
          first: "Che Nguyen",
          second: "Yee-Chaung See",
          third: "Shahin Golestanian",
        },
      ],
    },
    {
      title: "Chinese Double Ten",
      date: "September 9, 2023",
      events: [
        {
          category: "Open Singles Class A",
          first: "Keith Pech",
          second: "Cole Ryberg",
          third: "Jay Ahn",
        },
        {
          category: "Open Singles Class B",
          first: "Allen Chuang",
          second: "Alagappan Palaniappan",
          third: "Jordan Duran",
        },
        {
          category: "Open Singles Class C",
          first: "Philip Kim",
          second: "Kathiravan Elango",
          third: "Aravind Mereddi",
        },
        {
          category: "Open Singles Class D",
          first: "Saheb Bhatia",
          second: "Vedanthi Aswin",
          third: "Amudhan Elango",
        },
      ],
    },
  ],
}

const allYears = Object.keys(tournamentData).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

export default function ScoreboardPage() {
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")

  const getFilteredTournaments = () => {
    let tournaments: Array<{ year: string; tournament: any }> = []

    if (selectedYear === "all") {
      Object.entries(tournamentData).forEach(([year, yearTournaments]) => {
        yearTournaments.forEach((tournament) => {
          tournaments.push({ year, tournament })
        })
      })
    } else {
      const yearTournaments = tournamentData[selectedYear as keyof typeof tournamentData] || []
      yearTournaments.forEach((tournament) => {
        tournaments.push({ year: selectedYear, tournament })
      })
    }

    if (searchTerm) {
      tournaments = tournaments.filter(
        ({ tournament }) =>
          tournament.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tournament.events.some(
            (event: any) =>
              event.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
              event.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
              event.second.toLowerCase().includes(searchTerm.toLowerCase()) ||
              (event.third && event.third.toLowerCase().includes(searchTerm.toLowerCase())),
          ),
      )
    }

    return tournaments.sort((a, b) => {
      const yearDiff = Number.parseInt(b.year) - Number.parseInt(a.year)
      if (yearDiff !== 0) return yearDiff

      // Sort by date within the same year (most recent first)
      const dateA = new Date(a.tournament.date)
      const dateB = new Date(b.tournament.date)
      return dateB.getTime() - dateA.getTime()
    })
  }

  const filteredTournaments = getFilteredTournaments()
  const totalTournaments = Object.values(tournamentData).flat().length
  const totalPlayers = new Set(
    Object.values(tournamentData)
      .flat()
      .flatMap((tournament) =>
        tournament.events.flatMap((event) => [
          event.first,
          event.second,
          ...(event.third ? [event.third] : []),
          ...(event.fourth ? [event.fourth] : []),
        ]),
      ),
  ).size

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Tournament Results & Scoreboard</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complete tournament results and championship records from DFWTT competitions. Track player achievements,
            tournament winners, and competitive history.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Tournaments</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalTournaments}</div>
              <p className="text-xs text-muted-foreground">Across {allYears.length} years</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Players</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalPlayers}+</div>
              <p className="text-xs text-muted-foreground">Competitive participants</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Latest Tournament</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2025</div>
              <p className="text-xs text-muted-foreground">Summer Open - June 14</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search tournaments, players, or events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Year Filter */}
        <YearFilter years={allYears} selectedYear={selectedYear} onYearChange={setSelectedYear} />

        {/* Tournament Results */}
        <div className="space-y-6">
          {filteredTournaments.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <Trophy className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No tournaments found</h3>
                <p className="text-gray-500">Try adjusting your search terms or year filter.</p>
              </CardContent>
            </Card>
          ) : (
            filteredTournaments.map(({ year, tournament }, index) => (
              <TournamentResultCard
                key={`${year}-${index}`}
                title={tournament.title}
                date={tournament.date}
                events={tournament.events}
                year={year}
              />
            ))
          )}
        </div>

        {/* Historical Note */}
        <div className="mt-12 text-center">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="py-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Complete Tournament Archive</h3>
              <p className="text-blue-700">
                This scoreboard contains results from 2002-2025, documenting over two decades of competitive table
                tennis in the Dallas-Fort Worth area. Historical results help track player development and celebrate our
                community's achievements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
