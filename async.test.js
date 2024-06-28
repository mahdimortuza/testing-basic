import { expect } from "vitest"
import { encryptMessage, encryptMessagePromise } from "./async"

if('should encrypt a message', async () => {
    const message = "vat kha man"
    const secretKey= '123456'

    const encryptedData = await new Promise((resolve, reject) => {
        encryptMessage(message, secretKey, (message) => {
            resolve(message)
        })
    })
    expect(encryptedData).toBeDefined()
})

it("should pass also", async() => {
    const message ="vat kha man"
    const secretKey= '123456'

   const encryptedData = await encryptMessagePromise(message, secretKey)
   expect(encryptedData).toBeDefined()
})