console.log("Hey this is tutorial 2 of JS")
let a = 5;
a = a+1
let b = 6;
// let is global variable, var ki jgh let likhenge
let c = "shivani";
let _a = "Shubham";
// var 55a = "Rohan"; its invalid as it is starting from a number

// console.log(a+b+8);
// console.log(typeof a, typeof b, typeof c);

{
    let a = 66;
    console.log(a)
}
console.log(a)

const a1 = 6;
// a1 = a1 + 1; this is not possible as const mtlb value fixed it cannot be changed, whereass in line 2, 3 that is possible 

let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)
// null ka type javascript object dikhata hai
// null is primitive data type

// making object:
let o = {
    name: "Harry",
    "job code": 5600,
    "is_handsome": true
}
console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);

// note: job role ko double quote mai isliye likha kyuki usme beech mai space hai , name="name"