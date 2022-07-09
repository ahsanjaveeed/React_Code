import React, { useReducer } from "react";
import CounterReducer from "./CounterReducer";

const ChildComponent = ()=> {

    let [state, actionPerform] = useReducer(CounterReducer, 0);

    return (
        <div>
            <h3>My value is {state}</h3>
            <br />
            <button  onClick={()=> (actionPerform('INC'))}>Click to Add</button>
            <button  onClick={()=> (actionPerform('DEC'))}>Click to Minus</button>
        </div>
    );
}

export default ChildComponent