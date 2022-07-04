// Asynchronous Function

// Both sync and async work from top to bottom. But Async function behave according to function or condition.

let a = 61
let b = 32

console.log("value1 = " + a)
console.log("value2 = " + b)

console.log("Total = " + (a + b))

setTimeout(() => console.log("currentTotal = " + (a + b)), 2000)
a = 97
a = 14
console.log("currentValue1 = " + a)
console.log("currentValue2 = " + b)



