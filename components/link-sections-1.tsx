"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

const sections = [
  {
    title: "News",
    color: "text-green-600",
    links: [
      { "name": "Not the Bee", "url": "https://notthebee.com/" },
      { "name": "CBN", "url": "https://cbn.com/" },
      { "name": "The Christian Post", "url": "https://www.christianpost.com/" },
      { "name": "LifeSiteNews", "url": "https://www.lifesitenews.com/" },
      { "name": "Christian Today", "url": "https://www.christianitytoday.com/" },
      { "name": "Patheos", "url": "https://www.patheos.com/" },
      { "name": "The Pour Over", "url": "https://thepourover.org/" },
      { "name": "WORLD", "url": "https://wng.org/" },
      { "name": "The Roys Report", "url": "https://julieroys.com/" },
      { "name": "End Time Headlines", "url": "https://endtimeheadlines.org/" },
      { "name": "Religion News Service (RNS)", "url": "https://religionnews.com/" },
      { "name": "Protestia", "url": "https://protestia.com/" },
      { "name": "Positivityoflife", "url": "https://positivityoflife.com/" },
      { "name": "LifeNews.com", "url": "https://www.lifenews.com/" }
    ],
  },
  {
    title: "Bible",
    color: "text-purple-600",
    links: [
      { "name": "Bible Gateway", "url": "https://www.biblegateway.com/" },
      { "name": "Bible Hub", "url": "https://biblehub.com/" },
      { "name": "YouVersion", "url": "https://www.youversion.com/" },
      { "name": "Blue Letter Bible", "url": "https://www.blueletterbible.org/" },
      { "name": "The King James Bible Online", "url": "https://www.kingjamesbibleonline.org/" },
      { "name": "The English Standard Version (ESV)", "url": "https://www.esv.org/" },
      { "name": "Biblia", "url": "https://biblia.com/" },
      { "name": "StudyLight", "url": "https://studylight.org/" },
      { "name": "BibleServer", "url": "https://www.bibleserver.com/" },
      { "name": "BibleStudies", "url": "https://biblestudies.org/" }
    ]
  }
]

export default function LinkSections1() {
  const [isExpanded, setIsExpanded] = useState(true)
  return (
    <div className="space-y-3">
      {isExpanded && (
        <>
          {sections.map((section, index) => (
            <Card key={index} className="p-3 md:p-4 bg-white">
              <div className="flex items-center justify-between mb-2">
                <h2 className={`text-sm md:text-base font-bold ${section.color}`}>{section.title}</h2>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link?.url}
                    className="text-xs md:text-sm text-blue-600 hover:text-red-600 hover:underline py-0.5 whitespace-nowrap"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link?.name}
                  </a>
                ))}
                {/* <a href="#" className="text-xs md:text-sm text-blue-600 hover:text-red-600 hover:underline">
                  More&gt;&gt;
                </a> */}
              </div>
            </Card>
          ))}
        </>
      )
      }

      <div className="flex justify-center py-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1"
        >
          {isExpanded ? "Click to collapse ▲" : "Click to expand ▼"}
        </button>
      </div>
    </div >
  )
}
