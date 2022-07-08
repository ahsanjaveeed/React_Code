import React from "react";

function Dinner(props){
    return(
        <div>
            <h1>Hello, {props.persent}</h1>
            <h1>{ props.future }</h1>
        </div>
    );
}
export default Dinner;