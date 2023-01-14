/*Escreva uma função que recebe um array de números como argumento. Deve retornar a soma dos números.*/


function myFunction(a) {
  return a.reduce((acc, value) => acc + value, 0);
}

myFunction([10,100,40])
/*Esperado
150*/
myFunction([10,100,1000,1])
/*Esperado
1111*/
myFunction([-50,0,50,200])
/*Esperado
200*/