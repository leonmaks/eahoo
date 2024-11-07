// Евгений Паромов
// Авторизация и профиль на Next.js | server actions, OAuth, отправка email, s3, тёмная тема
// https://youtu.be/GgG3mi4Iqhw?si=tU9aU89YDxtYDg9r
// 1:16:30

"use client"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
import { useMutation } from "@tanstack/react-query"

export const useSignOut = () => {

  const router = useRouter()

  const mutation = useMutation({
    mutationFn: () => signOut({ callbackUrl: "/" }),
    onSuccess: async () => {
      router.push("/auth/sign-in")
    }
  })

  return {
    signOut: mutation.mutateAsync,
    isPending: mutation.isPending,
  }
}
