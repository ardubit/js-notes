// #1
function square(x) {
    return x+x;
};

// or the same with arrow '=>' as 'return'
const sq = (x) => x*x;
console.log(sq(3));

// with several lines of code
const sq2 = (x) => {
    // some code
    return x*x;
};

// #2
// find a max odd number
const arr = ['1', '2', '3', '4', '5'];
const res = arr
    .map((el) => parseInt(el))
    .filter((num) => num%2)
    .reduce((max, value) => Math.max(max, value), 0);

console.log(res);

// or the same
const res2 = arr
    .map(function(el) {
        return parseInt(el);
    })
    .filter(function(num) {
        return num%2;
    })
    .reduce(function(max, value) {
        return Math.max(max, value);
    }, 0);

console.log(res2);