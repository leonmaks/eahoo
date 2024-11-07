"use client"

import {
  // DatabaseIcon,
  // FilesIcon,
  FolderTreeIcon,
  // NetworkIcon,
  SettingsIcon,
  UsersIcon,
  // ShellIcon,
} from "lucide-react"
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from "react-icons/go"

import { cn } from "@/shared/shadcn-ui/utils"
import { Button } from "@/shared/shadcn-ui/button"

// import {
// ApiIntegrationConnectionIcon,
// ApplicationIcon,
// BusinessBuildingIcon,
// Cog8ToothIcon,
// Data2Icon,
// HomeIcon
// } from "@/shared/icons"

import { useIaeCtx } from "../"
import Link from "next/link"

const routes = [
  {
    label: "Home",
    href: "/",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "Tasks",
    href: "/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Members",
    href: "/members",
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
]

export const IaeSidebar = ({
  className,
}: {
  className?: string
}) => {

  const { showSidebar } = useIaeCtx()

  return (
    <>
      {showSidebar ? (
        <aside
          className={cn(
            "flex flex-col items-center justify-between",
            className
          )}
        >
          <div className="flex flex-col items-center gap-1">

            {routes.map(item => {

              const isActive = false

              const Icon = isActive ?
                item.activeIcon :
                item.icon

              return (

                <Link
                  key={item.href}
                  href={item.href}
                >
                  <Button variant="ghost" className="w-10 h-10 p-2 rounded-full" asChild>
                    <Icon
                      className="size-5 text-neutral-500"
                    />
                  </Button>
                </Link>
              )
            })}

            {/* <Button variant="ghost" asChild className="w-10 h-10 p-2 rounded-full">
              <HomeIcon strokeWidth={1} />
            </Button>

            <Button variant="ghost" asChild className="w-10 h-10 p-2 rounded-full">
              <BusinessBuildingIcon />
            </Button>

            <Button variant="ghost" asChild className="w-10 h-10 p-2 rounded-full">
              <ApplicationIcon />
            </Button>

            <Button variant="ghost" asChild className="w-10 h-10 p-2 rounded-full">
              <Data2Icon />
            </Button>

            <Button variant="ghost" asChild className="w-10 h-10 p-2 rounded-full">
              <ApiIntegrationConnectionIcon />
            </Button>


            <div className="flex items-center justify-center w-10 h-10">
              <FilesIcon />
            </div> */}

            <div className="flex items-center justify-center w-10 h-10">
              <FolderTreeIcon />
            </div>

            {/* <div className="flex items-center justify-center w-10 h-10">
              <DatabaseIcon />
            </div>

            <div className="flex items-center justify-center w-10 h-10">
              <NetworkIcon />
            </div>

            <div className="flex items-center justify-center w-10 h-10">
              <ShellIcon />
            </div>

            <div className="flex items-center justify-center w-10 h-10">
              <SettingsIcon />
            </div> */}

          </div>

          <Link
            href="/settings"
          >
            <Button variant="ghost" className="w-10 h-10 p-2 rounded-full">
              <SettingsIcon />
            </Button>
          </Link>
        </aside>

      ) : (
        null
      )}
    </>
  )
}
