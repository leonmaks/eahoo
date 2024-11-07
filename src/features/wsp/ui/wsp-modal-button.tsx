"use client"

import { RiAddCircleFill } from "react-icons/ri"

import { useCreateWspModal } from "../hooks"

export const WspModalButton = () => {
  const { open } = useCreateWspModal()

  return (
    <>
      <RiAddCircleFill
        onClick={open}
        className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition"
      />
    </>
  )
}
