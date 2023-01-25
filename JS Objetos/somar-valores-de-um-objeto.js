/*Escreva uma função que receba um objeto (a) como argumento. Retorna a soma de todos os valores de objeto.*/


function myFunction(a) {
  const arrValue = Object.values(a)
  return arrValue.reduce((acc, value) => acc + value, 0)
}

myFunction({a:1,b:2,c:3})
/*Esperado
6*/
myFunction({j:9,i:2,x:3,z:4})
/*Esperado
18*/
myFunction({w:15,x:22,y:13})
/*Esperado
50*/