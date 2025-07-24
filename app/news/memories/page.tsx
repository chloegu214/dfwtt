import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Calendar, ExternalLink, ImageIcon } from "lucide-react"
import Image from "next/image"

type Memory = {
  name: string
  years?: string
  content: React.ReactNode
  imageUrl?: string
  links?: { label: string; url: string }[]
}

const memories: Memory[] = [
  {
    name: "Harry McKeever",
    years: "1928-2016",
    imageUrl: "/images/memories/Harry-Mckeever-1478348611.png",
    content: (
      <>
        <p className="mb-4">
          Harry McKeever passed away Thursday, Nov. 4, 2016 at Kindred Hospital in Dallas after a brief illness. Harry
          was born Sept, 4 1928 in the Banner community of Holton, Kansas to Clark and Alice McKeever. He graduated from
          Holton High School in 1946 and immediately entered the army, where he served 2 years duty in Japan. After
          discharge, he returned to Kansas and enrolled at Baker University, Baldwin, Kansas graduating in 1952.
        </p>
        <p className="mb-4">
          It was then, he started his 40 year career in the insurance industry as a payroll auditor of Workers Comp with
          Bituminous Casualty Co. He was transferred to Rock Island III. and there he met and married Sally Maske in Dec
          1958. This year would have been their 58th anniversary. They often joked that they were the original "When
          Harry Met Sally."
        </p>
        <p className="mb-4">
          When Harry retired he found new avocations--friends laughed that it took him 10 minutes to adjust to
          retirement. He rediscovered table tennis after playing in the army. He took lessons, played tournaments - won
          trophies. With his partner, Richard Grant, they were in senior citizen tournaments from Disney World to San
          Francisco. Harry and Sally loved to travel, so they always tacked a vacation trip on the tournaments to
          explore the area. With art that traveling, you really need a van- so Harry bargained his way to 5 different
          vans--Hondas, of course. Needless to say trading cars was another hobby of his.
        </p>
        <p className="mb-4">
          He became interested in volunteer work and was active in the Richardson Police Citizens academy and
          Volunteering at a Police station for a number of years. He helped to organize a Crime watch for Kindred Lane.
        </p>
        <p className="mb-4">
          He is survived by his wife, Sally; daughter, Barbara, Dallas, his son, Brad and wife Laurie of Flower Mound;
          grandsons, Matthew and Mitchell McKeever; brother, Wendel McKeever-of Shawnee Mission, Kansas; brother-in-law,
          Joe Maske and Becky of Pelican Rapids MN; niece Amy and Bob Mueller and son Lucas of Wichita, KS. He was
          preceded in death by his parents; brother, Duane, Gene and Kathryn Maske of Iowa and sister-in-law Marilyn
          Maske.
        </p>
        <p>
          In memory of Harry you may choose: American Diabetes Assoc, American Cancer Society, or the Scholarship fund
          for the RPD Citizens{" "}
          <a
            href="http://www.rcpaaa.org/scholarship-program/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Scholarship Program
          </a>
        </p>
      </>
    ),
  },
  {
    name: "Dorothea Taschner",
    years: "1928-2012",
    imageUrl: "/images/memories/dorothea.png",
    content: (
      <>
        <p className="mb-4">
          Dorothea Taschner, a longtime DFWTT tournament player, passed away on August 20, 2012. Her table tennis
          playing spanned many decades after she first started playing at the age of 16. In the January 2011 edition of
          Plano Profile, a very interesting article was written about her life and her passion for table tennis.
        </p>
      </>
    ),
    links: [
      {
        label: "Tributes.com Memorial",
        url: "http://www.tributes.com/show/Dorothea-Auguste-Taschner-94312463",
      },
    ],
  },
  {
    name: "Hollis Hall",
    imageUrl: "/images/memories/Hollis and Vic.jpg",
    content: (
      <>
        <p className="mb-4">
          In loving memory and dedication of Hollis. Hollis Hall was an avid table tennis player, who had a passion for
          table tennis. He was always a pleasure to be around, and it did not matter if he won or loss as long as he was
          playing table tennis. Hollis played many tournaments with Vic Maryoung as his doubles partner. Even during his
          battle with cancer he thought about making a come back to play. Unfortunately, Hollis passed away July 8th
          2003 after battling cancer. His legacy and passion for table tennis lives on in all of us.
        </p>
        <p className="text-sm text-gray-600 italic">Hollis and Vic (left to right)</p>
      </>
    ),
  },
  {
    name: "Frank Opp",
    years: "1931-2006",
    imageUrl: "/images/memories/Frank.JPG",
    content: (
      <>
        <p className="mb-4">
          My friendship with Frank was that we had so much in common in our younger days, both educated as Engineers,
          both worked as Engineers for technical companies (Collins Radio for me and T.I for Frank) and both were in the
          Marine Corps. I think our Engineering connection was the strongest since you can take the slide rule away from
          the Engineer, but you can't take the Engineer away from the slide rule, meaning that we both had an analytical
          mind and "thought" like Engineers our entire lives.
        </p>
        <p className="mb-4">
          Frank applied his engineering background to his game of table tennis and analyzed his game from an engineering
          standpoint to an almost obsessive degree to improve his game but he mainly achieved a degree of success by
          perseverance rather than trying to understand the angular momentum of the ball when struck with a particular
          angle and speed of the racquet. He improved his game by hitting hundreds of balls a day and hundreds of serves
          a day and just about wore out a robot machine which he modified to feed him table tennis balls at obscene
          speeds and spins. He also took lessons off and on for years from instructors who helped him develop the
          techniques for success. He played four or five times a week at the recreation and senior centers in the area
          and also in about every tournament from the Red River to the Rio Grande. In short, he was a Table Tennis
          fanatic.
        </p>
        <p className="mb-4">
          However, when away from table tennis, I saw another side of Frank when our interest in birds and Purple
          Martins in particular provided many long discussions on their antics and how to attract them and keep the
          House Sparrows away from their nests so they could raise their young in safety.
        </p>
        <p className="mb-4">Frank was an interesting person and a good friend and I have missed him very much.</p>
        <p className="mb-4 font-semibold">Richard Grant</p>
        <div className="border-t border-gray-200 pt-4 mt-4">
          <p className="mb-2 font-semibold">A Few Words About Frank Opp and Table Tennis (from Joyce Opp)</p>
          <p className="mb-4">
            Frank Opp loved table tennis. That became obvious as soon as he started to play. As engineering had been his
            vocation, table tennis became his avocation. His retirement years were spent practicing, learning, playing
            and traveling to various tournaments. It was a new life.
          </p>
        </div>
        <div className="border-t border-gray-200 pt-4 mt-4">
          <p className="mb-2 font-semibold">A few words about Frank Opp and table tennis:</p>
          <p className="text-blue-700 font-medium">
            Enthusiastic. Determined. Competitive. Dedicated. Sincere. Obsessed. Frank Opp!
          </p>
        </div>
      </>
    ),
  },
]

function MemoryCard({ memory }: { memory: Memory }) {
  return (
    <Card className="mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-blue-600">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-yellow-50 pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold text-blue-900 flex items-center gap-2">
            <Heart className="h-6 w-6 text-red-500" />
            In Memory of {memory.name}
          </CardTitle>
          {memory.years && (
            <Badge variant="secondary" className="bg-yellow-200 text-yellow-800 flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {memory.years}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 mx-auto md:mx-0">
              {memory.imageUrl ? (
                <Image
                  src={memory.imageUrl || "/placeholder.svg"}
                  alt={`Photo of ${memory.name}`}
                  fill
                  className="rounded-lg object-cover border-2 border-gray-200 shadow-md"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <ImageIcon className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">Photo placeholder</p>
                    <p className="text-xs">for {memory.name}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <div className="text-gray-700 leading-relaxed">{memory.content}</div>
            {memory.links && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-blue-900 mb-2">Related Links:</h4>
                <ul className="space-y-2">
                  {memory.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function MemoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">In Loving Memory</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Honoring the lives and legacies of our beloved DFWTT family members who have passed on, but whose passion
            for table tennis continues to inspire us all.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {memories.map((memory, index) => (
            <MemoryCard key={index} memory={memory} />
          ))}
        </div>

        {/* Closing Message */}
        <div className="text-center mt-16 py-12 bg-gradient-to-r from-blue-100 to-yellow-100 rounded-lg">
          <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Friends Forever</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Though they are no longer with us, their spirit lives on in every game played, every tournament held, and
            every new player who discovers the joy of table tennis. They will always be remembered as cherished members
            of our DFWTT family.
          </p>
        </div>
      </main>
    </div>
  )
}
