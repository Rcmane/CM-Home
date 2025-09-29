"use client"

import { useState } from "react"
import { Menu } from "lucide-react"

const categories = [
  "📖 Core Beliefs & Theology",
  "🙏 Spiritual Practices",
  "⛪ Church & Tradition",
  "❤️ Christian Living",
  "🌍 Cultural & Social Issues",
  "✝️ Major Events & Holidays"
]

export default function CategoryNav() {
  const [showAll, setShowAll] = useState(false)

  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex items-center gap-1 py-2 overflow-x-auto">
          <button
            onClick={() => setShowAll(!showAll)}
            className="md:hidden flex items-center gap-1 px-2 py-1 text-sm text-accent flex-shrink-0"
          >
            <Menu className="h-4 w-4" />
          </button>

          <div className={`flex gap-1 md:gap-2 flex-wrap ${showAll ? "" : "md:flex-nowrap overflow-x-auto"}`}>
            {categories.map((category, index) => (
              <a
                key={index}
                href="#"
                className="px-2 md:px-3 py-1 text-xs md:text-sm text-foreground hover:text-accent hover:bg-muted rounded transition-colors whitespace-nowrap"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
