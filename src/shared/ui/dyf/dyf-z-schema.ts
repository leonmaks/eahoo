import { z, ZodSchema, ZodString } from "zod"

import {
  DyfFieldDef,
  DyfFieldZType,
  DyfFieldLov,
  DyfFieldText,
  DyfFieldTextArea,
} from "./defs"

const fieldZSchema = ({
  fieldTypeId,
  isNotNull,
  isProp,
}: DyfFieldDef) => {

  let zSchema = DyfFieldZType[fieldTypeId]

  if (!isNotNull || isProp)
    zSchema = zSchema.optional()

  else if (
    fieldTypeId === DyfFieldText
    || fieldTypeId === DyfFieldTextArea
    || fieldTypeId === DyfFieldLov
  )
    zSchema = (zSchema as ZodString).min(1, "Must not be empty")

  return zSchema
}

export const dyfZSchema = (
  fields: DyfFieldDef[]
) => (
  z.object(Object.fromEntries(fields.map(
    f => [f.name, fieldZSchema(f)]
  )))
)
