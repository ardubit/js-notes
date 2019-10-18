// #1
const friends = [
    { pass: '01', name: 'Aleksey', age: 35},
    { pass: '02', name: 'Ivan', age: 35},
    { pass: '03', name: 'Petro', age: 35},
];

const passes = [];
for (let index = 0; index < friends.length; index++) {
    passes.push(friends[index].pass);
}

// or
const passes2 = [];
friends.forEach(friend => passes2.push(friend.pass))

// or using map
const passesMap = friends.map(function(f) {
    return f.pass;
});

// the same with arrow function
const passesMap2 = friends.map((f) => f.pass)

console.log(passes);
console.log(passes2);
console.log(passesMap);
console.log(passesMap2);

// #2
var sample = [1, 2, 3];

sample.forEach(function (elem, index) {
    console.log(elem + ' comes at ' + index);
})
