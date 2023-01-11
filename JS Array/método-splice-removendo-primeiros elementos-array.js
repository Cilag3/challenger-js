/*Escreva uma função que receba um array (a) como argumento. Remova os 3 primeiros elementos de 'a'. Retornar o resultado*/


function myFunction (a) {

a.splice(0,3);
return a;

}

myFunction([1,2,3,4])
/*Esperado
[4]*/
myFunction([5,4,3,2,1,0])
/*Esperado
[2,1,0]*/
myFunction([99,1,1])
/*Esperado
[]*/
