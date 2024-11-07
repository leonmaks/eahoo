import { redirect } from "next/navigation"

import { LOGIN_ROUTE } from "@/shared"

import { auth } from "../auth"

export const sessionGuard = async () => {
  const session = await auth()
  if (!session?.user.id) redirect(LOGIN_ROUTE)
  return session
}
