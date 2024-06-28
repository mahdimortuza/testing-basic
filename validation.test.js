import { describe, expect, it } from 'vitest'
import { validateArrayNotEmpty, validateEmail } from './validation'


describe("validateEmail()", ()=>{
    it("should validate a correct email address", () => {
        const email = "example@mail.com"
        const resultFn = () => validateEmail(email)
        expect(resultFn).not.toThrow()
    })
    
    it("should should throw  an error if invalid email is passed", () => {
        const email = "example"
        const resultFn = () => validateEmail(email)
        expect(resultFn).toThrow()
    })
    
    it("should should throw  an error if empty string is passed", () => {
        const email = ""
        const resultFn = () => validateEmail(email)
        expect(resultFn).toThrow()
    })
    
    it("should should throw  an error if null is passed", () => {
        const resultFn = () => validateEmail(null).toThrow('not valid email address')
    })
    
    it("should should throw  an error if undefined is passed", () => {
        const resultFn = () => validateEmail(undefined).toThrow('not valid email address')
    })
})


describe("validateArrayNotEmpty()", ()=> {
    it("should validate a non empty array", () => {
        const array = [2,3]
        const resultFn = () => validateArrayNotEmpty(array)
        expect(resultFn).not.toThrow()
    })
    
    it("throws an error for an empty array", () => {
        const array = []
        const resultFn = () => validateArrayNotEmpty(array)
        expect(resultFn).toThrow()
    })
    
    
    it("throws an error for an non array input", () => {
        const array = "Hello"
        const resultFn = () => validateArrayNotEmpty(array)
        expect(resultFn).toThrow()
    })
    
    
    it("throws an error for null input", () => {
        const array = null
        const resultFn = () => validateArrayNotEmpty(array)
        expect(resultFn).toThrow()
    })
    
    
    it("throws an error for undefined input", () => {
        const array = undefined
        const resultFn = () => validateArrayNotEmpty(array)
        expect(resultFn).toThrow()
    })
    
})

