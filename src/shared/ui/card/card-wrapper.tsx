import {
  ReactNode,
} from "react"

import {
  DottedSeparator,
} from "@/shared"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/shared/shadcn-ui/card"

// import { SessionLoadingSpinner } from "@/shared/ui/session"

type CardWrapperProps = {
  children: ReactNode
  cardTitle: string
}

export const CardWrapper = ({
  children,
  cardTitle,
}: CardWrapperProps) => {
  // const func__ = "CardWrapper"

  return (
    // <SessionLoadingSpinner>
    <Card
      className="w-full h-full border-none shadow-none"
    >
      <CardHeader
        className="flex p-7"
      >
        <CardTitle
          className="text-xl font-bold"
        >
          {cardTitle}
        </CardTitle>
      </CardHeader>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="p-7">
        {children}
      </CardContent>
    </Card>
    // </SessionLoadingSpinner>
  )
}
