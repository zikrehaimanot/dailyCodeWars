// 
// Welcome. In this kata, you are asked to square every digit of a number.
//
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//
// Note: The function accepts an integer and returns an integer





function squareDigits(num){
  let squaredArr = []
  let numString = num.toString()
  let numStringSplit = numString.split("")
  console.log(numStringSplit)
  for(let i = 0; i < numStringSplit.length; i++){
 // console.log(parseInt(numStringSplit[i])*parseInt(numStringSplit[i]))
  let squared = parseInt(numStringSplit[i]) * parseInt(numStringSplit[i])
    squaredArr.push(squared)
  }
 return parseInt(squaredArr.join('' , ''))
}
