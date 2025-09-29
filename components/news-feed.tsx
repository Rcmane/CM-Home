"use client"

import { Card } from "@/components/ui/card"
import { Clock } from "lucide-react"
import { useState } from "react"

const newsItems = [
  {
    title: "Bill Maher rebukes media for silence on genocide of Christians in Nigeria",
    source: "CDI",
    time: "21 minutes ago",
    image: "https://cdn.christianpost.com/images/cache/image/15/73/157358_w_700_480.webp",
  },
  {
    title: "China cracks down on pastors' online activities, bans evangelizing youth",
    source: "CDI",
    time: "1 hours ago",
    image: "https://cdn.christianpost.com/images/cache/image/12/07/120765_w_700_466.webp",
  },
  {
    title: "‘Passion for mission’: European Evangelical Alliance names Andreas Wenzel as new president",
    source: "CDI",
    time: "2 hours ago",
    image: "https://cdn.christianpost.com/images/cache/image/15/68/156891_w_700_316.webp",
  },
  {
    title: "Iraqi Christian killed in France after facing online threats from Muslims",
    source: "CDI",
    time: "3 hours ago",
    image: "https://cdn.christianpost.com/images/cache/image/15/72/157288_w_700_467.webp",
  },
  {
    title: "Evangelical leaders want Trump to support Israel's 'sovereignty over the biblical heartland'",
    source: "CP",
    time: "4 hours ago",
    image: "https://cdn.christianpost.com/images/cache/image/13/79/137930_w_700_467.webp",
  },
  {
    title: "Nearly half of American adults don't believe the Bible is literally true: study",
    source: "CP",
    time: "5 hours ago",
    image: "https://cdn.christianpost.com/images/cache/image/15/71/157154_w_700_467.webp",
  },
  {
    title: "5 notable Texas pastors who were removed or resigned over immoral behavior",
    source: "CP",
    time: "6 hours ago",
    image: "https://cdn.christianpost.com/images/cache/image/15/31/153174_w_700_409.webp",
  },
  {
    title: "CP event tackles 'turning tide' of trans ideology: 'Nefarious spiritual warfare'",
    source: "CP",
    time: "7 hours ago",
    image: "https://cdn.christianpost.com/images/cache/image/15/73/157359_w_700_394.webp",
  },
]

export default function NewsFeed() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }))
  }
  return (
    <Card className="p-3 md:p-4 sticky top-20">
      <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
        <h2 className="text-base md:text-lg font-bold text-foreground">热点新闻</h2>
        <a href="#" className="text-xs md:text-sm text-accent hover:underline">
          更多 →
        </a>
      </div>

      <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto">
        {newsItems.map((item, index) => (
          <a key={index} href="#" className="block group hover:bg-muted rounded-lg p-2 transition-colors">
            <div className="flex gap-3">
              <img
                src={imageErrors[index] ? "/placeholder.svg?height=80&width=96" : item.image}
                alt={item.title}
                className="w-20 h-16 md:w-24 md:h-20 object-cover rounded flex-shrink-0 bg-muted"
                onError={() => handleImageError(index)}
                crossOrigin="anonymous"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-xs md:text-sm font-medium text-foreground group-hover:text-accent line-clamp-2 mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{item.source}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {item.time}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Card>
  )
}
