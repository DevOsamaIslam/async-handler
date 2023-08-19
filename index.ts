export async function asyncHandler<T = any, E = Error>(
  fn: (() => Promise<T>) | Promise<T>
): Promise<[T | undefined, E | undefined]> {
  try {
    const result = typeof fn === "function" ? await fn() : await fn
    return [result as T, undefined]
  } catch (error) {
    return [undefined, error as E]
  }
}
