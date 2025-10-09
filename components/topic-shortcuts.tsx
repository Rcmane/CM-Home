import { Cross, HeartCrack, CirclePlus, ShieldCheck, ThumbsUp, Network, SmilePlus } from "lucide-react"

const games = [

  { name: "News", color: "bg-purple-500" },
  { name: "Videos", color: "bg-amber-600" },
  { name: "Podcasts", color: "bg-orange-500" },
  { name: "Books", color: "bg-yellow-600" },
  { name: "Brands", color: "bg-yellow-500" },
]

export default function TopicShortcuts() {
  return (
    <div className="bg-muted border-b border-border">
      <div className="container mx-auto px-2 md:px-4 py-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          <span className="text-sm text-muted-foreground flex-shrink-0 hidden md:inline">Hot Topics:</span>
          <div className="flex gap-2 md:gap-3">
            <a
              href="https://blogs.crossmap.com/tags/jesus"
              className={`bg-blue-500 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-1 md:gap-2 flex-shrink-0`}
            >
              <Cross className="h-3 w-3 md:h-4 md:w-4" />
              <span className="whitespace-nowrap">Jesus Christ</span>
            </a>

            <a
              href="https://blogs.crossmap.com/topics/anxiety"
              className={`bg-yellow-600 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-1 md:gap-2 flex-shrink-0`}
            >
              <HeartCrack className="h-3 w-3 md:h-4 md:w-4" />
              <span className="whitespace-nowrap">Anxiety</span>
            </a>

            <a
              href="https://blogs.crossmap.com/tags/faith"
              className={`bg-cyan-500 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-1 md:gap-2 flex-shrink-0`}
            >
              <CirclePlus className="h-3 w-3 md:h-4 md:w-4" />
              <span className="whitespace-nowrap">Faith</span>
            </a>

            <a
              href="https://blogs.crossmap.com/tags/prayer"
              className={`bg-purple-500 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-1 md:gap-2 flex-shrink-0`}
            >
              <ShieldCheck className="h-3 w-3 md:h-4 md:w-4" />
              <span className="whitespace-nowrap">Prayer</span>
            </a>

            <a
              href="https://blogs.crossmap.com/tags/encouragement"
              className={`bg-orange-500 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-1 md:gap-2 flex-shrink-0`}
            >
              <ThumbsUp className="h-3 w-3 md:h-4 md:w-4" />
              <span className="whitespace-nowrap">Encouragement</span>
            </a>

            <a
              href="https://blogs.crossmap.com/tags/relationship-with-god"
              className={`bg-red-500 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-1 md:gap-2 flex-shrink-0`}
            >
              <Network className="h-3 w-3 md:h-4 md:w-4" />
              <span className="whitespace-nowrap">Relationship with God</span>
            </a>

            <a
              href="https://blogs.crossmap.com/tags/hope"
              className={`bg-green-500 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-1 md:gap-2 flex-shrink-0`}
            >
              <SmilePlus className="h-3 w-3 md:h-4 md:w-4" />
              <span className="whitespace-nowrap">Hope</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
