import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-2 md:px-4 py-3">
        <div className="flex items-center gap-2 md:gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold text-red-600">Crossmap</h1>
          </div>

          {/* Baidu Logo */}
          <div className="flex-shrink-0">
            <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded font-bold text-sm md:text-base">
              AI
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <form className="flex gap-2">
              <Input type="search" placeholder="Search..." className="flex-1" />
              <Button type="submit" className="bg-accent hover:bg-accent/90 flex-shrink-0">
                <Search className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Search</span>
              </Button>
            </form>
          </div>

          {/* Right Links */}
          <div className="hidden md:flex items-center gap-3 text-sm flex-shrink-0">
            <a href="#" className="text-accent hover:underline">
              Sign In
            </a>
            <a href="#" className="text-accent hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
