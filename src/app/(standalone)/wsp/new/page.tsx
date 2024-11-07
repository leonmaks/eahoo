import { CardWrapper } from "@/shared"
import { CreateWspForm } from "@/features"

export default async function WspNewPage() {

  return (
    <div className="w-full lg:max-w-xl">
      <CardWrapper
        cardTitle="Create New Workspace"
      >
        <CreateWspForm />
      </CardWrapper>
    </div>
  )
}
