import { toast } from "sonner"

import { FormActionMessage } from "./defs"

export const toastFormMessage = (
  { formMessage, success }: FormActionMessage
) => {
  if (formMessage)
    if (success) toast.success(formMessage)
    else toast.error(formMessage)
}
