import NextAuth, { type DefaultSession } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { UserRole } from "@prisma/client"

import authConfig from "@/features/auth/auth.config"
import { db } from "@/entities/db"
import { findUserByEmail } from "@/entities"

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      // address: string
      id: string
      role: UserRole
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"]
  }
}
export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ session }) {
      // const func__ = "auth.session"

      // console.log(func__, {
      //   session,
      //   userExists: !!session.user,
      //   userEmailExists: !!session.user.email
      // })

      if (
        (!session.user.id || !session.user.role) &&
        session.user?.email
      ) {
        const existingUser = await findUserByEmail(session.user.email)

        // console.log(func__, { existingUser })

        if (existingUser) {
          session.user.id = existingUser.id
          session.user.role = existingUser.role
        } else {
          // TODO: If NO SUCH user in DB: decide & implement!
        }
      }
      // console.log(func__, { token, session, user })
      return session
    },
    // async jwt({ token }) {
    //   const func__ = "jwt"
    //   if (token.email) {
    //     const existingUser = await findUserByEmail(token.email)
    //     if (existingUser) {
    //       token.id =
    //         token.role = existingUser.role
    //     }
    //   }
    //   console.log(func__, { token })
    //   return token
    // },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})
