function greet(name, callback) {
    console.log("Hi " + name)
    if (name === "Satheesh") {
        setTimeout(callback(name), 3000)
    }
}

module.exports = { greet }
