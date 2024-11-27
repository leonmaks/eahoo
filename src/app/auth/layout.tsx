import { ReactNode } from "react"

export default function AuthLayout({
  children
}: {
  children: ReactNode
}) {

  return <>
    <main className="flex items-center justify-center min-h-screen bg-background">
      {/* <div className="container py-6"> */}
      {/* <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow"> */}
      {/* <div className="flex flex-col items-center justify-center md:pt-8"> */}
      {children}
      {/* </div> */}
      {/* </div> */}
    </main>
  </>
}
