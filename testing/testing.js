const arr = ['one', 'two', 'three'];
const [red, orange, blue] = arr;

console.log(red);
console.log(orange);
console.log(blue);

const objArray = [
  {name: "Chris", job: "developer"},
  {name: "Steve", job: "accountant"}
]

const newArr = objArray.map((item) => {
  return item.name
})
console.log(newArr)