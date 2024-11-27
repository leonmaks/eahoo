import { UseFormReturn } from "react-hook-form"
import { ZodSchema } from "zod"

export type FormActionState = {
  values?: Record<string, any | undefined>
  fieldErrors?: Record<string, string[] | undefined>
  // fieldErrors?: { [key: keyof T]: string[] | undefined }
  formError?: string
  success?: boolean
  pathname?: string
}

export type FormAction = (
  prevState: FormActionState,
  formData: FormData,
) => Promise<FormActionState>

// export type FormActionWrapper = (
//   prevState: FormActionState,
//   formData: FormData,
//   zSch: ZodSchema,
//   nextAction?: FormAction,
// ) => Promise<FormActionState>

// export type HandleActionErrors = (
//   state: FormActionState,
//   form: UseFormReturn,
//   toastError?: (e: string) => void
// ) => void
