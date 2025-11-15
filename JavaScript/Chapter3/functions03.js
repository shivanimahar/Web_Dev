function nice(name) {
    console.log("Hey" + name + "you are nice!")
    console.log("Hey" + name + "you are good!")
    console.log("Hey" + name + "your tshirt is nice!")
    console.log("Hey" + name + "your course is good too!")
}
nice("shivani")
nice("manni")

function sum(a, b, c=3) {
    // console.log(a + b)
    return a + b + c
}
result1 = sum(3) //nan not a number, as b value is not given
result2 = sum(4, 55)
result3 = sum(223, 55, 1)

console.log("The sum of these num is: ", result1)
console.log("The sum of these num is: ", result2)
console.log("The sum of these num is: ", result3)

//arrow func
const func1 = (x)=>{
    console.log("I am an arrow function", x)
}
func1(34);
func1(66);
func1(74);





