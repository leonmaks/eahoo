import { CardWrapper } from "@/shared"

import { CreateWspForm } from "@/features"

export default async function NewWspPage() {

  return (
    <div className="w-full">
      <CardWrapper
        cardTitle="Create New Workspace"
      >
        <CreateWspForm />
      </CardWrapper>
    </div>
  )
}
