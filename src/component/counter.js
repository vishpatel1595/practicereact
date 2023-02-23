import React, {useState} from "react";
import { Button } from "bootstrap";

function Counter() {
    const [count, setCount] = useState(0); 
    const [hide, sethidden] = useState(false); 

   function handleClick (event) {
    // console.log (count);
    //  setCount(count + 1);
     setCount(prev => prev + 1);
     sethidden(prev => !prev);
    }
    return (       
    <div>
        <input type="text" name="" className={hide ? "" : "d-none"} id="" placeholder={count} />
        <button className="btn btn-primary" onClick={handleClick}>add value</button>
    </div>
    )
}

export default Counter  ;
