"use server"

import { findProjectsByWsp as findProjectsByWsp__ } from "@/entities"

export const findProjectsByWsp = async (
  wspId: string
) => (
  findProjectsByWsp__(wspId)
)
