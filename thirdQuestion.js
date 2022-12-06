// /3) Faça uma função que retorne apenas as vogais de uma palavra.

function getVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const vowelsInWord = []

  const wordLowerCase = word.toLowerCase()
  const arrayWord = wordLowerCase.split('')

  arrayWord.forEach(elemento => {
    if (vowels.includes(elemento)) {
      vowelsInWord.push(elemento)
    }
  })

  return console.log(vowelsInWord) // = a, e, i
}
getVowels('gabriel')
