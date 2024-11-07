"use server"
import { E_CiTypeId } from "@/entities/ci-type/types"
import ciTypeRepo from "@/entities/ci-type/ci-type-repo"

export const getCiTypeById = async (
  ciTypeId: E_CiTypeId
) => (
  await ciTypeRepo.getById(ciTypeId)
)
