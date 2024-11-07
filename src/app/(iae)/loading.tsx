import { LoaderIcon } from "lucide-react"

export default function DashboardLoading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
    >
      <LoaderIcon
        className="size-6 animate-spin text-muted-foreground"
      />
    </div>
  )
}
