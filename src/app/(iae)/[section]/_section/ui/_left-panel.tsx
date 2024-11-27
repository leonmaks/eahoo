"use client"

import { useEffect, useState, useTransition } from "react"

import { ScrollablePanel, Spinner, TreeNode, Tree } from "@/shared/ui"

import { getRiHrchy } from "../sa"
import { NavItemActions } from "./_nav-item-actions.O"
import { useRiCardModal } from "@/features/repo-item"
import { RiHrchyNode } from "@/entities"

type LeftPanelProps = {
  domain: string
}

export const LeftPanel = ({
  domain
}: LeftPanelProps) => {
  const func__ = "LeftPanel"
  const {
    modalOpen: [_open, setOpen],
    modalContent: [_content, setContent],
  } = useRiCardModal()

  const [isPending, startTransition] = useTransition()
  const [treeNodes, setTreeNodes] = useState<TreeNode<RiHrchyNode>[] | undefined>(undefined)

  console.log(func__, { domain })

  useEffect(() => {

    const init = () => {
      startTransition(async () => {
        const riHrchy = await getRiHrchy(domain)
        console.log(func__, { riHrchy })

        const treeRoots: TreeNode<RiHrchyNode>[] = []
        const treeItems: Record<string, TreeNode<RiHrchyNode>> = {}

        riHrchy.forEach((data
          // {
          // ri_ver_id,
          // ri_id,
          // ri_up_id,
          // mi_id,
          // name
          // }
        ) => {
          const treeItem = {
            key: data.ri_ver_id,
            title: data.name,
            type: data.mi_id,
            data,
            link: `/app/ri/${data.ri_ver_id}`,
            children: []
          }
          treeItems[data.ri_id] = treeItem
          if (data.ri_up_id) {
            treeItems[data.ri_up_id].children?.push(treeItem)
          } else {
            treeRoots.push(treeItem)
          }
        })

        setTreeNodes(treeRoots)
      })
    }

    init()

    // return () => { }

  }, [domain])

  // console.log(func__, { treeNodes })

  return (
    <>
      {treeNodes === undefined ? (
        <Spinner />

      ) : (
        <ScrollablePanel classNames=" mr-0.5">
          <Tree
            treeNodes={treeNodes}
            onNew={data => {
              setContent(data)
              setOpen(true)
            }}
          />
        </ScrollablePanel>
      )}
    </>
  )
}
