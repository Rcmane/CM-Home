const VideoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
    <rect x="2" y="6" width="14" height="12" rx="2" />
  </svg>
)

const MusicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
)

const ShoppingBagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

const NewspaperIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
    <path d="M18 14h-8" />
    <path d="M15 18h-5" />
    <path d="M10 6h8v4h-8V6Z" />
  </svg>
)

const TrendingUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
)

const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
)

const linkCategories = [
  {
    title: "视频",
    icon: VideoIcon,
    links: [
      { name: "优酷", url: "#" },
      { name: "爱奇艺", url: "#" },
      { name: "腾讯视频", url: "#" },
      { name: "B站", url: "#" },
    ],
  },
  {
    title: "音乐",
    icon: MusicIcon,
    links: [
      { name: "QQ音乐", url: "#" },
      { name: "网易云音乐", url: "#" },
      { name: "酷狗音乐", url: "#" },
      { name: "酷我音乐", url: "#" },
    ],
  },
  {
    title: "购物",
    icon: ShoppingBagIcon,
    links: [
      { name: "淘宝", url: "#" },
      { name: "京东", url: "#" },
      { name: "拼多多", url: "#" },
      { name: "天猫", url: "#" },
    ],
  },
  {
    title: "新闻",
    icon: NewspaperIcon,
    links: [
      { name: "新浪新闻", url: "#" },
      { name: "腾讯新闻", url: "#" },
      { name: "网易新闻", url: "#" },
      { name: "搜狐新闻", url: "#" },
    ],
  },
  {
    title: "财经",
    icon: TrendingUpIcon,
    links: [
      { name: "新浪财经", url: "#" },
      { name: "东方财富", url: "#" },
      { name: "同花顺", url: "#" },
      { name: "雪球", url: "#" },
    ],
  },
  {
    title: "旅游",
    icon: MapPinIcon,
    links: [
      { name: "携程", url: "#" },
      { name: "去哪儿", url: "#" },
      { name: "飞猪", url: "#" },
      { name: "马蜂窝", url: "#" },
    ],
  },
  {
    title: "邮箱",
    icon: MailIcon,
    links: [
      { name: "QQ邮箱", url: "#" },
      { name: "163邮箱", url: "#" },
      { name: "126邮箱", url: "#" },
      { name: "新浪邮箱", url: "#" },
    ],
  },
  {
    title: "社交",
    icon: HeartIcon,
    links: [
      { name: "微博", url: "#" },
      { name: "知乎", url: "#" },
      { name: "豆瓣", url: "#" },
      { name: "小红书", url: "#" },
    ],
  },
]

export default function QuickLinks() {
  return (
    <div className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {linkCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Icon className="w-4 h-4 text-primary" />
                  <span>{category.title}</span>
                </div>
                <ul className="space-y-2">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.url} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
