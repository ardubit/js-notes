// #1
function isPositive(number) {
    return number >= 0;
}

let isPositiveArrow = number => number >= 0;

// #2
function randomNumber() {
    return Math.random;
}

let randomNumberArrow = () => {
    return Math.random;
}

// #3
document.addEventListener('click', function() {
    console.log('Click');
})

document.addEventListener('click', () => console.log('Click'))

