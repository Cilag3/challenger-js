

function myFunction(a, b) {
  const arrUnidas = a.concat(b)
  const arrSemRepetidos = arrUnidas.filter(
    (atual, i) => arrUnidas.indexOf(atual) === i
  )

  return arrSemRepetidos.sort((a, b) => a - b)
}
