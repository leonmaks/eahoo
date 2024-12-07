"use client"

// import { ResponsiveModal } from "@/shared"

import { useCreateWspModal } from "../hooks"
import { CreateWspForm } from "./create-wsp-form"

export const CreateWspModal = () => {
  const { isOpen, setIsOpen, close } = useCreateWspModal()

  return (
    <div>CreateWspModal!</div>

    // <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
    //   <CreateWspForm onCancel={close} />
    // </ResponsiveModal>
  )
}
