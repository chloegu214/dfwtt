import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DFWTTDoubleTen from "../public/images/2025 DFWTT Fall Open.jpg";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)]'></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-yellow-400 text-yellow-900 hover:bg-yellow-300"
              >
                Established 1996
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                About <span className="text-yellow-400">DFWTT</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Building a stronger table tennis community in the Dallas & Fort
                Worth area through family values, excellence, and quality
                sportsmanship.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-blue-100 leading-relaxed">
                DFWTT is an organization that promotes, develops and implements
                programs for the sport of table tennis regardless of the
                player's experience. We're open to all ages, ethnicities,
                genders and playing levels.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">100+</div>
                  <div className="text-sm text-blue-200">Active Players</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">4</div>
                  <div className="text-sm text-blue-200">Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">30</div>
                  <div className="text-sm text-blue-200">Years Strong</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-semibold"
              >
                Join Our Community
              </Button> */}
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                <Link href="/places-to-play">Find Locations</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src={DFWTTDoubleTen}
                alt="2025 DFWTT Double Ten"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
