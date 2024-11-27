import { useEffect, useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

// import { useWorkspaceId } from "@/hooks/useWorkspaceId"
// import { useCreateChannel } from "../api/useCreateChannel"
// import { useCreateChannelModal } from "../store/useCreateChannelModal"

import { useRiCardModal } from ".."

import { Input } from "@/shared/shadcn-ui/input"
import { Button } from "@/shared/shadcn-ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/shadcn-ui/dialog"
import { getMiChildren } from "@/features/mi/sa"
import { Spinner } from "@/shared/ui"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/shared/shadcn-ui/form"

export const RiCardModal = () => {
  const func__ = "RiCardModal"

  const router = useRouter()
  // const workspaceId = useWorkspaceId()

  const [isPending, startTransition] = useTransition()

  // const { mutate, isPending } = useCreateChannel()
  const {
    modalOpen: [open, setOpen],
    modalContent: [content, setContent],
  } = useRiCardModal()

  useEffect(() => {
    const init = () => {
      startTransition(async () => {

        // await new Promise(resolve => setTimeout(resolve, 3000))

        if (content && content.mi_id) {
          const childMiList = await getMiChildren(content.mi_id)
          console.log(func__, { childMiList })
        }
      })
    }
    init()
  }, [content])

  // const [name, setName] = useState("")

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value.replace(/\s+/g, "-").toLowerCase()
  //   setName(value)
  // }

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   mutate({ name, workspaceId }, {
  //     onSuccess: (id) => {
  //       toast.error("Channel created")
  //       router.push(`/workspace/${workspaceId}/channel/${id}`)
  //       handleClose()
  //     },
  //     onError: () => { toast.error("Failed to create a channel") }
  //   })
  // }

  const handleClose = () => {
    //   setName("")
    setOpen(false)
  }

  if (isPending) return <Spinner />

  return (
    <Dialog
      open={open}
      onOpenChange={handleClose}
    >
      <DialogContent
        className="overflow-y-scroll max-h-screen"
      // className="lg:max-w-screen-lg overflow-y-scroll max-h-screen"
      >
        <DialogHeader>
          <DialogTitle>Add a channel</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          {JSON.stringify(content, null, 2)}
        </DialogDescription>

        {/* <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Advanced Web Development'"
                      className="bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center gap-x-2">
              <Button
                disabled={isSubmitting || !isValid}
                type="submit"
              >
                Save
              </Button>
            </div>
          </form>
        </Form> */}

        {/* <form 
        onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={name}
            disabled={isPending}
            onChange={handleChange}
            required
            autoFocus
            minLength={3}
            maxLength={80}
            placeholder="e.g. 'plan-budget'"
          />
          <div className="flex justify-end">
            <Button disabled={false}>
              Create
            </Button>
          </div>
        </form> */}

      </DialogContent>
    </Dialog>
  )
}
