import Header from "@/components/header"
import GameShortcuts from "@/components/game-shortcuts"
import CategoryNav from "@/components/category-nav"
import LinkSections1 from "@/components/link-sections-1"
import LinkSections2 from "@/components/link-sections-2"
import LinkSections3 from "@/components/link-sections-3"
import NewsFeed from "@/components/news-feed"
import Sidebar from "@/components/sidebar"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <GameShortcuts />
      <CategoryNav />

      <div className="container mx-auto px-2 md:px-4 py-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Sidebar - hidden on mobile, shown on desktop */}
          <aside className="hidden lg:block lg:w-48 xl:w-56 flex-shrink-0">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <LinkSections1 />
            <LinkSections2 />
            <LinkSections3 />
          </main>

          {/* News Feed */}
          <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0">
            <NewsFeed />
          </aside>
        </div>
      </div>
    </div>
  )
}
