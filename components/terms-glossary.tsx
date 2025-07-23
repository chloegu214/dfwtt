"use client"

import { useState } from "react"
import { Search, Book } from "lucide-react"

interface Term {
  term: string
  definition: string
}

const terms: Term[] = [
  {
    term: "Attacker",
    definition: "A type of player who attempts to loop or smash as many balls as possible, overpowering an opponent.",
  },
  {
    term: "Blade",
    definition: "A paddle or racquet without any covering.",
  },
  {
    term: "Block",
    definition:
      "Used to return an attack shot. The racquet is held in front of the ball with little movement before contact.",
  },
  {
    term: "Chop",
    definition:
      "Used to create underspin. The shot is executed by slicing underneath and grazing the bottom or back of the ball.",
  },
  {
    term: "Defender",
    definition:
      "This player pushes, chops, blocks, and tries to force his/her opponent into making a mistake. Defenders rely on their ability to return every ball and wearing down an opponent.",
  },
  {
    term: "Third Ball Attack",
    definition: "Begins with a serve, an opponent's return, and an attack of the opponent's return.",
  },
  {
    term: "Fifth Ball Attack",
    definition:
      "Begins with a serve, an opponent's return, a loop or strategically placed drive, an opponent's return, and ends with a point-winning put away.",
  },
  {
    term: "Hardbat",
    definition:
      "Also called 'Classic Table Tennis'; players are required to use paddles covered only with short-pimpled rubber, without sponge. Proponents claim that the reduced spin produces longer rallies balancing offense and defense.",
  },
  {
    term: "Hit",
    definition: "A slower version of a smash.",
  },
  {
    term: "Let",
    definition: "A rally in which play stops and the point is not scored.",
  },
  {
    term: "Let Serve",
    definition:
      "When the serve hits the net and lands on the opponent's side. Players serve again. It is often incorrectly called a net serve.",
  },
  {
    term: "Loop",
    definition:
      "A long sweeping upward stroke that just grazes the top half of the ball to create tremendous topspin. A good loop goes nearly straight up if it strikes a vertical paddle, and is used as a rallying shot, to set up a smash, or as a put away shot itself.",
  },
  {
    term: "Penhold",
    definition:
      "This grip generally gives the player the best forehand, but a weaker backhand. Popular in Asia, the racquet is held as if you were holding a pen, with the racquet tip pointing mostly downward.",
  },
  {
    term: "Pips In",
    definition: "A smooth rubber surface on the racquet face.",
  },
  {
    term: "Pips Out",
    definition: "A rubber surface on the racquet covered with bumps or dimples.",
  },
  {
    term: "Rally",
    definition: "When the ball is in play.",
  },
  {
    term: "Smash",
    definition:
      "The fastest shot in table tennis and almost impossible to return, a smash averages 60 mph and reaches upwards of 100 mph.",
  },
  {
    term: "Serve",
    definition:
      "Used to put the ball into play. Each player alternately serves two points until a player scores 11 points. If the score reaches 10-10, then the game shall be won by the first player to take a two-point lead.",
  },
  {
    term: "Shakehands",
    definition:
      "The most popular grip in the world, it is held by basically shaking hands with the racquet. This grip generally gives the best balance of forehand and backhand shots.",
  },
  {
    term: "Table",
    definition:
      "Nine feet in length and five feet in width. It is supported so that the upper surface, termed the playing surface, is lying on a horizontal plane two feet, six inches above the floor.",
  },
]

export default function TermsGlossary() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTerms = terms.filter(
    (term) =>
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <Book className="h-6 w-6 text-blue-600" />
        <h3 className="text-xl font-bold text-gray-900">Table Tennis Glossary</h3>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search terms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {filteredTerms.map((term, index) => (
          <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
            <dt className="font-semibold text-blue-600 mb-1">{term.term}</dt>
            <dd className="text-gray-700 text-sm leading-relaxed">{term.definition}</dd>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <p className="text-gray-500 text-center py-8">No terms found matching your search.</p>
      )}
    </div>
  )
}
