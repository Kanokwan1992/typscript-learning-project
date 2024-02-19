"use strict";
function greet(name) {
    return ('Hello ' + name);
}
const johnGreet = greet('John');
function greetToUpperCase(name) {
    return ('Hello ' + name.toUpperCase());
}
function consoleGreetJohn(name = 'John') {
    console.log('Hello ' + name.toUpperCase());
}
consoleGreetJohn();
consoleGreetJohn('Bil');
const greetToConsole = (name) => {
    console.log('Hello ' + name);
};
function greetMultiple(...names) {
    names.forEach(name => {
        greetToConsole(name);
    });
}
greetMultiple('John');
greetMultiple('John', 'Mary');
