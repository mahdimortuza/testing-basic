import CryptoJS from 'crypto-js';
import { beforeAll, expect, it } from 'vitest';
import { encryptMessage, encryptMessagePromise } from './async';


beforeAll(() => {
    console.log('beforeAll')
})

it('should encrypt a message', async () => {
    const message = 'eat that frog';
    const secretKey = '123456';

    const encryptedData = await new Promise((resolve) => {
        encryptMessage(message, secretKey, (encryptedMessage) => {
            resolve(encryptedMessage);
        });
    });
    expect(encryptedData).toBeDefined();
});

it('should pass also', async () => {
    const message = 'eat that frog';
    const secretKey = '123456';

    const encryptedData = await encryptMessagePromise(message, secretKey);
    expect(encryptedData).toBeDefined();
});

it('should encrypt the message correctly', async () => {
    const message = 'hello world';
    const secretKey = '123456';

    const encryptedData = await encryptMessagePromise(message, secretKey);
    expect(encryptedData).toBeDefined();

    const decryptedMessage = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8);
    expect(decryptedMessage).toBe(message);
});
