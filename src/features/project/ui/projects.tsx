"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { cn } from "@/shared/shadcn-ui/utils"

// import {
//   ImageAvatar,
//   SidebarSectionHeader
// } from "@/shared"

import { findProjectsByWsp } from "@/features"

import { useIaeCtx } from "@/app/(iae)/_iae"

type ProjectsProps = {
  // wspId: string,
  // projectId?: string,
}

export const Projects = ({
  // wspId,
  // projectId,
}: ProjectsProps) => {
  const func__ = "Projects"

  const { wspId, projectId } = useIaeCtx()
  const [projects, setProjects] = useState<any[] | undefined>()

  console.log(func__, { wspId, projectId })


  useEffect(() => {

    const init = async () => {
      if (wspId) {
        const projects = await findProjectsByWsp(wspId)
        setProjects(projects)
        console.log(func__, { projects })
      }
    }

    init()

  }, [wspId])

  return (
    <div className="flex flex-col">
      {/* <SidebarSectionHeader
        title={"Projects"}
      // actionButton={WspModalButton}
      /> */}
      {/* <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">Workspaces</p>
        <WspModalButton />
      </div> */}
      {/* <WspSelector wspsByMember={wspsByMember} /> */}

      {projects?.length ? (

        projects.map(project => {
          const isActive = project.id === projectId

          return (
            <Link
              key={project.id}
              href={`/tasks/wsp/${wspId}/project/${project.id}`}
            >
              <div className={cn(
                "flex items-center gap-2 p-2 rounded-md hover:opacity-75 transition cursor-pointer text-neutral-500",
                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
              )}>
                {/* <ImageAvatar
                  image={project.image ?? undefined}
                  name={project.name}
                  className="size-5"
                  fallbackClassName="text-sm"
                /> */}
                <span
                  className="truncate"
                >
                  {project.name}
                </span>
              </div>
            </Link>
          )
        })

      ) : (
        <div>
          No projects yet
        </div>
      )}
    </div>

  )
}
