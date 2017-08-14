function weirdMultiply(sentence) {
var numstr = sentence.toString()
var result
  if (numstr.length === 1)return sentence
    while(numstr.length >1) {
      result = 1
      for (var i = 0; i<numstr.length; i++){
        result *=parseInt(numstr[i])
      }

numstr=result.toString()
if (numstr.length ===1) return numstr
    }

}

 console.log(weirdMultiply(39)); //-> 3*9=27 -> 2*7=14 -> 1*4=4
 console.log(weirdMultiply(999)); // -> 9*9*9=729 -> 7*2*9=126 -> 1*2*6=12 -> 1*2=2
 console.log(weirdMultiply(3)); // ->3 karena telah satu digit
