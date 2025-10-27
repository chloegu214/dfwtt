"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Calendar, Users, Trophy } from "lucide-react"
import { RRResultCard } from "@/components/rr-result-card"
import { YearSelector } from "@/components/year-selector"
import { parseISO, format } from "date-fns";

// Complete tournament results data from DFWTT website
const roundRobinResults = [
  // 2025 Results
  {
    date: "2025-10-26",
    classA: [
      { rank: 1, name: "Keith Pech" },
      { rank: 2, name: "Ranjit Rayamajhi" },
      { rank: 3, name: "Yu Lai" },     
      { rank: 4, name: "Genaro Natali" },
      { rank: 5, name: "Travis Qualls" },     
      { rank: 6, name: "Maxwell Dillow" },      
      { rank: 7, name: "Doug Zhuang" },
    ],
    classB: [
      { rank: 1, name: "Allen Chuang" },
      { rank: "2-3", name: "Takatoshi Mii, Raymond Sacco" },
      { rank: 4, name: "Norman Lehr" },
      { rank: 5, name: "Ademayowa Owobamirin" },
      { rank: 6, name: "David Williams" }, 
      { rank: 7, name: "Mia Li" },           
    ],
  },     
  {
    date: "2025-10-19",
    classA: [
      { rank: 1, name: "Seth Pech" },
      { rank: 2, name: "Pratyush Mohanty" },
      { rank: "3-4", name: "Ranjit Rayamajhi, Vihaan Desaraju" },     
      { rank: "5-6", name: "Dhruv Dusad, Masood Hyder" },
      { rank: 7, name: "Yizhou Zhao" },
    ],
    classB: [
      { rank: 1, name: "Nicholas Senturia" },
      { rank: 2, name: "Genaro Natale" },
      { rank: "3-4", name: "Doug Zhuang, Norman Lehr" },
      { rank: 5, name: "David Williams" },
      { rank: 6, name: "Srikanth Bejjenky" }, 
      { rank: 7, name: "Mia Li" },           
    ],
  },     
  {
    date: "2025-10-12",
    open: [
      { rank: 1, name: "Maxwell Dillow" },
      { rank: 2, name: "Allen Chuang" },
      { rank: 3, name: "Travis Qualls" },
      { rank: 4, name: "Takatoshi Mii" },
      { rank: 5, name: "Doug Zhuang" },
      { rank: 6, name: "Srikanth Bejjenky" },
      { rank: 7, name: "Maxwell Pham" },
      { rank: 8, name: "Sheriff Osmi" },
      { rank: 9, name: "David Tsen" },
    ],
  }, 
  {
    date: "2025-09-28",
    classA: [
      { rank: 1, name: "Joshua Mak" },
      { rank: 2, name: "Ranjit Rayamajhi" },
      { rank: 3, name: "Vihaan Desaraju" },     
      { rank: 4, name: "Arjun Dharangaonkar" },
      { rank: 5, name: "Nicholas Senturia" },
      { rank: 6, name: "Amir Dan" }, 
      { rank: 7, name: "Vendanth Aswin" },       
    ],
    classB: [
      { rank: 1, name: "Long Ho" },
      { rank: 2, name: "Raymond Sacco" },
      { rank: 3, name: "Arif Khan" },
      { rank: 4, name: "Srikanth Bejjenky" },      
      { rank: 5, name: "Mia Li" },
    ],
  },     
  {
    date: "2025-09-21",
    classA: [
      { rank: 1, name: "Ranjit Rayamajhi" },
      { rank: 2, name: "Maxwell Dillow" },
      { rank: 3, name: "Takatoshi Mii" },     
      { rank: 4, name: "Allen Chuang" },
      { rank: 5, name: "Amir Dan" },
      { rank: 6, name: "Doug Zhuang" }, 
    ],
    classB: [
      { rank: 1, name: "Raymond Sacco" },
      { rank: 2, name: "Sheriff Osmi" },
      { rank: 3, name: "Srikanth Bejjenky" },
      { rank: 4, name: "Mia Li" },      
      { rank: 5, name: "Clarenze Bustamante" },
      { rank: 6, name: "Chloe Gu" },     
    ],
  },   
  {
    date: "2025-09-14",
    classA: [
      { rank: 1, name: "Keith Pech" },
      { rank: 2, name: "Dhruv Dusad" },
      { rank: "3-4", name: "Ranjit Rayamajhi, Pratyush Mohanty" },     
      { rank: "5-6", name: "Vihaan Desaraju, Masood Hyder" },
      { rank: "7-8", name: "Yizhou Zhao, Maxwell Dillow" },
      { rank: "9-10", name: "Arjun Dharangaonkar, Kanika Dusad" }, 
      { rank: "11-13", name: "Amir Dan, Saahaj Gade, Vendanth Aswin" },          
    ],
    classB: [
      { rank: 1, name: "Norman Lehr" },
      { rank: 2, name: "Arif Khan" },
      { rank: 3, name: "Chetan Kokil" },
      { rank: 4, name: "David Williams" },
      { rank: 5, name: "Mia Li" },     
    ],
  },   
  {
    date: "2025-09-07",
    classA: [
      { rank: 1, name: "Seth Pech" },
      { rank: 2, name: "Keith Pech" },
      { rank: 3, name: "Ranjit Rayamajhi" },     
      { rank: 4, name: "Amir Dan" },
      { rank: 5, name: "Maxwell Dillow" },
      { rank: 6, name: "Doug Zhuang" },     
    ],
    classB: [
      { rank: 1, name: "Saahaj Gade" },
      { rank: 2, name: "Dennis Fang" },
      { rank: 3, name: "Norman Lehr" },
      { rank: 4, name: "Kuntal Pal" },
      { rank: 5, name: "Akash Krishnamurthy" },     
      { rank: 6, name: "Viraaj Vemula" },
      { rank: 7, name: "Mia Li" },      
    ],
  }, 
  {       
    date: "2025-08-31",
    classA: [
      { rank: 1, name: "Seth Pech" },
      { rank: 2, name: "Keith Pech" },
      { rank: 3, name: "Dhruv Dusad" },     
      { rank: 4, name: "Ranjit Rayamajhi" },
      { rank: "5-8", name: "Kim Iwasaki, Maxwell Dillow, Pratyush Mohanty," },
      { rank: "5-8", name: "Nicholas Senturia" },     
      { rank: "9-12", name: "Amir Dan, Michael Chen, Sergio Pulido, Qihao Lin" },      
    ],
    classB: [
      { rank: 1, name: "Norman Lehr" },
      { rank: 2, name: "Chetan Kokil" },
      { rank: 3, name: "Arief B Khan" },
      { rank: 4, name: "David Williams" },
      { rank: 5, name: "Akash Krishnamurthy" },     
      { rank: 6, name: "Mia Li" },
    ],
  },    
  {
    date: "2025-08-24",
    classA: [
      { rank: 1, name: "Ranjit Rayamajhi" },
      { rank: 2, name: "Mosood Hyder" },
      { rank: 3, name: "Amir Dan" },     
      { rank: 4, name: "Ivan Tsai" },
      { rank: 5, name: "Maxwell Dillow" },
    ],
    classB: [
      { rank: 1, name: "Norman Lehr" },
      { rank: 2, name: "Saahaj Gade" },
      { rank: 3, name: "Sarika Kannan" },
      { rank: 4, name: "Siddanth Kodem" },
      { rank: 5, name: "Mia Li" },
    ],
  },    
  {
    date: "2025-08-17",
    classA: [
      { rank: "1-4", name: "Seth Pech, Keith Pech, Michael Chang, Dhruv Dusad" },
      { rank: "5-8", name: "Pratyush Mohanty, Vihaan Desaraju, Maxwell Dillow," },
      { rank: "5-8", name: "Yizhou Zhao" },     
      { rank: "9-12", name: "Amir Dan, Arjun Dharangaonkar, Kanika Dhruv, Saahaj Gade" },
      { rank: "13", name: "Aswin Muthukmar" },
    ],
    classB: [
      { rank: 1, name: "Qihao Lin" },
      { rank: 2, name: "Vedanth Aswin" },
      { rank: 3, name: "Sarika Kannan" },
      { rank: 4, name: "Norman Lehr" },
      { rank: 5, name: "Chetan Kokil" },
      { rank: 6, name: "Juan Saavedra" },
      { rank: 7, name: "Kuntal Pal" },
      { rank: "8-9", name: "David Williams, Viraaj Vemula" },
    ],
  },    
  {
    date: "2025-08-10",
    classA: [
      { rank: 1, name: "Seth Pech" },
      { rank: 2, name: "Ranjit Rayamajhi" },
      { rank: 3, name: "Pratyush Mohanty" },
      { rank: 4, name: "Yizhou Zhao" },
      { rank: 5, name: "Amir Dan" },
      { rank: 6, name: "Saahaj Gade" },
    ],
    classB: [
      { rank: 1, name: "Erik Zhang" },
      { rank: 2, name: "Philip Wang" },
      { rank: 3, name: "Qihao Lin" },
      { rank: 4, name: "Norman Lehr" },
      { rank: 5, name: "Michael Nguyen" },
      { rank: 6, name: "David Williams" },
    ],
  },
  {
    date: "2025-08-03",
    open: [
      { rank: 1, name: "Seth Pech" },
      { rank: 2, name: "Ranjit Rayamajhi" },
      { rank: 3, name: "Nilanjan Debnath" },
      { rank: 4, name: "Philip Wang" },
      { rank: 5, name: "Pratyush Mohanty" },
      { rank: 6, name: "Amir Dan" },
      { rank: 7, name: "Masood Hyder" },
      { rank: 8, name: "Saahaj Gade" },
      { rank: 9, name: "David Williams" },
    ],
  },
  {
    date: "2025-07-20",
    classA: [
      { rank: 1, name: "Zhongxu An" },
      { rank: 2, name: "Ranjit Rayamajhi" },
      { rank: "3-4", name: "Yizhou Zhao, Masood Hyder" },
      { rank: "5-6", name: "Maxwell Dillow, Ivan Tsai" },
       { rank: 7, name: "Amir Dan" },
    ],
    classB: [
      { rank: 1, name: "Philip Wang" },
      { rank: 2, name: "Saahaj Gade" },
      { rank: 3, name: "Norman Lehr" },
      { rank: 4, name: "Chetan Kokil" },
      { rank: 5, name: "Maxwell Pham" },
      { rank: 6, name: "David Williams" },
      { rank: 7, name: "Kuntal Pal" },
      { rank: 8, name: "Annie Xiang" },
    ],
  },
  {
    date: "2025-07-13",
    classA: [
      { rank: 1, name: "Seth Pech" },
      { rank: 2, name: "Yu-Te Huang" },
      { rank: 3, name: "Ranjit Rayamajhi" },
      { rank: 4, name: "Maxwell Dillow" },
      { rank: 5, name: "Philip Wang" },
      { rank: 6, name: "Amir Dan" },
      { rank: 7, name: "Sofija Scepanovic" },
    ],
    classB: [
      { rank: 1, name: "Erik Zhang" },
      { rank: 2, name: "Norman Lehr" },
      { rank: 3, name: "David Williams" },
      { rank: 4, name: "Jeshua Juane" },
    ],
  },
  {
    date: "2025-07-06",
    classA: [
      { rank: 1, name: "Seth Pech" },
      { rank: 2, name: "Dhruv Dusad" },
      { rank: 3, name: "Ranjit Rayamajhi" },
      { rank: 4, name: "Ivan Tsai" },
      { rank: 5, name: "Vihaan Desaraju" },
      { rank: 6, name: "Nicholas Senturia" },
      { rank: 7, name: "Maxwell Dillow" },
      { rank: 8, name: "Arjun Dharangaoker" },
      { rank: 9, name: "Yizhou Zhao" },
      { rank: 10, name: "Amir Dan" },
    ],
    classB: [
      { rank: 1, name: "Philip Wang" },
      { rank: 2, name: "Chetan Kokil" },
      { rank: 3, name: "Kanika Dusad" },
      { rank: 4, name: "Norman Lehr" },
      { rank: 5, name: "Kuntal Pal" },
      { rank: 6, name: "David Williams" },
    ],
  },
  {
    date: "2025-06-29",
    classA: [
      { rank: 1, name: "Seth Pech" },
      { rank: 2, name: "Ranjit Rayamajhi" },
      { rank: 3, name: "Vihaan Desaraju" },
      { rank: 4, name: "Amir Dan" },
      { rank: 5, name: "Maxwell Dillow" },
      { rank: 6, name: "Ivan Tsai" },
    ],
    classB: [
      { rank: 1, name: "Norman Lehr" },
      { rank: 2, name: "Tim Pham" },
      { rank: 3, name: "David Williams" },
      { rank: 4, name: "Kuntal Pal" },
    ],
  },
  {
    date: "2025-06-22",
    classA: [
      { rank: 1, name: "Seth Pech" },
      { rank: 2, name: "Michael Chang" },
      { rank: 3, name: "Ranjit Rayamajhi" },
      { rank: 4, name: "Maxwell Dillow" },
      { rank: 5, name: "Arjun Dharangoaker" },
      { rank: 6, name: "Ivan Tsai" },
    ],
    classB: [
      { rank: 1, name: "Kanika Dusad" },
      { rank: 2, name: "Norman Lehr" },
      { rank: 3, name: "Yiyang (Philip) Wang" },
      { rank: 4, name: "Qihao Lin" },
      { rank: 5, name: "Doug Zhuang" },
      { rank: 6, name: "Colin O'Reily" },
    ],
  },
  {
    date: "2025-06-15",
    classA: [
      { rank: 1, name: "Seth Pech" },
      { rank: 2, name: "Dhruv Dusad" },
      { rank: 3, name: "Keith Pech" },
      { rank: 4, name: "Ranjit Rayamajhi" },
      { rank: 5, name: "Maxwell Dillow" },
      { rank: 6, name: "Yiyang (Philip) Wang" },
    ],
    classB: [
      { rank: 1, name: "Amir Dan" },
      { rank: 2, name: "Kanika Dusad" },
      { rank: 3, name: "Sahaaji Gade" },
      { rank: 4, name: "Qihao Lin" },
      { rank: 5, name: "Norman Lehr" },
    ],
  },
  {
    date: "2025-06-08",
    classA: [
      { rank: 1, name: "Dhruv Dusad" },
      { rank: 2, name: "Vihaan Desaraju" },
      { rank: 3, name: "Nicholas Senturia" },
      { rank: 4, name: "Qihao Lin" },
      { rank: 5, name: "Maxwell Dillow" },
      { rank: 6, name: "Amir Dan" },
    ],
    classB: [
      { rank: 1, name: "Yiyang (Philip) Wang" },
      { rank: 2, name: "Arjun Dharangaoker" },
      { rank: 3, name: "Doug Zhuang" },
      { rank: 4, name: "Zain Shakir" },
      { rank: 5, name: "Kanika Dusad" },
      { rank: 6, name: "Kuntal Pal" },
      { rank: 7, name: "Kokil Chetan" },
      { rank: 8, name: "David Williams" },
    ],
  },
  {
    date: "2025-06-01",
    classA: [
      { rank: 1, name: "Seth Pech" },
      { rank: 2, name: "Keith Pech" },
      { rank: 3, name: "Ranjit Rayamajhi" },
      { rank: 4, name: "Amir Dan" },
      { rank: 5, name: "Dylan Ley" },
      { rank: 6, name: "Vihaan Desaraju" },
      { rank: 7, name: "Nicholas Senturia" },
      { rank: 8, name: "Yiyang (Philip) Wang" },
      { rank: 9, name: "Doug Zhuang" },
    ],
    classB: [
      { rank: 1, name: "David Williams" },
      { rank: 2, name: "Kuntal Pal" },
      { rank: 3, name: "Christopher Leiper" },
    ],
  },
  {
    date: "2025-05-25",
    classA: [
      { rank: 1, name: "Seth Pech" },
      { rank: 2, name: "Yu-Te Huang" },
      { rank: 3, name: "Maxwell Dillow" },
      { rank: 4, name: "Amir Dan" },
      { rank: 5, name: "Qihao Lin" },
    ],
    classB: [
      { rank: 1, name: "Norman Lehr" },
      { rank: 2, name: "Max Zhang" },
      { rank: 3, name: "Yiyang Wang" },
      { rank: 4, name: "David Williams" },
    ],
  },
  {
    date: "2025-05-18",
    classA: [
      { rank: 1, name: "Seth Pech" },
      { rank: 2, name: "Keith Pech" },
      { rank: 3, name: "Dhruv Dusad" },
      { rank: 4, name: "Ranjit Rayamajhi" },
      { rank: 5, name: "Pratyush Mohanty" },
      { rank: 6, name: "Arjun Dharangaoker" },
      { rank: 7, name: "Sahaaji Gade" },
      { rank: 8, name: "Douglas Zhang" },
    ],
    classB: [
      { rank: 1, name: "Amir Dan" },
      { rank: 2, name: "Norman Lehr" },
      { rank: 3, name: "Yosef Lender" },
      { rank: 4, name: "Le Hang Nguyen" },
      { rank: 5, name: "Kanika Dusad" },
      { rank: 6, name: "David Williams" },
      { rank: 7, name: "Salman Syed" },
      { rank: 8, name: "Sebastian Ting" },
    ],
  },
  {
    date: "2025-05-11",
    classA: [
      { rank: 1, name: "Seth Pech" },
      { rank: 2, name: "Dhruv Dusad" },
      { rank: 3, name: "Ranjit Rayamajhi" },
      { rank: 4, name: "Pratyush Mohanty" },
      { rank: 5, name: "Max Dillow" },
      { rank: 6, name: "Nicholas Senturia" },
      { rank: 7, name: "Vihaan Desaraju" },
      { rank: 8, name: "Amir Dan" },
      { rank: 9, name: "Arjun Dharangaoker" },
      { rank: 10, name: "Qihao Lin" },
    ],
    classB: [
      { rank: 1, name: "Yosef Lender" },
      { rank: 2, name: "Sahaaji Gade" },
      { rank: 3, name: "Aswin Muthukumar" },
      { rank: 4, name: "Vedanth Aswin" },
      { rank: 5, name: "Norman Lehr" },
      { rank: 6, name: "Erik Zhang" },
      { rank: 7, name: "Kanika Dusad" },
      { rank: 8, name: "David Williams" },
      { rank: 9, name: "Salman Syed" },
    ],
  },
  {
    date: "2025-05-04",
    classA: [
      { rank: 1, name: "Seth Pech" },
      { rank: 2, name: "Dhruv Dusad" },
      { rank: 3, name: "Ranjit Rayamajhi" },
      { rank: 4, name: "Max Dillow" },
      { rank: 5, name: "Dylan Joshua Ley" },
      { rank: 6, name: "Nicholas Senturia" },
      { rank: 7, name: "Amir Dan" },
      { rank: 8, name: "Douglas Zhang" },
    ],
    classB: [
      { rank: 1, name: "Qihao Lin" },
      { rank: 2, name: "Kanika Dusad" },
      { rank: 3, name: "Erik Zhang" },
      { rank: 4, name: "Norman Lehr" },
      { rank: 5, name: "Le Hang Nguyen" },
      { rank: 6, name: "David Williams" },
      { rank: 7, name: "Salman Syed" },
    ],
  },
  {
    date: "2025-04-27",
    classA: [
      { rank: 1, name: "Seth Pech" },
      { rank: 2, name: "Dhruv Dusad" },
      { rank: 3, name: "Ranjit Rayamajhi" },
      { rank: 4, name: "Pratyush Mohanty" },
      { rank: 5, name: "Nicholas Senturia" },
      { rank: 6, name: "Amir Dan" },
      { rank: 7, name: "Max Dillow" },
      { rank: 8, name: "Saheb Bhatia" },
    ],
    classB: [
      { rank: 1, name: "Norman Lehr" },
      { rank: 2, name: "Andrew Matul" },
      { rank: 3, name: "Saahaj Gade" },
      { rank: 4, name: "Qihao Lin" },
      { rank: 5, name: "Akash Krishnamuthy" },
      { rank: 6, name: "Salman Syed" },
    ],
  },
  {
    date: "2025-04-13",
    classA: [
      { rank: 1, name: "Keith Pech" },
      { rank: 2, name: "Dhruv Dusad" },
      { rank: 3, name: "Ranjit Rayamajhi" },
      { rank: 4, name: "Vihann Desaraju" },
      { rank: 5, name: "Yizhou Zhao" },
      { rank: 6, name: "Nicholas Senturia" },
      { rank: 7, name: "Max Dillow" },
      { rank: 8, name: "Amir Dan" },
      { rank: 9, name: "Kathleen Lin" },
    ],
    classB: [
      { rank: 1, name: "Jack Liau" },
      { rank: 2, name: "Saahaj Gade" },
      { rank: 3, name: "Arjun Dharango" },
      { rank: 4, name: "Gui Ming Chen" },
      { rank: 5, name: "Andrew Matul" },
      { rank: 6, name: "Kanika Dusad" },
      { rank: 7, name: "Akash Krishnamuthy" },
      { rank: 8, name: "Salman Syed" },
    ],
  },
  {
    date: "2025-04-06",
    classA: [
      { rank: 1, name: "Keith Pech" },
      { rank: 2, name: "Dhruv Dusad" },
      { rank: 3, name: "Ranjit Rayamajhi" },
      { rank: 4, name: "Max Dillow" },
      { rank: 5, name: "Amir Dan" },
      { rank: 6, name: "Travis Qualls" },
    ],
    classB: [
      { rank: 1, name: "Saahaj Gade" },
      { rank: 2, name: "Gui Ming Chen" },
      { rank: 3, name: "Norman Lehr" },
      { rank: 4, name: "Akash Krishnamuthy" },
      { rank: 5, name: "Kanika Dusad" },
      { rank: 6, name: "Salman Syed" },
      { rank: 7, name: "Roger Man" },
      { rank: 8, name: "Garrett Carlton Bradford" },
    ],
  },
  {
    date: "2025-03-30",
    classA: [
      { rank: 1, name: "Seth Pech" },
      { rank: 2, name: "Ranjit Rayamajhi" },
      { rank: 3, name: "Iago Bittencourt" },
      { rank: 4, name: "Dhruv Dusad" },
      { rank: 5, name: "Nicholas Senturia" },
      { rank: 6, name: "Max Dillow" },
      { rank: 7, name: "Yizhou Zhao" },
      { rank: 8, name: "Amir Dan" },
    ],
    classB: [
      { rank: 1, name: "Genaro Natale" },
      { rank: 2, name: "Kanika Dusad" },
      { rank: 3, name: "Norman Lehr" },
      { rank: 4, name: "Qihao Lin" },
      { rank: 5, name: "Akash Krishnamuthy" },
      { rank: 6, name: "David Williams" },
    ],
  },
  // 2024 Results
  {
    date: "2024-12-29",
    classA: [
      { rank: 1, name: "Joshua Mak" },
      { rank: 2, name: "Keith Pech" },
      { rank: 3, name: "Jadon Yuan" },
      { rank: 4, name: "Amir Dan" },
      { rank: 5, name: "Richard Lai" },
    ],
    classB: [
      { rank: 1, name: "Dennis Fang" },
      { rank: 2, name: "Ivan Tsai" },
      { rank: 3, name: "Genaro Natale" },
      { rank: 4, name: "Saheb Bhatia" },
      { rank: 5, name: "Linus Osler" },
    ],
  },
  {
    date: "2024-12-22",
    classA: [
      { rank: 1, name: "Ranjit Rayamajhi" },
      { rank: 2, name: "Keith Pech" },
      { rank: 3, name: "Jadon Yuan" },
      { rank: 4, name: "Pratyush Mohanty" },
      { rank: 5, name: "Vihaan Desaraju" },
      { rank: 6, name: "Maxwell Dillow" },
      { rank: 7, name: "Amir Dan" },
      { rank: 8, name: "Genaro Natale" },
      { rank: 9, name: "Andrew O'sullivan" },
    ],
    classB: [
      { rank: 1, name: "Norman Lehr" },
      { rank: 2, name: "Nilanijan Debnath" },
      { rank: 3, name: "Dennis Fang" },
      { rank: 4, name: "Jack Liau" },
      { rank: 5, name: "Yosef Lender" },
      { rank: 6, name: "Dave Williams" },
      { rank: 7, name: "Salman Syed" },
      { rank: 8, name: "Tim O'sullivan" },
    ],
  },
  {
    date: "2024-12-15",
    classA: [
      { rank: 1, name: "Ranjit Rayamajhi" },
      { rank: 2, name: "Pratyush Mohanty" },
      { rank: 3, name: "Dhruv Dusad" },
      { rank: 4, name: "Maxwell Dillow" },
      { rank: 5, name: "Vihaan Desaraju" },
      { rank: 6, name: "Yizhou Zhao" },
      { rank: 7, name: "Amir Dan" },
    ],
    classB: [
      { rank: 1, name: "Norman Lehr" },
      { rank: 2, name: "Saahaj Reddy Gade" },
      { rank: 3, name: "Saheb Bhatia" },
      { rank: 4, name: "Kanika Dusad" },
      { rank: 5, name: "Nicholas Lee" },
      { rank: 6, name: "Salman Syed" },
    ],
  },
  {
    date: "2024-12-08",
    classA: [
      { rank: 1, name: "Keith Pech" },
      { rank: 2, name: "Ranjit Rayamajhi" },
      { rank: 3, name: "Dhruv Dusad" },
      { rank: 4, name: "Pratyush Mohanty" },
      { rank: 5, name: "Amir Dan" },
      { rank: 6, name: "Vihaan Desaraju" },
      { rank: 7, name: "Yizhou Zhao" },
      { rank: 8, name: "Genaro Natale" },
      { rank: 9, name: "Dennis Fang" },
    ],
    classB: [
      { rank: 1, name: "Norman Lehr" },
      { rank: 2, name: "Jack Liau" },
      { rank: 3, name: "Sarika Kannan" },
      { rank: 4, name: "Arjun Dharangaonkar" },
      { rank: 5, name: "Layton Dai" },
      { rank: 6, name: "Salman Syed" },
    ],
  },
  {
    date: "2024-06-16",
    classA: [
      { rank: 1, name: "Cole Ryberg" },
      { rank: 2, name: "Keith Pech" },
      { rank: 3, name: "Brian Zhao" },
      { rank: 4, name: "Michael Chang" },
    ],
    classB: [
      { rank: 1, name: "Sara (Hyolyung) Won" },
      { rank: 2, name: "Nicholas Senturia" },
      { rank: 3, name: "Maxwell Dillow" },
      { rank: 4, name: "Amir Dan" },
    ],
    classC: [
      { rank: 1, name: "Yizhou Zhao" },
      { rank: 2, name: "Norman Lehr" },
      { rank: 3, name: "Sarika Kannan" },
      { rank: 4, name: "Yosef Lender" },
      { rank: 5, name: "Saheb Bhatia" },
      { rank: 6, name: "Max Zhang" },
    ],
  },
  // 2023 Results
  {
    date: "2023-12-17",
    classA: [
      { rank: 1, name: "Michael Chang" },
      { rank: 2, name: "Jadon Yuan" },
      { rank: 3, name: "Ranjit Rayamajhi" },
      { rank: 4, name: "Cole Ryberg" },
      { rank: 5, name: "Maxwell Dillow" },
    ],
    classB: [
      { rank: 1, name: "Richard Fu" },
      { rank: 2, name: "Ivan Tsai" },
      { rank: 3, name: "Norman Lehr" },
      { rank: 4, name: "Olivia Lu" },
      { rank: 5, name: "Ismael Yakoubi" },
    ],
  },
  {
    date: "2023-11-26",
    open: [
      { rank: 1, name: "Michael Chang" },
      { rank: 2, name: "Brian Zhao" },
      { rank: 3, name: "Keith Pech" },
      { rank: 4, name: "Jadon Yuan" },
      { rank: 5, name: "Ranjit Rayamajhi" },
      { rank: 6, name: "Maxwell Dillow" },
      { rank: 7, name: "Richard Fu" },
    ],
  },
  {
    date: "2023-11-05",
    open: [
      { rank: 1, name: "Oliver Wang" },
      { rank: 2, name: "Brian Zhao" },
      { rank: 3, name: "Cole Ryberg" },
      { rank: 4, name: "Jadon Yuan" },
      { rank: 5, name: "Ranjit Rayamajhi" },
      { rank: 6, name: "Nico Alvarez" },
      { rank: 7, name: "Dhruv Dusad" },
      { rank: 8, name: "Maxwell Dillow" },
      { rank: 9, name: "Ivan Tsai" },
      { rank: 10, name: "Kanika Dusad" },
    ],
  },
  // 2022 Results
  {
    date: "2022-12-18",
    classB: [
      { rank: 1, name: "Genaro Natali" },
      { rank: 2, name: "Norman Lehr" },
      { rank: 3, name: "Maruthi Mourya Peram" },
      { rank: 4, name: "Travis Qualls" },
      { rank: 5, name: "Richard Tsai" },
      { rank: 6, name: "Vihaan Desaraju" },
      { rank: 7, name: "Ivan Tsai" },
      { rank: 8, name: "Gwelo Temperant" },
    ],
  },
  {
    date: "2022-12-03",
    teamEvent: {
      type: "2-Man Team",
      results: [
        { rank: 1, team: ["Cole Ryberg", "Nico Alvarez"] },
        { rank: 2, team: ["Jadon Yuan", "Brian Zhao"] },
        { rank: 1, team: ["Richard Lai", "Maxwell Dillow"] },
        { rank: 2, team: ["Pratyush Mohanty", "Dhruv Dusad"] },
        { rank: 3, team: ["Norman Lehr", "Mark Sabedra"] },
        { rank: 4, team: ["Kanika Dusad", "Vihaan Desaraju"] },
      ],
    },
  },
  {
    date: "2022-07-31",
    classA: [
      { rank: 1, name: "Ranjit Rayamajhi" },
      { rank: 2, name: "Keith Pech" },
      { rank: 3, name: "Tai Lun Zhang" },
      { rank: 4, name: "Brian Zhao" },
      { rank: 5, name: "Michael Zhang" },
      { rank: 6, name: "Song Qin" },
      { rank: 7, name: "Maxwell Dillow" },
      { rank: 8, name: "Erick" },
      { rank: 9, name: "Hank Shih" },
    ],
    classB: [
      { rank: 1, name: "Richard Lai" },
      { rank: 2, name: "Khanty Chanthmmavong" },
      { rank: 3, name: "Bryce Staveley" },
      { rank: 4, name: "Pratyush Mohanty" },
    ],
    classC: [
      { rank: 1, name: "Glen Johnson" },
      { rank: 2, name: "James Hoak" },
      { rank: 3, name: "Johnny Alrid" },
      { rank: 4, name: "Afred Hoak" },
      { rank: 5, name: "Trinh Kieu" },
      { rank: 6, name: "Paul Nguyen" },
      { rank: 7, name: "Ben Nguyen" },
      { rank: 8, name: "Theo Nguyen" },
    ],
  },
  // 2021 Results
  {
    date: "2021-12-19",
    classA: [
      { rank: 1, name: "Ranjit Rayamajhi" },
      { rank: 2, name: "Cole Ryberg" },
      { rank: 3, name: "Keith Pech" },
      { rank: 4, name: "Dayson Dereta" },
    ],
    classB: [
      { rank: 1, name: "Norman Lehr" },
      { rank: 2, name: "Travis Qualls" },
      { rank: 3, name: "Freddy Arista" },
      { rank: 4, name: "Richard Tsai" },
      { rank: 5, name: "Ivan Tsai" },
      { rank: 6, name: "Peter Paulus" },
      { rank: 7, name: "Permanand Singh" },
      { rank: 8, name: "Marcelo Medina" },
    ],
  },
  {
    date: "2021-12-12",
    teamEvent: {
      type: "2-Man Team Class B",
      results: [
        { rank: 1, team: ["Pratyush Mohanty", "Travis Qualls"] },
        { rank: 2, team: ["Norman Lehr", "Peter Paulus"] },
        { rank: 3, team: ["Shahin Golestanlan", "Permanand Singh"] },
        { rank: 4, team: ["Allen Chung", "Ivan Tsai"] },
      ],
    },
  },
  // 2019 Results
  {
    date: "2019-11-02",
    classA: [
      { rank: 1, name: "Shuai Wang" },
      { rank: 2, name: "David Qin" },
      { rank: 3, name: "Kevin Lu" },
      { rank: 4, name: "Ranjit Singh Rayamajhi" },
      { rank: 5, name: "Raymond Sacco" },
      { rank: 6, name: "Johnson Martin" },
      { rank: 7, name: "Faraz Kasmani" },
      { rank: 9, name: "Salman Razi" },
    ],
    classB: [
      { rank: 1, name: "Naveen Irudayaraj" },
      { rank: 2, name: "Jadon Yuan" },
      { rank: 3, name: "Takatoshi Mii" },
      { rank: 4, name: "Bruce Reiff" },
      { rank: 5, name: "Taher Jaleel" },
      { rank: 6, name: "Norman Lehr" },
      { rank: 7, name: "Viful Mhapsekar" },
      { rank: 8, name: "Charle Lotfalla" },
    ],
    classC: [
      { rank: 1, name: "Nitin Bantey" },
      { rank: 2, name: "Maxwell Dillow" },
      { rank: 3, name: "Hayden Baker" },
      { rank: 4, name: "David Witten" },
      { rank: 5, name: "George Li" },
      { rank: 6, name: "A. Zaeem Afzal" },
      { rank: 7, name: "Swapan Sihah" },
      { rank: 8, name: "Michael Clardy" },
      { rank: 9, name: "Presley Jiang" },
      { rank: 10, name: "Valentine" },
      { rank: 11, name: "Pratyush Mohanty" },
      { rank: 12, name: "Bill Cashin" },
    ],
  },
  {
    date: "2019-10-26",
    classA: [
      { rank: 1, name: "Kelly Zhao" },
      { rank: 2, name: "Keith Pech" },
      { rank: 3, name: "Ranjit Singh Rayamajhi" },
      { rank: 4, name: "Logan Watson" },
      { rank: 5, name: "David Qin" },
      { rank: 6, name: "Shiheng Qiu" },
      { rank: 7, name: "Faraz Kasmani" },
      { rank: 8, name: "Derek Baker" },
    ],
    classB: [
      { rank: 1, name: "Raymond Sacco" },
      { rank: 2, name: "Takatoshi Mii" },
      { rank: 3, name: "Norman Lehr" },
      { rank: 4, name: "Bruce Reiff" },
      { rank: 5, name: "Rory Liu" },
      { rank: 6, name: "Mark Chen" },
      { rank: 7, name: "Zack Gholston" },
      { rank: 8, name: "Viful Mhapsekar" },
      { rank: 9, name: "Charle Lotfalla" },
    ],
    classC: [
      { rank: 1, name: "Serena Kong" },
      { rank: 2, name: "Charle Lotfalla" },
      { rank: 3, name: "Anish Mauda" },
      { rank: 4, name: "David Witten" },
      { rank: 5, name: "Michael Clardy" },
      { rank: 6, name: "Tanvi Nikam" },
      { rank: 7, name: "George Li" },
      { rank: 8, name: "Matthew Lee" },
      { rank: 9, name: "Maxwell Dillow" },
      { rank: 10, name: "Sabrina Sun" },
      { rank: 11, name: "Pratyush Mohanty" },
    ],
  },
  {
    date: "2019-09-21",
    classA: [
      { rank: 1, name: "Shuai Wang" },
      { rank: 2, name: "Evan Lai" },
      { rank: 3, name: "Ranjit Singh Rayamajhi" },
      { rank: 4, name: "Keith Pech" },
      { rank: 5, name: "Kelly Zhao" },
      { rank: 6, name: "David Qin" },
    ],
    classB: [
      { rank: 1, name: "Quang Nguyen" },
      { rank: 2, name: "Kevin Lu" },
      { rank: 3, name: "Bruce Reiff" },
      { rank: 4, name: "Naveen Irudayaraj" },
      { rank: 5, name: "Salman Razi" },
      { rank: 6, name: "Rory Liu" },
      { rank: 7, name: "Takatoshi Mii" },
      { rank: 8, name: "Jun Guo" },
      { rank: 9, name: "Viet Chau" },
      { rank: 10, name: "Swapan Shah" },
    ],
    classC: [
      { rank: 1, name: "Norman Lehr" },
      { rank: 2, name: "Raymond Sacco" },
      { rank: 3, name: "Matthew Lee" },
      { rank: 4, name: "Michael Clardy" },
      { rank: 5, name: "Charles Kim" },
      { rank: 6, name: "Todd Wiederhold" },
      { rank: 7, name: "Maxwell Dillow" },
      { rank: 8, name: "Peter Snell" },
      { rank: 9, name: "Graeme Robertson" },
      { rank: 10, name: "Bill Cashin" },
    ],
  },
]

export default function SundayRRPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  // Extract unique years and sort them in descending order
  const years = useMemo(() => {
    const yearSet = new Set(roundRobinResults.map((result) => parseISO(result.date).getFullYear()))
    return Array.from(yearSet).sort((a, b) => b - a)
  }, [])

  // Count results per year
  const resultCounts = useMemo(() => {
    const counts: Record<number, number> = {}
    roundRobinResults.forEach((result) => {
      const year = parseISO(result.date).getFullYear()
      counts[year] = (counts[year] || 0) + 1
    })
    return counts
  }, [])

  // Filter results based on selected year and search term
  const filteredResults = useMemo(() => {
    let filtered = roundRobinResults

    // Filter by year
    if (selectedYear) {
      filtered = filtered.filter((result) => parseISO(result.date).getFullYear() === selectedYear)
    }

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter((result) => {
        // Search in player names
        const allPlayers = [
          ...(result.classA || []),
          ...(result.classB || []),
          ...(result.classC || []),
          ...(result.open || []),
        ]

        const playerMatch = allPlayers.some((player) => player.name.toLowerCase().includes(searchLower))

        // Search in team events
        const teamMatch =
          result.teamEvent?.results.some((teamResult) =>
            teamResult.team.some((member) => member.toLowerCase().includes(searchLower)),
          ) || false

        // Search in date
        const dateMatch = result.date.includes(searchTerm)

        return playerMatch || teamMatch || dateMatch
      })
    }

    return filtered.sort((a, b) => parseISO(b.date).getTime() - parseISO(a.date).getTime())
  }, [selectedYear, searchTerm])

  const totalResults = filteredResults.length
  const totalPlayers = useMemo(() => {
    const playerSet = new Set<string>()
    filteredResults.forEach((result) => {
      ;[...(result.classA || []), ...(result.classB || []), ...(result.classC || []), ...(result.open || [])].forEach(
        (player) => playerSet.add(player.name),
      )
    })
    return playerSet.size
  }, [filteredResults])

  const latestResult = filteredResults[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Sunday Singles Round Robin</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Weekly round robin tournament results featuring competitive play across multiple skill divisions. Track
            player progress and see how the competition has evolved over the years.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="flex items-center p-6">
              <Calendar className="h-8 w-8 text-blue-600 mr-4" />
              <div>
                <p className="text-2xl font-bold text-blue-900">{totalResults}</p>
                <p className="text-gray-600">Total Events</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Users className="h-8 w-8 text-blue-600 mr-4" />
              <div>
                <p className="text-2xl font-bold text-blue-900">{totalPlayers}</p>
                <p className="text-gray-600">Active Players</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Trophy className="h-8 w-8 text-blue-600 mr-4" />
              <div>
                <p className="text-2xl font-bold text-blue-900">
                  {latestResult ? format(parseISO(latestResult.date), "MM/dd/yyyy") : "N/A"}
                </p>
                <p className="text-gray-600">Latest Event</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <YearSelector
            years={years}
            selectedYear={selectedYear}
            onYearSelect={setSelectedYear}
            resultCounts={resultCounts}
          />

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search players, dates, or events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Results */}
        {filteredResults.length > 0 ? (
          <div className="space-y-6">
            {filteredResults.map((result, index) => (
              <RRResultCard key={`${result.date}-${index}`} result={result} />
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <Trophy className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No Results Found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or selecting a different year.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
