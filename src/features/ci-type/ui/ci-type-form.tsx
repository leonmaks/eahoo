"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
// import { z } from "zod"

import { toast } from "sonner"

import { CiTypeSchema, CiTypeSchemaType } from "../ci-type-schema"

import { Button } from "@/shared/shadcn-ui/button"
import { Input } from "@/shared/shadcn-ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/shadcn-ui/form"

// import ciRepo from "../ciRepo"
import { Textarea } from "@/shared/shadcn-ui/textarea"


export function CiTypeForm() {

  // const ciAttrs = ciRepo.getCiAttrs()

  const form = useForm<CiTypeSchemaType>({
    resolver: zodResolver(CiTypeSchema),
    defaultValues: {
      description: "",
    },
  })

  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   toast("Submitted")
  //   // toast({
  //   //   title: "You submitted the following values:",
  //   //   description: (
  //   //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //   //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //   //     </pre>
  //   //   ),
  //   // })
  // }

  return <>
    <Form {...form}>
      <form
        // onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >

        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>#ID</FormLabel>
              <FormControl>
                <Input placeholder="ID Number" {...field} />
              </FormControl>
              {/* <FormDescription>
                CI Type ID nubmer.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              {/* <FormDescription>
                Name of CI type.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Description"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                Name of CI type.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ord"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Order</FormLabel>
              <FormControl>
                <Input placeholder="Display Order" {...field} />
              </FormControl>
              {/* <FormDescription>
                Name of CI type.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nick"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nickname</FormLabel>
              <FormControl>
                <Input placeholder="Nickname" {...field} />
              </FormControl>
              {/* <FormDescription>
                Name of CI type.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  </>
}
