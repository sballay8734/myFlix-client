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

function ternaryTest(number) {
  return (number > 10) ? "Greater than 10" : "Test answer"
}

console.log(ternaryTest(12))

// sballay8734
// yankeesB0293