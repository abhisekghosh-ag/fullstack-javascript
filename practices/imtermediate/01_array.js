// Array

let numbers = [12, 34, 54, 1, 2, 5, 8];
console.log ( numbers ); 



// array methods()

// 1.length()

let names = ['abhisek', 'hitesh', 'xyz', 'abc'];
console.log( names );
console.log(names.length); //length of an array


// 2. indexOf()

let namesTwo = ['abhisek', 'hitesh', 'xyz', 'abc'];
console.log(namesTwo.indexOf('abhisek')); // => 0 
console.log(namesTwo.indexOf('kbc')); // => -1 cause kbc is not present in namesTwo. 


// 3.push()

let numbersTwo = [12, 34, 54, 1, 2, 5, 8, 3];
numbersTwo.push(88);
console.log(numbersTwo); // 88 added after 3 in the array



// 4.pop()


let numbersThree = [12, 34, 54, 1, 2, 5, 8, 3];
numbersThree.pop(); //deleted the last element from an array
console.log(numbersThree);



// 5. slice()

let namesThree = ['abhisek', 'hitesh', 'xyz', 'abc','anurag'];
// namesThree.slice(1,4) //xx
console.log(namesThree.slice(1, 4)); // => 1,2,3 
// console.log(namesThree);


/*
6.splice()

let names = ['abhisek', 'hitesh', 'xyz', 'abc','anurag','tanmoy'];
names.splice(0,2,"hey");  
console.log(names);

// it start cut from index 0 an go upto 2 element(index 0 and index 1)
// here (abhisek,hitesh) will be replaced by "hey" .

let namesTwo = ['abhisek', 'hitesh', 'xyz', 'abc','anurag','tanmoy'];
namesTwo.splice(3,1,"hii");
console.log(namesTwo);

and here only "xyz" replaced by "hii"
index 3 =xyz and only one element

*/


//7. concat()

let numOne = [2,4,5];
let numTwo = [4,6,7];
let numbersFour = numOne.concat(numTwo);
console.log(numbersFour);
console.log(numOne.concat(numTwo));


// 8.shift() and unshift ()
let numbersFive=[4,5,3,2,65,4];
console.log(numbersFive); //original array
numbersFive.shift(); 
console.log(numbersFive); // removes the first element for previous line shift ();
numbersFive.unshift(12);
console.log(numbersFive); //add 12 as a first element for unshift (12);

