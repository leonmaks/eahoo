"use client"

import { usePathname } from "next/navigation"
import { toast } from "sonner"

import { useActionState, useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Label } from "@/shared/shadcn-ui/label"
import { Button } from "@/shared/shadcn-ui/button"
import { Form } from "@/shared/shadcn-ui/form"
// import { FormSubmitButton } from "@/shared"

import {
  DyfFieldDef,
  DyfAction,
  DyfMode,
} from "./defs"

import { dyfDefaultValues } from "./dyf-default-values"
import { dyfZSchema } from "./dyf-z-schema"
import { DyfField } from "./dyf-field"

// type DynaFormState = "new" | "valid" | "invalid"

interface DynamicFormProps {
  title: string
  subtitle?: string
  fields: DyfFieldDef[]
  fieldValues: string
  mode: DyfMode
  formAction: DyfAction
}

export const DynaForm = ({
  title,
  subtitle,
  fields,
  fieldValues,
  mode,
  formAction,
}: DynamicFormProps) => {
  const func__ = "DynaForm"
  const pathname = usePathname()

  console.log(func__, { fields })

  const defaultValues = dyfDefaultValues(
    fields,
    JSON.parse(fieldValues),
  )

  const initialState = {
    // errors: Object.fromEntries(
    //   fields.map(({ name }) => {
    //     return [name, undefined]
    //   })
    // ),
    defaultValues,
    pathname,
  }

  console.log(func__, { defaultValues })

  const schema = dyfZSchema(fields)

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const [state, action, isPending] = useActionState(formAction, initialState)

  console.log(func__, { state })

  useEffect(() => {
    // console.log(func__, "useEffect")

    form.reset()

    if (state?.values) {
      for (const [f, v] of Object.entries(state.values)) {
        form.setValue(f, v)
      }
    }

    if (state?.errors) {
      for (const [f, errs] of Object.entries(state.errors)) {
        errs?.forEach(message => {
          form.setError(f, { message })
          toast.error(`${f}: ${message}`)
        })
      }
    }
  }, [state])

  // const { setError } = form

  // const formRef = useRef<HTMLFormElement>(null)

  const { isSubmitting, isValid, isDirty } = form.formState

  return <>

    <div className="mb-4">
      <h1 className="text-2xl">{title}</h1>
      {subtitle && (<span className="items-start px-1 mt-2 text-xs bg-slate-100">{subtitle}</span>)}
    </div>

    {/* <div className="flex items-center justify-end gap-2">
      <Label className="p-1 bg-zinc-100">
        Mode: {mode || "Undefined"}
      </Label>
    </div> */}

    <Form {...form}>
      <form
        action={action}
        // onSubmit={form.handleSubmit(v => console.log(func__, { v }))}
        className="space-y-2"
      >

        {fields.map(f => (

          <DyfField
            key={f.name}
            control={form.control}
            name={f.name}
            fieldTypeId={f.fieldTypeId}
            editable={f.isEditable === true ? true : false}
          />
        ))}

        <div className="">
          <Button
            disabled={isSubmitting || !isValid || !isDirty}
            type="submit"
            className="capitalize"
          >
            {mode}
          </Button>
        </div>

        {/* <FormSubmitButton mode={mode} /> */}
      </form>
    </Form >
  </>
}
