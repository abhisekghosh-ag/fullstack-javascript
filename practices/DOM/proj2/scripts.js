const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);


const getBGColor = (SelectedElement) => {
    return window.getComputedStyle(SelectedElement).backgroundColor;
}

console.log(getBGColor
    (red));

console.log(getBGColor
    (orange));

let redEleColor = getBGColor(red);

red.addEventListener("click", () => {
    center.style.background = redEleColor;
})

let orangeEleColor = getBGColor(orange);

orange.addEventListener("mouseenter", () => {
    center.style.background = orangeEleColor;

})


const colorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;

    })
}

colorChanger(red,getBGColor(red));
colorChanger(cyan,getBGColor(cyan));
colorChanger(violet,getBGColor(violet));
colorChanger(orange,getBGColor(orange));
colorChanger(pink,getBGColor(pink));
