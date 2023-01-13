/*Escreva uma função que receba uma matriz (a) e um número (n) como argumentos. Ele deve retornar os últimos n elementos de a.*/



function myFunction (a,n) {

let itenDaLista = a.length;
let Calc = itenDaLista - n
return a.splice(Calc, n)

}

myFunction([1, 2, 3, 4, 5], 2)
/*Esperado
[ 4, 5 ]*/
myFunction([1, 2, 3], 6)
/*Esperado
[ 1, 2, 3 ]*/
myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)
/*Esperado
[ 6, 7, 8 ]*/