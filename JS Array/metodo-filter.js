/*Escreva uma função que receba um array (a) e um valor (b) como argumento. A função deve remover todos os elementos iguais a 'b' do array. Retorna o array filtrado.*/

function myFunction (a,b) {

return  a.filter(elemento => elemento !== b);

}

myFunction([1,2,3], 2)
/*Esperado
[1, 3]*/
myFunction([1,2,'2'], '2')
/*Esperado
[1, 2]*/
myFunction([false,'2',1], false)
/*Esperado
['2', 1]*/
myFunction([1,2,'2',1], 1)
/*Esperado
[2, '2']*/