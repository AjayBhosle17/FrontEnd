import React from "react";

function Propspass(props){

    return (

        <>
            <h2>Passing Argument</h2>
            <button onClick={props.handle} >Click Me</button>

            {/* Example 2 */}
            
            <p> Count: {props.count}</p>
            <button onClick={props.increment}>Click Me</button>

            <h2> Hello Bro </h2>


        </>
        
    );

}

export default Propspass;
