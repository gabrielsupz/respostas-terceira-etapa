// 1) Faça uma função que receba um array composto de [ 1, 2, 3, 4, 5, 6, 6 ], você deverá retornar o segundo maior número deste array.

function returnSecondLargestNumber(array) {
  var novaArray = array.filter(function (position, positionRepeat) {
    return array.indexOf(position) === positionRepeat
  })

  const largeNumber = Math.max(...novaArray)

  novaArray.pop(largeNumber)

  //return console.log(Math.max(...novaArray)) // = segundo maior número

  return Math.max(...novaArray) // = 5
}
returnSecondLargestNumber([1, 2, 3, 4, 5, 6, 6])
