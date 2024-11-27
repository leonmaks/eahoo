"use client"

import { useActionState, useEffect } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

import { Input } from "@/shared/shadcn-ui/input"
import { Button, buttonVariants } from "@/shared/shadcn-ui/button"
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

import { DottedSeparator } from "@/shared/ui/separator/dotted-separator"

import { registerSchema, RegisterSchemaType } from "../schema"
import { registerAction } from "../sa"
import Image from "next/image"
import { cn } from "@/shared/shadcn-ui/utils"

export const SignUpCard = () => {

  // const defaultValues = {
  //   name: "",
  //   email: "",
  //   password: "",
  // }

  // const form = useForm<RegisterSchemaType>({
  //   mode: "onBlur",
  //   resolver: zodResolver(registerSchema),
  //   defaultValues
  // })

  // const [
  //   state, action, isPending
  // ] = useActionState(registerAction, undefined)

  // useEffect(() => {

  //   if (state?.fieldErrors) {
  //     for (const [f, errs] of Object.entries(state.fieldErrors)) {
  //       errs?.forEach(message => {
  //         form.setError(
  //           f as keyof RegisterSchemaType,
  //           { message }
  //         )
  //       })
  //     }
  //   }

  //   if (state?.formError) {
  //     toast.error(state.formError)
  //   }
  // }, [state])

  return <>
    <div
      className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
    >
      <Link
        href="/examples/authentication"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Acme Inc
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than
              ever before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          UserAuthForm
          {/* <UserAuthForm /> */}
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  </>
}


// <Card
// className="w-full h-full md:w-[487px] border-none shadow-none"
// >
// <CardHeader className="flex items-center justify-center text-center p-7">
//   <CardTitle className="text-2xl">
//     Sign Up
//   </CardTitle>
//   <CardDescription>
//     By signing up, you agree to our{" "}
//     <Link href="/public/privacy">
//       <span className="text-blue-700">Privacy Policy</span>
//     </Link>
//     {" "}and{" "}
//     <Link href="/public/terms">
//       <span className="text-blue-700">Terms of Service</span>
//     </Link>
//   </CardDescription>
// </CardHeader>
//
// <div className="px-7">
//   <DottedSeparator />
// </div>
//
// <CardContent className="p-7">
//   <Form {...form}>
//     <form
//       action={action}
//       className="space-y-4"
//     >
//
//       <FormField
//         name="name"
//         control={form.control}
//         render={({ field }) => (
//           <FormItem>
//             <FormControl>
//               <Input
//                 {...field}
//                 type="text"
//                 placeholder="Name"
//               />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//
//       <FormField
//         name="email"
//         control={form.control}
//         render={({ field }) => (
//           <FormItem>
//             <FormControl>
//               <Input
//                 {...field}
//                 type="email"
//                 placeholder="Email"
//               />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//
//       <FormField
//         name="password"
//         control={form.control}
//         render={({ field }) => (
//           <FormItem>
//             <FormControl>
//               <Input
//                 {...field}
//                 type="password"
//                 placeholder="Password"
//               />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//
//       <Button disabled={false} size="lg" className="w-full">
//         Login
//       </Button>
//     </form>
//   </Form>
// </CardContent>
//
// <div className="px-7">
//   <DottedSeparator />
// </div>
//
// <CardContent className="flex flex-col p-7 gap-y-4">
//
//   <Button
//     disabled={false}
//     variant="secondary"
//     size="lg"
//     className="w-full"
//   >
//     <FcGoogle className="mr-2 size-5" />
//     Login with Google
//   </Button>
//
//   <Button
//     disabled={false}
//     variant="secondary"
//     size="lg"
//     className="w-full"
//   >
//     <FaGithub className="mr-2 size-5" />
//     Login with GitHub
//   </Button>
// </CardContent>
//
// <div className="px-7">
//   <DottedSeparator />
// </div>
//
// <CardContent className="flex items-center justify-center p-7">
//   <p>
//     Already have an account?&nbsp;
//     <Link href="/auth/sign-in">
//       <span className="text-blue-700">Sign In</span>
//     </Link>
//   </p>
// </CardContent>
// </Card>
