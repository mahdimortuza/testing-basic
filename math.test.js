import { expect, it } from 'vitest'
import { add } from './math'

// ------------------------------ video 1-3 ---------------------------------------- //

// test case - 1
it('should return the correct sum if an array of number is provided', () =>{

    // arrange
    const numbers = [1,2,3]
    const expectedResult = numbers.reduce((acc, cur) => acc + cur)

    // actions
    const result = add(numbers)

    // assertion
    expect(result).toBe(expectedResult)
}) 


// test case - 2
it('should provide NaN if at least one invalid number is provided', () =>{

    // arrange
    const numbers = [1,'invalid',3] 

    // actions
    const result = add(numbers)

    // assertion
    expect(result).toBeNaN()
}) 



// test case - 3
it('should provide correct sum if an array numeric string is provided', () =>{

    // arrange
    const numbers = ['1','3','3']
    const expectedResult = numbers.reduce((acc, cur) => +acc + +cur)

    // actions
    const result = add(numbers)

    // assertion
    expect(result).toBe(expectedResult)
}) 



// ------------------------------ video 4  half ----------------------------------------

// test case - 4  (throwing error)
it('should throw an error if no argument is passed', () =>{

    try {
        const result = add()
    
    } catch (error) {
    expect(error).toBeDefined()
    }

}) 




// better way
it('should throw an error if no argument is passed', () =>{
    const resultFn = () => {
        add()
    }
     expect(resultFn).toThrow()
}) 


// multiple arguments
it('should throw an error if multiple arguments are provided', () => {
    const resultFn = () => {
        add(1,2,3)
    }
expect(resultFn).toThrow(/is not iterable/i)
})

