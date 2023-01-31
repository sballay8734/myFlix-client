const objArray = [
  {name: "Chris", job: "developer"},
  {name: "Steve", job: "accountant"}
]

const newArr = objArray.map((item) => {
  return item.name
})
console.log(newArr)