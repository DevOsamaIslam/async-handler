export async function asyncHandler<T = any, E = Error>(
  fn
): Promise<[T | undefined, E | undefined]> {
  try {
    const result = await fn
    return [result as T, undefined]
  } catch (error) {
    return [undefined, error as E]
  }
}
