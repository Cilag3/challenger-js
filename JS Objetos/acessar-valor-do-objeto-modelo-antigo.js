/*Escreva uma função que receba um objeto com duas propriedades como argumento. Deve retornar o valor da propriedade com a chave 'prop-2'. Dica: você pode querer usar o acessador de propriedade colchetes*/

function myFunction(obj) {
  return obj['prop-2']
}

myFunction({ one: 1, 'prop-2': 2 })
/*Esperado
2*/
myFunction({ 'prop-2': 'two', prop: 'test' })
/*Esperado
;('two')*/
