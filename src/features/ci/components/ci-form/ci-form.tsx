import { z, ZodSchema } from "zod"

import { T_Ci } from "../../types"
import { useForm } from "react-hook-form"
import { CiCoreSchemaType } from "../../ci-core-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  // FormControl, FormField, FormItem, FormLabel, FormMessage
} from "@/shared/shadcn-ui/form"
import { Button } from "@/shared/shadcn-ui/button"
// import { Input } from "@/shared/shadcn-ui/input"
import FormField from "@/shared/ui/form/dyna-form/dyna-form-field"
import { FormFields, formSchema } from "./form-schema"

interface CiFormProps {
  ci: T_Ci,
  fields: FormFields
  mode?: string
}

export const CiForm = ({
  ci,
  fields,
  mode
}: CiFormProps) => {

  const schema = formSchema(fields)
  // type SchemaType = FormSchemaType(schema)

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    // defaultValues: {
    //   typeId,
    // },
  })

  return <>
    <Form {...form}>
      <form
        // onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >

        {fields.map(field => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            editable={field.editable}
          />

          // <FormField
          //   key={field.name}
          //   control={form.control}
          //   name={field.name}
          //   render={({ field }) => (
          //     <FormItem>
          //       <FormLabel>{field.name}</FormLabel>
          //       <FormControl>
          //         <Input placeholder={field.name} {...field} />
          //       </FormControl>
          //       <FormMessage />
          //     </FormItem>
          //   )}
          // />
        ))}

        <Button type="submit">
          {mode === "create" ? "Create" : "Submit"}
        </Button>
      </form>
    </Form>
  </>
}
export default CiForm


//       <FormField
//         control={form.control}
//         name="typeId"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Type ID</FormLabel>
//             <FormControl>
//               <Input type="number" placeholder="CI Type ID..." {...field} />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />

//       {ciAttrs.map(ciAttr => (
//         <FormField
//           key={ciAttr.id}
//           control={form.control}
//           name={ciAttr.name}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>{ciAttr.name}</FormLabel>
//               <FormControl>
//                 <Input placeholder={ciAttr.name} {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//       ))}

//       <FormField
//         control={form.control}
//         name="id"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>ID</FormLabel>
//             <FormControl>
//               <Input placeholder="CI Id." {...field} />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />

//       <FormField
//         control={form.control}
//         name="verId"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Ver. ID</FormLabel>
//             <FormControl>
//               <Input placeholder="CI Ver Id." {...field} />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />

//       <FormField
//         control={form.control}
//         name="fd"
//         render={({ field }) => (
//           <FormItem className="flex flex-col">
//             <FormLabel>From Date</FormLabel>
//             <Popover>
//               <PopoverTrigger asChild>
//                 <FormControl>
//                   <Button
//                     variant={"outline"}
//                     className={cn(
//                       "w-[240px] pl-3 text-left font-normal",
//                       !field.value && "text-muted-foreground"
//                     )}
//                   >
//                     {field.value ? (
//                       format(field.value, "PPP")
//                     ) : (
//                       <span>Pick a date</span>
//                     )}
//                     <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
//                   </Button>
//                 </FormControl>
//               </PopoverTrigger>
//               <PopoverContent className="w-auto p-0" align="start">
//                 <Calendar
//                   mode="single"
//                   selected={field.value}
//                   onSelect={field.onChange}
//                   disabled={(date) =>
//                     date > new Date() || date < new Date("1900-01-01")
//                   }
//                   initialFocus
//                 />
//               </PopoverContent>
//             </Popover>
//             {/* <FormDescription>
//                 Your date of birth is used to calculate your age.
//               </FormDescription> */}
//             <FormMessage />
//           </FormItem>
//         )}
//       />

//       {/* <FormField
//           control={form.control}
//           name="fd"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>From Date</FormLabel>
//               <FormControl>
//                 <Input type="date" placeholder="From Date..." {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         /> */}

//       <FormField
//         control={form.control}
//         name="td"
//         render={({ field }) => (
//           <FormItem className="flex flex-col">
//             <FormLabel>To Date</FormLabel>
//             <Popover>
//               <PopoverTrigger asChild>
//                 <FormControl>
//                   <Button
//                     variant={"outline"}
//                     className={cn(
//                       "w-[240px] pl-3 text-left font-normal",
//                       !field.value && "text-muted-foreground"
//                     )}
//                   >
//                     {field.value ? (
//                       format(field.value, "PPP")
//                     ) : (
//                       <span>Pick a date</span>
//                     )}
//                     <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
//                   </Button>
//                 </FormControl>
//               </PopoverTrigger>
//               <PopoverContent className="w-auto p-0" align="start">
//                 <Calendar
//                   mode="single"
//                   selected={field.value}
//                   onSelect={field.onChange}
//                   disabled={(date) =>
//                     date > new Date() || date < new Date("1900-01-01")
//                   }
//                   initialFocus
//                 />
//               </PopoverContent>
//             </Popover>
//             {/* <FormDescription>
//                 Your date of birth is used to calculate your age.
//               </FormDescription> */}
//             <FormMessage />
//           </FormItem>
//         )}
//       />
