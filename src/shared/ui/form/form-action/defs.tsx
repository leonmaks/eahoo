import { UseFormReturn } from "react-hook-form"
import { ZodSchema } from "zod"

export type FormActionState<T> = {
  fieldValues?: T
  fieldErrors?: Record<string, string[] | undefined>
  // fieldErrors?: { [key: keyof T]: string[] | undefined }
  formErrors?: string[]
  success?: boolean
  pathname?: string
}

export type FormAction<T> = (
  prevState: FormActionState<T>,
  formData: FormData,
) => Promise<FormActionState<T>>

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
