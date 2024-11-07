import { z } from "zod"

export const createWspSchema = z.object({
  name: z.string().trim().min(1, "Required"),
  image: z.union([
    z.instanceof(File),
    z.string().transform(value => value === "" ? undefined : value),
  ]).optional(),
  // userId: z.string().trim().min(1, "Required")
})

export type CreateWspSchemaType = z.infer<typeof createWspSchema>
