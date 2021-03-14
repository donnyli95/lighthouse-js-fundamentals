const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]


const carPassing = function (cars, speed) {
  // Your code in here ...
  let time_now = Date.now();
  cars.push({time: time_now, speed: speed});
  return cars
}

const speed = 38


console.log(carPassing(cars, speed))