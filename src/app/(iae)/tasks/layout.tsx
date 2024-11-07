import { ReactNode } from "react"

import { CreateWspModal } from "@/features"

import { TasksPanels } from "./_tasks"

export default async function TasksLayout({
  children
}: {
  children: ReactNode
}) {

  return (
    <>
      <CreateWspModal />
      <TasksPanels>
        {children}
      </TasksPanels>
    </>
  )
}
