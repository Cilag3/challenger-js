/*Escreva uma função que receba argumentos de um número arbitrário de arrays. Deve retornar um array contendo os valores de todos os arrays.*/

function myFunction(...arrays) {
  let listaVazia = []
  arrays.forEach(a => (listaVazia = listaVazia.concat(a)))

  return listaVazia
}

myFunction([1, 2, 3], [4, 5, 6])
/*Esperado[(1, 2, 3, 4, 5, 6)]*/
myFunction(['a', 'b', 'c'], [4, 5, 6])
/*Esperado[('a', 'b', 'c', 4, 5, 6)]*/
myFunction([true, true], [1, 2], ['a', 'b'])
/*Esperado[(true, true, 1, 2, 'a', 'b')]*/
