"use client"

import { CirclePlusIcon } from "lucide-react"

import { useCreateWspModal } from "../hooks"

export const WspModalButton = () => {
  const { open } = useCreateWspModal()

  return (
    <>
      <div className="size-4 rounded-full cursor-pointer text-neutral-500 hover:text-sky-500">
        <CirclePlusIcon
          onClick={open}
          className="size-4 stroke-[1.5px] hover:stroke-[3px]"
        />
      </div>
    </>
  )
}
