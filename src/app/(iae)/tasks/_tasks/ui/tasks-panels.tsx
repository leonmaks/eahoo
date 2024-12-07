import { ReactNode } from "react"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from "@/shared/shadcn-ui/resizable"

import { ScrollablePanel } from "@/shared/ui"
import { TasksSidebar } from "./tasks-sidebar"

type TasksPanelsProps = {
  children: ReactNode,
  wspId?: string,
  projectId?: string,
}

export const TasksPanels = async ({
  children,
  wspId,
  projectId,
}: TasksPanelsProps) => {

  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        autoSaveId="tasks-panels"
      >

        <ResizablePanel
          order={1}
          id="leftPanel"
          defaultSize={20}
          minSize={5}
          collapsible
          collapsedSize={0}
          className=""
        >
          <TasksSidebar
            wspId={wspId}
            projectId={projectId}
          />
        </ResizablePanel>

        <ResizableHandle
          className="w-0.5 hover:bg-sky-400"
          withHandle
        />

        <ResizablePanel
          id="mainPanel"
          defaultSize={50}
          order={2}
        >
          {children}
        </ResizablePanel>

        <ResizableHandle
          className="w-0.5 hover:bg-sky-400"
          withHandle
        />

        <ResizablePanel
          order={3}
          id="rightPanel"
          defaultSize={35}
          minSize={5}
          collapsible
          collapsedSize={0}
        >
          <ScrollablePanel classNames=" mr-0.5">
            <div>
              RightPanel!
            </div>
          </ScrollablePanel>
        </ResizablePanel>

      </ResizablePanelGroup>
    </>
  )
}
