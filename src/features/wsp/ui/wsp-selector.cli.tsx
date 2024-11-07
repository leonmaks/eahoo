"use client"

import {
  redirect,
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

import { TASKS_HOME } from "@/shared"

import { WspAvatar } from "./wsp-avatar"
import { useWspId } from "../hooks/use-wsp-id"

type WspSelectorProps = {
  wspsByMember: any[]
}

export const WspSelector = ({
  wspsByMember,
}: WspSelectorProps) => {
  const func__ = "WspSelector"

  const pathname = usePathname()
  const router = useRouter()

  const wspId = useWspId()

  console.log(func__, { pathname })

  if (pathname === TASKS_HOME) {
    if (wspsByMember.length) {
      redirect(`${TASKS_HOME}/wsp/${wspsByMember[0].wspId}`)
    } else {
      redirect(`${TASKS_HOME}/wsp/new`)
    }
  }

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
              <WspAvatar name={m.wsp.name} image={m.wsp.image || undefined} />
              <span className="truncate">{m.wsp.name} ({m.role})</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
