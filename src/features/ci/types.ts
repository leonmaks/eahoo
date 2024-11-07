import { E_CiTypeId } from "../../entities/ci-type/types"

export type T_CiAttrVal = string | number | boolean | []

export type T_CiAttrs = Record<string, T_CiAttrVal>

export type T_Ci = {
  id?: string
  verId?: string
  typeId: E_CiTypeId
  fd?: Date
  td?: Date
  attrs?: T_CiAttrs
}
