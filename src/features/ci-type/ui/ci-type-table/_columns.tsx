"use client"
import { ColumnDef } from "@tanstack/react-table"

import { CiTypeSchemaType } from "../../ci-type-schema"

import { TableSortableHeader } from "@/components/custom/table-sortable-header"

export const columns: ColumnDef<CiTypeSchemaType>[] = [

  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },

  {
    accessorKey: "id",
    header: (c => TableSortableHeader<CiTypeSchemaType, unknown>(c, "#ID")),
  },
  {
    accessorKey: "name",
    header: (c => TableSortableHeader<CiTypeSchemaType, unknown>(c, "Name")),
  },
  {
    accessorKey: "description",
    header: (c => TableSortableHeader<CiTypeSchemaType, unknown>(c, "Description")),
  },
  {
    accessorKey: "nick",
    header: (c => TableSortableHeader<CiTypeSchemaType, unknown>(c, "Nickname")),
  },
  {
    accessorKey: "ord",
    header: (c => TableSortableHeader<CiTypeSchemaType, unknown>(c, "Order")),
  },
]
