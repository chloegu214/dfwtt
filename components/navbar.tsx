"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

interface NavItem {
  label: string
  href?: string
  children?: NavItem[]
}

const navigationItems: NavItem[] = [
  { label: "Home", href: "/" },
     { label: "Join Us", href: "/join-us" },
  { label: "Places to Play", href: "/places-to-play" },
  { label: "Coaching", href: "/coaching" },
  {
    label: "News & Info",
    children: [
      { label: "2025 News", href: "/news/" },
      { label: "Archive", href: "/news/archive" },
      { label: "Memories", href: "/news/memories" }
    ],
  },
  {
    label: "Competitions",
    children: [
      //{ label: "Tournaments", href: "/competitions/tournaments" },
      //{ label: "Sunday Singles RR", href: "/competitions/sunday-singles" },
      { label: "Sunday Singles RR", href: "/sunday-rr" },
      //{ label: "Monthly Doubles", href: "/competitions/monthly-doubles" },
      { label: "Monthly Doubles", href: "/monthly-doubles" },
      //{ label: "2-Man Teams", href: "/competitions/2-man-teams" },
      { label: "Scoreboard", href: "/scoreboard" },
      { label: "Spectator's Guide", href: "/spectators-guide" },
      { label: "Rules", href: "/rules" },
      { label: "TT Equipment", href: "/equipment" }
      //{ label: "Archive", href: "/competitions/archive" },
      //{ label: "Memories", href: "/competitions/memories" },
    ],
  },
  {
    label: "Gallery",
    children: [
      { label: "2025", href: "/gallery" },
      { label: "Archive", href: "/gallery/archive" },
    ],
  },
  {
    label: "Support Us",
    children: [
      { label: "Sponsors", href: "/support-us/sponsors" },
      { label: "Patrons", href: "/support-us/patrons" },
      { label: "Community", href: "/support-us/community" },
    ],
  },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const renderNavItem = (item: NavItem, isMobile = false) => {
    const hasChildren = item.children && item.children.length > 0

    if (isMobile) {
      return (
        <div key={item.label} className="border-b border-gray-200">
          {hasChildren ? (
            <details className="group">
              <summary className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 cursor-pointer list-none">
                <span className="font-medium">{item.label}</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="bg-gray-50">
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href || "#"}
                    className="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </details>
          ) : (
            <Link
              href={item.href || "#"}
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          )}
        </div>
      )
    }

    return (
      <div
        key={item.label}
        className="relative group"
        onMouseEnter={() => hasChildren && handleMouseEnter(item.label)}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href={item.href || "#"}
          className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
        >
          {item.label}
          {hasChildren && (
            <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
          )}
        </Link>

        {hasChildren && activeDropdown === item.label && (
          <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            {item.children.map((child) => (
              <Link
                key={child.label}
                href={child.href || "#"}
                className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              DFWTT
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => renderNavItem(item))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="max-h-96 overflow-y-auto">{navigationItems.map((item) => renderNavItem(item, true))}</div>
        </div>
      )}
    </nav>
  )
}
