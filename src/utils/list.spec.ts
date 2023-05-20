import { expect, describe, suite, it } from 'vitest'
import { chunks } from './list'

suite('List utils', () => {
  describe('chunks', () => {
    it('it splits the list into chunks of at most n items', () => {
      const list = [1, 2, 3, 4, 5]
      const expected = [[1, 2], [3, 4], [5]]

      expect(chunks(2, list)).toEqual(expected)
    })
  })
})
