# Curso de Closure y Scope
Para iniciar este curso se debe iniciar configurando como en todo proyecto.
* Tu git
> git init
* Iniciar npm
> npm init

## Scope
El Scope es el alcance que tiene tu variable dentro del código. El Scope es el que se encarga de decidir a que bloques de código va a acceder una variable.

### Scope global
No están dentro de funciones o bloques, por lo tanto se puede acceder a ellas de manera global.
* **var**: podemos re-asignar una variable pero es una mala práctica.
* **let** y **const**: no podemos re-asignar, aparecerá un error.
* Es una mala práctica crear una variable sin las palabras reservadas: var, let y const.
Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global.
* La doble asignación de una variable también es una mala práctica.
### Scope Local
Nos permite acceder a una variable en un bloque de código o en una función y solamente en esta estructura.

**Lexical Scope / Ámbito Léxico**: El intérprete de JavaScript funciona desde el ámbito de ejecución actual y funciona hasta encontrar la variable en cuestión. Si la variable no se encuentra en ningún ámbito, se genera una excepción.

Este tipo de búsqueda se llama ámbito léxico. El alcance de una variable se define por su ubicación dentro del código fuente, y las funciones anidadas tienen acceso a las variables declaradas en su alcance externo. No importa de dónde se llame una función, o incluso cómo se llama, su alcance léxico depende solo de dónde se declaró la función.

## var, let, const
Las variables escritas con la palabra clave ``var`` pueden ser redeclaradas, pero esto a futuro puede darnos problemas, así que es mejor no usarla.

Las variables escritas con la palabra clave ``let`` no pueden ser redeclaradas, si lo haces mostrara un *error: esta variable ya ha sido declarada* , pero su valor puede ser reasignado:
```js
let fruit = "apple";
fruit = "banana";

console.log(fruit); // banana
```

Las variables escritas con la palabra clave ``const`` no pueden ser redeclaradas o reasignadas, ya que ``const`` quiere decir que su valor será constante, es decir que no va a cambiar.
> Nota: si te gusta ver videos te recomiendo los siguientes: [video1](https://www.youtube.com/watch?v=bvkY9ey83yY) y [video2](https://www.youtube.com/watch?v=ojrvxYcKeYg) que te explica las diferencias y cuando ocupar *var*, *let* y *const*
## Closure

Es la combinacion de una funcion y el ambito lexico en la cual ha sido delarada dicha funcion. i.e, el closure recuerda el ambito en el que ha sido creado.

Los closures tienen las siguientes caracteristicas:
* Es una funcion anidada, (una funcion adentro de otra)
* la funcion anidada debe referirse a un valor definido en la funcion padre
* la funcion padre debe retornar la funcion anidada

### ¿pero como funcionan?
para entenderlo leamos el siguiente ejemplo.
```JavaScript
const papa = (nuevoEngendro) =>{
    var cantidadDeHijos = 0;
    const crearEngendro = (nuevoEngendro) =>{
        cantidadDeHijos += nuevoEngendro;
        console.log(`cantidad de engendritos = ${cantidadDeHijos}`)
    }
    return crearEngendro;
}

let traigamosHijosAlMundo = papa();
traigamosHijosAlMundo(1)  // cantidad de engendritos = 1
traigamosHijosAlMundo(1)  // cantidad de engendritos = 2
traigamosHijosAlMundo(1)  // cantidad de engendritos = 3
```

Si estudiamos la función ``papa`` esta tiene la declaración de la variable ``cantidaDeHijos`` y la declaración de la función ``crearEngendro`` y al final retorna la función ``crearEngendro``,

Ahora después de la declaración de la función papa viene la línea
```js
let traigamosHijosAlMundo = papa();
```
Notese el PARENTESIS ``()`` de la función ``papa``
```js
let traigamosHijosAlMundo = papa(); // <-- este paréntesis indica que la función se está ejecutando
```
este paréntesis indica que la función se está ejecutando, es decir cada línea de esa función se ejecuta una a una, y si recorremos línea a línea a la función tenemos
la declaración de ``cantidadDeHijos`` que vale ``0``
la declaración de la función ``crearEngendro`` y el retorno de esta función,

así que finalmente ``traigamosHijosAlMundo`` vale lo que haya retornado la función ``papa`` que es ``crearEngendro`` (nótese que no se ejecuta la función ``crearEngendro`` sino que simplemente se retorna la referencia a ella)

por ende cada vez que ejecutamos
```js
traigamosHijosAlMundo(1)
```
realmente estamos es llamando a la función ``crearEngendro`` con todo su ámbito que es la variable ``cantidadDeHijos`` con valor de 0, y a este le suma lo que se le pase por parámetro,

En la segunda ejecución de
```ls
traigamosHijosAlMundo(1)
```
no se está volviendo a correr todas las líneas de la función ``papa``, esto ya se hizo en la asignación ( ```let traigamosHijosAlMundo = papa(); ```), sino que realmente se está volviendo a llamar a ``crearEngendro()`` la cual había modificado su variable ``cantidadDeHijos`` en la primera llamada

asi que pienso que la clave es entender que en esta asignación
```js
let traigamosHijosAlMundo = papa();
```
se ejecutó la función papá donde se declararó la variable de dicha función (``cantidadDeHijos``) y la función que retorna (``crearEngendro``) UNA SOLA VEZ! lo que se ejecuta multiples veces es el la función ``crearEngendro``

Si con este ejemplo aún no entendiste bien como funciona el closure en JS te recomiendo que leas este [articulo](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8) te explica en detalle paso a paso la ejecucion del closure.

