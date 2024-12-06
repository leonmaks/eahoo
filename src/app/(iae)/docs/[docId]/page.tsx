import { Toolbar } from "./toolbar"
import { Editor } from "./editor"
import { DocNavbar } from "./_doc-id/doc-navbar"

export default async function DocIdPage({
  params
}: {
  params: Promise<{ docId: string }>
}) {

  const { docId } = await params

  return (
    <div className="mih-h-screen bg-[#fafbfd]">
      <div className="relative flex flex-col px-4 pt-2 gap-y-2 top-0 left-0 right-0 z-10 bg-[#fafbfd] print:hidden">
        <DocNavbar />
        <Toolbar />
      </div>
      <Editor />
    </div>
  )
}
