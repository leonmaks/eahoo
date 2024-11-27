import { KadzoFile } from "@/features/kadzo"

type KadzoEntryPageType = {
  params: { kadzoEntry: string[] }
}

export default async function KadzoEntryPage({
  params
}: KadzoEntryPageType) {
  const func__ = "KadzoEntryPage"

  const { kadzoEntry } = await params

  console.log(func__, { kadzoEntry })
  // console.log(func__, { params: await params })



  return (
    <div>
      <KadzoFile
        kadzoFileKey={kadzoEntry.join("/")}
      />
    </div>
  )
}
