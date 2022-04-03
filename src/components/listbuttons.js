import React from "react";
import store from '../store' 
import {addToList ,removeFromList} from '../actions/listActions'
import DisplayCard from "./displayCard";

const Button = props =>{
    return(
        <div>
            <button onClick={()=>addElementToList()} >add</button>
            <button onClick = {() => removeElementToList()} > remove </button>
        </div>
    )
}

export default Button