"use server"
import { findMiChildren } from "@/entities"

export const getMiChildren = async (
  parentMiId: string
) => (
  findMiChildren(parentMiId)
)
