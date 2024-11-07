"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { PanelLeftCloseIcon, PanelLeftOpenIcon } from "lucide-react"

import { Button } from "@/shared/shadcn-ui/button"
import { SearchForm } from "@/shared/ui/search-form"
// import { AuthButton } from "@/shared/auth/ui/auth-button.cli"
import { FlashThunderIcon } from "@/shared/icons/flash-thunder"

import { useIaeCtx } from "../providers/iae-ctx-provider"
import { UserProfile } from "./user-profile"

export const IaeHeader = () => {
  const pathname = usePathname()
  const { showSidebar, setShowSidebar } = useIaeCtx()

  const onSidebarButtonClick = () => {
    setShowSidebar(s => s === true ? false : true)
  }

  return (
    <header
      className="flex items-center justify-between h-12 px-3 border-b border-gray-200 min-h-12"
    >

      <div className="flex items-center justify-center">
        <Button
          onClick={onSidebarButtonClick}
          variant="ghost"
          className="w-10 h-10 p-2 rounded-full"
          asChild
        >

          {showSidebar ? (
            <PanelLeftCloseIcon className="stroke-1" />
          ) : (
            <PanelLeftOpenIcon className="stroke-1" />
          )}

        </Button>

        <div
          className="flex items-center ml-4 font-bold text-1xl text-sky-800"
        >

          <FlashThunderIcon className="size-8" />
          <span className="text-lg -ml-1.5">EAHoo</span>
          <span className="text-2xl italic -ml-0.5">!</span>

        </div>
      </div>

      <div className="flex items-center justify-center flex-grow">
        <SearchForm />
      </div>

      <div className="flex items-center">

        <UserProfile />

        {/* <AuthButton /> */}

        {/* <Button asChild variant="secondary" className="h-10 rounded-full">
          <Link href={pathname === "/auth/sign-in" ? "/auth/sign-up" : "/auth/sign-in"}>
            {pathname === "/auth/sign-in" ? "Sign Up" : "Sign In"}
          </Link>
        </Button> */}

      </div>
    </header>
  )
}
