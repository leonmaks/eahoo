"use server"

import bcrypt from "bcryptjs"

import { registerSchema, RegisterSchemaType } from "../schema"
import { createUser, findUserByEmail } from "@/entities"

export const registerAction = async (
  prevState: unknown,
  data: FormData,
) => {
  const func__ = "registerAction"

  const formData = Object.fromEntries(data)

  // console.log(func__, { prevState, formData })
  // await sleep(3000)
  // 
  const parse = registerSchema.safeParse(formData)

  // console.log(func__, { formData, parse: JSON.stringify(parse, null, 2) })

  if (!parse.success) {
    // state.errors = parse.error.flatten().fieldErrors
    return {
      fieldErrors: parse.error.flatten().fieldErrors,
      formError: "Invalid credentials",
    }
  }

  const { name, email, password } = parse.data

  console.log(func__, { name, email, password })

  const existingUser = await findUserByEmail(email)
  if (existingUser) {
    return { formError: "Email already in use" }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await createUser(name, email, hashedPassword)

  return { success: true, message: "User created" }
}
