const { greet } = require('./file1')

function callme(name) {
    console.log("Welcome to callback " + name)
}

greet("satheesh", callme)