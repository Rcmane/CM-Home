import { LibraryBig, NotebookPen, BookPlus, Newspaper, SquarePlay, Podcast } from "lucide-react"

export default function SubsiteIcons() {
  return (
    <div className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-center gap-4 overflow-x-auto">
          {/* blogs */}
          <a href="https://blogs.crossmap.com/" className="flex flex-col items-center gap-2 min-w-[80px] group" target="_blank" rel="noopener noreferrer">
            <div
              className={`bg-amber-50 w-16 h-16 rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
            >
              <NotebookPen />
            </div>
            <span className="text-xs font-extrabold text-center text-muted-foreground group-hover:text-foreground">Crossmap Blogs</span>
          </a>
          {/* Bible */}
          <a href="https://bible.crossmap.com/" className="flex flex-col items-center gap-2 min-w-[80px] group" target="_blank" rel="noopener noreferrer">
            <div
              className={`bg-red-500 w-16 h-16 rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
            >
              <BookPlus />
            </div>
            <span className="text-xs font-extrabold text-center text-muted-foreground group-hover:text-foreground">Crossmap Bible</span>
          </a>
          {/* News */}
          <a href="https://news.crossmap.com/" className="flex flex-col items-center gap-2 min-w-[80px] group" target="_blank" rel="noopener noreferrer">
            <div
              className={`bg-blue-500 w-16 h-16 rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
            >
              <Newspaper />
            </div>
            <span className="text-xs font-extrabold text-center text-muted-foreground group-hover:text-foreground">Crossmap News</span>
          </a>
          {/* Videos */}
          <a href="https://videos.crossmap.com/" className="flex flex-col items-center gap-2 min-w-[80px] group" target="_blank" rel="noopener noreferrer">
            <div
              className={`bg-black w-16 h-16 rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
            >
              <SquarePlay />
            </div>
            <span className="text-xs font-extrabold text-center text-muted-foreground group-hover:text-foreground">Crossmap Videos</span>
          </a>
          {/* Podcasts */}
          <a href="https://podcasts.crossmap.com/" className="flex flex-col items-center gap-2 min-w-[80px] group" target="_blank" rel="noopener noreferrer">
            <div
              className={`bg-purple-500 w-16 h-16 rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
            >
              <Podcast />
            </div>
            <span className="text-xs font-extrabold text-center text-muted-foreground group-hover:text-foreground">Crossmap Podcasts</span>
          </a>
          <a href="https://books.crossmap.com/" className="flex flex-col items-center gap-2 min-w-[80px] group" target="_blank" rel="noopener noreferrer">
            <div
              className={`bg-orange-500 w-16 h-16 rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
            >
              <LibraryBig />
            </div>
            <span className="text-xs font-extrabold text-center text-muted-foreground group-hover:text-foreground">Crossmap Books</span>
          </a>
        </div>
      </div>
    </div>
  )
}
