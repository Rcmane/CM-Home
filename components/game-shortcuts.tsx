import { Gamepad2 } from "lucide-react"

const games = [
  { name: "Blogs", color: "bg-blue-500" },
  { name: "Bible", color: "bg-cyan-500" },
  { name: "News", color: "bg-purple-500" },
  { name: "Videos", color: "bg-amber-600" },
  { name: "Podcasts", color: "bg-orange-500" },
  { name: "Books", color: "bg-yellow-600" },
  { name: "Brands", color: "bg-yellow-500" },
]

export default function GameShortcuts() {
  return (
    <div className="bg-muted border-b border-border">
      <div className="container mx-auto px-2 md:px-4 py-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          <span className="text-sm text-muted-foreground flex-shrink-0 hidden md:inline">Hot Topics:</span>
          <div className="flex gap-2 md:gap-3">
            {games.map((game, index) => (
              <a
                key={index}
                href="#"
                className={`${game.color} text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-1 md:gap-2 flex-shrink-0`}
              >
                <Gamepad2 className="h-3 w-3 md:h-4 md:w-4" />
                <span className="whitespace-nowrap">{game.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
