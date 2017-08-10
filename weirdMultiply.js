function weirdMultiply(sentence) {
  //write your code here
  var angka = String(sentence);
  var hasil = 1;
  if (angka.length === 1) return sentence;
  else if (angka.length >= 2){
    for(i = 0; i < angka.length; i++){
      hasil *= +angka[i]
      if(i === angka.length-1) return weirdMultiply(hasil)
        }
  }
}

console.log(weirdMultiply(39)); // -> 3 * 9 = 27 -> 2 * 7 = 14 -> 1 * 4 = 4
console.log(weirdMultiply(999)); // -> 9 * 9 * 9 = 729 -> 7 * 2 * 9 = 126 -> 1 * 2 * 6 = 12 -> 1 * 2 = 2
console.log(weirdMultiply(3)); // -> 3 karena telah satu digit
