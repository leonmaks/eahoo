import { ReactNode } from "react"

import { IaeHeader, IaeCtxProvider, IaeSidebar, IaeFooter } from "./_iae"
import { auth } from "@/features/auth"
import { redirect } from "next/navigation"
import { LOGIN_ROUTE } from "@/shared"

export default async function IaeLayout({
  children
}: {
  children: ReactNode
}) {
  // const func__ = "IaeLayout"

  const session = await auth()
  if (!session?.user.id) redirect(LOGIN_ROUTE)

  return (
    <IaeCtxProvider>
      <div
        className="flex flex-col min-h-screen"
      >
        <IaeHeader />

        <div className="flex h-[calc(100vh-5rem)]">
          <IaeSidebar className="w-16 border-r bg-gray-50 shrink-0" />

          {children}
        </div>

        <IaeFooter />
      </div>
    </IaeCtxProvider>
  )
}
