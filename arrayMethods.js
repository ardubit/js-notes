
const items = [
    { name: 'Bike',         price: 100  },
    { name: 'TV',           price: 50   },
    { name: 'Phone',        price: 70   },
    { name: 'Computer',     price: 800  },
    { name: 'Car',          price: 250  },
];

const filteredItems = items.filter((item) => item.price <=100);
console.log(items);

console.log('Filter --------------');
console.log(filteredItems);

console.log('Map --------------');
const itemNames = items.map((item) => item.name);
console.log(itemNames);

console.log('Find --------------');
const foundItems = items.find((item) => item.name === 'TV');
console.log(foundItems);

console.log('ForEach --------------');
items.forEach((item, index) => {
    return console.log(item, item.price, index);
});

console.log('Some + Every --------------');
const cheapItems = items.some((item) => item.price <= 100);
const everyItem = items.every((item) => item.price <= 100);
console.log(cheapItems);
console.log(everyItem);

// Calc the total
console.log('Reduce --------------');
const totalPrice = items.reduce((currentItem, item) => {
    return item.price + currentItem;
}, 0);
console.log(totalPrice);

console.log('Includes --------------');
const numbers = [1, 2, 3, 4, 5, 6]
const includesTwo = numbers.includes(2);
console.log(includesTwo);
