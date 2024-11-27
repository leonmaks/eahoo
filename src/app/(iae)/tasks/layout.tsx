import { ReactNode } from "react"

import { CreateWspModal } from "@/features"

import {
  // TasksCtxProvider,
  TasksPanels
} from "./_tasks"

type TasksLayoutProps = {
  children: ReactNode,
  params: { wspId?: string, projectId?: string },
}

export default async function TasksLayout({
  children,
  params,
}: TasksLayoutProps) {
  const func__ = "TasksLayout"

  const { wspId, projectId } = await params

  console.log(func__, { wspId, projectId })

  return (
    <>
      <CreateWspModal />
      {/* <TasksCtxProvider> */}
      <TasksPanels
        wspId={wspId}
        projectId={projectId}
      >
        {children}
      </TasksPanels>
      {/* </TasksCtxProvider> */}
    </>
  )
}
