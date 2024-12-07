// import { SidebarSectionHeader } from "@/shared"

import {
  findWspsByMember,
} from "@/entities"

import { sessionGuard } from "@/features/auth"

import { WspSelector } from "./wsp-selector.cli"
import { WspModalButton } from "./wsp-modal-button"

type WspSwitcherProps = {
}

export const WspSwitcher = async ({
}: WspSwitcherProps) => {
  // const func__ = "WspSwitcher"

  const session = await sessionGuard()

  // const wsps = await findWsps(session.user.id)

  const wspsByMember = await findWspsByMember(session.user.id)

  // TODO: +Order by createdAt desc

  // console.log(func__, { wspsByMember })

  const onSelect = (id: string) => {

  }

  return (
    <div className="flex flex-col gap-y-2">
      {/* <SidebarSectionHeader
        title={"Workspaces"}
        actionButton={WspModalButton}
      /> */}
      {/* <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">Workspaces</p>
        <WspModalButton />
      </div> */}
      <WspSelector wspsByMember={wspsByMember} />
    </div>
  )
}
