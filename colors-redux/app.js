
// Create actions and return an object of action
function addColor(value) {
    return {
        type: "ADD",
        color: value
    };
}

function removeColor(value) {
    return {
        type: "REMOVE",
        color: value
    };
}

// Reducer
function favoriteColors(state, actionObject) {
    if (state === undefined) {
        state = [];
    }
    if (actionObject.type === "ADD") {
        return state.concat(actionObject.color);
    }
    else if (actionObject.type === "REMOVE") {
        return state.filter(function(item) {
            return item !== actionObject.color;
        });
    } else {
        return state;
    }
}

// Storage
var store = Redux.createStore(favoriteColors);

// Get a notification when the storage is changed
store.subscribe(render);

function render() {
    console.log(store.getState());
}

store.dispatch(addColor("red"));
store.dispatch(addColor("blue"));
store.dispatch(addColor("green"));
//store.dispatch(removeColor("green"));

console.log(store.getState());