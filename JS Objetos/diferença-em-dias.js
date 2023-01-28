/*Escreva uma função que receba duas instâncias de data como argumento. Ele deve retornar o número de dias entre essas datas.*/




function myFunction(a, b) {
  const diffInMs = a - b
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24)
  const diffInDaysInPositive = Math.abs(diffInDays)
  return diffInDaysInPositive
}



myFunction(new Date('2020-06-11'), new Date('2020-06-01'))
/*Esperado
10*/
myFunction(new Date('2000-01-01'), new Date('2020-06-01'))
/*Esperado
7457*/
