/*Escreva uma função que receba duas strings (a e b) como argumentos. Crie um objeto que tenha uma propriedade com a chave 'a' e um valor de 'b'. Devolva o objeto.*/


function myFunction(a, b) {
  return { [a]: b };
}



myFunction('a','b')
/*Esperado
{a:'b'}*/
myFunction('z','x')
/*Esperado
{z:'x'}*/
myFunction('b','w')
/*Esperado
{b:'w'}*/