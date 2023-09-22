const nums = [1, 2, 3, 4, 5, 6];

// // 0 + 1 + 2 + 3 + 4 + 5 + 6
const initialValue = 0;
const sumWithInitial = nums.reduce((accumulator, currentValue) => {
    console.log(`accumulator = ${accumulator} and currentValue = ${currentValue} \n`);
    return accumulator + currentValue; // here return value goes to "accumulator" and "accumulator" value got updated.
}, initialValue);// "accumulator" 1st value = initialValue

// console.log(`sum = ${sumWithInitial}`);

// output
//  accumulator = 0 and currentValue = 1 
// accumulator = 1 and currentValue = 2 
// accumulator = 3 and currentValue = 3
// accumulator = 6 and currentValue = 4
// accumulator = 10 and currentValue = 5
// accumulator = 15 and currentValue = 6
// sum = 21


const courses =[
    {
        courseName : "fullstack development",
        cousePrice : 19999
    },
    {
        courseName : "backend development",
        cousePrice : 14999
    },
    {
        courseName : "DSA",
        cousePrice : 9999
    }
]
// let gst = courses.cousePrice * 18/100;
const userCourse = courses.reduce(function name(accumulator,currentValue) {
// here currentValue = {object value},{object value},{object value}
   return accumulator + currentValue.cousePrice // got value by object dot notation
},20)
console.log(userCourse);
