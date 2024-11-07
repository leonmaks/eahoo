import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Required")
})

export type LoginSchemaType = z.infer<typeof loginSchema>

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Required"),
  email: z.string().email(),
  password: z.string().min(3, "Required")
})

export type RegisterSchemaType = z.infer<typeof registerSchema>
