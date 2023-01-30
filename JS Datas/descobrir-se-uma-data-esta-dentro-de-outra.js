/*Escreva uma função que receba duas instâncias de data como argumento. Deve retornar true se a diferença entre as datas for menor ou igual a 1 hora. Caso contrário, deve retornar falso.*/



function myFunction(a, b) {
  let diffInMs = a - b
  let diffInDays = diffInMs / (1000 * 60 * 60)
  let diffInDaysInPositive = Math.abs(diffInDays)
  if (diffInDaysInPositive <= 1) {
    return true
  } else {
    return false
  }
}


myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
/*Esperado
true*/ 
myFunction(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00'))
/*Esperado
true*/
myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00'))
/*Esperado
false*/
myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00'))
/*Esperado
true*/ 