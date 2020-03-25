// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc){
  let newCard = '';
  for(let i=0; i<cc.length; i++){
    let numDig = cc.length - 4;
    if(i < numDig){
      newCard += '#';
    } else {
      newCard += cc[i];
    }
  }
  return newCard;
}
