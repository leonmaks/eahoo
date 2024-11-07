export const doDelay = async (delay: number) => {
  await new Promise(resolve => setTimeout(resolve, delay * 1000))
}
export default doDelay
