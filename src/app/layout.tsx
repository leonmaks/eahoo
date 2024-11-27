import { ReactNode } from "react"
import type { Metadata } from "next"
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import localFont from "next/font/local"

import { auth } from "@/features/auth"
import {
  AppSessionProvider,
  JotaiProvider,
  QueryProvider
} from "@/features/providers"

import { cn } from "@/shared/shadcn-ui/utils"
import { Toaster } from "@/shared/shadcn-ui/sonner"

import { Modals } from "./_root/modals"

import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "EAHoo!",
  description: "Enterprise Architecture Collaborative Universe",
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  // const func__ = "RootLayout"

  // const session = await auth()

  return (
    <AppSessionProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen antialiased",
            geistSans.variable,
            geistMono.variable,
          )}
        >
          <QueryProvider>
            <JotaiProvider>

              <NuqsAdapter>
                {children}
              </NuqsAdapter>

              <Modals />
              <Toaster
                position="top-right"
                richColors
              />

            </JotaiProvider>
          </QueryProvider>
        </body>
      </html>
    </AppSessionProvider>
  )
}
