import { ReactNode } from "react"

export default function AuthLayout({
  children
}: {
  children: ReactNode
}) {

  return <>
    <div className="flex flex-col items-center justify-center md:pt-8">
      {children}
    </div>
  </>
}
