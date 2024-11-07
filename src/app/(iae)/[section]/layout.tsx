import { ReactNode } from "react"

import {
  MiTypesDef,
  MiDomainDef,
} from "@/entities/meta"
import { getDomainRoots } from "@/entities/repo"
import { Wsp } from "./_section"

const sections: Record<string, {
  type: string, id: string
}> = {
  bsn: {
    type: MiTypesDef.Domain.id,
    id: MiDomainDef.Business.id
  },
  app: {
    type: MiTypesDef.Domain.id,
    id: MiDomainDef.Application.id
  },
  data: {
    type: MiTypesDef.Domain.id,
    id: MiDomainDef.Data.id
  },
  tech: {
    type: MiTypesDef.Domain.id,
    id: MiDomainDef.Technology.id
  },
}

export default async function SectionLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { section: string }
}) {
  const func__ = "SectionLayout"

  const { section } = await params

  const s = sections[section]

  return (
    <>
      {s && s.type === MiTypesDef.Domain.id ? (
        <>
          <Wsp domain={s.id}>
            {children}
            {/* <div>Arhi Domain {section}</div> */}
            {/* <Layout leftPanel={
          section === "meta" ? (
            <MetaExplorer />
          section === "repo" ? (
            <RepoExplorer />
          ) : (
            <DummyExplorer />
          )
        }>
          {children}
        </Layout > */}
          </Wsp>
        </>
      ) : (
        <div>
          Section is not yet supported
        </div>
      )}
    </>
  )
}
