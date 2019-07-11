function createItem(name, object) {
    let storage = localStorage.getItem(name);
    var data = JSON.parse(storage);

    object.id = name + Math.random() + new Date();

    data.push(object);
    data = JSON.stringify(data);
    localStorage.setItem(name, data);
}

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
    let items = getAllItems(name);
    var item;

    for(var i=0; i<items.length; i++) {
        if(items[i].id === id) {
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
        if(items[i].id === id) {
            item = localStorage.removeItem(items[i]);
            item = JSON.stringify(item);
            return localStorage.setItem(name, item);
        }
    }
}

function editItem(name, id) {
    let items = getAllItems(name);
    var item;

    for(var i=0; i<items.length; i++) {
        if(items[i].id === id) {
            return localStorage.setItem(name, JSON.stringify(items[i]));
        }
    }
}

export {createItem, getAllItems, getOneItem, removeAllItems, removeOneItem, editItem};