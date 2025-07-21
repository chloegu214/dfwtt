"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";

interface NewsItem {
  id: number;
  category: string;
  title: string;
  image: string;
  timestamp: string;
  featured?: boolean;
}

interface CarouselSlide {
  id: number;
  category: string;
  title: string;
  image: string;
  timestamp: string;
}

const carouselSlides: CarouselSlide[] = [
  {
    id: 1,
    category: "Tennis",
    title: "DFWTT Championship Finals Set for This Weekend",
    image: "/placeholder.svg?height=400&width=600",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    category: "Training",
    title: "New Youth Training Program Launches Next Month",
    image: "/placeholder.svg?height=400&width=600",
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    category: "Tournament",
    title: "Monthly Doubles Tournament Results Are In",
    image: "/placeholder.svg?height=400&width=600",
    timestamp: "1 day ago",
  },
];

const newsItems: NewsItem[] = [
  {
    id: 1,
    category: "Tournament",
    title: "Sunday Singles Round Robin Results",
    image: "/placeholder.svg?height=80&width=80",
    timestamp: "20 min",
    featured: true,
  },
  {
    id: 2,
    category: "Training",
    title: "Junior Group Training Schedule Updated",
    image: "/placeholder.svg?height=80&width=80",
    timestamp: "45 min",
  },
  {
    id: 3,
    category: "Community",
    title: "New Members Welcome Event This Friday",
    image: "/placeholder.svg?height=80&width=80",
    timestamp: "1 hr",
  },
  {
    id: 4,
    category: "Coaching",
    title: "Private Coaching Sessions Available",
    image: "/placeholder.svg?height=80&width=80",
    timestamp: "2 hr",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<"recent" | "top">("recent");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );
  };

  return (
    <section className="pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Carousel Section */}
          <div className="lg:col-span-2">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              {carouselSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {slide.category}
                      </span>
                      <div className="flex items-center gap-1 text-sm opacity-90">
                        <Clock className="h-4 w-4" />
                        <span>{slide.timestamp}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                      {slide.title}
                    </h2>
                  </div>
                </div>
              ))}

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* News List Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <div className="flex">
                <button
                  onClick={() => setActiveTab("recent")}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors relative ${
                    activeTab === "recent"
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Recent News
                  {activeTab === "recent" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                  )}
                </button>
              </div>
            </div>

            {/* News Items */}
            <div className="divide-y divide-gray-100">
              {newsItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                    index === 0 && activeTab === "recent" ? "bg-yellow-50" : ""
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-blue-600">
                          {item.category}
                        </span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500">
                          {item.timestamp}
                        </span>
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
