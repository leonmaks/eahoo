"use client"

import { useEffect, useState } from "react"

import {
  FileData,
  useKadzoRepo,
  YamlFile,
} from "@/features/kadzo"

import { TreeNode, searchTree } from "@/shared/ui"

type KadzoFileProps = {
  kadzoFileKey: string
}

export const KadzoFile = ({
  kadzoFileKey,
}: KadzoFileProps) => {
  const func__ = "KadzoFile"
  const kadzoRepo = useKadzoRepo()
  const [kadzoFile, setKadzoFile] = useState<TreeNode<FileData> | undefined>(undefined)

  useEffect(() => {

    if (kadzoRepo) {
      setKadzoFile(searchTree(kadzoRepo, kadzoFileKey))
    }

  }, [kadzoRepo])

  console.log(func__, "props", { kadzoFileKey, kadzoFile })

  return (
    <>
      {kadzoFile ? (
        <div>
          {JSON.stringify(kadzoFile.data, null, 2)}
        </div>
      ) : (
        <div>
          Loading...
        </div>
      )}
    </>
  )
}
