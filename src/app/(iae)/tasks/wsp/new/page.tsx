import { CreateWspForm } from "@/features"
import { CardWrapper } from "@/shared"

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
