import { db } from "@/entities"

export const findUserById = async (id: string) => {
  const user = await db.user.findUnique({ where: { id } })
  return user
}
