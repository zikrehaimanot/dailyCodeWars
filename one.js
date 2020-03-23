// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
//


function rowWeights(array){
  let team1 = 0;
  let team2 = 0;
  let answer = [];
  for (let i=0; i<array.length; i++){
    if (i % 2 === 0){
      team1 += array[i];
    }else{
      team2 += array[i];
    }
  }
  answer.push(team1, team2);
  return answer;
}
