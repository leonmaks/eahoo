import { headers } from "next/headers"

import { HEADERS_PATHNAME } from "./defs"

export const getUrlPathname = async () => (
  // How to get the current pathname in the app directory of Next.js?
  // https://stackoverflow.com/a/74588571/1017684
  (await headers()).get(HEADERS_PATHNAME)
)
