import { cache } from "react"

import { db } from "@/entities"

import { T_Ci } from "../ci/types"

class CiAttr {

  getCiAttrs = cache((
    ciTypeId: T_Ci["typeId"]
  ) => (
    db.ciAttr.findMany({
      where: { ciTypeId }
    })
  ))
}

export const ciAttr = new CiAttr()
export default ciAttr
