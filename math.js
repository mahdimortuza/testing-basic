export function add(numbers) {
    let sum = 0;
    for (const number of numbers) { // Corrected the syntax here
        sum += +number;
    }
    return sum;
}

const returnStrLength = str => str.length