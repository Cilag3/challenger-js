/*Escreva uma função que receba um array de strings como argumento. Classifique os elementos da matriz em ordem alfabética. Retorne o resultado.*/


function myFunction( arr ) {

  return arr.sort();

}

myFunction(['b', 'c', 'd', 'a'])
/*Esperado
['a', 'b', 'c', 'd']*/
myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'])
/*Esperado
['a', 'a', 'c', 'd', 'w', 'y', 'z']*/

