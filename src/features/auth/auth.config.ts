import { User, type NextAuthConfig } from "next-auth"
import bcrypt from "bcryptjs"
// import { compact } from "lodash-es"
import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

// import { privateConfig } from "../config"
import { loginSchema } from "@/features/auth/schema"
import { findUserByEmail } from "@/entities"
import {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  NEXTAUTH_SECRET
} from "@/shared/config/defs"
import {
  AUTH_BASE_PATH
} from "@/shared/config/auth-routes"

// Notice this is only an object, not a full Auth.js instance
export default {
  // theme: {
  //   logo: "/icon.svg"
  // },
  providers:
    // compact(
    [
      GitHub({
        clientId: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
      }),

      Google({
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
      }),

      // GITHUB_CLIENT_ID &&
      // GITHUB_CLIENT_SECRET &&
      // GitHub({
      //   clientId: GITHUB_CLIENT_ID,
      //   clientSecret: GITHUB_CLIENT_SECRET,
      // }),

      // GOOGLE_CLIENT_ID &&
      // GOOGLE_CLIENT_SECRET &&
      // Google({
      //   clientId: GOOGLE_CLIENT_ID,
      //   clientSecret: GOOGLE_CLIENT_SECRET,
      // }),

      // Credentials({
      //   async authorize(credentials) {

      //     const validatedFields = loginSchema.safeParse(credentials)

      //     if (validatedFields.success) {
      //       const { email, password } = validatedFields.data

      //       const user = await findUserByEmail(email)
      //       if (user?.password &&
      //         await bcrypt.compare(password, user.password)) {

      //         return user as User
      //       }
      //     }
      //     return null
      //   }
      // }),
    ]
  // )
  ,

  // [
  // Credentials({
  //   name: "Credentials",
  //   credentials: {
  //     username: { label: "Username", type: "text", placeholder: "jsmith" },
  //     password: { label: "Password", type: "password" },
  //   },

  //   async authorize(credentials): Promise<User | null> {
  //     const users = [
  //       { id: "u1", userName: "u1", name: "User 1", password: "u__", email: "u1@donotreply.com" },
  //       { id: "u2", userName: "u2", name: "User 2", password: "u__", email: "u2@donotreply.com" },
  //     ]

  //     const user = users.find(
  //       user => (
  //         user.userName === credentials.username &&
  //         user.password === credentials.password
  //       )
  //     )
  //     return user ? { id: user.id, name: user.name, email: user.email } : null
  //   }
  // }),
  //   GitHub({
  //     clientId: GITHUB_CLIENT_ID ?? "",
  //     clientSecret: GITHUB_CLIENT_SECRET ?? "",
  //   }),
  // ],
  basePath: AUTH_BASE_PATH,
  secret: NEXTAUTH_SECRET,

} satisfies NextAuthConfig
