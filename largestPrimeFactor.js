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
    //if n is divisible by i, then record i in an array
    narrowedDown.push(i);
  }
}

//find the prime numbers in this array

console.log(narrowedDown);

for (var x = 0; x <= narrowedDown.length-1; x++) {
  if (narrowedDown[x] % x === 0) {
    console.log(x);
  };

}

  return primeNumber;
};


