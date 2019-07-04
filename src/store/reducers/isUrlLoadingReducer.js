
function isUrlLoadingReducer(isUrlLoading = false, action) {
    if (action.type === "FETCH_URL") {
        return true;
    }

    if (action.type === "URL_LOADED") {
        return false;
    }

    return isUrlLoading;
}

export default isUrlLoadingReducer;