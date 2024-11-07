"use client"
import { ReactNode } from "react"
import { SessionProvider as NaSessionProvider } from "next-auth/react"

export const AppSessionProvider = ({
  children,
}: {
  children?: ReactNode
}) => (
  <NaSessionProvider>
    {children}
  </NaSessionProvider>
)
