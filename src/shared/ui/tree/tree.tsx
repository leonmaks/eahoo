"use client"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import {
  ChevronRightIcon,
  EllipsisIcon,
  PlusIcon,
  // DotIcon,
} from "lucide-react"

import { cn } from "@/shared/shadcn-ui/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/shadcn-ui/dropdown-menu"

import {
  TreeNode,
  // TreeNodeType
} from "./defs"
import { Hint } from "../hint"
import { Button } from "@/shared/shadcn-ui/button"

type TreeProps<D> = {
  treeNodes: TreeNode<D>[]
  // treeNodeTypes?: TreeNodeType
  onNew?: (n?: D) => void
  titleClassName?: string
}

export function Tree<D>({
  treeNodes,
  // treeNodeTypes = {},
  onNew,
  titleClassName,
}: TreeProps<D>) {

  return (
    <div className="">
      {treeNodes.map(n => (
        <TreeElem<D>
          key={n.key}
          treeNode={n}
          // treeNodeTypes={treeNodeTypes}
          onNew={onNew}
          titleClassName={titleClassName}
          level={0}
        />
      ))}
    </div>
  )
}

const Ident = () => (
  <div className="w-4 shrink-0"></div>
)

const Margin = ({
  uk,
  level
}: {
  uk: string,
  level: number
}) => {
  const idents = []
  for (let i = 0; i < level; i++) {
    idents.push(
      <Ident key={`${uk}-${i}`} />
    )
  }
  return <div className="flex shrink-0">{idents}</div>
}

type TreeElemProps<D> = {
  treeNode: TreeNode<D>
  // treeNodeTypes: TreeNodeType
  onNew?: (n?: D) => void
  onNewHint?: string
  titleClassName?: string
  level: number
}

function TreeElem<D>({
  treeNode,
  // treeNodeTypes,
  onNew,
  onNewHint,
  titleClassName,
  level,
}: TreeElemProps<D>) {
  // const func__ = "TreeElem"
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const currentId = pathname.split("/").pop()

  // console.log(func__, { currentId })

  const isCurrentNode = treeNode.key === currentId

  // console.log(func__, { onNew })

  return (
    <>
      <div
        className={cn(
          "relative flex cursor-pointer hover:bg-sky-100 group h-full",
          isCurrentNode && "bg-red-100 hover:bg-red-100"
        )}
      >

        {onNew && (
          <Hint label={onNewHint || "Create Child Node"} side="top" align="center">
            <Button
              onClick={() => onNew(treeNode.data)}
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1 opacity-0 group-hover:opacity-100 transition-opacity text-sm size-4 bg-transparent hover:bg-sky-200 p-0"
            >
              <PlusIcon className="size-4" />
            </Button>
          </Hint>
        )}

        <div
          onClick={() => setIsOpen(s => !s)}
          className="flex items-center"
        >

          <Margin uk={treeNode.key} level={level} />

          {treeNode.children && treeNode.children.length > 0 ? (
            <div
              className=""
            >
              <ChevronRightIcon
                className={cn(
                  "size-4 bg-sky-200",
                  isOpen && "rotate-90 bg-transparent"
                )}
              />
            </div>

          ) : (
            <Ident />
          )}
        </div>

        {/* {treeNodeTypes[treeNode.type] || (
          <DotIcon strokeWidth={1} className="size-3" />
        )} */}

        <div
          onClick={() => {
            if (treeNode.link && treeNode.link.length > 0) {
              router.push(treeNode.link)
            }
          }}
          className={cn(
            "ml-1 grow",
            titleClassName || ""
          )}
        >
          {treeNode.title || "Undefined"}
        </div>

      </div>

      {isOpen && treeNode.children && treeNode.children.length > 0 && (
        <div className="">
          {treeNode.children?.map(n => (
            <TreeElem
              key={n.key}
              treeNode={n}
              // treeNodeTypes={treeNodeTypes}
              onNew={onNew}
              titleClassName={titleClassName}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </>
  )
}
