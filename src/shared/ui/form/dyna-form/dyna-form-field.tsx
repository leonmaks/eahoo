import {
  Control,
  FieldPath,
  FieldValues
} from "react-hook-form"

import { Input } from "@/shared/shadcn-ui/input"
import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/shadcn-ui/form"

import {
  DynaFormFieldLov,
  DynaFormFieldPassword,
  DynaFormFieldText
} from "./defs"
import { FormActionState } from "../form-action"

export const DynaFormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  fieldTypeId = DynaFormFieldText,
  editable = true,
  state,
}: {
  control: Control<TFieldValues, any>,
  name: TName,
  fieldTypeId?: string
  editable?: boolean,
  state?: FormActionState,
}) => {

  let fieldError = (
    state?.fieldErrors && state?.fieldErrors[name]
  ) ? state.fieldErrors[name] : undefined

  return <>
    <FormField<TFieldValues, TName>
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {/* <FormItem className="flex flex-col"> */}

          <FormLabel>{field.name}</FormLabel>

          {fieldTypeId === DynaFormFieldLov ? (

            <div>Unknown</div>

          ) : (

            <FormControl>
              {(
                fieldTypeId === DynaFormFieldText ||
                fieldTypeId === DynaFormFieldPassword
              ) ? (
                <Input
                  {...field}
                  disabled={!editable}
                  placeholder={field.name}
                  type={
                    fieldTypeId === DynaFormFieldPassword ?
                      "password" :
                      "text"
                  }
                />

              ) : (
                <div>Unknown</div>
              )}
            </FormControl>
          )}

          {fieldError && fieldError.length && (
            <FormMessage>
              {fieldError}
            </FormMessage>
          )}

          <FormMessage />
        </FormItem>
      )}
    />
  </>
}
