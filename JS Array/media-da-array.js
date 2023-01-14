/*Escreva uma função que recebe um array de números como argumento. Deve retornar a média dos números.*/


function myFunction (arr) {

const soma = arr.reduce((acc, value) => acc + value, 0);
const tamanho = arr.length;
return soma/tamanho;

}

myFunction([10,100,40])
/*Esperado
50*/
myFunction([10,100,1000])
/*Esperado
370*/
myFunction([-50,0,50,200])
/*Esperado
50*/

