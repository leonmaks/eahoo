import { CardWrapper } from "@/shared/ui"

import { CreateWspForm } from "@/features"

export default async function NewWspPage() {

  return (
    <div className="w-full">
      <CardWrapper
        title="Create New Workspace"
      >
        <CreateWspForm />
      </CardWrapper>
    </div>
  )
}
