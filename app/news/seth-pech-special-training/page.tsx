import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, ExternalLink, Phone } from "lucide-react"

export default function SethPechArticlePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/news" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>

          <div className="mb-6">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Training</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">Special Training Program with Coach Seth Pech</h1>

          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>June 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Donna Chen</span>
            </div>
            <span>4 min read</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Seth Pech coaching session"
            width={800}
            height={400}
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              DFWTT is excited to announce a special training opportunity with professional table tennis athlete and
              coach Seth Pech, known for his popular YouTube channel PechPong and USATT rating of 2500+.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Coach Seth Pech</h2>
            <p className="text-gray-700 mb-6">
              Seth Pech brings years of professional experience from competing in Germany and Sweden. His YouTube
              channel PechPong has helped thousands of players improve their game through detailed tutorials and
              professional insights.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Training Program Details</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Duration: Four months (April - August 2025)</li>
              <li>Location: DFW Table Tennis club locations</li>
              <li>Available for all skill levels</li>
              <li>Private and group sessions available</li>
              <li>Focus on advanced techniques and competition preparation</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Message from Coach Seth</h3>
              <blockquote className="text-blue-800 italic">
                "Hello! My name is Seth Pech. You may know me from my YouTube Channel PechPong. I'm going to be in the
                area for the summer. I'm excited to share with you the tips and knowledge I've gained from playing
                professionally in Germany and Sweden over the last few years. I'm looking forward to working with you
                and helping you reach your table tennis goals."
              </blockquote>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Friday Night Special Training</h2>
            <p className="text-gray-700 mb-6">
              In addition to private coaching, Seth is conducting a special Friday night training program at the Heights
              Recreation Center from 7:15-8:45 PM. This group training session focuses on advanced techniques and
              competitive strategies.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How to Book Your Session</h3>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>Contact Donna at (214) 240-5975 to schedule your lesson</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't Miss This Opportunity</h2>
            <p className="text-gray-700 mb-6">
              This is a rare opportunity to train with a professional player and coach who has competed at the highest
              levels internationally. Whether you're looking to improve your technique, prepare for competition, or take
              your game to the next level, Coach Seth's expertise will be invaluable.
            </p>

            <div className="border-t border-gray-200 pt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">Share this article:</span>
                  <div className="flex gap-2">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Facebook</button>
                    <button className="bg-blue-400 text-white px-3 py-1 rounded text-sm">Twitter</button>
                  </div>
                </div>
                <Link
                  href="https://www.youtube.com/@PechPong"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <ExternalLink className="h-4 w-4" />
                  Visit PechPong YouTube
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
