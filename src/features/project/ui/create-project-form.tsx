"use client"

import {
  ChangeEvent,
  useActionState,
  useEffect,
  useRef,
} from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import Image from "next/image"

import { ImageIcon } from "lucide-react"

import { Project } from "@prisma/client"

import { DottedSeparator, TASKS_HOME } from "@/shared"

import { cn } from "@/shared/shadcn-ui/utils"
import { Input } from "@/shared/shadcn-ui/input"
import { Button } from "@/shared/shadcn-ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/shared/shadcn-ui/form"
import { Avatar, AvatarFallback } from "@/shared/shadcn-ui/avatar"

// import {
//   toastFormMessage,
// } from "@/shared/ui/form"

import {
  createProjectSchema,
  CreateProjectSchemaType
} from "../schema"
import { Label } from "@/shared/shadcn-ui/label"
import { createProjectFormAction } from "../sa/create-project-form-action"
// import { createProjectFormAction } from "../sa"
// import { divide } from "lodash-es"

type CreateProjectFormProps = {
  wspId: string,
  // wspName: string,
  onCancel?: () => void
}

export const CreateProjectForm = ({
  wspId,
  // wspName,
  onCancel,
}: CreateProjectFormProps) => {
  const func__ = "CreateProjectForm"

  const router = useRouter()

  const inputRef = useRef<HTMLInputElement>(null)

  const defaultValues = {
    wspId,
    name: "",
    image: undefined,
  }

  console.log(func__, { defaultValues })

  const form = useForm<CreateProjectSchemaType>({
    resolver: zodResolver(createProjectSchema),
    defaultValues
  })

  const [
    state,
    action,
    isPending
  ] = useActionState(
    createProjectFormAction,
    { values: defaultValues }
  )

  useEffect(() => {

    if (state.success) {
      toast.success(
        `Project '${state.values?.name ?? "?"}' created`
      )
      form.reset()

      const project = state.values as Project
      router.push(
        `${TASKS_HOME}/wsp/${wspId}/project/${project.id}`
      )
    }

    state.formErrors?.forEach(error => {
      toast.error(error)
    })

  }, [state])





  // const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const func__ = "handleImageChange"

  //   const file = e.target.files?.[0]

  //   console.log(func__, { file })

  //   if (file) {
  //     form.setValue("image", file)

  //     console.log(func__, { formValues: form.getValues() })
  //   }
  // }

  return (
    <Form {...form}>
      <form
        action={action}
      >
        <div className="flex flex-col gap-y-4">

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (

              <FormItem>
                <FormLabel>
                  Project Name
                </FormLabel>

                <FormControl>
                  <Input
                    {...field}
                    placeholder="Project name..."
                  />
                </FormControl>

                {
                  state?.fieldErrors?.name &&
                  <FormMessage>{state?.fieldErrors?.name}</FormMessage>
                }
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="wspId"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="hidden" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-5">
                  {field.value ? (
                    <div
                      className="size-[72px] relative rounded-md overflow-hidden"
                    >
                      <Image
                        alt="Logo"
                        fill
                        className="object-cover"
                        src={
                          field.value instanceof File ?
                            URL.createObjectURL(field.value) :
                            field.value
                        }
                      />
                    </div>
                  ) : (
                    <Avatar className="size-[72px]">
                      <AvatarFallback>
                        <ImageIcon className="size-[36px] text-neutral-400" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div className="flex flex-col">
                    <p className="text-sm">Project Icon</p>
                    <p className="text-sm text-muted-foreground">
                      JPG, PNG, SVG or JPEG, max 1MB
                    </p>
                    <Input
                      ref={inputRef}
                      className="hidden"
                      type="file"
                      name="image"
                      accept=".jpg, .png, .jpeg, .svg"
                    // onChange={handleImageChange}
                    // disabled={isPending}
                    />
                    {/* <input
                      ref={inputRef}
                      className="hidden"
                      type="file"
                      accept=".jpg, .png, .jpeg, .svg"
                      onChange={handleImageChange}
                      disabled={isPending}
                    /> */}
                    <Button
                      type="button"
                      // disabled={isPending}
                      variant="secondary"
                      className="w-fit mt-2 bg-sky-100 hover:bg-sky-200"
                      size="sm"
                      onClick={() => inputRef.current?.click()}
                    >
                      Upload Image
                    </Button>
                  </div>
                </div>
              </div>
            )}
          />

          {
            state?.formErrors &&
            <FormMessage>{state.formErrors}</FormMessage>
          }
        </div>

        <DottedSeparator className="py-7" />


        <div className="flex items-center justify-between">

          <Button
            // disabled={isPending}
            type="button"
            size="lg"
            variant="secondary"
            onClick={onCancel}
            className={cn(onCancel || "invisible")}
          >
            Cancel
          </Button>

          <Button
            // disabled={isPending}
            size="lg"
          >
            Create Project
          </Button>
        </div>
      </form>
    </Form>
  )
}
