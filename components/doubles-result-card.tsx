import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award, Users } from "lucide-react"

interface DoublesTeam {
  rank: number
  player1: string
  player2: string
}

interface DoublesResult {
  date: string
  classA?: DoublesTeam[]
  classB?: DoublesTeam[]
  classC?: DoublesTeam[]
  open?: DoublesTeam[]
}

interface DoublesResultCardProps {
  result: DoublesResult
}

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="h-4 w-4 text-yellow-500" />
    case 2:
      return <Medal className="h-4 w-4 text-gray-400" />
    case 3:
      return <Award className="h-4 w-4 text-amber-600" />
    default:
      return null
  }
}

const getRankBadgeColor = (rank: number) => {
  switch (rank) {
    case 1:
      return "bg-yellow-500 text-white"
    case 2:
      return "bg-gray-400 text-white"
    case 3:
      return "bg-amber-600 text-white"
    default:
      return "bg-blue-100 text-blue-800"
  }
}

export function DoublesResultCard({ result }: DoublesResultCardProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  const renderTeamList = (teams: DoublesTeam[], title: string) => (
    <div className="space-y-3">
      <h4 className="font-semibold text-sm text-blue-700 border-b border-blue-200 pb-1 flex items-center gap-2">
        <Users className="h-4 w-4" />
        {title}
      </h4>
      <div className="space-y-2">
        {teams.map((team, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Badge className={`text-xs px-2 py-1 ${getRankBadgeColor(team.rank)}`}>{team.rank}</Badge>
              {getRankIcon(team.rank)}
              <div className="flex flex-col">
                <div className={`text-sm ${team.rank <= 3 ? "font-medium" : ""}`}>{team.player1}</div>
                <div className={`text-sm ${team.rank <= 3 ? "font-medium" : ""} text-gray-600`}>{team.player2}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-blue-800 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Heights Doubles Tournament
          </span>
          <Badge variant="outline" className="text-blue-600 border-blue-300">
            {formatDate(result.date)}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {result.classA && renderTeamList(result.classA, "Class A Doubles")}
          {result.classB && renderTeamList(result.classB, "Class B Doubles")}
          {result.classC && renderTeamList(result.classC, "Class C Doubles")}
          {result.open && renderTeamList(result.open, "Open Doubles")}
        </div>
      </CardContent>
    </Card>
  )
}
