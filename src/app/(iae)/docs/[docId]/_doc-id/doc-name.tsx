import { BsCloudCheck } from "react-icons/bs"


export const DocName = () => {

  return (
    <div className="flex items-center gap-2">
      <span className="text-lg px-1.5 cursor-pointer truncate">Untitled Document</span>
      <BsCloudCheck />
    </div>
  )
}
