const howManyHundreds = function(number) {
  if (Math.floor(number/100) > 0 ) {
    return Math.floor(number/100);
  } else {
    return 0;
  }
}



console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);