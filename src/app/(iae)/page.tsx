import { getAppSession } from "@/features/auth"

export default async function IaePage() {

  const session = await getAppSession()

  return (
    <main>
      <h1 className="text-3xl font-bold">Wellcome to IAE Page!</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </main>
  )
}
