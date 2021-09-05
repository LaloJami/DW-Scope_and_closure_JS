const helloWorld = ()=>{
    const hello = "Hello World";
    console.log(hello);
}
helloWorld();
//al ejecutar el console con la variable hello saldra un error pues hello es una variable local, no global.
console.log(hello);

var scope = "I am global";
const functionScope = () => {
    var scope = "I am just a local";
    const func = () =>{
        return scope;
    }
    console.log(func());
}
functionScope();