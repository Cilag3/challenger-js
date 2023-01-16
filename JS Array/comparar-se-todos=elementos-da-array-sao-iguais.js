/*Escreva uma função que receba um array como argumento. Deve retornar verdadeiro se todos os elementos da matriz forem iguais. Caso contrário, deve retornar falso.*/


function myFunction (arr) {

return arr.every((a => a == arr[0]);

}


myFunction([true, true, true, true])
/*Esperado
true */
myFunction(['test', 'test', 'test'])
/*Esperado
true*/ 
myFunction([1,1,1,2])
/*Esperado
false*/
myFunction(['10',10,10,10])
/*Esperado
false*/