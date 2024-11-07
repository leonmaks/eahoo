"use server"

import { T_Ci } from "@/features/ci/types"

import ciAttr from "../ci-attr-repo"

export const getCiAttrs = async (
  ciTypeId: T_Ci["typeId"]
) => (
  await ciAttr.getCiAttrs(ciTypeId)
)
