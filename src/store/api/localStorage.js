var history = {
    "name": "history revisiting",
    "topic": "Indian history"
};

function createItem(name, object) {
    localStorage.setItem(name, JSON.stringify(object));
    object.id = name + Math.random() + new Date();
    let storage = localStorage.getItem(name);

    return storage;
}

createItem("historyData", history);

function getAllItems(name) {
    // Need name argument
    // Read data from storage, parse it and return. Like line number 2 and 3 above
    let storage = localStorage.getItem(name);
    var items = JSON.parse(storage);
    // let items = {...localStorage};
    return items;
}

function getOneItem(name, id) {
    // First get all items and do a loop to find out the one with id passed
    // Arguments needed are name and id
    let storage = localStorage.getItem(name);
    var items = JSON.parse(storage);
    var item;
    for(var i=0; i<items.length; i++) {
        if(items.id === id) {
            item = localStorage.getItem(items[i]);
        }
    }
    return item;
}

function removeAllItems(name) {
    // Argument should be name
    // localstorage.set item (name, "[]")
    return localStorage.setItem(name, "[]");
}

function removeOneItem(name, id) {
    // Arguments name, id
    // retrieve all the items, parse, remove the item with id from array, stringiy and set in localstorage
    let items = getAllItems(name);
    var item;
    for(var i=0; i<items.length; i++) {
        if(items.id === id) {
            item = localStorage.removeItem(items[i]);
            item = JSON.stringify(item);
            return localStorage.setItem(name, item);
        }
    }
}

export {createItem, getAllItems, getOneItem, removeAllItems, removeOneItem};