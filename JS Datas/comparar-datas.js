/*Parece fácil, mas você precisa conhecer o truque. Escreva uma função que receba duas instâncias de data como argumentos. Deve retornar verdadeiro se as datas forem iguais. Caso contrário, deve retornar falso.*/


function myFunction(a, b) {
  return a.getTime() === b.getTime()
}

myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
/*Esperado
false*/
myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
/*Esperado
true*/
myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
/*Esperado
false*/
