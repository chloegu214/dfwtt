import { parseISO, format } from "date-fns"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Users, Calendar, TrendingUp } from "lucide-react"

interface DoublesStatsProps {
  totalTournaments: number
  totalTeams: number
  uniquePlayers: number
  latestTournament: string
  topPerformers: Array<{ name: string; wins: number }>
}

export function DoublesStats({
  totalTournaments,
  totalTeams,
  uniquePlayers,
  latestTournament,
  topPerformers,
}: DoublesStatsProps) {
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "N/A"
    return format(parseISO(dateStr), "MM/dd/yyyy")
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Tournaments</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-600">{totalTournaments}</div>
          <p className="text-xs text-muted-foreground">Heights doubles events</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Teams</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">{totalTeams}</div>
          <p className="text-xs text-muted-foreground">Competing partnerships</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Unique Players</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-purple-600">{uniquePlayers}</div>
          <p className="text-xs text-muted-foreground">Individual participants</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Latest Event</CardTitle>
          <Trophy className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-sm font-bold text-orange-600">{formatDate(latestTournament)}</div>
          <p className="text-xs text-muted-foreground">Most recent tournament</p>
        </CardContent>
      </Card>
    </div>
  )
}
