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

Lexical Scope / Ámbito Léxico: El intérprete de JavaScript funciona desde el ámbito de ejecución actual y funciona hasta encontrar la variable en cuestión. Si la variable no se encuentra en ningún ámbito, se genera una excepción.

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