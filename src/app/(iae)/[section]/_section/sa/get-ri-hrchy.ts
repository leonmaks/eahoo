"use server"

import { getRiHrchyByDomain } from "@/entities/"

export const getRiHrchy = async (domain: string) => (
  await getRiHrchyByDomain(domain)
)
