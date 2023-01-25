/*Escreva uma função que recebe um objeto como argumento. Em alguns casos, o objeto contém outros objetos com algumas propriedades profundamente aninhadas. Retorna a propriedade 'b' do objeto 'a' dentro do objeto original se existir. Se não, retorne indefinido*/






function myFunction(obj) {
  if ('a' in obj) {
    if (typeof obj.a === 'object' && 'b' in obj.a) {
      return obj.a.b
    } else {
      return undefined
    }
  } else {
    return undefined
  }
}

myFunction({a:1})
/*Esperado
undefined*/
myFunction({a:{b:{c:3}}})
/*Esperado
{c:3}*/
myFunction({b:{a:1}})
/*Esperado
undefined*/
myFunction({a:{b:2}})
/*Esperado
2*/