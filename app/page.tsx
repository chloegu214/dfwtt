import HeroSection from "@/components/hero-section"
import AboutHero from "@/components/about-hero"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero />
      <HeroSection />
      {/* Additional sections can be added here */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        </div>
      </section>
    </div>
  )
}
