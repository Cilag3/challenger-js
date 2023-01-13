/*Escreva uma função que recebe um array de números como argumento. Retorna o número de valores negativos na matriz.*/

function myFunction(a) {
  return a.filter(elemento => elemento < 0).length;
}

myFunction([1,-2,2,-4])
/*Esperado
2*/
myFunction([0,9,1])
/*Esperado
0*/
myFunction([4,-3,2,1,0])
/*Esperado
1*/