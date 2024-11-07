"use server"

import { Prisma } from "@prisma/client"
import { v7 as uuidv7 } from "uuid"
import { promises as fs } from "fs"

import { FormAction } from "@/shared/ui/form/form-action/defs"
import { createWspSchema, CreateWspSchemaType } from "../schema"

import { createWsp, createWspMember } from "@/entities"

import { sessionGuard } from "@/features/auth"
import { genInviteCode, getErrorMessage } from "@/shared"
import { revalidatePath } from "next/cache"

export const createWspFormAction: FormAction<CreateWspSchemaType> = async (
  _prevState,
  formData,
) => {
  const func__ = "createWspFormAction"

  const session = await sessionGuard()

  // const data = Object.fromEntries(formData)

  // console.log(func__, "000", { data, session })

  const validatedData = createWspSchema.safeParse(
    Object.fromEntries(formData)
  )

  if (!validatedData.success) {
    return validatedData.error.flatten()
  }

  const { name, image } = validatedData.data

  let fileName: string | undefined = undefined

  console.log(func__, "001", { image })
  if (image && image instanceof File && image.size) {
    const data = await image.arrayBuffer()
    fileName = `/${uuidv7()}`

    console.log(func__, "001.01", { fileName })

    const result = await fs.writeFile(`public/${fileName}`, Buffer.from(data))

    console.log(func__, "001.99", { result })
  }

  try {
    const wsp = await createWsp(
      session.user.id,
      name,
      genInviteCode(10),
      fileName
    )
    // console.log(func__, { wsp })

    const member = await createWspMember(wsp.id, session.user.id, "Admin")

    revalidatePath("/")

    return {
      fieldValues: { ...wsp },
      success: true,
    }

  } catch (error) {
    // console.log(func__, "Error", JSON.stringify(error, null, 2))
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return ({
          fieldErrors: {
            name: [`Workspace '${name}' already exists`]
          }
        })
      }
    }
    return {
      formErrors: [getErrorMessage(error)]
    }
  }

  // return { values: { name } }
}
