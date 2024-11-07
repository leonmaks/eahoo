import { z } from "zod"

export const CiCoreSchema = z.object({
  id: z.string(),
  verId: z.string(),
  typeId: z.number(),
  fd: z.date(),
  td: z.date(),
})
export type CiCoreSchemaType = z.infer<typeof CiCoreSchema>
