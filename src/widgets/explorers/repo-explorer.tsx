import { AppWindowIcon, Building2Icon } from "lucide-react"

import { TreeNode, TreeNodeType, TreeView } from "@/shared/ui/tree"

const treeNodeTypes: TreeNodeType = {
  "1": <Building2Icon strokeWidth={1} className="size-3" />,
  "2": <AppWindowIcon strokeWidth={1} className="size-3" />,
}

const treeNodes: TreeNode[] = [
  {
    key: "0", title: "Org 0", type: "1", children: [
      { key: "0-1", title: "App 0-1", type: "2" },
      { key: "0-2", title: "App 0-2", type: "2" },
      { key: "0-3", title: "App 0-3", type: "2" },
    ]
  },
  {
    key: "1", title: "Org 1", type: "1", children: [
      { key: "1-1", title: "App 1-1", type: "2" },
      { key: "1-2", title: "App 1-2", type: "2" },
      { key: "1-3", title: "App 1-3", type: "2" },
    ]
  },
  {
    key: "2", title: "Org 2", type: "1", children: [
      { key: "2-1", title: "App 2-1", type: "3" },
      { key: "2-2", title: "App 2-2", type: "3" },
      { key: "2-3", title: "", type: "3" },
    ]
  },
  {
    key: "3", title: "Org 3", type: "1", children: [
      { key: "3-1", title: "App 3-1 Long Title Long Title Long Title Long Title Long Title Long Title Long Title Long Title Long Title Long Title Long Title Long Title Long Title Long Title", type: "2" },
      { key: "3-2", title: "App 3-2", type: "2" },
      { key: "3-3", title: "App 3-3", type: "2" },
    ]
  },
  {
    key: "4", title: "Org 4", type: "1", children: [
      { key: "4-1", title: "App 4-1", type: "2" },
      { key: "4-2", title: "App 4-2", type: "2" },
      { key: "4-3", title: "App 4-3", type: "2" },
    ]
  },
  {
    key: "5", title: "Org 5", type: "1", children: [
      { key: "5-1", title: "App 5-1", type: "2" },
      { key: "5-2", title: "App 5-2", type: "2" },
      { key: "5-3", title: "App 5-3", type: "2" },
    ]
  },
  {
    key: "6", title: "Org 6", type: "1", children: [
      { key: "6-1", title: "App 6-1", type: "2" },
      { key: "6-2", title: "App 6-2", type: "2" },
      { key: "6-3", title: "App 6-3", type: "2" },
    ]
  },
  {
    key: "7", title: "Org 7", type: "1", children: [
      { key: "7-1", title: "App 7-1", type: "2" },
      { key: "7-2", title: "App 7-2", type: "2" },
      { key: "7-3", title: "App 7-3", type: "2" },
    ]
  },
  {
    key: "8", title: "Org 8", type: "1", children: [
      { key: "8-1", title: "App 8-1", type: "2" },
      { key: "8-2", title: "App 8-2", type: "2" },
      { key: "8-3", title: "App 8-3", type: "2" },
    ]
  },
  {
    key: "9", title: "Org 9", type: "1", children: [
      { key: "9-1", title: "App 9-1", type: "2" },
      { key: "9-2", title: "App 9-2", type: "2" },
      { key: "9-3", title: "App 9-3", type: "2" },
    ]
  },
]

export const RepoExplorer = () => {
  return (
    <TreeView
      treeNodes={treeNodes}
      treeNodeTypes={treeNodeTypes}
    // titleClassName="text-xs"
    />
  )
}
