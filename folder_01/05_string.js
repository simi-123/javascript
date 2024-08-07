const name ="sim"
const repocount = 10;

// console.log(name+repocount);

// console.log(`hello i am ${name} and my repo is ${repocount}`);

const gameName= new String('sim')

console.log(gameName[0]);

// console.log(gameName._proto_);
// console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Simran    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));