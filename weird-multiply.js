
function weirdMultiply(num) {
  var numArr = String(num).split("");
  var temp=1;
  if(numArr.length === 1)return num;
  else if(numArr.length >= 2){
    for(var i=0;i<numArr.length;i++){
      temp *= +numArr[i];
      if(i===numArr.length-1)return weirdMultiply(temp)
    }
  }
  // while(numArr.length > 1){
  //     temp = 1;
  //   for(var i=0;i<numArr.length;i++){
  //       temp *= +numArr[i];
  //   }

  //   numArr = String(temp).split("");
  // }

  // return Number(numArr.join(""));

}
console.log(weirdMultiply(39)); // -> 3 * 9 = 27 -> 2 * 7 = 14 -> 1 * 4 = 4 // result = 4
console.log(weirdMultiply(999)); // -> 9 * 9 * 9 = 729 -> 7 * 2 * 9 = 126 -> 1 * 2 * 6 = 12 -> 1 * 2 = 2 // result = 2
console.log(weirdMultiply(3)); // -> 3 karena telah satu digit // result = 3


