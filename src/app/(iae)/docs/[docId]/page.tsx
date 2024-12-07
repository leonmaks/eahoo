import { Toolbar } from "./_doc-id/toolbar"
import { Editor } from "./_doc-id/editor"
import { DocNavbar } from "./_doc-id/doc-navbar"
import { ScrollablePanel } from "@/shared/ui"

export default async function DocIdPage({
  params
}: {
  params: Promise<{ docId: string }>
}) {

  const { docId } = await params

  return (
    <div className="h-full bg-[#fafbfd] bg-red-500">
      <div className="relative flex flex-col px-4 pt-2 gap-y-2 top-0 left-0 right-0 z-10 bg-[#fafbfd] print:hidden">
        <DocNavbar />
        <Toolbar />
      </div>
      <ScrollablePanel>
        <Editor />
      </ScrollablePanel>
    </div>
  )
}
