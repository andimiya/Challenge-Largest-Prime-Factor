exports.largestPrimeFactor = function(n){

  var primeNumber = 0;
  // do your work here


  //prime = divides by n without a remainder
  //
  //n > 1
  //is prime if it CANNOT be written as a product of a * b
  //n can only be divided by 1 and itself

var narrowedDown = [];


for (var i = 2; i < n; i++) {
  //i will be any number between 2 and n
  //narrow down i until you get prime factors of n

  if (n % i === 0){
    //if n is divisible by 0, then store i

    narrowedDown.push(i);
  }


}


console.log(narrowedDown);


// find square root of the


  return primeNumber;
};


