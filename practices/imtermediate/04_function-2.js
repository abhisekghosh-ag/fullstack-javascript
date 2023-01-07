//create a userRole by using function

 function userRole (name, role) {
    switch (role) {
        case "admin":
            return `${name}, you are allow to do any changes!`
            break;
        case "sub-admin":
            return `${name}, you are allow to add and delete the courses!`
            break;
        case "user":
            return `${name}, you are allow to access your courses !`
            break;
        case "trail-user":
            return `${name}, you are a trail-user, hope you are enjoying the course!`
            break;

        default:
            return `sign up || sign in`
            break;
    }
}

userRole("Abhisek","user");
console.log(userRole("Abhisek","sub-admin"));

/*

let userRole = function (params) {
    //code
}
*/