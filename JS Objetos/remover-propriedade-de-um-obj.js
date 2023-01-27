/*Escreva uma função que recebe um objeto como argumento. Ele deve retornar um objeto com todas as propriedades originais do objeto. exceto para a propriedade com a chave 'b'*/

function myFunction(obj) {
  delete obj.b
  return obj
}


myFunction({ a: 1, b: 7, c: 3 })
/*Esperado
{ a: 1, c: 3 }*/
myFunction({ b: 0, a: 7, d: 8 })
/*Esperado
{ a: 7, d: 8 }*/
myFunction({ e: 6, f: 4, b: 5, a: 3 })
/*Esperado
{ e: 6, f: 4, a: 3 }*/