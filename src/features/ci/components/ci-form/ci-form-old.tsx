"use client"
import { useEffect, useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { z } from "zod"
import { toast } from "sonner"

import { CiAttr } from "@prisma/client"

import { CalendarIcon } from "lucide-react"

import { cn } from "@/shared/shadcn-ui/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

import ciAttr from "@/features/ci-attr/ci-attr-repo"

import { T_Ci } from "../../types"
import { CiCoreSchema, CiCoreSchemaType } from "../../ci-core-schema"
import { getCiAttrs } from "@/features/ci-attr/sa/get-ci-attrs"
import { Spinner } from "@/components/spinner"

// import ciRepo from "../ciRepo"

export const CiForm = ({ typeId }: T_Ci) => {
  const [pending, startTransition] = useTransition()
  const [ciAttrs, setCiAttrs] = useState<CiAttr[]>()

  useEffect(() => {
    startTransition(async () => {

      await new Promise(resolve => setTimeout(resolve, 3000))

      const ciAttrs = await getCiAttrs(typeId)
      setCiAttrs(ciAttrs)

    })
  }, [typeId])

  if (!ciAttrs || pending) return <Spinner />

  // const ciAttrs = getCiAttrs(ci.typeId)
  // console.log("CiForm", { ciAttrs })
  // if (!id && !ci.name)

  // const ciAttrs = ciRepo.getCiAttrs()

  const form = useForm<CiCoreSchemaType>({
    resolver: zodResolver(CiCoreSchema),
    defaultValues: {
      typeId,
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


  console.log("ciForm", { ciAttrs })

  return <>
    <Form {...form}>
      <form
        // onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >

        <FormField
          control={form.control}
          name="typeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type ID</FormLabel>
              <FormControl>
                <Input type="number" placeholder="CI Type ID..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {ciAttrs.map(ciAttr => (
          <FormField
            key={ciAttr.id}
            control={form.control}
            name={ciAttr.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{ciAttr.name}</FormLabel>
                <FormControl>
                  <Input placeholder={ciAttr.name} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID</FormLabel>
              <FormControl>
                <Input placeholder="CI Id." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="verId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ver. ID</FormLabel>
              <FormControl>
                <Input placeholder="CI Ver Id." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fd"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>From Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {/* <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <FormField
          control={form.control}
          name="fd"
          render={({ field }) => (
            <FormItem>
              <FormLabel>From Date</FormLabel>
              <FormControl>
                <Input type="date" placeholder="From Date..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        <FormField
          control={form.control}
          name="td"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>To Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {/* <FormDescription>
                Your date of birth is used to calculate your age.
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
export default CiForm
