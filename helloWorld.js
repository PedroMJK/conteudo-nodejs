class HelloWorld {
    constructor(welcome){
        this.welcome = welcome;
    }

    Greeting() {
        return `${this.welcome} com NodeJS`
    }
}

module.exports = HelloWorld;