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
}

const IaeCtx = createContext<IaeCtxType | null>(null)

export const useIaeCtx = () => {
  const ctx = useContext(IaeCtx)
  if (!ctx) {
    throw new Error("Cannot use outside of IaeCtxProvider")
  }
  return ctx
}

export const IaeCtxProvider = (
  { children }: { children: ReactNode }
) => {

  // TODO: Add condition "Show if logged in"
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <IaeCtx.Provider
      value={{
        showSidebar, setShowSidebar,
      }}
    >
      {children}
    </IaeCtx.Provider>
  )
}
