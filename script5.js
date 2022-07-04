// promiseAll
console.log('=========================')
const promise1 = Promise.resolve("Hi Everyone")
const promise2 = 35
const promise3 = "Nino"
const promise4 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'GoodBye')
);

// const promise5 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

Promise.all([promise1, promise2, promise3]).then(values => console.log(values))