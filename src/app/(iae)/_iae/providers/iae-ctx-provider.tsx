"use client"

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from "react"

export type IaeCtxType = {
  showSidebar: boolean
  setShowSidebar: Dispatch<SetStateAction<boolean>>

  wspId: string | undefined
  setWspId: Dispatch<SetStateAction<string | undefined>>

  projectId: string | undefined
  setProjectId: Dispatch<SetStateAction<string | undefined>>
}

const IaeCtx = createContext<IaeCtxType | null>(null)

export const useIaeCtx = () => {
  const ctx = useContext(IaeCtx)
  if (!ctx) {
    throw new Error("Cannot use outside of IaeCtxProvider")
  }
  return ctx
}

export const IaeCtxProvider = ({
  children
}: { children: ReactNode }) => {

  // TODO: Add condition "Show if logged in"
  const [showSidebar, setShowSidebar] = useState(true)

  const [wspId, setWspId] = useState<string | undefined>()
  const [projectId, setProjectId] = useState<string | undefined>()

  return (
    <IaeCtx.Provider
      value={{
        showSidebar,
        setShowSidebar,

        wspId,
        setWspId,

        projectId,
        setProjectId,
      }}
    >
      {children}
    </IaeCtx.Provider>
  )
}
