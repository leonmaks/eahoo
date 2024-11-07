import { Button } from "@/shared/shadcn-ui/button"

import { E_CiTypeId } from "@/entities/ci-type/types"
import CiList from "@/features/ci/components/CiList"

export default function CiListPage() {

  return <>
    <main
      className="flex flex-col items-center min-h-screen p-8"
    >
      <h1 className="text-4xl">System List</h1>

      <Button className="my-8">Button</Button>

      <CiList ciTypeId={E_CiTypeId.Sys} />
    </main>
  </>
}
