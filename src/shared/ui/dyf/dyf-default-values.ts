import { DyfFieldDef } from "./defs"

export const dyfDefaultValues = (
  fields: DyfFieldDef[],
  fieldValues: Record<string, any>,
) => {

  return Object.fromEntries(
    fields.map(({ name }) => {
      return [name, fieldValues[name] || ""]
    })
  )
}
