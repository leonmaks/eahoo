"use client"

import { useEffect } from "react"

import {
  redirect,
  useParams,
  usePathname,
  useRouter
} from "next/navigation"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/shared/shadcn-ui/select"

import {
  ImageAvatar,
  TASKS_HOME
} from "@/shared"

import { useIaeCtx } from "@/app/(iae)/_iae"
// import { useTasksCtx } from "@/app/(iae)/tasks/_tasks"

type WspSelectorProps = {
  wspsByMember: any[]
}

export const WspSelector = ({
  wspsByMember,
}: WspSelectorProps) => {
  const func__ = "WspSelector"

  const pathname = usePathname()
  const router = useRouter()

  const { setWspId } = useIaeCtx()

  const { wspId } = useParams<{ wspId?: string }>()

  console.log(func__, { pathname, wspId })

  if (pathname === TASKS_HOME) {
    if (wspsByMember.length) {
      redirect(`${TASKS_HOME}/wsp/${wspsByMember[0].wspId}`)
    } else {
      redirect(`${TASKS_HOME}/wsp/new`)
    }
  }

  useEffect(() => {

    if (wspId) { setWspId(wspId) }

    console.log(func__, "useEffect", { wspId })

  }, [wspId])

  const onSelect = (id: string) => {
    router.push(`/tasks/wsp/${id}`)
  }

  return (
    <Select
      onValueChange={onSelect}
      value={wspId}
    >
      <SelectTrigger
        className="focus:outline w-full bg-neutral-200 font-medium p-1"
      >
        <SelectValue
          placeholder="No workspace selected"
        />
      </SelectTrigger>
      <SelectContent>
        {wspsByMember.map(m => (
          <SelectItem key={m.id} value={m.wsp.id}>
            <div className="flex items-center gap-3 font-medium">
              <ImageAvatar name={m.wsp.name} image={m.wsp.image || undefined} />
              <span className="truncate">{m.wsp.name} ({m.role})</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
