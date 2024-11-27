import { create } from "zustand"
import { combine } from "zustand/middleware"

import { YamlFile } from "../actions"

type KadzoRepo = { kadzoRepo: YamlFile[] | undefined }
type SetKadzoRepo = { setKadzoRepo: (data: any) => void }

export const useKadzoRepoStore = create(
  combine<
    KadzoRepo, SetKadzoRepo
  >(
    { kadzoRepo: undefined },
    (set) => ({
      setKadzoRepo: (data) => set(() => {
        // const func__ = "useRepoStore"
        // console.log(func__, "setRepo", { data })
        return { kadzoRepo: data }
      })
    }),
  ),
)

export const useKadzoRepo = () => (
  useKadzoRepoStore(state => state.kadzoRepo)
)

export const useSetKadzoRepo = () => (
  useKadzoRepoStore(state => state.setKadzoRepo)
)

// type KadzoFiles = { kadzoFiles: Record<string, YamlFile> | undefined }
// type SetKadzoFile = { setKadzoFile: (data: any) => void }

// export const useKadzoFileStore = create(
//   combine<
//     KadzoFiles, SetKadzoFile
//   >(
//     { kadzoFiles: undefined },
//     (set) => ({
//       setKadzoFile: (file) => set(_state => {
//         // const func__ = "useKadzoFileStore"
//         // console.log(func__, "setKadzoFile", { file })
//         return { kadzoFile: file }
//       })
//     }),
//   ),
// )

// export const useKadzoFile = () => (
//   useKadzoFileStore(state => state.kadzoFile)
// )

// export const useSetKadzoFile = () => (
//   useKadzoFileStore(state => state.kadzoFile)
// )
