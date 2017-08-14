function weirdMultiply(sentence) {
 var numberArr = String(sentence); //"pake fungsi array"
 var result = 1;
 if(numberArr.length === 1)
 return sentence;

 else if(numberArr.length >= 2){ // jika array lebih dari sama dengan 2 variable dia bakal lanjut looping ke fungsi for
   for(let x=0; x<numberArr.length; x++){
     result  *= Number (numberArr[x]); //result is 1 karna result dikali samadengan bilangan yang ada,
     if(x===numberArr.length-1)
     return weirdMultiply(result)//length = elemen - 1 karakter karena index di mulai dari 0
   }
 }}

console.log(weirdMultiply(39)); // -> 3 * 9 = 27 -> 2 * 7 = 14 -> 1 * 4 = 4
console.log(weirdMultiply(999)); // -> 9 * 9 * 9 = 729 -> 7 * 2 * 9 = 126 -> 1 * 2 * 6 = 12 -> 1 * 2 = 2
console.log(weirdMultiply(3)); // -> 3 karena telah satu digit
