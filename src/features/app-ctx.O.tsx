"use client"

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from "react"

export type AppCtxType = {
  showLeftPanel: boolean
  setShowLeftPanel: Dispatch<SetStateAction<boolean>>
  showRightPanel: boolean
  setShowRightPanel: Dispatch<SetStateAction<boolean>>
}

const AppCtx = createContext<AppCtxType | null>(null)

export const useAppCtx = () => {
  const ctx = useContext(AppCtx)
  if (!ctx) {
    throw new Error("Cannot use outside of AppCtxProvider")
  }

  return ctx
}

export const AppCtxProvider = ({
  children
}: {
  children: ReactNode
}) => {

  const [showLeftPanel, setShowLeftPanel] = useState(true)
  const [showRightPanel, setShowRightPanel] = useState(true)

  return (
    <AppCtx.Provider
      value={{
        showLeftPanel,
        setShowLeftPanel,
        showRightPanel,
        setShowRightPanel,
      }}
    >
      {children}
    </AppCtx.Provider>
  )
}
