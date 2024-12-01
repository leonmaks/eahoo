import { findUserWithEmail } from "@/entities"
import { Prisma } from "@prisma/client"

export const createUser = async (
  user: Prisma.UserCreateInput
) => {

  const userWithEmail = await findUserWithEmail(user.email)
}
