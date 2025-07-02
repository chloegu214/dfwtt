import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />

      {/* Additional sections can be added here */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Dallas Fort Worth Table Tennis</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Join our vibrant table tennis community in the Dallas-Fort Worth area. Whether you're a beginner or a
            seasoned player, we have programs and competitions for everyone.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl">
            Join DFWTT Today
          </button>
        </div>
      </section>
    </div>
  )
}
