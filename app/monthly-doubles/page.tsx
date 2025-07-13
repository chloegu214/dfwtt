"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"
import { DoublesResultCard } from "@/components/doubles-result-card"
import { DoublesStats } from "@/components/doubles-stats"

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

const doublesResults: DoublesResult[] = [
  {
    date: "2024-08-30",
    classA: [
      { rank: 1, player1: "Oliver Wang", player2: "Brian Zhao" },
      { rank: 2, player1: "Ranjit Rayamajhi", player2: "Dhruv Dusad" },
      { rank: 3, player1: "Jadon Yuan", player2: "Michael Chang" },
    ],
    classB: [
      { rank: 1, player1: "Allen Chung", player2: "Ricky Liou" },
      { rank: 2, player1: "Richard Lai", player2: "Ivan Tsai" },
      { rank: 3, player1: "Mark Sabedra", player2: "Travis Qualls" },
      { rank: 4, player1: "Qihao Lin", player2: "Vijay" },
      { rank: 5, player1: "Raymond Sacco", player2: "Hong Wang" },
    ],
  },
  {
    date: "2024-07-26",
    classB: [
      { rank: 1, player1: "Mark Sabedra", player2: "Travis Qualls" },
      { rank: 2, player1: "Jordan Duran", player2: "Philip Kim" },
      { rank: 3, player1: "Richard Lai", player2: "Song Qin" },
      { rank: 4, player1: "Allen Chung", player2: "Ricky Liou" },
      { rank: 5, player1: "Yizhou Zhao", player2: "Ivan Tsai" },
    ],
  },
  {
    date: "2024-06-28",
    classA: [
      { rank: 1, player1: "Seth Pech", player2: "Jadon Yuan" },
      { rank: 2, player1: "Keith Pech", player2: "Ranjit Rayamajhi" },
      { rank: 3, player1: "Cole Ryberg", player2: "Brian Zhao" },
      { rank: 4, player1: "Dylan Ley", player2: "Nicholas Senturia" },
      { rank: 5, player1: "Dhruv Dusad", player2: "Jordan Duran" },
    ],
    classB: [
      { rank: 1, player1: "Richard Lai", player2: "Robert Bryan" },
      { rank: 2, player1: "Allen Chung", player2: "Ricky Liou" },
      { rank: 3, player1: "Zain Shakir", player2: "Saheb Bhatie" },
      { rank: 4, player1: "Kanika Dhruv", player2: "Ivan Tsai" },
      { rank: 5, player1: "Raymond Sacco", player2: "Joe Scharman" },
      { rank: 6, player1: "Bryan Batchelder", player2: "Stephen Coffman" },
    ],
  },
  {
    date: "2024-05-24",
    classA: [
      { rank: 1, player1: "Jadon Yuan", player2: "Michael Chang" },
      { rank: 2, player1: "Leijie Qi", player2: "Nico Alvarez" },
      { rank: 3, player1: "Brian Zhao", player2: "Jordan Duran" },
      { rank: 4, player1: "Oliver Wang", player2: "Srijeet Qazi" },
    ],
    classB: [
      { rank: 1, player1: "Dylan Ley", player2: "Nicholas Senturia" },
      { rank: 2, player1: "Richard Lai", player2: "Ivan Tsai" },
      { rank: 3, player1: "Srinivasan Ramalingam", player2: "Sairam Ramalingam" },
      { rank: 4, player1: "Raymond Sacco", player2: "Zain Shakir" },
      { rank: 5, player1: "Jamie Schmidt", player2: "Kanika Dusad" },
      { rank: 6, player1: "Richard Tsai", player2: "Justin Johnson" },
    ],
  },
  {
    date: "2024-04-05",
    classB: [
      { rank: 1, player1: "Mark Sabedra", player2: "Travis Qualls" },
      { rank: 2, player1: "Dylan Ley", player2: "Nicholas Senturia" },
      { rank: 3, player1: "Srinivasan Ramalingam", player2: "Sairam Ramalingam" },
      { rank: 4, player1: "Richard Lai", player2: "Allen Chung" },
      { rank: 5, player1: "Zain Shakir", player2: "Andrew Matul" },
      { rank: 6, player1: "Raymond Sacco", player2: "Daxesh Gohel" },
    ],
  },
  {
    date: "2024-02-23",
    classA: [
      { rank: 1, player1: "Cole Ryberg", player2: "Brian Zhao" },
      { rank: 2, player1: "Oliver Wang", player2: "Huang Yute" },
      { rank: 3, player1: "Jadon Yuan", player2: "Michael Chang" },
    ],
    classB: [
      { rank: 1, player1: "Richard Lai", player2: "Song Qin" },
      { rank: 2, player1: "Srinivasan Ramalingam", player2: "Sairam Ramalingam" },
      { rank: 3, player1: "Raymond Sacco", player2: "Joe Schartman" },
      { rank: 4, player1: "Darik Dia", player2: "Talal Dia" },
    ],
  },
  {
    date: "2024-01-26",
    classA: [
      { rank: 1, player1: "Brian Zhao", player2: "Nico Alvarez" },
      { rank: 2, player1: "Jadon Yuan", player2: "Michael Chang" },
      { rank: 3, player1: "Cole Ryberg", player2: "Judy Chen" },
      { rank: 4, player1: "Russ Hamilton", player2: "Dhruv Dusad" },
    ],
    classB: [
      { rank: 1, player1: "Zain Shakir", player2: "Andrew Matul" },
      { rank: 2, player1: "Jordan Duran", player2: "Philip Kim" },
      { rank: 3, player1: "Terrence Liu", player2: "Kanika Dusad" },
      { rank: 4, player1: "Robert Bryant", player2: "Takatoshi Mii" },
      { rank: 5, player1: "Tarik Dia", player2: "Ismael Yakoubi" },
    ],
  },
  {
    date: "2023-12-01",
    classA: [
      { rank: 1, player1: "Oliver Wang", player2: "Ranjit Rayamajhi" },
      { rank: 2, player1: "Cole Ryberg", player2: "Brian Zhao" },
      { rank: 3, player1: "Jadon Yuan", player2: "Michael Chang" },
      { rank: 4, player1: "Keith Pech", player2: "Dhruv Dusad" },
      { rank: 5, player1: "Austin Clemens", player2: "Raymond Sacco" },
    ],
    classB: [
      { rank: 1, player1: "Dylan Ley", player2: "Nicholas Senturia" },
      { rank: 2, player1: "Ricky Liou", player2: "Allen Chuang" },
      { rank: 3, player1: "Jordan Duran", player2: "Philip Kim" },
      { rank: 4, player1: "Tarik Dia", player2: "Talal Dia" },
      { rank: 5, player1: "Zain Shakir", player2: "Andrew Matul" },
      { rank: 6, player1: "Pratyush Mohanty", player2: "Kanika Dusad" },
    ],
  },
  {
    date: "2023-11-10",
    classA: [
      { rank: 1, player1: "Ranjit Rayamajhi", player2: "Keith Pech" },
      { rank: 2, player1: "Jadon Yuan", player2: "Michael Chang" },
      { rank: 3, player1: "Oliver Wang", player2: "Brian Zhao" },
    ],
    classB: [
      { rank: 1, player1: "Takatoshi Mii", player2: "Allen Chuang" },
      { rank: 2, player1: "Dhruv Dusad", player2: "Kanika Dusad" },
      { rank: 3, player1: "Richard Lai", player2: "Timo Wu" },
    ],
  },
  {
    date: "2023-09-29",
    classA: [
      { rank: 1, player1: "Ranjit Rayamajhi", player2: "Cole Ryberg" },
      { rank: 2, player1: "Michael Chang", player2: "Jadon Yuan" },
      { rank: 3, player1: "Austin Clemens", player2: "Zain Jamal" },
    ],
    classB: [
      { rank: 1, player1: "Allen Chuang", player2: "Ricky Liou" },
      { rank: 2, player1: "Richard Lai", player2: "Takatoshi Mii" },
      { rank: 3, player1: "Dhruv Dusad", player2: "Kanika Dusad" },
      { rank: 4, player1: "Salim Adedeji", player2: "Zain Shakir" },
      { rank: 5, player1: "Raymond Sacco", player2: "Joe Schartman" },
    ],
  },
  {
    date: "2023-08-25",
    classA: [
      { rank: 1, player1: "Ranjit Rayamajhi", player2: "Nico Alvarez" },
      { rank: 2, player1: "Michael Chang", player2: "Jadon Yuan" },
    ],
    classB: [
      { rank: 1, player1: "Richard Lai", player2: "Richard Tsai" },
      { rank: 2, player1: "Allen Chuang", player2: "Ricky Liou" },
      { rank: 3, player1: "Pratyush Mohanty", player2: "Philip Kim" },
      { rank: 4, player1: "Dhruv Dusad", player2: "Kanika Dusad" },
      { rank: 5, player1: "Robert Bryant", player2: "Takatoshi Mii" },
      { rank: 6, player1: "Raymond Sacco", player2: "Joe Schartman" },
    ],
  },
  {
    date: "2023-07-21",
    classB: [
      { rank: 1, player1: "Dhruv Dusad", player2: "Kanika Dusad" },
      { rank: 2, player1: "Allen Chuang", player2: "Ricky Liou" },
      { rank: 3, player1: "Richard Lai", player2: "Richard Tsai" },
      { rank: 4, player1: "Ivan Tsai", player2: "Vihaan Desaraju" },
      { rank: 5, player1: "Mourya Peram", player2: "Vishnu Vardhan" },
      { rank: 6, player1: "Robert Bryant", player2: "Mark Chen" },
      { rank: 7, player1: "Raymond Sacco", player2: "Joe Schartman" },
      { rank: 8, player1: "Stephen Webb", player2: "Zain Shakir" },
    ],
  },
  {
    date: "2023-06-30",
    classA: [
      { rank: 1, player1: "Jadon Yuan", player2: "Michael Chang" },
      { rank: 2, player1: "Oliver Wang", player2: "Brian Zhao" },
      { rank: 3, player1: "Leijie Qi", player2: "Nico Alvarez" },
      { rank: 4, player1: "Cole Ryberg", player2: "Pedro Garces" },
    ],
    classB: [
      { rank: 1, player1: "Allen Chuang", player2: "Ricky Liou" },
      { rank: 2, player1: "Richard Lai", player2: "Richard Tsai" },
      { rank: 3, player1: "Raymond Sacco", player2: "Joe Schartman" },
      { rank: 4, player1: "Dhruv Dusad", player2: "Kanika Dusad" },
    ],
    classC: [
      { rank: 1, player1: "Peter Paulus", player2: "Zain Shakir" },
      { rank: 2, player1: "Stephen Coffman", player2: "Bryan Batchelder" },
      { rank: 3, player1: "Dolores Zimmerman", player2: "John Wood" },
      { rank: 4, player1: "Billy Franz", player2: "Steve Box" },
    ],
  },
  {
    date: "2023-06-23",
    classA: [
      { rank: 1, player1: "Jadon Yuan", player2: "Michael Chang" },
      { rank: 2, player1: "Keith Pech", player2: "Tai Lun Zhang" },
      { rank: 3, player1: "Leijie Qi", player2: "Nico Alvarez" },
    ],
    classB: [
      { rank: 1, player1: "Allen Chuang", player2: "Ricky Liou" },
      { rank: 2, player1: "Takatoshi Mii", player2: "Freddy Arista" },
      { rank: 3, player1: "Raymond Sacco", player2: "Joe Schartman" },
      { rank: 4, player1: "Dhruv Dusad", player2: "Kanika Dusad" },
    ],
    classC: [
      { rank: 1, player1: "Salim Adedeji", player2: "Lijun Huang" },
      { rank: 2, player1: "Bill Witten", player2: "John Wood" },
      { rank: 3, player1: "Justin Johnson", player2: "Nam Dang" },
      { rank: 4, player1: "Dolores Zimmerman", player2: "Miki Snell" },
      { rank: 5, player1: "Billy Franz", player2: "Steve Box" },
      { rank: 6, player1: "Forrest Michaels", player2: "Chris Capa" },
    ],
  },
  {
    date: "2023-06-16",
    classA: [
      { rank: 1, player1: "Oliver Wang", player2: "Tai Lun Zhang" },
      { rank: 2, player1: "Jadon Yuan", player2: "Michael Chang" },
      { rank: 3, player1: "Ranjit Rayamajhi", player2: "Keith Pech" },
      { rank: 4, player1: "Cole Ryberg", player2: "Judy Chen" },
      { rank: 5, player1: "Kyle Drake", player2: "Bruce Reiff" },
      { rank: 6, player1: "Brian Zhao", player2: "Chris Mei" },
    ],
    classB: [
      { rank: 1, player1: "Allen Chuang", player2: "Ricky Liou" },
      { rank: 2, player1: "Salram Ramalingam", player2: "Thiagarajan Srinivasan" },
      { rank: 3, player1: "Robert Bryant", player2: "Mourya Peram" },
      { rank: 4, player1: "Mark Sabedra", player2: "Raymond Sacco" },
    ],
    classC: [
      { rank: 1, player1: "Max Zhang", player2: "Zain Shakir" },
      { rank: 2, player1: "Peter Paulus", player2: "Sherrief Osni" },
      { rank: 3, player1: "Miki Snell", player2: "Bill Witten" },
      { rank: 4, player1: "Dolores Zimmerman", player2: "John Wood" },
      { rank: 5, player1: "Forrest Michaels", player2: "Chris Capa" },
    ],
  },
  {
    date: "2023-04-28",
    classB: [
      { rank: 1, player1: "Salram Ramalingam", player2: "Thiagarajan Srinivasan" },
      { rank: 2, player1: "Pratyush Mohanty", player2: "Dhruv Dusad" },
      { rank: 3, player1: "Robert Bryant", player2: "Henry Lin" },
      { rank: 4, player1: "Raymond Sacco", player2: "Terrence Liu" },
      { rank: 5, player1: "Vihaan Desaraju", player2: "Kanika Dusad" },
      { rank: 6, player1: "Max Zhang", player2: "Zain Shakir" },
      { rank: 7, player1: "Yosef Lender", player2: "Jay Liu" },
    ],
  },
  {
    date: "2023-03-31",
    classA: [
      { rank: 1, player1: "Mark Hazinski", player2: "Jadon Yuan" },
      { rank: 2, player1: "Brian Zhao", player2: "Cole Ryberg" },
      { rank: 3, player1: "Oliver Wang", player2: "Tai Lun Zhang" },
      { rank: 4, player1: "Zain Jamal", player2: "Sergio Pulido" },
      { rank: 5, player1: "Michael Chang", player2: "Erik Pulido" },
    ],
    classB: [
      { rank: 1, player1: "Richard Lai", player2: "Taktoshi Mii" },
      { rank: 2, player1: "Allen Chuang", player2: "Peter Xuong" },
      { rank: 3, player1: "Ricky Liou", player2: "Henry Lin" },
      { rank: 4, player1: "Robert Bryant", player2: "Raymond Sacco" },
    ],
    classC: [
      { rank: 1, player1: "Max Zhang", player2: "Zain Shakir" },
      { rank: 2, player1: "Peter Paulus", player2: "Sherrief Osni" },
      { rank: 3, player1: "Nam Dang", player2: "Lijun Huang" },
      { rank: 4, player1: "Ray Kinney", player2: "Bill Witten" },
      { rank: 5, player1: "Billy Franz", player2: "Steve Box" },
      { rank: 6, player1: "Don Khieu", player2: "John Wood" },
    ],
  },
  {
    date: "2023-02-24",
    classA: [
      { rank: 1, player1: "Mark Hazinski", player2: "Jadon Yuan" },
      { rank: 2, player1: "Brian Zhao", player2: "Cole Ryberg" },
      { rank: 3, player1: "Ranjit Rayamajhi", player2: "Keith Pech" },
    ],
    classB: [
      { rank: 1, player1: "Song Qin", player2: "Richard Lai" },
      { rank: 2, player1: "Pratyush Mohanty", player2: "Dhruv Dusad" },
      { rank: 3, player1: "Allen Chuang", player2: "Ricky Tang" },
      { rank: 4, player1: "Mourya Peram", player2: "Raymond Sacco" },
      { rank: 5, player1: "Robert Bryant", player2: "Takatoshi Mii" },
      { rank: 6, player1: "Jordan Duran", player2: "Philip Kim" },
    ],
    classC: [
      { rank: 1, player1: "Max Zhang", player2: "Zain Shakir" },
      { rank: 2, player1: "Nam Dang", player2: "Salim Adedeji" },
      { rank: 3, player1: "Peter Paulus", player2: "Sherrief Osni" },
      { rank: 4, player1: "Billy Franz", player2: "Steve Box" },
      { rank: 5, player1: "John Wood", player2: "Bill Witten" },
    ],
  },
  {
    date: "2023-01-27",
    classA: [
      { rank: 1, player1: "Oliver Wang", player2: "Santiago Montes" },
      { rank: 2, player1: "Mark Hazinski", player2: "Jadon Yuan" },
      { rank: 3, player1: "Ranjit Rayamajhi", player2: "Derron Douglas" },
      { rank: 4, player1: "Austin Clemens", player2: "Zain Jamal" },
      { rank: 5, player1: "Nico", player2: "Michael Chang" },
      { rank: 6, player1: "Brian Zhao", player2: "Tai Lun Zhang" },
    ],
    classB: [
      { rank: 1, player1: "Song Qin", player2: "Allen Chuang" },
      { rank: 2, player1: "Pratyush Mohanty", player2: "Dhruv Dusad" },
      { rank: 3, player1: "Nicholas Senturia", player2: "Dylan Ley" },
      { rank: 4, player1: "Norman Lehr", player2: "Raymond Sacco" },
      { rank: 5, player1: "Jordan Duran", player2: "Philip Kim" },
      { rank: 6, player1: "Vinit Dhuri", player2: "Maruthi Mourya Peram" },
    ],
    classC: [
      { rank: 1, player1: "Ricky Liou", player2: "Steve Box" },
      { rank: 2, player1: "Max Zhang", player2: "Zain Shakir" },
      { rank: 3, player1: "Nam Dang", player2: "Salim Adedeji" },
      { rank: 4, player1: "Sherrief Osni", player2: "Ann Zimmerman" },
      { rank: 5, player1: "Vikas Dusad", player2: "Kanika Dusad" },
    ],
  },
  {
    date: "2022-12-16",
    classA: [
      { rank: 1, player1: "Cole Ryberg", player2: "Jadon Yuan" },
      { rank: 2, player1: "Brian Zhao", player2: "Tai Lun Zhang" },
    ],
    classB: [
      { rank: 1, player1: "Vinit Dhuri", player2: "Maruthi Mourya Peram" },
      { rank: 2, player1: "Robert Bryant", player2: "Freddy Arista" },
    ],
    classC: [
      { rank: 1, player1: "Peter Paulus", player2: "Zain Shakir" },
      { rank: 2, player1: "Nam Dang", player2: "Salim Adedeji" },
      { rank: 3, player1: "Sherrief Osni", player2: "Steve Box" },
    ],
  },
  {
    date: "2022-11-18",
    classA: [
      { rank: 1, player1: "Mark Hazinski", player2: "Jadon Yuan" },
      { rank: 2, player1: "Ranjit Rayamajhi", player2: "Keith Pech" },
      { rank: 3, player1: "Leijie Qi", player2: "Nico Alvarez" },
      { rank: 4, player1: "Brian Zhao", player2: "Tai Lun Zhang" },
      { rank: 5, player1: "Joshua Mak", player2: "Cole Ryberg" },
    ],
    classC: [
      { rank: 1, player1: "Mark Sabedra", player2: "Max Zhang" },
      { rank: 2, player1: "Raymond Sacco", player2: "Steve Box" },
      { rank: 3, player1: "Zain Shakir", player2: "Justin Johnson" },
      { rank: 4, player1: "Dolores Ann Zimmerman", player2: "Sherrief Osni" },
      { rank: 5, player1: "Miki Snell", player2: "Bill Witten" },
    ],
  },
  {
    date: "2022-10-21",
    classA: [
      { rank: 1, player1: "Eduardo Tomoike", player2: "Lucas Eto" },
      { rank: 2, player1: "Mark Hazinski", player2: "Jadon Yuan" },
      { rank: 3, player1: "Joshua Mak", player2: "Ranjit Rayamajhi" },
      { rank: 4, player1: "Leijie Qi", player2: "Nico Alvarez" },
      { rank: 5, player1: "Brian Zhao", player2: "Tai Lun Zhang" },
      { rank: 6, player1: "Austin Clemens", player2: "Norman Lehr" },
    ],
    classB: [
      { rank: 1, player1: "Takatoshi Mii", player2: "Pedro Garces" },
      { rank: 2, player1: "Peter Xuong", player2: "Hao Jiang" },
      { rank: 3, player1: "Khanty Chanthammavong", player2: "Erik Lu" },
      { rank: 4, player1: "Jordan Duran", player2: "Philip Kim" },
      { rank: 5, player1: "Raymond Sacco", player2: "Mark Chen" },
    ],
  },
  {
    date: "2022-09-30",
    classA: [
      { rank: 1, player1: "Mark Hazinski", player2: "Jadon Yuan" },
      { rank: 2, player1: "Keith Pech", player2: "Ranjit Rayamajhi" },
      { rank: 3, player1: "Joshua Mak", player2: "Oliver Wang" },
      { rank: 4, player1: "Leijie Qi", player2: "Nico Alvarez" },
      { rank: 5, player1: "Brian Zhao", player2: "Tai Lun Zhang" },
      { rank: 6, player1: "Kyle Drake", player2: "Bruce Reiff" },
    ],
    classB: [
      { rank: 1, player1: "Khanty Chanthammavong", player2: "Vikas Sagi" },
      { rank: 2, player1: "Peter Xuong", player2: "Raymond Sacco" },
      { rank: 3, player1: "Robert Bryant", player2: "Pedro Garces" },
      { rank: 4, player1: "Richard Lai", player2: "Jordan Duran" },
      { rank: 5, player1: "Michael Clardy", player2: "Philip Kim" },
    ],
  },
]

export default function MonthlyDoublesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedYear, setSelectedYear] = useState<number | null>(null)

  const years = useMemo(() => {
    const yearSet = new Set<number>()
    doublesResults.forEach((result) => {
      const year = new Date(result.date).getFullYear()
      yearSet.add(year)
    })
    return Array.from(yearSet).sort((a, b) => b - a)
  }, [])

  const resultCounts = useMemo(() => {
    const counts: Record<number, number> = {}
    doublesResults.forEach((result) => {
      const year = new Date(result.date).getFullYear()
      counts[year] = (counts[year] || 0) + 1
    })
    return counts
  }, [])

  const filteredResults = useMemo(() => {
    return doublesResults.filter((result) => {
      const matchesYear = selectedYear === null || new Date(result.date).getFullYear() === selectedYear

      if (!searchTerm) return matchesYear

      const searchLower = searchTerm.toLowerCase()
      const matchesSearch =
        result.date.includes(searchTerm) ||
        result.classA?.some(
          (team) =>
            team.player1.toLowerCase().includes(searchLower) || team.player2.toLowerCase().includes(searchLower),
        ) ||
        result.classB?.some(
          (team) =>
            team.player1.toLowerCase().includes(searchLower) || team.player2.toLowerCase().includes(searchLower),
        ) ||
        result.classC?.some(
          (team) =>
            team.player1.toLowerCase().includes(searchLower) || team.player2.toLowerCase().includes(searchLower),
        ) ||
        result.open?.some(
          (team) =>
            team.player1.toLowerCase().includes(searchLower) || team.player2.toLowerCase().includes(searchLower),
        )

      return matchesYear && matchesSearch
    })
  }, [searchTerm, selectedYear])

  const stats = useMemo(() => {
    const allPlayers = new Set<string>()
    let totalTeams = 0

    doublesResults.forEach((result) => {
      ;[result.classA, result.classB, result.classC, result.open].forEach((division) => {
        if (division) {
          division.forEach((team) => {
            allPlayers.add(team.player1)
            allPlayers.add(team.player2)
            totalTeams++
          })
        }
      })
    })

    const latestTournament = doublesResults.length > 0 ? doublesResults[0].date : ""

    // Calculate top performers (players with most tournament wins)
    const playerWins: Record<string, number> = {}
    doublesResults.forEach((result) => {
      ;[result.classA, result.classB, result.classC, result.open].forEach((division) => {
        if (division && division.length > 0) {
          const winners = division[0] // First place team
          playerWins[winners.player1] = (playerWins[winners.player1] || 0) + 1
          playerWins[winners.player2] = (playerWins[winners.player2] || 0) + 1
        }
      })
    })

    const topPerformers = Object.entries(playerWins)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([name, wins]) => ({ name, wins }))

    return {
      totalTournaments: doublesResults.length,
      totalTeams,
      uniquePlayers: allPlayers.size,
      latestTournament,
      topPerformers,
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">DFWTT Monthly Doubles Championships</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive results from Dallas-Fort Worth Table Tennis monthly doubles tournaments. Featuring Class A, B,
            and C divisions with complete rankings and partnership records.
          </p>
        </div>

        <DoublesStats {...stats} />

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search by player name, date, or team..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-500">Filter by year:</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Button
            variant={selectedYear === null ? "default" : "outline"}
            onClick={() => setSelectedYear(null)}
            className="relative"
          >
            All Years
            <Badge variant="secondary" className="ml-2">
              {doublesResults.length}
            </Badge>
          </Button>
          {years.map((year) => (
            <Button
              key={year}
              variant={selectedYear === year ? "default" : "outline"}
              onClick={() => setSelectedYear(year)}
              className="relative"
            >
              {year}
              <Badge variant="secondary" className="ml-2">
                {resultCounts[year] || 0}
              </Badge>
            </Button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredResults.length > 0 ? (
            filteredResults.map((result, index) => <DoublesResultCard key={index} result={result} />)
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium">No results found</h3>
                <p>Try adjusting your search terms or year filter</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
