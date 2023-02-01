const arr = ['one', 'two', 'three'];
const [red, orange, blue] = arr;

console.log(red);
console.log(orange);
console.log(blue);

const ownerObject = [
  {
    name: "steve",
    pointsFor: 1983,
    wins: 11,
    losses: 3
  },
  {
    name: "shawn",
    pointsFor: 1875,
    wins: 11,
    losses: 3
  }
]

let ownerList = ownerObject.map((item) => {
  return item.pointsFor
})

console.log(ownerList)