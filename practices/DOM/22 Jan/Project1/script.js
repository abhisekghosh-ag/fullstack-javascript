const btn = document.getElementById('button');

const randomColorGenerator = () => {
    let val = '0123456789ABCDEF';
    let hexaValue = '#';
    for (let i = 0; i < 6; i++) {
        hexaValue = hexaValue + val[Math.floor(Math.random() * 16)];
    }
    return hexaValue;
};

console.log(randomColorGenerator());

function chageBGColor() {
    document.body.style.backgroundColor = randomColorGenerator();
}

btn.addEventListener('click', chageBGColor);
