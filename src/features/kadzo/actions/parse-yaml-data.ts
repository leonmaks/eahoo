export const parseYamlData = (
  data: any,
  isRoot: boolean = false
) => {
  const func__ = "parseYamlData"

  for (const [k, v] of Object.entries(data)) {

    if (k === "imports") {
      imports = v as string[]
      continue
    }

    if (isRoot) {
      console.log(func__, "isRoot", { k, v })

      if (k === "domain") {
        const v_ = v as string
        // entityRepo.domains[v_] = {
        //   key: v_,
        //   title: v_,
        // }
      } else {
        // entityRepo.sections[k] = {
        //   key: k,
        //   title: k,
        // }
      }

      continue
    }

    const names = k.split(".")

    if (names.length === 1) {
      console.log(func__, `ROOT '${names[0]}'`, {
        names, path, v
      })

      if (v) parseYamlData(v, true)

      continue

    } else {
      console.log(func__, "?", { k })

      if (Object.keys(entityRepo.sections).includes(names[0])) {

        console.log(func__, "Section", { k })

      }
      // if (v) parseYamlData(v)
    }
  }
}
