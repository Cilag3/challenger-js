/*Escreva uma função que receba um número (a) como argumento. Divida a em seus dígitos individuais e retorne-os em uma matriz. Dica: você pode querer alterar o tipo do número para a divisão*/

function myFunction (a) {
const aString = a.toString();
const aDividido = aString.split("");
const res = aDividido.map((valorAtual)=> {
return parseInt(valorAtual);
})
return res;
}

myFunction(10)