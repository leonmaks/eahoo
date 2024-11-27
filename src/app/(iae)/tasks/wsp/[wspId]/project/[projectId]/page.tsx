type ProjectIdPageProps = {
  params: {
    wspId: string,
    projectId: string,
  }
}

export default async function ProjectIdPage({
  params,
}: ProjectIdPageProps) {
  const func__ = "ProjectIdPage"

  const { wspId, projectId } = await params

  return (
    <div>
      {JSON.stringify({ wspId, projectId }, null, 2)}
    </div>
  )
}
