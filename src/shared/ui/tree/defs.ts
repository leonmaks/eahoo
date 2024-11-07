// import { ReactNode } from "react"

// export type TreeNodeType = Record<string, ReactNode>

export type TreeNode<D> = {
  key: string
  title: string
  type: string
  data?: D
  link?: string
  children?: TreeNode<D>[]
}
