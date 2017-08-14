function weirdMultiply(kalimat)
{
  var number = kalimat,
      output = [],
      sNumber = number.toString();

  for (var i = 0, len = sNumber.length; i < len; i += 1)
  {
    output.push(+sNumber.charAt(i));
  }

  if (output.length>1)
  {
    var sum=1;
    for (var i=0; i<output.length; i++)
    {
        sum = sum * output[i];
    }
    return(weirdMultiply(sum));
  }
  else
  {
    return number;
  }
}

console.log(weirdMultiply(39)); // -> 3*9 = 27 -> 2*7 =14 -> 1*4 =4
console.log(weirdMultiply(999)); // -> 9*9*9 = 729 -> 7*2*9 =126
console.log(weirdMultiply(3)); // -> 3 karena tunggal
