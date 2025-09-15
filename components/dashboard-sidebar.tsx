"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Grid3X3, FileText, ShoppingCart, Users, Package, Globe, Calendar, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarItems = [
  {
    title: "INDICADORES",
    icon: BarChart3,
    href: "/dashboard",
    active: true,
  },
  {
    title: "PAINEL",
    icon: Grid3X3,
    href: "/dashboard/painel",
    badge: "●",
  },
  {
    title: "RELATÓRIOS",
    icon: FileText,
    href: "/dashboard/relatorios",
  },
  {
    title: "PEDIDOS",
    icon: ShoppingCart,
    href: "/dashboard/pedidos",
  },
  {
    title: "CLIENTES",
    icon: Users,
    href: "/dashboard/clientes",
  },
  {
    title: "PRODUTOS",
    icon: Package,
    href: "/dashboard/produtos",
  },
  {
    title: "PORTAL",
    icon: Globe,
    href: "/dashboard/portal",
    badge: "Novo",
  },
  {
    title: "AGENDA",
    icon: Calendar,
    href: "/dashboard/agenda",
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="p-4 space-y-1">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors",
                isActive
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
              )}
            >
              <div className="flex items-center space-x-3">
                <Icon className="h-4 w-4" />
                <span>{item.title}</span>
              </div>

              <div className="flex items-center space-x-2">
                {item.badge && (
                  <span
                    className={cn(
                      "text-xs px-2 py-1 rounded-full",
                      item.badge === "Novo" ? "bg-green-100 text-green-700" : "text-blue-500",
                    )}
                  >
                    {item.badge}
                  </span>
                )}
                <ChevronRight className="h-3 w-3 text-gray-400" />
              </div>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
