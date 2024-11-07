import { atom, useAtom } from "jotai"

export const modalOpen = atom(false)
export const modalContent = atom<any>(null)

export const useRiCardModal = () => {
  return {
    modalOpen: useAtom(modalOpen),
    modalContent: useAtom(modalContent),
  }
}
