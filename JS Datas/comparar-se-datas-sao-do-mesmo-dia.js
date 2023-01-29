
/*Escreva uma função que receba duas instâncias de data como argumento. Deve retornar true se eles caírem exatamente no mesmo dia. Caso contrário, deve retornar falso.*/



function myFunction(a, b) {
  return a.getTime() === b.getTime()
}


myFunction(new Date('2000/01/01'), new Date('2000/01/01'))
/*Esperado
true*/
myFunction(new Date('2000/01/01'), new Date('2000/01/02'))
/*Esperado
false*/
myFunction(new Date('2001/01/01'), new Date('2000/01/01'))
/*Esperado
false*/
myFunction(new Date('2000/11/01'), new Date('2000/01/01'))
/*Esperado
false*/
