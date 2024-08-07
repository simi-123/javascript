//Primitive
// 7 types and its call by value;

// string Number Boolean Null undefined Symbol(unique),BigInt

//Reference (non primitive)

//Array ,Objects Functions 
const isLoggedIn = false;

const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//  console.log(id,anotherId)

const array = ["ab","bc","cd"];

let obj ={
    name:"abc",
    age:34,
    phone:"2345"
}

const myfunction = function(){
  console.log("hello");
  
}

console.log(typeof myfunction);
console.log(typeof array);
console.log(typeof obj);