// EXERCICIO 1
const arrayNumber = [1, 2, 3, 4, 5];

console.log(`o valor do elemento x da minha lista é ${arrayNumber[0]}`);

// EXERCICIO 2

var frutas = [];
frutas.push("banana", "maça", "pêssego");

console.log(frutas.length); // 3

frutas[5] = "manga";
console.log(frutas[5]); // 'manga'
console.log(Object.keys(frutas)); // ['0', '1', '2', '5']
console.log(frutas.length); // 6

// EXERCICIO 3
var frutas = [];
frutas.push("banana", "maça", "pêssego");

frutas.forEach(function (item, indice, array) {
    console.log(item, indice)
})

// EXERCICIO 4
var numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(item, indice, array) {
    if (indice < array.length - 1) {
        console.log(item + array[indice + 1]);
    }
});