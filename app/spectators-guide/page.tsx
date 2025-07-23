import RulesCard from "@/components/rules-card"
import TermsGlossary from "@/components/terms-glossary"
import Link from "next/link"
import {
  Trophy,
  Users,
  Clock,
  Target,
  Shirt,
  HandHeart,
  Eye,
  BookOpen,
  Award,
  Zap,
  Globe,
  ExternalLink,
} from "lucide-react"

const quickFacts = [
  {
    icon: <Trophy className="h-6 w-6 text-yellow-600" />,
    title: "Olympic Sport",
    description: "Since 1988 Seoul Olympics",
  },
  {
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    title: "World's 2nd Most Popular",
    description: "After soccer globally",
  },
  {
    icon: <Zap className="h-6 w-6 text-red-600" />,
    title: "Fastest Racket Sport",
    description: "Ball speeds up to 90+ mph",
  },
  {
    icon: <Users className="h-6 w-6 text-green-600" />,
    title: "For Everyone",
    description: "All ages and skill levels",
  },
]

const winningConditions = [
  "Your opponent fails to return your shot (ball can hit boundary lines or table edge)",
  "Your opponent misses the ball or serves illegally",
  "Your opponent hits the ball into the net and it comes back to their side",
  "Your opponent hits the ball wide or too far (first bounce goes off the table)",
  "Your opponent hits the ball before it bounces on their side (no volleying allowed)",
  "The ball bounces twice on your opponent's side before they hit it",
  "Your opponent moves the table, touches it with free hand, or touches the net during play",
]

export default function SpectatorsGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Spectator's Guide to Table Tennis</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-6">
              Everything you need to know to understand and appreciate the world's fastest racket sport
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
              <p className="text-blue-100 text-sm">
                <strong>By Daniel Rutenberg</strong> – USATT Certified Coach, DFW Table Tennis (DFWTT)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Facts</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get up to speed with these essential table tennis facts before watching your first match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickFacts.map((fact, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  {fact.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{fact.title}</h3>
                <p className="text-gray-600 text-sm">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ping-Pong vs Table Tennis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ping-Pong vs. Table Tennis?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center mb-6">
                Both terms are correct! Perhaps we should call the serious sport <strong>table tennis</strong>, and the
                fun basement or game room pastime version <strong>ping-pong</strong>.
              </p>
              <p className="text-center">
                It doesn't really matter what you call it, but make sure you come out and play it in an organized
                facility or club to appreciate the many virtues of the fastest racket sport in the world.
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/places-to-play"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                <Target className="h-5 w-5" />
                Find Places to Play
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rules and Regulations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rules & Regulations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the basic rules will help you follow and enjoy the action during matches.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <RulesCard title="Equipment & Ball" icon={<Target className="h-5 w-5" />} defaultOpen>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Table Tennis Balls</h4>
                    <p>
                      Usually white or orange, 40mm in diameter, made from celluloid. The ball can travel up to 90 miles
                      per hour!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Racket Requirements</h4>
                    <p>Must use ITTF/USATT approved rackets. Key rules:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                      <li>Sandpaper surfaces are illegal</li>
                      <li>Racket must be black on one side, red on the other</li>
                      <li>Most recreational paddles are approved unless purely recreational</li>
                    </ul>
                  </div>
                </div>
              </RulesCard>

              <RulesCard title="Scoring System" icon={<Award className="h-5 w-5" />}>
                <div className="space-y-3">
                  <p>
                    <strong>Game:</strong> First to 11 points wins, but must win by 2 points
                  </p>
                  <p>
                    <strong>Match:</strong> Usually best 3 out of 5 games
                  </p>
                  <p>
                    <strong>International/Championship:</strong> Best 4 out of 7 or even 9 games
                  </p>
                  <p>
                    <strong>Some tournaments:</strong> Best 2 out of 3 games
                  </p>
                  <p>
                    <strong>Service:</strong> Each player serves 2 points alternately. At 10-10, players alternate
                    serving each point until someone wins by 2.
                  </p>
                </div>
              </RulesCard>

              <RulesCard title="Dress Code" icon={<Shirt className="h-5 w-5" />}>
                <div className="space-y-2">
                  <p>
                    <strong>Clothing:</strong> Shirts and shorts (women may wear skirts)
                  </p>
                  <p>
                    <strong>Color:</strong> Cannot match the ball's color (white or orange)
                  </p>
                  <p>
                    <strong>Footwear:</strong> Rubber-soled athletic shoes required
                  </p>
                  <p>
                    <strong>Accessories:</strong> No hats unless authorized by tournament referee
                  </p>
                  <p>
                    <strong>Warm-ups:</strong> Most players wear them but remove to play
                  </p>
                </div>
              </RulesCard>
            </div>

            <div className="space-y-6">
              <RulesCard title="How to Win a Point" icon={<Trophy className="h-5 w-5" />} defaultOpen>
                <div className="space-y-2">
                  <p className="font-medium mb-3">You win a point when:</p>
                  <ul className="space-y-2">
                    {winningConditions.map((condition, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <span>{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RulesCard>

              <RulesCard title="Tournament Formats" icon={<Users className="h-5 w-5" />}>
                <div className="space-y-3">
                  <p>
                    <strong>Most Common:</strong> Initial round robin of 3-5 players, with winners advancing to single
                    elimination
                  </p>
                  <p>
                    <strong>Alternative:</strong> Single elimination from the start
                  </p>
                  <p>
                    <strong>Event Types:</strong> Singles, doubles, and team events
                  </p>
                  <p>
                    <strong>Categories:</strong> Events organized by rating, age, skill level, etc.
                  </p>
                </div>
              </RulesCard>

              <RulesCard title="Table Specifications" icon={<Target className="h-5 w-5" />}>
                <div className="space-y-2">
                  <p>
                    <strong>Length:</strong> 9 feet (2.74m)
                  </p>
                  <p>
                    <strong>Width:</strong> 5 feet (1.525m)
                  </p>
                  <p>
                    <strong>Height:</strong> 2 feet, 6 inches (76cm) above floor
                  </p>
                  <p>
                    <strong>Surface:</strong> Must be horizontal and uniform
                  </p>
                </div>
              </RulesCard>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Etiquette */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HandHeart className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tournament Etiquette</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding proper etiquette enhances the experience for players and spectators alike.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <RulesCard title="Before the Match" icon={<Clock className="h-5 w-5" />}>
                <ul className="space-y-2 text-sm">
                  <li>• Be on time - use your schedule and don't keep opponents waiting</li>
                  <li>• Shake hands when meeting your opponent</li>
                  <li>• Come ready to play - warm up beforehand</li>
                  <li>• Examine opponent's racket to see what equipment they're using</li>
                  <li>• 2-minute warm-up period: hit "forehand to forehand" and "backhand to backhand"</li>
                  <li>• Determine who serves first (coin flip or hide-the-ball method)</li>
                </ul>
              </RulesCard>

              <RulesCard title="During the Match" icon={<Users className="h-5 w-5" />}>
                <ul className="space-y-2 text-sm">
                  <li>• Generally impolite to talk except for score/service clarification</li>
                  <li>• No talking during rallies or when ball is in play</li>
                  <li>• Being spirited is fine, but don't scream or swear</li>
                  <li>• Coaching only allowed between games and during legal timeouts</li>
                  <li>• Only one person may coach a player during a match</li>
                  <li>• Call for referee if disputes arise</li>
                </ul>
              </RulesCard>
            </div>

            <div className="space-y-6">
              <RulesCard title="After the Match" icon={<HandHeart className="h-5 w-5" />}>
                <ul className="space-y-2 text-sm">
                  <li>• Always shake hands with opponent</li>
                  <li>• Shake hands with opponent's coach if present</li>
                  <li>• Shake hands with umpire if one was assigned</li>
                  <li>• When in doubt, shake everybody's hand!</li>
                  <li>• Check scores are written properly on match slip</li>
                  <li>• Winner returns slip, ball, and pencil to control desk</li>
                </ul>
              </RulesCard>

              <RulesCard title="Spectating Tips" icon={<Eye className="h-5 w-5" />}>
                <ul className="space-y-2 text-sm">
                  <li>• Find out when the big matches will be played - don't miss them!</li>
                  <li>• Watch how the "better players" play to learn</li>
                  <li>• Be relatively quiet during points</li>
                  <li>• Cheer enthusiastically after great points</li>
                  <li>• Never boo - it's considered poor taste in table tennis</li>
                  <li>• Appreciate the skill and strategy involved</li>
                </ul>
              </RulesCard>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Glossary */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <TermsGlossary />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Table Tennis?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Now that you understand the game, come watch a tournament or try playing yourself! DFWTT welcomes players
            and spectators of all levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/places-to-play"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              <Target className="h-5 w-5" />
              Find Places to Play
            </Link>
            <Link
              href="/news"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              <ExternalLink className="h-5 w-5" />
              View Upcoming Tournaments
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
