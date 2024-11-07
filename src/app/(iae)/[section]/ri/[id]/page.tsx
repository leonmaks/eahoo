import { RiCard } from "@/features"

export default async function RepoItemIdPage({
  params
}: {
  params: { id: string }
}) {
  const { id } = await params

  return (
    <RiCard riVerId={id} />
  )
}
