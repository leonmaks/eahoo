"use client"
import { useEffect, useState, useTransition } from "react"
import { z } from "zod"
import { useTranslations } from "next-intl"


import { CiAttr, CiType } from "@prisma/client"
import { getCiAttrs } from "@/features/ci-attr/api/get-ci-attrs"

import { Spinner } from "@/shared/ui/spinner"

import { getCiTypeById } from "@/features/ci-type/api/get-ci-type-by-id"
import { type FormFields } from "@/features/ci/components/ci-form/form-schema"

import { T_Ci } from "../../types"
import { CiForm } from "./ci-form"

export const CiCard = (ci: T_Ci) => {
  const func__ = "CiCard"
  const t = useTranslations(func__)

  const { typeId } = ci

  const [mode, setMode] = useState<"create" | undefined>()

  const [pending, startTransition] = useTransition()
  const [ciType, setCiType] = useState<CiType | null>(null)
  const [ciAttrs, setCiAttrs] = useState<CiAttr[]>()

  useEffect(() => {
    startTransition(async () => {

      const ciType = await getCiTypeById(typeId)
      setCiType(ciType)

      const ciAttrs = await getCiAttrs(typeId)
      setCiAttrs(ciAttrs)

      if (!ci?.id) {
        setMode("create")
      }

      // console.log(`${func__}-01`, { ci, mode })

      // TODO:
      // Существующий Ci:
      // 1. Если задан ci.id - поднять всю информацию по КЭ, включая: Ci, CiVer, CiAttrVal
      // 2. Найти CI по UK-атрибутам (если такие значения заданы
      // Новый Ci:
      // 3. Если не определены 1 и 2
    })
  }, [typeId])

  if (!ciType || !ciAttrs || pending) return <Spinner />

  const fields = [
    // { name: "typeId", zType: z.number(), editable: false },

    ...ciAttrs.map(attr => (
      { name: attr.name, zType: z.string(), editable: true }
    )),

    { name: "id", zType: z.string() },
    { name: "verId", zType: z.string() },
    { name: "fd", zType: z.date() },
    { name: "td", zType: z.date() },

  ] as FormFields

  // console.log(`${func__}-02`, { ci, mode })

  return <>
    <div className="flex justify-between">
      <div className="mb-3 text-2xl">{t(ciType.name)}</div>
      <div>Mode: {mode || "undefined"}</div>
    </div>
    <CiForm ci={ci} fields={fields} mode={mode} />
  </>
}
export default CiCard
