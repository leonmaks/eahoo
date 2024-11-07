import { useParams } from "next/navigation"

export const useWspId = () => {
  const params = useParams()
  return params.id as string
}
