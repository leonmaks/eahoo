"use server"

import { revalidatePath } from "next/cache"
import { v7 as uuidv7 } from "uuid"
import { promises as fs } from "fs"
import { Prisma } from "@prisma/client"

import { getErrorMessage } from "@/shared"
import { FormAction } from "@/shared/ui/form/form-action/defs"

import { createProject, findWspsByMember } from "@/entities"

import { sessionGuard } from "@/features/auth"

import {
  createProjectSchema,
  CreateProjectSchemaType
} from "../schema"

export const createProjectFormAction: FormAction = async (
  _prevState,
  formData,
) => {
  const func__ = "createProjectFormAction"

  // TODO: +Verify permission to create project
  const session = await sessionGuard()

  const validatedData = createProjectSchema.safeParse(
    Object.fromEntries(formData)
  )

  if (!validatedData.success) {
    return validatedData.error.flatten()
  }

  // console.log(func__, "000-01", { validatedData })

  const { name, image, wspId } = validatedData.data

  const wspMembers = await findWspsByMember(session.user.id)

  let isAdmin = false
  wspMembers.forEach(member => {
    if (member.wspId === wspId && member.role === "Admin") {
      isAdmin = true
    }
  })

  if (!isAdmin) return {
    formErrors: ["You're not an adminisrator"]
  }

  console.log(func__, "000-02", { wspMembers })

  let fileName: string | undefined = undefined

  console.log(func__, "001", { image })

  if (image && image instanceof File && image.size) {
    const data = await image.arrayBuffer()
    fileName = `/upload/project-${uuidv7()}`

    console.log(func__, "001.01", { fileName })

    const result = await fs.writeFile(`public/${fileName}`, Buffer.from(data))

    console.log(func__, "001.99", { result })
  }

  try {
    const project = await createProject(
      wspId,
      name,
      fileName
    )
    //   // console.log(func__, { wsp })

    //   const member = await createWspMember(wsp.id, session.user.id, "Admin")

    revalidatePath(`/tasks/wsp/${wspId}`)

    return {
      values: { ...project },
      success: true,
    }

  } catch (error) {

    console.log(func__, "Error", JSON.stringify(error, null, 2))

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return ({
          fieldErrors: {
            name: [`Project '${name}' already exists`]
          }
        })
      }
    }
    return {
      formErrors: [getErrorMessage(error)]
    }
  }

  return { values: { name } }
}
