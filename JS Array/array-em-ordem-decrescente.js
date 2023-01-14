/*Escreva uma função que recebe um array de números como argumento. Deve retornar um array com os números ordenados em ordem decrescente.*/

function myFunction( arr ) {

  return arr.sort((a, b) => b - a);
  
}

myFunction([1,3,2])
/*Esperado
[3,2,1]*/
myFunction([4,2,3,1])
/*Esperado
[4,3,2,1]*/