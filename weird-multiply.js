
function weirdMultiply(sentence) {
  let numberArr = String(sentence);
  let result=1;
  if(numberArr.length === 1)return sentence;
  else if(numberArr.length >= 2){
    for(let i=0;i<numberArr.length;i++){
      result *= Number (numberArr[i]);
      if(i===numberArr.length-1)return weirdMultiply(result)
    }
  }

}
console.log(weirdMultiply(39)); // -> 3 * 9 = 27 -> 2 * 7 = 14 -> 1 * 4 = 4 // result = 4
console.log(weirdMultiply(999)); // -> 9 * 9 * 9 = 729 -> 7 * 2 * 9 = 126 -> 1 * 2 * 6 = 12 -> 1 * 2 = 2 // result = 2
console.log(weirdMultiply(3)); // -> 3 karena telah satu digit // result = 3
