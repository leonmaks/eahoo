import { db } from "@/entities"

export const createUser = async (
  name: string,
  email: string,
  password: string,
) => {
  const user = await db.user.create({
    data: {
      name,
      email,
      password,
    }
  })
  return user
}
