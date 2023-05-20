export function chunks<T>(n: number, list: T[]): T[][] {
  const chunks = []
  for (let i = 0; i < list.length; i += n) {
    const chunk = list.slice(i, i + n)
    chunks.push(chunk)
  }

  return chunks
}
