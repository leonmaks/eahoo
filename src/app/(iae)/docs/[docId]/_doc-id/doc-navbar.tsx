import { DocName } from "./doc-name"
import { DocMenubar } from "./doc-menubar"

export const DocNavbar = () => {

  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <div className="flex flex-col">
          <DocName />
          <DocMenubar />
        </div>
      </div>
    </nav>
  )
}
