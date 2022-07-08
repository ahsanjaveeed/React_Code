import React, { useState } from "react";

function UseStateFunc(){

    let [count, setCount] = useState(1);

    return (
        <div>
            <h1>Value of Count is : {count}</h1>
            <br/>
            <button onClick={()=> setCount(count + 1 ) }> Click Here </button>
        </div>
    );
}

export default UseStateFunc;