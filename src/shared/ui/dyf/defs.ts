import { z, ZodSchema } from "zod"

export const
  DyfFieldText = "01",
  DyfFieldTextArea = "02",
  DyfFieldLov = "03",

  DyfOrdLast = "Z.99"

export const DyfFieldZType: Record<string, ZodSchema> = {
  "01": z.string().trim(),
  "02": z.string().trim(),
  "03": z.string().trim(),
}

export type DyfMode = "create" | "update"

export type DyfState = {
  errors?: Record<string, string[] | undefined>
  message?: string
  defaultValues?: Record<string, any>
  values?: Record<string, any>
  pathname?: string
}

export type DyfAction = (
  prevState: DyfState,
  formData: FormData
) => DyfState | Promise<DyfState>

export type DyfFieldDef = {
  id: string
  fieldTypeId: string
  name: string
  isUK?: boolean | null
  isNotNull?: boolean | null
  isEditable?: boolean | null
  isProp?: boolean | null
  ord: string
}

// export type DyfFieldDef = {
//   name: string
//   zType: ZodSchema
//   editable?: boolean
//   mandatory?: boolean
// }

// export const DyfSchema = (
//   fields: DyfFieldDef[]
// ) => z.object(Object.fromEntries(fields.map(
//   ({ name, zType }) => [name, zType])
// ))
