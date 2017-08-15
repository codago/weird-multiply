function weirdMultiply(num)
{
  var output = String(num).split("");
  var mul = 1;
  if (output.length == 1)
  return num;
  else if (output.length > 1)
  {
    for ( var i=0; i<output.length; i++)
    {
      mul = mul * output[i];
      if (i == output.length - 1)
      return weirdMultiply(mul)
    }
  }
}
console.log(weirdMultiply(39)); // -> 3*9 = 27 -> 2*7 =14 -> 1*4 =4
console.log(weirdMultiply(999)); // -> 9*9*9 = 729 -> 7*2*9 =126 -> 1*2*6=12 -> 1*2=2
console.log(weirdMultiply(3)); // -> 3 karena telah satu digit.
