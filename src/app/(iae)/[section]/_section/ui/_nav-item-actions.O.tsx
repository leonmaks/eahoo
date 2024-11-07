import { EllipsisIcon } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/shared/shadcn-ui/dropdown-menu"

import { TreeNode } from "@/shared"

import { getChildNavTypes } from "../sa"

type NavItemActionsProps = {
  treeNode: TreeNode
}

export const NavItemActions = ({
  treeNode
}: NavItemActionsProps) => {
  const func__ = "NavItemActions"

  console.log(func__, { treeNode })

  // const childNavTypes = getChildNavTypes(treeNode.type)

  // console.log(func__, { childNavTypes })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="absolute flex items-center justify-center text-gray-500 transition border border-gray-500 rounded-lg opacity-0 right-1 top-1 group-hover:opacity-100">
          <EllipsisIcon className="w-4 h-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="start" className="w-64">
        <DropdownMenuItem>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
