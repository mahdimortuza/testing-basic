import { expect, it } from 'vitest'
import { stringLength } from './stringLength'

it('should returns correct length for non empty string ', ()=>{
    expect(stringLength('hello')).toBe(5)
    expect(stringLength('world')).toBe(5)
    expect(stringLength('hello world')).toBe(11)
})


it('returns 0 for empty string', () => {
    expect(stringLength('')).toBe(0)
})


it('throws error for non string input', ()=>{
    expect(() => stringLength(undefined)).toThrow()
    expect(() => stringLength(null)).toThrow()
    expect(stringLength(123)).toBeUndefined()
})