// basic of objects

let userName = {
    name: "abhisek",
    role: "user",
    login: true,
    loginCount: 32,
    greetings: function () {
        console.log(`hello ${this.name}`);
    },
};
// console.log(userName.login); // true
loginCount = 56;
// console.log(userName); // prints object
// console.table(userName); // prints as tabluar form
// userName.greetings(); // hello abhisek 


const mySymbol = Symbol("example"); // creating Symbol

let userNameTwo = {
    nameTwo: "ABHISEK",
    ["full name"]: "Another way to defined key",
    mySymbol: "this is string",
    [mySymbol]: "this is symbol", //using symbol
};

// console.log(userNameTwo.mySymbol); // mySymbol: 'this is string' like any other normal variable

// console.log(typeof userNameTwo[mySymbol]); // [Symbol(example)]: 'this is symbol'

// console.log(userNameTwo);

// adding a function to a object
userNameTwo.greetings = function () {
    console.log(`hello ${this.nameTwo}`);
};

userNameTwo.greetings(); // hello ABHISEK

userName.greetings(); // hello abhisek 


let userNameThree = {...userName, ...userNameTwo } // concat/merged two object using spread
// console.log(userNameThree); 

let{name} = userName; // obj destructuring
console.log(name);
let{name:firstname} = userName; // obj destructuring storing name to firstname variable.
console.log(firstname);