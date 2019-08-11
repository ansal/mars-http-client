import {
  createItem,
  removeOneItem,
  getAllItems,
  editItem
} from "../api/localStorage.js";

function collectionReducer(newCollection = [], action) {
  if (action.type === "FETCH_COLLECTION") {
    console.log("Collection fetched");
    console.log(action.name);
    getAllItems(action.name);
    return action.formData;
  }

  if (action.type === "EDIT_COLLECTION") {
    console.log("edit collection");
    console.log(action);
    delete action["type"];
    editItem("collection", action.id, action);
    return action;
  }

  if (action.type === "SAVE_TO_COLLECTION") {
    console.log("save collection");
    console.log(action);
    delete action["type"];
    editItem("collection", action.id, action);
    return action;
  }

  if (action.type === "DELETE_COLLECTION") {
    console.log(action);
    removeOneItem(action.name, action.id);
    return action;
  }

  if (action.type === "CREATE_COLLECTION") {
    createItem("collection", action.formData);
    return action;
  }

  if (action.type === "COLLECTION_CREATED") {
    return action.newCollection;
  }

  return newCollection;
}

export default collectionReducer;