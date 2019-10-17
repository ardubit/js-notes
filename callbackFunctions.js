// #1
function helloFunction(name, callbackFunction) {
    // console.log('Hello, ' + name + '!');)
    callbackFunction();
};

helloFunction('Aleksey', function() { console.log('I am a callback function!') });

// #2
// or define a function anywhere and call it then
function callbackFunction() {
    console.log('I am the defined callback function!');
};

helloFunction('Victor', callbackFunction);