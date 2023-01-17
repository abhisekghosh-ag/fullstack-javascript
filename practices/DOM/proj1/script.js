let counter = document.getElementsByClassName("counter");
let followers = document.getElementsByClassName("followers");

let count = 1;

// setInterval(function,milisec)

setInterval(() => {
    if (count < 1000) {
        count++;
        counter[0].innerText = count;

    }
}, 1);


setTimeout(() => {
    followers[0].innerText = 'congratulations! now you 1000 followers on instagram !'
}, 6300);

// after 6300 milisec above text comes up