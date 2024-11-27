"use server"

import * as pu from "path"
import { promises as fs } from "fs"
import { parse } from "yaml"

import { REPO_ROOT } from "@/shared/config"
import { getErrorMessage, urlPathnameSplit } from "@/shared/utils"
import { ActionStatus } from "@/shared/action"

import { TreeNode } from "@/shared/ui"

import { parseYamlData } from "./parse-yaml-data"

export type FileData = {
  imports?: string[]
}

export type YamlFile = TreeNode<FileData> & {
  path: string
}

// type Entity = TreeNode<any>

// type EntityRepo = {
//   roots: Record<string, Entity>
//   domains: Record<string, Entity>
//   sections: Record<string, Entity>
// }

export const readKadzoRepo = async (
  rootYaml: string,
  pathPrefix: string,
): Promise<ActionStatus<YamlFile[]>> => {
  const func__ = "readKadzoRepo"

  try {

    const repoRoot = `${process.cwd()}/${REPO_ROOT}`

    // console.log(func__, { rootYaml })

    // const entityRepo: EntityRepo = {
    //   roots: {},
    //   domains: {},
    //   sections: {},
    // }

    const data = await readKadzoFile(
      rootYaml,
      pathPrefix,
      // entityRepo,
      repoRoot
    )

    // console.log(func__, "onReturn", JSON.stringify(data, null, 2))

    return {
      data: [data],
      messages: [{
        message: `Repo with root '${REPO_ROOT}/${rootYaml}' has been loaded`,
        type: "success",
      }],
      status: "success"
    }

  } catch (exc) {
    return {
      messages: [{
        message: getErrorMessage(exc),
        type: "error"
      }],
      status: "error"
    }
  }
}

const readKadzoFile = async (
  path: string,
  pathPrefix: string,
  // entityRepo: EntityRepo,
  repoRoot?: string,
) => {
  const func__ = "readKadzoFile"

  const composeFileName = (path: string) => {

    const names = urlPathnameSplit(path)

    const removeDotOrEmptyLeadName = (names: string[]) => {
      const fn = names[0]
      if (!fn.length || fn === ".") names.shift()
    }

    removeDotOrEmptyLeadName(names)

    return names.join("/")
  }

  const fileName = composeFileName(path)

  // console.log(func__, "000", { path, fileName })

  const data = parse(await fs.readFile(
    `${repoRoot ? repoRoot : ""}/${path}`,
    "utf8",
  ))

  const file: YamlFile
    // | Entity
    = {
    key: fileName,
    title: fileName,
    type: "file",
    path,
    data,
    link: `/${pathPrefix}/${fileName}`,
    // link: path.replace(/\.*\/*/, `/${pathPrefix}/`),
  }
  file.children = []

  const dir = pu.dirname(path)

  let imports: string[] = []


  // parseYamlData(data, 0)

  if (data.imports) {
    for (const p of data.imports) {
      const path = `${dir}/${p}`
      const e: any = await readKadzoFile(
        path,
        pathPrefix,
        // entityRepo,
        repoRoot,
      )
      file.children.push(e)
    }
  }

  return file
}
