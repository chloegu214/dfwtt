"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface YearFilterProps {
  years: string[]
  selectedYear: string
  onYearChange: (year: string) => void
}

export function YearFilter({ years, selectedYear, onYearChange }: YearFilterProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Filter by Year</h3>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedYear === "all" ? "default" : "outline"}
          onClick={() => onYearChange("all")}
          className="mb-2"
        >
          All Years
          <Badge variant="secondary" className="ml-2">
            {years.length}
          </Badge>
        </Button>
        {years.map((year) => (
          <Button
            key={year}
            variant={selectedYear === year ? "default" : "outline"}
            onClick={() => onYearChange(year)}
            className="mb-2"
          >
            {year}
          </Button>
        ))}
      </div>
    </div>
  )
}
