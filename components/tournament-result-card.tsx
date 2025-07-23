import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award } from "lucide-react"

interface TournamentResultCardProps {
  title: string
  date: string
  events: Array<{
    category: string
    first: string
    second: string
    third?: string
    fourth?: string
  }>
  year: string
}

export function TournamentResultCard({ title, date, events, year }: TournamentResultCardProps) {
  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="h-4 w-4 text-yellow-500" />
      case 2:
        return <Medal className="h-4 w-4 text-gray-400" />
      case 3:
        return <Award className="h-4 w-4 text-amber-600" />
      default:
        return <Award className="h-4 w-4 text-slate-500" />
    }
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-blue-900">{title}</CardTitle>
          <Badge variant="outline" className="text-sm">
            {date}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800 mb-2">{event.category}</h4>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {getPositionIcon(1)}
                  <span className="font-medium">1st:</span>
                  <span>{event.first}</span>
                </div>
                <div className="flex items-center gap-2">
                  {getPositionIcon(2)}
                  <span className="font-medium">2nd:</span>
                  <span>{event.second}</span>
                </div>
                {event.third && (
                  <div className="flex items-center gap-2">
                    {getPositionIcon(3)}
                    <span className="font-medium">3rd:</span>
                    <span>{event.third}</span>
                  </div>
                )}
                {event.fourth && (
                  <div className="flex items-center gap-2">
                    {getPositionIcon(4)}
                    <span className="font-medium">4th:</span>
                    <span>{event.fourth}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
