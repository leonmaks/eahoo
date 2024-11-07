import { parseAsBoolean, useQueryState } from "nuqs"

export const useCreateWspModal = () => {

  // localhost:3000?create-wsp=true

  const [isOpen, setIsOpen] = useQueryState(
    "create-wsp",
    parseAsBoolean.withDefault(false).withOptions({
      clearOnDefault: true,
    })
  )

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return {
    isOpen,
    open,
    close,
    setIsOpen,
  }
}
