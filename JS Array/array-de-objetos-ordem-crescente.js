/*Escreva uma função que recebe um array de objetos como argumento. Classifique a matriz pela propriedade b em ordem crescente. Retorne o array ordenado*/

function myFunction(arr) {
  arr.sort((a, b) => a.b > b.b)
  return arr
}

myFunction([
  { a: 1, b: 2 },
  { a: 5, b: 4 }
])
/*Esperado[({ a: 1, b: 2 }, { a: 5, b: 4 })]*/
myFunction([
  { a: 2, b: 10 },
  { a: 5, b: 4 }
])
/*Esperado[({ a: 5, b: 4 }, { a: 2, b: 10 })]*/
myFunction([
  { a: 1, b: 7 },
  { a: 2, b: 1 }
])
/*Esperado[({ a: 2, b: 1 }, { a: 1, b: 7 })]*/
