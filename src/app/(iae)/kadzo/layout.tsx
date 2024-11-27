import { ReactNode } from "react"

import { ResizablePanels } from "@/shared/ui"

import { YamlRepoNav } from "./_kadzo/ui/yaml-repo-nav"

type KadzoRepoLayoutProps = {
  children: ReactNode,
  // params: { wspId?: string, projectId?: string },
}

export default async function KadzoRepoLayout({
  children,
  // params,
}: KadzoRepoLayoutProps) {
  // const func__ = "KadzoRepoLayout"
  // 
  // const { wspId, projectId } = await params

  // console.log(func__, { wspId, projectId })

  return (
    <>
      <ResizablePanels
        leftPanel={
          <YamlRepoNav />
        }
      >
        {children}
      </ResizablePanels>
    </>
  )
}
