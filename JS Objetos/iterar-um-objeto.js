

/*Exercício para iterar sobre as chaves do objeto e multiplica-las*/

function myFunction(a, b) {
  const arrayChaves = Object.keys(a)
  arrayChaves.forEach(value => (a[value] = b * a[value]))
  return a
}
