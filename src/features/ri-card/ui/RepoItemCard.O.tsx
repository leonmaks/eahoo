// import { useTranslations } from "next-intl"

import { getRiTypeById } from "@/entities/RiType"

import { RepoItem_T } from "../types"
import { getRiFields } from "../sa/get-ri-fields"
import { riFormAction } from "../sa/riFormAction"

import { DynaForm } from "@/shared/ui/form/dyna-form/dyna-form"
// import { RepoItemFooter } from "./RepoItemFooter"

export const RepoItemCard = async ({ ri }: { ri: RepoItem_T }) => {
  const func__ = "RepoItemCard"
  // const t = useTranslations(func__)

  const { typeId } = ri

  const riType = await getRiTypeById(typeId)
  const riFields = await getRiFields(typeId)

  const mode = (ri && ri.id && ri.verId) ? "update" : "create"

  // if (!riType || !riAttrs || pending) return <Spinner />

  // const fields = await getRiFields(typeId)

  // const fields: DynaFormFieldDef[] = [
  //   // { name: "typeId", zType: z.number(), editable: false },

  //   ...riAttrs.map(attr => (
  //     { name: attr.name, zType: z.string(), editable: true }
  //   )),

  //   { name: "name", zType: z.string().trim().min(3), editable: true },
  //   { name: "description", zType: z.string().optional(), editable: true },

  // ]

  // console.log(`${func__}-02`, { ri, mode })

  const fieldValues = JSON.stringify(ri)
  console.log(func__, { fieldValues })

  return <div className="p-2">
    {/* <div className="flex justify-between">
      <div className="mb-3 text-2xl">{riType?.name || "Undefined"}</div>
    </div> */}

    <DynaForm
      title={riType?.name || "Undefined"}
      fields={riFields}
      fieldValues={fieldValues}
      mode={mode}
      formAction={riFormAction}
    />

    {/* <div className="p-2 mt-8">
      <RepoItemFooter ri={ri} />
    </div> */}
  </div>
}
