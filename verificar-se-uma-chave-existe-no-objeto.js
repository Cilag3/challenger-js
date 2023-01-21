/*Escreva uma função que receba um objeto (a) e uma string (b) como argumento. Retorna verdadeiro se o objeto possuir uma propriedade com a chave 'b'. Retorne falso caso contrário. Dica: o caso de teste 3 é um pouco complicado porque o valor da propriedade 'z' é indefinido. Mas a propriedade em si existe.*/



function myFunction(a, b) {
  return b in a
}


myFunction({a:1,b:2,c:3},'b')
/*Esperado
true*/
myFunction({x:'a',y:'b',z:'c'},'a')
/*Esperado
false*/
myFunction({x:'a',y:'b',z:undefined},'z')
/*Esperado
true*/
