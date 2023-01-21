/*Escreva uma função que receba um objeto (a) e uma string (b) como argumento. Retorna true se o objeto tiver uma propriedade com a chave 'b', mas somente se tiver um valor true. Em outras palavras, não deve ser nulo, indefinido ou falso. Retorne falso caso contrário.*/

function myFunction(a, b) {
  return Boolean(a[b])
}


myFunction({a:1,b:2,c:3},'b')
/*Esperado
true*/
myFunction({x:'a',y:null,z:'c'},'y')
/*Esperado
false*/
myFunction({x:'a',b:'b',z:undefined},'z')
/*Esperado
false*/
