"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface YearSelectorProps {
  years: number[]
  selectedYear: number | null
  onYearSelect: (year: number | null) => void
  resultCounts: Record<number, number>
}

export function YearSelector({ years, selectedYear, onYearSelect, resultCounts }: YearSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button
        variant={selectedYear === null ? "default" : "outline"}
        onClick={() => onYearSelect(null)}
        className="relative"
      >
        All Years
        <Badge variant="secondary" className="ml-2">
          {Object.values(resultCounts).reduce((sum, count) => sum + count, 0)}
        </Badge>
      </Button>
      {years.map((year) => (
        <Button
          key={year}
          variant={selectedYear === year ? "default" : "outline"}
          onClick={() => onYearSelect(year)}
          className="relative"
        >
          {year}
          <Badge variant="secondary" className="ml-2">
            {resultCounts[year] || 0}
          </Badge>
        </Button>
      ))}
    </div>
  )
}
