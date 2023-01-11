
/*Escreva uma função que receba um array (a) e um valor (n) como argumento. Retorna o enésimo elemento de 'a'*/

function myFunction (a, n)
{

return a[n-1];

}

myFunction([1,2,3,4,5],3)
/*Esperado 3*/
myFunction([10,9,8,7,6],5)
/*Esperado 6*/
myFunction([7,2,1,6,3],1)
/*Esperado 7*/
