import { useForm } from "react-hook-form"
import { z, ZodSchema } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { RepoItem_T } from "../types"
import { FormFields, formSchema } from "@/shared/ui/dyf/types"

import { newRepoItem_sa } from "../sa/riFormAction"

// import { Input } from "@/shared/shadcn-ui/input"
import { Button } from "@/shared/shadcn-ui/button"
import {
  Form,
  // FormControl, FormField, FormItem, FormLabel, FormMessage
} from "@/shared/shadcn-ui/form"

import FormField from "@/shared/ui/form/dyna-form/dyna-form-field"

interface RepoItemFormProps {
  ri: RepoItem_T,
  fields: FormFields
  mode?: string
}

export const RepoItemForm = ({
  ri,
  fields,
  mode
}: RepoItemFormProps) => {
  const func__ = "RepoItemForm"

  const schema = formSchema(fields)
  // type SchemaType = FormSchemaType(schema)

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    // defaultValues: {
    //   typeId,
    // },
  })

  console.log(func__, { schema, form })

  return <>
    <Form {...form}>
      <form
        action={newRepoItem_sa}
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
