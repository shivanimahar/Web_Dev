let arr = [1, 2, 4, 5, 7]
  // Index   0, 1, 2, 3, 4

arr[0] = 5666; // arrays are mutable
// console.log(arr, typeof arr);
// console.log(arr.length)


// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])
console.log(arr.toString())
console.log(arr.join(" and "))
console.log(arr.push(100)) // will add 100 to the array and return its updated length
console.log(arr.pop()) //will pop out 100, last num ko nikal dega
console.log(arr.shift()) // will pop out first num of the array
console.log(arr.unshift("Jack")) // will add jack at the begining of the array
// UNSHIFT = PUSH ka bhai
// SHIFT = POP ka bhai
console.log(arr.length)

// <----- Array mai memory toh allocate kri gayi hai lekin vha pe value nahi hai ----->

let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [9, 8, 7]
console.log(a1.concat(a2,a3))

let a4 = [7, 9, 8]
console.log(a4.sort())

const numbers = [1, 2, 3,4 ,5]
console.log(numbers.splice(1, 2)) // index 1 se start krke 2 numbers del karne hai, will return those num which are deleted
console.log(numbers) // ab updated array aayegi
console.log(numbers.splice(1, 3  , 2222, 5565))
console.log(numbers)

