import { ReactNode } from "react"
import Link from "next/link"
import { redirect } from "next/navigation"
// import Image from "next/image"

import { FlashThunderIcon, LOGIN_ROUTE } from "@/shared"
import { auth } from "@/features"
import { UserProfile } from "../(iae)/_iae/ui/user-profile"

type StandaloneLayoutProps = {
  children: ReactNode
}

export default async function StandaloneLayout({
  children,
}: StandaloneLayoutProps) {

  const session = await auth()
  if (!session?.user.id) redirect(LOGIN_ROUTE)

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center h-[73px]">

          <Link href="/">
            <div
              className="flex items-center ml-4 font-bold text-1xl text-sky-800"
            >
              <FlashThunderIcon className="size-8" />
              <span className="text-lg -ml-1.5">EAHoo</span>
              <span className="text-2xl italic -ml-0.5">!</span>

            </div>
            {/* <Image src="/logo.svg" alt="Logo" height={56} width={152} /> */}
          </Link>

          <UserProfile />
          {/* TODO: <UserButton */}
        </nav>
        <div className="flex flex-col items-center justify-center py-4">
          {children}
        </div >
      </div>
    </main >
  )
}
