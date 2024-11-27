"use client"

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from "react"

export type TasksCtxType = {
  wspId: string | undefined
  setWspId: Dispatch<SetStateAction<string | undefined>>

  projectId: string | undefined
  setProjectId: Dispatch<SetStateAction<string | undefined>>
}

const TasksCtx = createContext<TasksCtxType | null>(null)

export const useTasksCtx = () => {
  const value = useContext(TasksCtx)
  if (!value) {
    throw new Error(
      "Cannot use outside of TasksCtxProvider"
    )
  }
  return value
}

export const TasksCtxProvider = ({
  children
}: { children: ReactNode }) => {

  const [wspId, setWspId] = useState<string | undefined>()
  const [projectId, setProjectId] = useState<string | undefined>()

  return (
    <TasksCtx.Provider
      value={{
        wspId,
        setWspId,
        projectId,
        setProjectId,
      }
      }
    >
      {children}
    </TasksCtx.Provider>
  )
}
