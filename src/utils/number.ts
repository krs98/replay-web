type ParseNumberResult = { ok: false } | { ok: true; value: number }

export default function parseNumber(input: string): ParseNumberResult {
  const trimmed = input.trim()
  if (trimmed === '') {
    return { ok: false }
  }

  const number = Number(trimmed)
  return Number.isNaN(number) ? { ok: false } : { ok: true, value: number }
}
