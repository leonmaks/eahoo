import { CardWrapper } from "@/shared"

import { CreateProjectForm } from "@/features"
import { findWspById } from "@/entities"

type NewProjectPageProps = {
  params: { wspId: string }
}

export default async function NewProjectPage({
  params,
}: NewProjectPageProps) {
  const func__ = "NewProjectPage"

  const { wspId } = await params

  const wsp = await findWspById(wspId)
  console.log(func__, { wspId, wsp })

  return (
    <div className="w-full">
      <CardWrapper
        cardTitle="Create New Project"
        cardDescription={
          wsp?.name ?
            `Creating project in workspace '${wsp?.name}'` :
            undefined
        }
      >
        <CreateProjectForm
          wspId={wspId}
        // wspName={wsp?.name}
        />
      </CardWrapper>
    </div >
  )
}
