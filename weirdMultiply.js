function weirdMultiply(param){
    var paramString = param.toString();
    var total = 1;
    for(var i=0; i<paramString.length;i++){
      total= total*paramString[i];

    }
    if (total.toString().length>1){
      return weirdMultiply(total);
    }
    else{
      return total;
    }

}

console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));
