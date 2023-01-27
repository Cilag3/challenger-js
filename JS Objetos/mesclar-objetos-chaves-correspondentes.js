/*Escreva uma função que recebe dois objetos como argumentos. Infelizmente, a propriedade 'b' no segundo objeto tem a chave errada. Em vez disso, deve ser nomeado 'd'. Mescle os dois objetos e corrija o nome de propriedade errado. Retorne o objeto resultante. Deve ter as propriedades 'a', 'b', 'c', 'd' e 'e'*/

function myFunction(x, y) {
  delete Object.assign(y, { d: y.b }).b
  return { ...x, ...y }
}

myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })
/*Esperado
{ a: 1, b: 2, c: 3, e: 5, d: 4}*/
myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })
/*Esperado
{ a: 5, b: 4, c: 3, e: 2, d: 1}*/
