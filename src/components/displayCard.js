import React from "react";

const DisplayCard = (props) => {
    return(
        <div>
            {props.name}
            <img src={props.url} />
        </div>
    )
}

export default DisplayCard