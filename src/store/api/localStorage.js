var moment = require("moment");

function createItem(name, object) {
    let storage = localStorage.getItem(name);
    let data = [];
    if(storage) {
        data = JSON.parse(storage);
    }

    object.id = name + Math.random() + moment().format("MMM Do YY");

    data.push(object);
    data = JSON.stringify(data);
    localStorage.setItem(name, data);
    
    storage = localStorage.getItem(name);
    return storage;
}

function getAllItems(name) {
    let storage = localStorage.getItem(name);
    let items = JSON.parse(storage);
    return items;
}

function getOneItem(name, id) {
    let items = getAllItems(name);
    let item;

    for(var i=0; i<items.length; i++) {
        if(items[i].id === id) {
            item = items[i];
        }
    }

    return item;
}

function removeAllItems(name) {
    return localStorage.setItem(name, "[]");
}

function removeOneItem(name, id) {
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
    return localStorage.setItem(name, JSON.stringify(items));
}

function saveItem(name, id, newData) {
    let items = getAllItems(name);

    for(var i=0; i<items.length; i++) {
        if(items[i].id === id) {
            items[i].url.type = newData.id;
            items[i].url.url = newData.url;
        }
    }
    return localStorage.setItem(name, JSON.stringify(items));
}

export {createItem, getAllItems, getOneItem, removeAllItems, removeOneItem, editItem, saveItem};