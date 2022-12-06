//2) Faça uma função que receba uma string, você deverá retornar esta string ao contrário.

function sentenceBackwards(string) {
  const array = string.split('')

  const arrayRevert = array.reverse()

  const finishString = arrayRevert.join('') // = gabriel

  return console.log(finishString.toUpperCase()) // = GABRIEL
}
sentenceBackwards('leirbag')
