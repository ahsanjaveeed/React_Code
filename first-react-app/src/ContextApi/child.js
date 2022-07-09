import React, { useContext } from "react";
import CounterContext from "./counterContext";

const Child = () =>{
    
    const counter = useContext(CounterContext);

    return(
        <div>
            <h3>My name is {counter[0]}</h3>
            <br />
            <button onClick={() => (counter[1](++counter[0]))}>Increment Number</button>
        </div>
    );
}

export default Child;