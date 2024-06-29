// Organizing tests
/**
1. ----------AAA pattern (better way to write test)
 * a === arrange
 * a === actions
 * a=== assertion (expected result)
 
 
2. ----------to make tests maintainable we use test suit for dividing tests of many functions using 
describe("functionName", ()=>{})


3. ---------- to handle asynchronous tasks we use 2 ways
* callback 
* promise(modern way)


4. ---------- vitest has 4 hooks to use in testing purpose
* beforeAll -> runs before all the tests start running
* afterAll -> runs after all the tests start running
* beforeEach -> runs before every test starts running
* afterEach -> runs after every test starts running

 * /