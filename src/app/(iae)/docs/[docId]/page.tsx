import { Toolbar } from "./toolbar"
import { Editor } from "./editor"

export default async function DocIdPage({
  params
}: {
  params: Promise<{ docId: string }>
}) {

  const { docId } = await params

  return (
    <div className="mih-h-screen bg-[#fafbfd]">
      <Toolbar />
      <Editor />
    </div>
  )
}
