import { Card } from "@/components/ui/card"

const sidebarSections = [
  {
    title: "Tools",
    links: ["Weather", "Express Tracking", "Train Tickets", "Air Tickets", "Map", "Translation", "Calendar", "Calculator"],
  },
  {
    title: "Life Services",
    links: ["Doordash", "Uber", "Lyft", "Airbnb", "Expedia", "12306"],
  },
  {
    title: "Shopping",
    links: ["Amazon", "Walmart", "Costco", "Giant", "eBay", "Etsy", "AliExpress"],
  },
]

export default function Sidebar() {
  return (
    <div className="space-y-4">
      {sidebarSections.map((section, index) => (
        <Card key={index} className="p-3">
          <h3 className="text-sm font-bold mb-2 text-foreground border-b border-border pb-2">{section.title}</h3>
          <ul className="space-y-1">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href="#" className="text-xs text-accent hover:underline block py-1">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  )
}
