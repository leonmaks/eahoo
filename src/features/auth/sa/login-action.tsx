"use server"

// import { z } from "zod"

import { loginSchema, LoginSchemaType } from "../schema"
// import { sleep } from "@/shared/utils"
// import { NextResponse } from "next/server"
// import { FormAction, FormActionState } from "@/shared/ui/form"
import { signIn } from "../auth"
import { LOGIN_REDIRECT } from "@/shared"
import { AuthError } from "next-auth"

export const loginAction = async (
  _prevState: unknown,
  data: FormData,
) => {
  const func__ = "loginAction"

  const formData = Object.fromEntries(data)

  console.log(func__, { formData })
  // await sleep(3000)
  // 
  const validatedFields = loginSchema.safeParse(formData)

  console.log(func__, { formData, validatedFields: JSON.stringify(validatedFields, null, 2) })

  if (!validatedFields.success) {
    // state.errors = validatedFields.error.flatten().fieldErrors
    return {
      fieldErrors: validatedFields.error.flatten().fieldErrors,
      formError: "Invalid credentials",
    }
  }

  const { email, password } = validatedFields.data

  try {
    const result = await signIn("credentials", {
      email, password, redirectTo: LOGIN_REDIRECT
    })
    // console.log(func__, { result })

  } catch (error) {

    // console.log(func__, { error })

    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { formError: "Invalid Credentials" }
        default:
          return { formError: "Internal Server Error" }
      }
    }
    throw error
  }

  return {}
}
