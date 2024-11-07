import { z, ZodSchema, ZodType } from "zod"

export type FormFields = {
  name: string
  zType: ZodSchema
  editable?: boolean
}[]

export const formSchema = (
  fields: FormFields
) => z.object(Object.fromEntries(fields.map(
  ({ name, zType }) => [name, zType])
))
