// for in is used in objects

let userName = {
    name: 'abhisek',
    role: 'user',
    login: true,
    loginCount: 32,

};
console.log(userName);
// console.log(userName.name);
for (const key in userName) {
    // console.log(key);//only print the key 
    // console.table(userName[key]); // only print the value
    console.log(`${key}: ${userName[key]}`); //print the object (key and value both)
}