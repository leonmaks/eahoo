"use server"
import { signOut as naSignOut } from ".."

export const signOut = async () => {
  console.log("S: Before Sign Out")
  await naSignOut()
  console.log("S: After Sign Out")
}
