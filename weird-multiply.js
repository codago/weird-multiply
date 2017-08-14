function weirdMultiple(param){
    var total = 1;
    var paramString = param.toString();

   for (var i = 0; i < paramString.length ; i++){
     total *= paramString[i];
    }

    if(total.toString().length < 2){
      return total;
    }else{
      return weirdMultiple(total);
    }
  }

console.log(weirdMultiple(39));
console.log(weirdMultiple(999));
console.log(weirdMultiple(3));
