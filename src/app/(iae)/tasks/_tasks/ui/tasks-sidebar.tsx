import { urlPathnameSectionsValues } from "@/shared/utils"
import { DottedSeparator } from "@/shared/ui"
import { getUrlPathname } from "@/shared/helpers"

import { Projects, WspSwitcher } from "@/features"
import { TasksNavigation } from "./tasks-navigation"

type TasksSidebarProps = {
  // wspId?: string,
  // projectId?: string,
}

export const TasksSidebar = async ({
  // wspId,
  // projectId,
}: TasksSidebarProps) => {
  const func__ = "TasksSidebar"

  // const sections = urlPathnameSectionsValues(await getUrlPathname(), ["wsp", "project"])
  // console.log(func__, {
  //   wsp: sections?.wsp,
  //   project: sections?.project
  // })

  console.log(func__, "refresh")

  return (
    <aside className="h-full bg-neutral-50 p-2 w-full">
      <WspSwitcher />

      <DottedSeparator className="my-4" />
      <TasksNavigation />

      <DottedSeparator className="my-4" />

      {/* {wspId && ( */}
      <Projects
      // wspId={wspId}
      // projectId={projectId}
      />
      {/* )} */}
    </aside>
  )
}
