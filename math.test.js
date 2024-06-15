import { expect, it } from 'vitest'
import { add } from './math'

it('should return the correct sum if an array of number is provided', () =>{

    // arrange
    const numbers = [1,2,3]
    const expectedResult = numbers.reduce((acc, cur) => acc + cur)

    // actions
    const result = add(numbers)

    // assertion
    expect(result).toBe(expectedResult)
}) 

// AAA pattern (better way to write test)
// a === arrange
// a === actions
// a === assertion