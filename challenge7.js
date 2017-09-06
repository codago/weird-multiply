function weirdMultiply(n) {
  var num = String(n).split(""); //string untuk membuat number menjadi string, split untuk memisahkan char
  var temp=1; //untuk hasilnya satu
  if(num.length === 1)
  return n;
  else if(num.length >= 2){
    for(var i=0;i<num.length;i++){
      temp *= +num[i];
      if(i===num.length-1)
      return weirdMultiply(temp)
    }
}
}

console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));
