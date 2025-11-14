console.log("Hello I am conditional tutorial")

let age = 0;
// let grace = 2;

// assignment operator:
// age += grace
// console.log(age)

// arithmetic operator:
// console.log(age+grace)
// console.log(age-grace)
// console.log(age*grace)
// console.log(age**grace)
// console.log(age/grace)
// console.log(age%grace)

// if elseif else ladder:
if((age)!=18){
    console.log("you can drive");
}

else if(age == 0){
    console.log("Are you kidding?")
}

else if(age == 1){
    console.log("Are you again kidding?")
}

// if((age+grace)>18){
//     console.log("you can drive");
// }

else{
    console.log("you cannot drive");
}

/*
I am a m
ultiline
comment
*/

a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a)

/*
translates to :
if(a>b){
    let c = a - b;
}
else{
    let c = b - a;
}
*/