import { z } from "zod"

export const createProjectSchema = z.object({
  wspId: z.string(),
  name: z.string().trim().min(1, "Required"),
  image: z.union([
    z.instanceof(File),
    z.string().transform(value => value === "" ? undefined : value),
  ]).optional(),
})

export type CreateProjectSchemaType = z.infer<typeof createProjectSchema>
