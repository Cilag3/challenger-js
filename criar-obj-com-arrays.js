/*Escreva uma função que receba dois arrays (a e b) como argumentos. Crie um objeto que tenha propriedades com chaves 'a' e valores correspondentes 'b'. Devolva o objeto.*/



function myFunction(a, b) {
  let obj = {}
  a.forEatch((valor, i) => (obj[valor] = b[i]))
  return obj
}


myFunction(['a','b','c'],[1,2,3])
/*Esperado
{a:1,b:2,c:3}*/
myFunction(['w','x','y','z'],[10,9,5,2])
/*Esperado
{w:10,x:9,y:5,z:2}*/
myFunction([1,'b'],['a',2])
/*Esperado
{1:'a',b:2}*/