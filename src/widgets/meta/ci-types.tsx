import { db } from "@/entities"

export const CiTypes = async () => {
  const ciTypes = await db.ciType.findMany()

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      {ciTypes.map(ciType => (
        <li key={ciType.id}>
          {ciType.name}
        </li>
      ))}
    </main>
  )
}
