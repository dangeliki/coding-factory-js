// 1.Basic function definition
function greet(name) {
  return `Hello, ${name}`
}

function add(a,b) {
  return a + b
}

console.log(greet("Alice"))

// 2.Function expression
const mul = function(a, b) {
  return a * b
}

let result = mul(3, 4)

// 3.Arrow Function
const div = (a, b) => a / b   //Υποννοείται το return οταν είναι 1 εντολή. Αν είναι πολλές, πρέπει να το βάλουμε