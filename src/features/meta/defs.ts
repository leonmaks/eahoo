// export type AttrValDef = string | number | boolean | []

// export type Attrs_T = Record<string, AttrVal_T>

export type RepoItemDef = {
  id?: string
  verId?: string
  typeId: string
  name?: string
  description?: string
  fd?: Date
  td?: Date
  // attrs?: Attrs_T
}
