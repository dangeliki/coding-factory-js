const numbers = [1, 2, 3, 4]

// Modifies the initial array
numbers.push(5)
numbers.splice(4, 0, 5)   //index,delete 0 elements,add 5

function addToArrayEnd(arr,num) {
  return [...arr,num]
}

function addToArrayStart(arr,num) {
  return [num,...arr]
}

function addToArrayAtIndex(arr, num, index) {
  return [...arr.slice(0,index), num, ...arr.slice(index)]    //shallow copy των στοιχειων του πινακα βαζωντας στην θεση index το num
}


// Updates
numbers.splice(3, 1, 8)

const updateArray = (arr, newValue) => arr.map(item => newValue)

//Fresh copy
const updateOneItem = (arr, index, newValue) => 
  arr.map((item,i) => (i === index) ? newValue : item)

const updatedNumbers = updateOneItem(numbers, 2, 17)
console.log(updatedNumbers)

// Delete

//Modifies initial array
let index = numbers.indexOf(1)
if(index !== -1) numbers.splice(index,1)

//Fresh copy of deleted array
const deleteFromArray = (arr,num) => arr.filter(item => item !== num)

const deleteByIndex = (arr,index) => [...arr.slice(0,index), ...arr.slice(index + 1)]

