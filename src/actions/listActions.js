import listActionTypes from "../actionTypes/listActionTypes";

const removeFromList = () =>{
    return{
        type: listActionTypes.REMOVE_FROM_LIST
    }
}

const addToList = DisplayCardElement => {
    return {
        type: listActionTypes.ADD_TO_LIST,
        payload:{
            displayCard: DisplayCardElement
        }
    }
}

export {addToList ,removeFromList}