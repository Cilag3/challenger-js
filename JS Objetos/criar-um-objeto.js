/*Escreva uma função que receba uma string como argumento. Crie um objeto que tenha uma propriedade com a chave 'key' e um valor igual ao string. Devolva o objeto.*/

function myFunction(a) {
  return {
    key: a
  }
}

myFunction('a')
/*Esperado
{key:'a'}*/
myFunction('z')
/*Esperado
{key:'z'}*/
myFunction('b')
/*Esperado
{key:'b'}*/
