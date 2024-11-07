"use server"

import { revalidatePath } from "next/cache"
import { MetaItem, RiVer } from "@prisma/client"

import {
  MI_ID_CORE_ATTRS,
  getRiVerById,
  getMiById,
  getMiAttrsById,
  updateRiVer,
} from "@/entities"

import { DyfAction, DyfFieldDef, DyfOrdLast, DyfState, dyfZSchema } from "@/shared"

export const getRiCardFields = async (
  miId: string
): Promise<DyfFieldDef[]> => {
  // const func__ = "getRiCardFields"

  const coreAttrs = await getMiAttrsById(MI_ID_CORE_ATTRS)

  // console.log(func__, { coreAttrs })

  const riAttrs = miId ? await getMiAttrsById(miId) : []

  // console.log(func__, { riAttrs, miId })

  return [...coreAttrs, ...riAttrs]

    .map(({
      id,
      miAttrTypeId: fieldTypeId,
      name,
      isUK,
      isNotNull,
      isEditable,
      isProp,
      ord,
    }) => ({
      id,
      fieldTypeId,
      name,
      isUK,
      isNotNull,
      isEditable,
      isProp,
      ord: ord || DyfOrdLast,
    }))

    .sort(({ ord: ord1 }, { ord: ord2 }) => {
      if (ord1 > ord2) return 1
      if (ord1 < ord2) return -1
      return 0
    })
}

export const initRiCardData = async (riVerId: string): Promise<{
  riVer: RiVer,
  mi: MetaItem,
  riFields: DyfFieldDef[],
}> => {
  // const func__ = "prepare"

  // console.log(func__, { riVerId })

  const riVer = await getRiVerById(riVerId)
  if (!riVer) {
    throw new Error("Internal Error")
  }
  // console.log(func__, { riVer })

  const mi = await getMiById(riVer.miId)
  if (!mi) {
    throw new Error("Internal Error")
  }
  // console.log(func__, { mi })

  const riFields = await getRiCardFields(mi.id)
  if (!riFields) {
    throw new Error("Internal Error")
  }

  return { riVer, mi, riFields }
}

export const submitRiCard: DyfAction = async (
  { defaultValues, pathname }: DyfState,
  formData: FormData
) => {
  const func__ = "submitRiCard"

  console.log(func__, "001", { defaultValues, formData, pathname })

  if (!defaultValues) {
    return {
      message: "State is undefined"
    }
  }

  const state: DyfState = {
    defaultValues,
  }
  state.values = {}

  for (const [k, v] of Object.entries(defaultValues)) {

    // console.log(func__, "002", { k, v })

    state.values[k] = formData.get(k) || v
  }

  // console.log(func__, { values: state.values })

  const riCardFieds = await getRiCardFields(state.values.typeId)

  // console.log(func__, { riCardFieds })

  const schema = dyfZSchema(riCardFieds)

  const parse = schema.safeParse(state.values)

  // console.log(func__, { parse })

  if (!parse.success) {
    state.errors = parse.error.flatten().fieldErrors
    // console.log(func__, { errors: state.errors })
    return state
  }

  console.log(func__, { state })


  if (!state.values.verId) {
    // TODO: Create
    // const ri = await newRepoItem()
    // const riVer = await newRiVer(
    //   ri.id,
    //   state.values.typeId,
    //   state.values.name,
    //   state.values.description
    // )

    // state.values.id = ri.id
    // state.values.verId = riVer.id

    // console.log(func__, "Ok", { state })

  } else {

    const updatedRiVer = await updateRiVer({
      id: state.values.verId,
      name: state.values.name,
      description: state.values.description,
      fd: state.values.fd,
      td: state.values.td,
    })

    // console.log(func__, { updatedRiVer, pathname })

    // if (pathname) {
    //   console.log(func__, { pathname })
    //   revalidatePath("/")
    // }
  }

  return state
}
