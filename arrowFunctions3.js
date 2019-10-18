class Person {
    constructor(name) {
        this.name = name;
    };

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name);
        }, 1000);
    };
    
    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name)
        }, 1000)
    };
};

let person = new Person('Aleksey');
person.printNameArrow();
person.printNameFunction();

