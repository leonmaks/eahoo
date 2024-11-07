import { CiTypeTable } from "@/features/ci-type/components/ci-type-table"

export default function CiTypesPage() {
  return <>
    <main className="p-12">
      <h1 className="mb-8 text-3xl">CI Types</h1>
      <CiTypeTable />
    </main>
  </>
}
