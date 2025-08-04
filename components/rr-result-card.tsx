import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award } from "lucide-react"

interface RRResult {
  date: string
  classA?: Array<{ rank: number; name: string }>
  classB?: Array<{ rank: number; name: string }>
  classC?: Array<{ rank: number; name: string }>
  open?: Array<{ rank: number; name: string }>
  teamEvent?: {
    type: string
    results: Array<{ rank: number; team: string[] }>
  }
}

interface RRResultCardProps {
  result: RRResult
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

export function RRResultCard({ result }: RRResultCardProps) {
  const formatDate = (dateStr: string) => {
    // Parse as UTC to avoid timezone offset issues
    const [year, month, day] = dateStr.split("-").map(Number)
    const date = new Date(Date.UTC(year, month - 1, day))
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    })
  }

  const renderPlayerList = (players: Array<{ rank: number; name: string }>, title: string) => (
    <div className="space-y-2">
      <h4 className="font-semibold text-sm text-blue-700 border-b border-blue-200 pb-1">{title}</h4>
      <div className="space-y-1">
        {players.map((player, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Badge className={`text-xs px-2 py-1 ${getRankBadgeColor(player.rank)}`}>{player.rank}</Badge>
              {getRankIcon(player.rank)}
              <span className={player.rank <= 3 ? "font-medium" : ""}>{player.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderTeamEvent = (teamEvent: { type: string; results: Array<{ rank: number; team: string[] }> }) => (
    <div className="space-y-2">
      <h4 className="font-semibold text-sm text-blue-700 border-b border-blue-200 pb-1">{teamEvent.type}</h4>
      <div className="space-y-1">
        {teamEvent.results.map((result, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <Badge className={`text-xs px-2 py-1 ${getRankBadgeColor(result.rank)}`}>{result.rank}</Badge>
            {getRankIcon(result.rank)}
            <span className={result.rank <= 3 ? "font-medium" : ""}>{result.team.join(" & ")}</span>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-blue-800 flex items-center justify-between">
          <span>Round Robin Results</span>
          <Badge variant="outline" className="text-blue-600 border-blue-300">
            {formatDate(result.date)}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {result.classA && renderPlayerList(result.classA, "Class A")}
          {result.classB && renderPlayerList(result.classB, "Class B")}
          {result.classC && renderPlayerList(result.classC, "Class C")}
          {result.open && renderPlayerList(result.open, "Open")}
        </div>
        {result.teamEvent && (
          <div className="mt-4 pt-4 border-t border-gray-200">{renderTeamEvent(result.teamEvent)}</div>
        )}
      </CardContent>
    </Card>
  )
}
