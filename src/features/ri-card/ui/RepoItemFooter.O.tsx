import { RepoItem_T } from "../types"

export const RepoItemFooter = ({ ri }: { ri: RepoItem_T }) => {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <div className="bg-gray-50">id: {ri.id || "Null"}</div>
      <div className="bg-gray-50">verId: {ri.verId || "Null"}</div>
      <div className="bg-gray-50">Fd: {ri.fd ? ri.fd.toLocaleString() : "Null"}</div>
      <div className="bg-gray-50">Td: {ri.td ? ri.td.toLocaleString() : "Null"}</div>
    </div>
  )
}
