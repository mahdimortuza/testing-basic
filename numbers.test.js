import { expect, it } from "vitest"
import { cleanNumbers } from "./numbers"

it('returns an array of numbers if an array of string number is provided', () => {
    const stringNumbers = ['1', '2']

    const result = cleanNumbers(stringNumbers)

    expect(result[0]).toBeTypeOf('number')
})

it('should throw error if at least one empty string is provided', () => {
    const stringNumbers = ['', '2']

    const resultFn = () => cleanNumbers(stringNumbers)
    expect(resultFn).toThrow()
})