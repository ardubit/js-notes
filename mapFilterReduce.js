// node mapFilterReduce.js

// #1 Map
const numbers = [6, 12, 34, 56, 83, 62, 90, 235];

// Multiply every value by two
const multNumbers = numbers.map((num) => num*2);
const addNumbers = numbers.map((num) => num+2);

console.log(multNumbers);
console.log(addNumbers);

numbers.map(() => console.log('Hi!'));

const team = [
    {
        name: 'Aleksey',
        age: 35
    },
    {
        name: 'Petro',
        age: 26
    },
    {
        name: 'Ivan',
        age: 23
    },
]

team.map(teamMember => teamMember.age += 10);
console.log(team);

// #2 Filter (Condition)
const filteredNumbers = numbers.filter(number => number > 10 && number < 100);
console.log(filteredNumbers);

// #3 Reduce (Accumulator and current value)
// Initional acc = 0, cur = [0] element of array = 6
// The result will stored in acc
// Finally reduce will return a number and not an array.
const reducedValue = numbers.reduce((acc, cur) => acc + cur);
console.log(reducedValue);

// #4
var teamArray = team.map(function (team, index, array) {
    return index;
});

console.log(teamArray);