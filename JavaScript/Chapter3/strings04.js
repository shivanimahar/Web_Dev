console.log("This is strings tutorial")
let a = "Harry";
console.log(a);
console.log(a[0]);
console.log(a[-1]) //undefined
console.log(a[2])
console.log(a[5]) //undefined
console.log(a.length) // tells the len of the string
let r_name = "Shivani"
let friend = "Meenu"
console.log("His name is " + r_name + " and his firends name is " + friend)

console.log(`His name is ${r_name} and his friends name is ${friend}`) //template literals

let b = "Shivam"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length) //not need of paranthesis
console.log(b.slice(2,4))
console.log(b.slice(1))

console.log(b.replace("Sh","7798")) //agar sh ki do accurence hui toh kewal pehli occurance hi replace hoti hai
console.log(b.concat(a, "Aishwarya", "priya"))

// a.charAt(0) // character at 0 index
// b.indexOf("shi")
// b.startsWith("Ro")
// b.endsWith("ni")