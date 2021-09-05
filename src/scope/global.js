var hello = "Hello";
var hello = "Hello +"; //Mala practica, esta volviendo a asignar el valor de hello
let world = "Hello world";
let world = "Hello";
const helloworld = "Hello World!";

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloworld);
}

anotherFunction();
//Es una mala práctica crear una variable sin las palabras reservadas: var, let y const. Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global.
const helloWorld = () =>{
    globalVar = "Soy una variable Global";
}
helloWorld();
console.log(globalVar)
// La doble asignación de una variable también es una mala práctica.
const anotherFunction = () =>{
    var localvar = globalVar = "Im Global";
}
anotherFunction();
console.log(globalVar);
