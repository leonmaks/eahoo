import Link from "next/link"

import {
  DynaFormFieldPassword,
  DynaFormFieldText,
} from "@/shared/ui"

import { loginAction } from "../sa"
import { AuthFormLayout } from "../ui"

export const SignInForm = () => {

  return (
    <AuthFormLayout
      title="Sign In"
      description={
        "Welcome back! Please sign in to your account"
      }
      fields={[
        { name: "login", fieldTypeId: DynaFormFieldText },
        { name: "password", fieldTypeId: DynaFormFieldPassword },
      ]}
      submit="Sign In"
      formAction={loginAction}
      footer={
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?&nbsp;
          <Link href="/auth/sign-up">
            <span className="text-blue-700">Sign Up</span>
          </Link>
        </p>
      }
    />
  )
}
