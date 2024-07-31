// Para importar
const HelloWorld = require("./helloWorld");
const Person = require("./person");

const helloWorld = new HelloWorld("Hello World!");

const person = new Person("Pedro");

console.log(helloWorld.Greeting())
console.log(person.Introduction());