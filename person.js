class Person {
    constructor(name) {
        this.name = name;
    }

    Introduction() {
        return `My name is ${this.name}!`;
    }
}

// Para exportar para o arquivo index.js
module.exports = Person;