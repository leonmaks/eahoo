import {
  ReactNode,
} from "react"

// import {
//   DottedSeparator,
// } from "@/shared"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/shared/shadcn-ui/card"

// import { SessionLoadingSpinner } from "@/shared/ui/session"

type CardWrapperProps = {
  title: string
  description?: string
  children: ReactNode
  footer?: ReactNode
}

export const CardWrapper = ({
  title,
  description,
  children,
  footer,
}: CardWrapperProps) => {
  // const func__ = "CardWrapper"

  return (
    // <SessionLoadingSpinner>
    <Card className="w-full max-w-md">
      <CardHeader className="">
        <CardTitle className="text-2xl font-bold text-center">
          {title}
        </CardTitle>

        {description && (
          <CardDescription className="text-center">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      {/* <div className="px-7">
        <DottedSeparator />
      </div> */}

      <CardContent className="">
        {children}
      </CardContent>

      {footer && (
        <CardFooter
          className="flex justify-center"
        >
          {footer}
        </CardFooter>
      )}
    </Card>
    // </SessionLoadingSpinner>
  )
}
