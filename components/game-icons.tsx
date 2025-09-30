const games = [
  { name: "传奇世界", color: "bg-blue-600" },
  { name: "热血江湖", color: "bg-cyan-600" },
  { name: "魔域", color: "bg-blue-700" },
  { name: "传奇霸业", color: "bg-amber-600" },
  { name: "大天使之剑", color: "bg-orange-600" },
  { name: "蓝月传奇", color: "bg-slate-700" },
  { name: "屠龙破晓", color: "bg-yellow-600" },
  { name: "原神", color: "bg-red-600" },
  { name: "博德之门", color: "bg-purple-600" },
  { name: "双人奇境", color: "bg-green-600" },
  { name: "荒野大镖客", color: "bg-pink-600" },
  { name: "王国之泪", color: "bg-lime-600" },
]

const GamepadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="6" x2="10" y1="12" y2="12" />
    <line x1="8" x2="8" y1="10" y2="14" />
    <line x1="15" x2="15.01" y1="13" y2="13" />
    <line x1="18" x2="18.01" y1="11" y2="11" />
    <rect width="20" height="12" x="2" y="6" rx="2" />
  </svg>
)

export default function GameIcons() {
  return (
    <div className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-center gap-4 overflow-x-auto">
          {games.map((game, index) => (
            <a key={index} href="#" className="flex flex-col items-center gap-2 min-w-[80px] group">
              <div
                className={`${game.color} w-16 h-16 rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
              >
                <GamepadIcon />
              </div>
              <span className="text-xs text-center text-muted-foreground group-hover:text-foreground">{game.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
