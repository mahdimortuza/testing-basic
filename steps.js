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


4. ---------- concurrent test -> a concept which runs tests paralally not one after another

* it.concurrent


5. ---------- test double, mock and spice

* test double -> when we make an object like the original object and use the replica instead 
the original for testing purpose  

* mock is a test double object replaces the real object or function in a predictable way

* spies is a test double object that records information about how a function is called

 * /