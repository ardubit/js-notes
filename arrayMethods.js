
const items = [
    { name: 'Bike',         price: 100  },
    { name: 'TV',           price: 50   },
    { name: 'Phone',        price: 70   },
    { name: 'Computer',     price: 800  },
    { name: 'Car',          price: 250  },
];

const filteredItems = items.filter((items) => items.price <=100);
console.log(filteredItems);