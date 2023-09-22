//map => map returns all the value along with condition
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myNums = nums.map((num) => {
    return num + 20;
})

//chainig starts

myNums = nums
    .map((num) => num * 2) // ans (num * 2) pass to second chaining(num2)
    .map((num2) => num2 + 10) // num2 = prev values and pass to 3rd chaining
    .filter((num3) => num3 > 20) 
console.log(myNums);

//chaining ends
