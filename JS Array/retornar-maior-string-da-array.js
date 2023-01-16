/*Escreva uma função que receba um array de strings como argumento. Retorna a string mais longa.*/



function myFunction( arr ) {
  return arr.reduce((atual, proximo) => atual.length > proximo.length ? atual : proximo);
  }


  myFunction(['help', 'me'])
/*Esperado
'help'*/
 myFunction(['I', 'need', 'candy'])
/*Esperado
'candy'*/