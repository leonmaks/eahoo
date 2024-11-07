// Евгений Паромов
// Авторизация и профиль на Next.js | server actions, OAuth, отправка email, s3, тёмная тема
// https://youtu.be/GgG3mi4Iqhw?si=tU9aU89YDxtYDg9r
// 1:15:30
"use client"
import { signIn } from "next-auth/react"
import { LogInIcon } from "lucide-react"

import { Button } from "@/shared/shadcn-ui/button"

export const SignInButton = () => {

  const handleSignIn = () => signIn()

  return (
    <Button
      variant="outline"
      onClick={handleSignIn}
      className="rounded-full"
    >
      <LogInIcon className="w-4 h-4 mr-2" />Log In
    </Button>
  )
}
