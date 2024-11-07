import Link from "next/link"
import { SettingsIcon, UsersIcon } from "lucide-react"
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill
} from "react-icons/go"

import { cn } from "@/shared/shadcn-ui/utils"

const routes = [
  {
    label: "Home",
    href: "/",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "My Tasks",
    href: "/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/tasks/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: "Members",
    href: "/tasks/members",
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
]

export const TasksNavigation = async () => {

  return (
    <ul className="flex flex-col">
      {routes.map(item => {
        const isActive = false
        const Icon = isActive ? item.activeIcon : item.icon

        return (
          <Link key={item.href} href={item.href}>
            <div className={cn(
              "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
              isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
            )}>
              <Icon className="size-5 text-neutral-500" />
              {item.label}
            </div>
          </Link>
        )
      })}
    </ul>
  )
}
