"use client"
import { useEffect, useState } from "react"

import { RiCardModal } from "@/features/repo-item"

export const Modals = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <RiCardModal />
    </>
  )
}
