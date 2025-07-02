import ServingStep from "@/components/serving-step"
import ServingQuickRef from "@/components/serving-quick-ref"
import Link from "next/link"
import { Play, BookOpen, AlertTriangle, Users, Trophy, ExternalLink, RefreshCw, XCircle } from "lucide-react"

const servingSteps = [
  {
    stepNumber: 1,
    title: "Start of Service - Ball Position",
    lawReference: "ITTF Law 2.6.1",
    description:
      "Service shall start with the ball resting freely on the open palm of the server's stationary free hand. The free hand must also be stationary when beginning the serve.",
    legalExample: "Ball rests freely on open, flat palm with thumb over table but ball behind endline",
    illegalExamples: [
      "Ball resting on fingers instead of open palm",
      "Ball held in fingers themselves",
      "Palm cupped instead of open and flat",
      "Free hand moving while starting the serve",
    ],
    imageSrc: "/placeholder.svg?height=400&width=600",
    imageAlt: "Correct and Incorrect Ways to Hold the Ball Before Serving",
    videoPlaceholder: true,
    intention:
      "To ensure that the ball is thrown into the air with no spin. Because the ball is not allowed to be gripped during the service, it is difficult to put spin on the ball without the umpire noticing.",
  },
  {
    stepNumber: 2,
    title: "The Ball Toss - Height and Direction",
    lawReference: "ITTF Law 2.6.2",
    description:
      "The server shall then project the ball near vertically upwards, without imparting spin, so that it rises at least 16cm (6.3 inches) after leaving the palm of the free hand and then falls without touching anything before being struck.",
    legalExample: "Ball thrown nearly straight up, rising at least 16cm from the palm",
    illegalExamples: [
      "Ball toss at 45 degrees or more from vertical",
      "Ball not rising the required 16cm minimum",
      "Simply dropping the ball from a high position",
      "Imparting spin during the toss",
    ],
    imageSrc: "/placeholder.svg?height=400&width=600",
    imageAlt: "Legal and Illegal Ball Toss Examples",
    videoPlaceholder: true,
    keyPoints: [
      "'Near vertical' means within a few degrees of vertical, not 45 degrees",
      "Ball must actually rise 16cm, not just fall 16cm",
      "No spin can be imparted during the toss",
    ],
  },
  {
    stepNumber: 3,
    title: "Timing - Hitting the Falling Ball",
    lawReference: "ITTF Law 2.6.3",
    description:
      "As the ball is falling the server shall strike it. The ball must be allowed to start falling before it can be struck - hitting the ball while it's still rising or at its peak is illegal.",
    legalExample: "Ball is struck after it has clearly started to fall from its highest point",
    illegalExamples: [
      "Hitting the ball while it's still rising",
      "Striking the ball at its peak before it starts falling",
    ],
    imageSrc: "/placeholder.svg?height=400&width=600",
    imageAlt: "Hitting the Ball on the Way Up - Illegal Serve",
    videoPlaceholder: true,
    keyPoints: [
      "Umpire may warn if doubtful about timing",
      "Subsequent doubtful serves result in point to receiver",
      "Clear violations result in immediate fault",
    ],
  },
  {
    stepNumber: 4,
    title: "Ball Path - Over or Around the Net",
    lawReference: "ITTF Law 2.6.3",
    description:
      "The server shall strike the ball so that it touches first his court and then, after passing over or around the net assembly, touches directly the receiver's court.",
    legalExample: "Ball hits server's side first, then goes over or around net to opponent's side",
    illegalExamples: [
      "Ball going directly to opponent's side without hitting server's side first",
      "Ball hitting the net and not reaching opponent's side",
    ],
    imageSrc: "/placeholder.svg?height=400&width=600",
    imageAlt: "Correct Ball Path Over the Net in Singles",
    videoPlaceholder: true,
    keyPoints: [
      "Technically legal to serve around the net (though extremely difficult)",
      "Ball may bounce multiple times on opponent's side",
      "Ball must bounce only once on server's side",
    ],
  },
  {
    stepNumber: 5,
    title: "Doubles Serving Requirements",
    lawReference: "ITTF Law 2.6.3",
    description:
      "In doubles, the ball shall touch successively the right half court of server and receiver. All other serving rules still apply with this additional requirement.",
    legalExample: "Ball hits right half of server's court, then right half of receiver's court",
    illegalExamples: [
      "Ball hitting left half of server's court",
      "Ball hitting left half of receiver's court",
      "Ball crossing to wrong diagonal",
    ],
    imageSrc: "/placeholder.svg?height=400&width=600",
    imageAlt: "Correct Serving Areas in Doubles Play",
    videoPlaceholder: true,
    keyPoints: [
      "Only applies to doubles play",
      "Must be right half court to right half court",
      "All other serving rules still apply",
    ],
  },
  {
    stepNumber: 6,
    title: "Ball Location During Service",
    lawReference: "ITTF Law 2.6.4",
    description:
      "From the start of service until it is struck, the ball shall be above the level of the playing surface and behind the server's end line, and it shall not be hidden from the receiver.",
    legalExample: "Ball remains above table level and behind endline throughout the serve",
    illegalExamples: [
      "Starting with ball below table level",
      "Ball moving in front of the endline during service",
      "Hiding the ball with body or clothing",
    ],
    imageSrc: "/placeholder.svg?height=400&width=600",
    imageAlt: "Legal Ball Location Area During Service",
    videoPlaceholder: true,
    keyPoints: [
      "Server can stand outside sidelines",
      "Racket can be hidden under table",
      "Free hand thumb can be over table if ball is behind endline",
      "Ball must never be hidden from receiver",
    ],
  },
  {
    stepNumber: 7,
    title: "Free Arm Position - No Hiding",
    lawReference: "ITTF Law 2.6.5",
    description:
      "As soon as the ball has been projected, the server's free arm shall be removed from the space between the ball and the net. This space is defined by the ball, the net and its indefinite upward extension.",
    legalExample: "Free arm moved immediately out of the space between ball and net after toss",
    illegalExamples: [
      "Keeping free arm between ball and net after toss",
      "Using free arm to shield the ball during service motion",
    ],
    imageSrc: "/placeholder.svg?height=400&width=600",
    imageAlt: "Free Arm Position and Space Between Ball and Net",
    videoPlaceholder: true,
    keyPoints: [
      "Free arm must move immediately when ball is tossed",
      "Space between ball and net changes based on ball location",
      "Most commonly violated rule by players",
      "Umpire should warn if doubtful, fault if clear violation",
    ],
  },
]

export default function HowToServePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Play className="h-16 w-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Serve Legally in Table Tennis</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Master the most important stroke in table tennis with our comprehensive guide to legal serving. Every
              rally starts with a serve - make sure yours is legal!
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
              <p className="text-green-100 text-sm">
                <strong>Updated for Current ITTF Rules</strong> - Complete step-by-step instructions with visual
                examples
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              The serve is one of the most important strokes in table tennis - after all, every rally has to start with
              a service! Unfortunately, the service rules are also one of the most complex areas of ping-pong, and are
              subject to change on a regular basis as the ITTF try to find the ideal service laws.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <RefreshCw className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Always Up-to-Date Information</h3>
                  <p className="text-blue-800">
                    This guide is regularly updated as new changes to the service laws are introduced by the ITTF, so
                    you can be confident that you are always getting current, accurate information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServingQuickRef />
        </div>
      </section>

      {/* Serving Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Step-by-Step Serving Guide</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these seven essential steps to ensure your serves are always legal and compliant with ITTF
              regulations.
            </p>
          </div>

          <div className="space-y-12">
            {servingSteps.map((step, index) => (
              <ServingStep key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Umpire Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-yellow-600" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Umpire Guidelines & Warnings</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding how umpires handle service violations can help you avoid faults and play more confidently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">First Warning (Law 2.6.6.1)</h3>
              <p className="text-gray-600 text-sm">
                If the umpire is doubtful of the legality of a service, they may declare a let and warn the server on
                the first occasion in a match.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Subsequent Violations (Law 2.6.6.2)</h3>
              <p className="text-gray-600 text-sm">
                Any subsequent service of doubtful legality will result in a point awarded to the receiver.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Clear Violations (Law 2.6.6.3)</h3>
              <p className="text-gray-600 text-sm">
                When there is a clear failure to comply with service requirements, no warning is given and the receiver
                scores a point immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
            <Trophy className="h-12 w-12 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Practice Makes Perfect</h2>
            <p className="text-green-100 mb-8 text-lg">
              The best way to ensure legal serves is through consistent practice. Focus on one aspect at a time until it
              becomes natural.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-bold mb-2">Practice Sequence</h3>
                <ol className="text-sm text-left space-y-1">
                  <li>1. Master the ball hold and toss</li>
                  <li>2. Work on consistent 16cm+ height</li>
                  <li>3. Practice timing the falling ball</li>
                  <li>4. Focus on free arm movement</li>
                </ol>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-bold mb-2">Common Mistakes</h3>
                <ul className="text-sm text-left space-y-1">
                  <li>• Cupping the palm</li>
                  <li>• Tossing at an angle</li>
                  <li>• Hitting too early</li>
                  <li>• Forgetting free arm position</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/coaching"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Get Professional Coaching
              </Link>
              <Link
                href="/places-to-play"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Find Practice Locations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expand your table tennis knowledge with these additional resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/rules" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Equipment Regulations</h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn about racket requirements, booster bans, and other equipment regulations.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                <span>View Regulations</span>
                <ExternalLink className="h-4 w-4" />
              </div>
            </Link>

            <Link
              href="/spectators-guide"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Complete Rules Guide</h3>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive guide to all table tennis rules, scoring, and tournament procedures.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                <span>Read Guide</span>
                <ExternalLink className="h-4 w-4" />
              </div>
            </Link>

            <Link href="/join-us" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Join DFWTT</h3>
              <p className="text-gray-600 text-sm mb-4">
                Practice your serves with other players and get feedback from experienced coaches.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                <span>Join Now</span>
                <ExternalLink className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
