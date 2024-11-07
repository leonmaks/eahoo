"use client"

import { useActionState, useEffect } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

import { Input } from "@/shared/shadcn-ui/input"
import { Button } from "@/shared/shadcn-ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/shadcn-ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/shadcn-ui/form"

import { DottedSeparator } from "@/shared/ui/dotted-separator"

import { registerSchema, RegisterSchemaType } from "../schema"
import { registerAction } from "../sa"

export const SignUpCard = () => {

  const defaultValues = {
    name: "",
    email: "",
    password: "",
  }

  const form = useForm<RegisterSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
    defaultValues
  })

  const [
    state, action, isPending
  ] = useActionState(registerAction, undefined)

  useEffect(() => {

    if (state?.fieldErrors) {
      for (const [f, errs] of Object.entries(state.fieldErrors)) {
        errs?.forEach(message => {
          form.setError(
            f as keyof RegisterSchemaType,
            { message }
          )
        })
      }
    }

    if (state?.formError) {
      toast.error(state.formError)
    }
  }, [state])

  return <>
    <Card
      className="w-full h-full md:w-[487px] border-none shadow-none"
    >
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">
          Sign Up
        </CardTitle>
        <CardDescription>
          By signing up, you agree to our{" "}
          <Link href="/public/privacy">
            <span className="text-blue-700">Privacy Policy</span>
          </Link>
          {" "}and{" "}
          <Link href="/public/terms">
            <span className="text-blue-700">Terms of Service</span>
          </Link>
        </CardDescription>
      </CardHeader>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="p-7">
        <Form {...form}>
          <form
            action={action}
            className="space-y-4"
          >

            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={false} size="lg" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="flex flex-col p-7 gap-y-4">

        <Button
          disabled={false}
          variant="secondary"
          size="lg"
          className="w-full"
        >
          <FcGoogle className="mr-2 size-5" />
          Login with Google
        </Button>

        <Button
          disabled={false}
          variant="secondary"
          size="lg"
          className="w-full"
        >
          <FaGithub className="mr-2 size-5" />
          Login with GitHub
        </Button>
      </CardContent>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="flex items-center justify-center p-7">
        <p>
          Already have an account?&nbsp;
          <Link href="/auth/sign-in">
            <span className="text-blue-700">Sign In</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  </>
}
