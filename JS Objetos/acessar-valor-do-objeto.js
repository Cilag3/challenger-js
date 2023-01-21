/*Escreva uma função que receba um objeto com duas propriedades como argumento. Deve retornar o valor da propriedade com o país chave.*/

function myFunction(obj) {
  return obj.country
}

myFunction({ continent: 'Asia', country: 'Japan' })
/*Esperado
;('Japan')+*/
myFunction({ country: 'Sweden', continent: 'Europe' })
/*Esperado
;('Sweden')*/
