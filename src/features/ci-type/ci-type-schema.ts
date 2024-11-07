import { z } from "zod"

export const CiTypeSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().optional(),
  ord: z.string().optional(),
  nick: z.string().optional(),
})

export type CiTypeSchemaType = z.infer<typeof CiTypeSchema>
