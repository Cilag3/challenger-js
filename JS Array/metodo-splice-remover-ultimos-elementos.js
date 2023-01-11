/*Escreva uma função que receba um array (a) como argumento. Extraia os últimos 3 elementos de 'a'. Retorne a matriz resultante*/

function myFunction (a) {

return a.splice(a.length - 3);

}

myFunction([1,2,3,4])
/*Esperado
[2,3,4]*/
myFunction([5,4,3,2,1,0])
/*Esperado
[2,1,0]*/
myFunction([99,1,1])
/*Esperado
[99,1,1]*/