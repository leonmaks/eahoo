"use client"

import { MetaItem, RiVer } from "@prisma/client"

import { useEffect, useState, useTransition } from "react"
import { toast } from "sonner"

import {
  DyfFieldDef,
  DynaForm,
  ScrollablePanel,
  Spinner
} from "@/shared"

import { initRiCardData, submitRiCard } from "../actions"

type RiCardProps = {
  riVerId: string
}

export const RiCard = ({
  riVerId,
}: RiCardProps) => {
  const func__ = "RiCard"
  const [isPending, startTransition] = useTransition()
  const [data, setData] = useState<{
    riVer: RiVer
    mi: MetaItem
    riFields: DyfFieldDef[]
  }>()

  useEffect(() => {
    const init = () => {
      startTransition(async () => {
        try {
          const data = await initRiCardData(riVerId)
          setData(data)

          // await new Promise((resolve) => setTimeout(resolve, 3000))
        } catch (error) {
          toast.error(error.message)
        }
      })
    }
    init()
  }, [riVerId])

  console.log(func__, { data })

  return <>
    {(data && !isPending) ? (
      <ScrollablePanel classNames=" mr-0.5">

        <div className="flex flex-col p-2">

          <DynaForm
            title={data.riVer.name}
            subtitle={data.mi.name}
            fields={data.riFields}
            fieldValues={JSON.stringify({
              name: data.riVer.name,
              description: data.riVer.description,
              id: data.riVer.riId,
              verId: data.riVer.id,
              fd: data.riVer.fd,
              td: data.riVer.td,
            })}
            mode="update"
            formAction={submitRiCard}
          />

          {/* <div
              className="text-xs text-foreground"
            >
              {data.mi.name}
            </div>

            <h1 className="text-2xl">
              {data.riVer.name}
            </h1> */}
        </div>


      </ScrollablePanel>
    ) : (
      <Spinner />
    )}
  </>
}
