
// Topic :- function without parameters

function sayName() {
    console.log("hey Abhisek!");
}
sayName(); //calling a function


// Topic :- function with parameters

function sayNameTwo(name) {
    console.log("hey " ,name);
    console.log(`hey ${name}! how are you ?`);
}
//sayNameTwo() // => undefined value
sayNameTwo("Abhisek") // => Abhisek


//Topic :-funtion with return type

function addTwo(num1,num2) {
    result = num1 + num2 ;
    return result; // just return the output not print the output
}

let output = addTwo(23,54);
console.log("final output is ",output);

console.log("Add of two number is ", addTwo(12,3));


