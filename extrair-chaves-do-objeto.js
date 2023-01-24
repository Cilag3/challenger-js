/*Escreva uma função que receba um objeto (a) como argumento. Retorna uma matriz com todas as chaves de objeto.*/

function myFunction(a) {
  return Object.keys(a)
}

myFunction({ a: 1, b: 2, c: 3 })
/*Esperado
['a','b','c']*/
myFunction({ j: 9, i: 2, x: 3, z: 4 })
/*Esperado
['j','i','x','z']*/
myFunction({ w: 15, x: 22, y: 13 })
/*Esperado
['w','x','y']*/
