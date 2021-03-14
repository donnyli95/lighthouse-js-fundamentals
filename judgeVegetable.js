const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let int = 0;
  let result = '';
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > int) {
      int = vegetables[i][metric];
      result = vegetables[i].submitter;
    }
  } 
  return result
}


const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric));