function createItem(name, object) {
    let storage = localStorage.getItem(name);
    let data = [];
    if(storage) {
        data = JSON.parse(storage);
    }

    object.id = name + Math.random() + new Date();

    data.push(object);
    data = JSON.stringify(data);
    localStorage.setItem(name, data);
    
    storage = localStorage.getItem(name);
    return storage;
}

function getAllItems(name) {
    // Need name argument
    // Read data from storage, parse it and return. Like line number 2 and 3 above
    let storage = localStorage.getItem(name);
    let items = JSON.parse(storage);
    // let items = {...localStorage};
    return items;
}

function getOneItem(name, id) {
    // First get all items and do a loop to find out the one with id passed
    // Arguments needed are name and id
    let items = getAllItems(name);
    let item;

    for(var i=0; i<items.length; i++) {
        if(items[i].id === id) {
            item = items[i];
            // item = localStorage.getItem(items[i]);
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

    for(var i=0; i<items.length; i++) {
        if(items[i].id === id) {
            items.splice(i, 1);
        }
    }
    return localStorage.setItem(name, JSON.stringify(items));
}

function editItem(name, id, newData) {
    let items = getAllItems(name);

    for(var i=0; i<items.length; i++) {
        if(items[i].id === id) {
            items[i] = newData;
        }
    }
    return localStorage.setItem(name, JSON.stringify(items[i]));
}

export {createItem, getAllItems, getOneItem, removeAllItems, removeOneItem, editItem};