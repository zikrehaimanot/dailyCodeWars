// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.


function highAndLow(numbers){
  let arrNum = numbers.split(" ")
  let sortArrNum = arrNum.sort(function(a, b){ return a - b})
  //console.log(sortArrNum)
  let firstNum = sortArrNum[0]
  //console.log(firstNum)
  //console.log(firstNum)
  let lastNum = sortArrNum.pop()
  console.log(firstNum)
  console.log (lastNum)
  let answer =  lastNum + " " + firstNum
  return answer

}
