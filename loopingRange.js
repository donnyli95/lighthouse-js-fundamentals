const range = function (start, end, step) {
  let some_array = [];
  if (start === undefined || end === undefined || step === undefined) {
    return some_array;
  } else if (start > end || step <= 0) {
    return some_array;
  } else {
    for (let i = start; i <= end; i += step) {
      some_array.push(i);
    }
  }
  return some_array;
}



// test outputs
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));