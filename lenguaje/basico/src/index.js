const array = [1, 2, 3, 4, 5];

console.log(`%c1. Array Operations`, 'color: grey; font-weight: bold; font-size: larger;')
// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada, extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = ([firstElement, ...rest]) => firstElement;

// Test
console.log('%cHead:', 'color: green; font-weight: bold;', head(array));

// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada, devuelva todos menos el primer elemento. Utiliza rest operator.

const tail = ([, ...rest]) => rest;

// Test
console.log('%cTail:', 'color: green; font-weight: bold;', tail(array));

// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada, devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (array) => array.slice(0, array.length - 1);

// Test
console.log('%cInit:', 'color: green; font-weight: bold;', init(array));

// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada, devuelva el último elemento.

const last = (array) => array[array.length - 1];

// Test
console.log('%cLast:', 'color: green; font-weight: bold;', last(array));

console.log(`%c2. Concat`, 'color: grey; font-weight: bold; font-size: larger;')

// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const concatTwoArrays = (a, b) => [...a, ...b];

// Test
console.log('%cConcatenated Two Arrays:', 'color: blue; font-weight: bold;', concatTwoArrays(array1, array2));

// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

const concatMultipleArrays = (...arrays) => [].concat(...arrays);

// Test
console.log('%cConcatenated Multiple Arrays:', 'color: blue; font-weight: bold;', concatMultipleArrays(array1, array2, array3));

console.log(`%c3.Clone Merge`, 'color: grey; font-weight: bold; font-size: larger;')
// Implementa una función clone que, a partir de un objeto de entrada source, devuelva un nuevo objeto con las propiedades de source.

function clone(source) {
    return { ...source };
}

// Test
console.log('%cCloned Object:', 'color: purple; font-weight: bold;', clone({ a: 1, b: 2, c: 3 }));

// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

function merge(source, target) {
    const mergedObject = clone(target);

    for (const prop in source) {
        if (source.hasOwnProperty(prop)) {
            mergedObject[prop] = source[prop];
        }
    }

    return mergedObject;
}

// Test
const objA = { name: "Maria", surname: "Ibañez", country: "SPA" };
const objB = { name: "Luisa", age: 31, married: true };
const mergedResult = merge(objA, objB);
console.log('%cMerged Result:', 'color: purple; font-weight: bold;', mergedResult);
