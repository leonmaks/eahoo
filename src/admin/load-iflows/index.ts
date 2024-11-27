import { db } from "@/entities"

import { findWspsByMember } from "@/entities"

const main = async () => {
  const func__ = "main"

  const wsps = await findWspsByMember("cm32s2l7t0000ehn27th5nice")

  console.log(func__, { wsps })
  // ... you will write your Prisma Client queries here
}

main().then(async () => {
  await db.$disconnect()
}).catch(async (e) => {
  console.error(e)
  await db.$disconnect()
  process.exit(1)
})
