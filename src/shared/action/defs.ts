export type ActionMessage = {
  message: string
  type: "success" | "error" | "warning"
}

export type ActionStatus<D> = {
  data?: D
  messages?: ActionMessage[]
  status: "success" | "error"
}
