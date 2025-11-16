/* Create a faulty calc using javascript

This faulty clac does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:
performs wrong operations 10% of the times.

+ ---> -
* ---> +
- ---> /
/ ---> **

*/

let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}


if (random > 0.1) {
    //perform correct calc
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    //performs wrong calc
    c = obj[c] 
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}