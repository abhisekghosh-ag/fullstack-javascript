// log in portal

let user = 'User';

switch (user) {
    case 'Admin':
        console.log("you are allowed to access everything");
        break;
    case 'Mentor':
        console.log("welcome to Mentor Page!");
        break;
    case 'User':
        console.log("you logged in,now you can access the course");
        break;
    default:
        console.log("please sign in!");
        break;
}