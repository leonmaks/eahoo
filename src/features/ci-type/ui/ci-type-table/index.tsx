import ciTypeRepo from "../../../../entities/ci-type/ci-type-repo"
import { columns } from "./_columns"
import { DataTable } from "./_data-table"

export const CiTypeTable = async () => {
  const data = await ciTypeRepo.getAll()

  return (
    <DataTable columns={columns} data={data} />
  )
}
