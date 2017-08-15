function weirdMultiply(angka){
  //  debugger;
  var angkaString = angka.toString()
  var total = 1

  for(var i = 0; i< angkaString.length; i++){
    total = total * angkaString[i]
  }
  if(total.toString().length>1){
    return weirdMultiply(total)
  }
  else{
    return total
  }
}


console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));
