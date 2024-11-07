import { WspSwitcher } from "@/features"
import { DottedSeparator } from "@/shared"
import { TasksNavigation } from "./tasks-navigation"

export const TasksSidebar = async () => {

  return (
    <aside className="h-full bg-neutral-50 p-2 w-full">
      <WspSwitcher />
      <DottedSeparator className="my-4" />
      <TasksNavigation />
    </aside>
  )
}
