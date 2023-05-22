import { suite, describe, it, expect } from 'vitest'
import parseNumber from './number'

suite('Number utils', () => {
  describe('parseNumber', () => {
    it('fails with empty input', () => {
      expect(parseNumber('').ok).toBeFalsy()
    })

    it('fails when input has non digit chars', () => {
      expect(parseNumber('123s').ok).toBeFalsy()
    })

    it('passes when input is valid', () => {
      expect(parseNumber('123')).toEqual({ ok: true, value: 123 })
    })
  })
})
