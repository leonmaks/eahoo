"use client"

import {
  useEffect,
  useState,
  useTransition
} from "react"

import {
  ScrollablePanel,
  Spinner,
  Tree
} from "@/shared/ui"

import {
  toastActionMessages
} from "@/shared/action"

import { sleep } from "@/shared/utils"

import {
  useKadzoRepo,
  useSetKadzoRepo,
  readKadzoRepo,
} from "@/features/kadzo"

export const YamlRepoNav = () => {
  // const func__ = "YamlRepoNav"
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<boolean>(false)
  const kadzoRepo = useKadzoRepo()
  const setKadzoRepo = useSetKadzoRepo()

  useEffect(() => {

    const init = () => {
      setError(false)
      startTransition(async () => {

        // await sleep(1000)

        const kadzoRepo = await readKadzoRepo("root.yaml", "kadzo")
        kadzoRepo.messages && toastActionMessages(kadzoRepo.messages)

        if (kadzoRepo.status === "success") {

          // console.log(func__, "init", JSON.stringify(kadzoRepo, null, 2))

          setKadzoRepo(kadzoRepo.data)

        } else {
          setError(true)
        }
      })
    }

    init()

  }, [])

  if (isPending) return (
    <Spinner />
  )

  if (error) return (
    <p className="text-red-500">Unable to load repository files</p>
  )

  if (!kadzoRepo) return (
    <Spinner />
    // <p className="">Repo not loaded</p>
  )

  // console.log(func__, "render", { kadzoRepo })

  return (
    <ScrollablePanel classNames=" mr-0.5">
      <Tree
        treeNodes={kadzoRepo}
      // onNew={data => {
      //   setContent(data)
      //   setOpen(true)
      // }}
      />
    </ScrollablePanel>
  )
}
