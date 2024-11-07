import { cache } from "react"

import { db } from "@/entities"

import { T_Ci } from "./types"

class CiRepo {

  getCiAttrs = cache((
    ciTypeId: T_Ci["typeId"]
  ) => (
    db.ciAttr.findMany({
      where: { ciTypeId }
    })
  ))

  getCiListByType = cache((
    ciTypeId: T_Ci["typeId"]
  ) => {
    const ciList = db.ci.findMany({
      // include: {
      //   CiVers: true
      // }
    })

    return ciList
  })
}

export const ciRepo = new CiRepo()
export default ciRepo
