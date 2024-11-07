import { Table, TableBody, TableHeader } from "@/shared/shadcn-ui/table"
import ciRepo from "../ciRepo"
import { T_Ci } from "../types"

interface CiListProps {
  ciTypeId: T_Ci["typeId"]
}

export async function CiList({
  ciTypeId

}: CiListProps) {

  const ciList = await ciRepo.getCiListByType(ciTypeId)
  console.log("CiList", { ciList })

  return <>
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </TableHead>
              )
            })}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={columns.length}
              className="h-24 text-center"
            >
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>

    <div>{JSON.stringify(ciList, null, 2)}</div>
  </>
}
export default CiList
