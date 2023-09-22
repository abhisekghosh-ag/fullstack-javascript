// for of

// ["", "", ""]
// [{}, {}, {}] array of object

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num); // used for iteration of array
// }

const greetings = "Hello world!" // string are known as character of array .
for (const greet of greetings) {
//     console.log(`Each char is ${greet}`) // 1.Each char is H 2.Each char is e and so on....
}

// // Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")


console.log(map); // here map return the whole data in the form of object 

for (const [key] of map) {
    // console.log(key); // gives the key like :- IN,USA,FR
}

for (const [key, value] of map) {
    // console.log(`${key} stands for :- ${value}`); // gives key and value both 
}


// for in loops on object - are not iteratable

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); // myObject is not iteratable. we need "for in" for that

// }

const myObject = {
    js: "javascript",
    py: "python",
    cpp: "c++"
}
for (const key in myObject) {
    // console.log(key); js,py,cpp
    console.log(`${key} is the short name of ${myObject[key]}`);// for in  used for objects

}

// for in loop on array
const programming = ["javascript","java","cpp","python"]
for (const key in programming) {
   console.log(key);// 0 1 2 3 4 5 in array index no are key 
   console.log(programming[key]);// gives all the value like js,java,cpp
}