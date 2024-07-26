import React, { useEffect, useState } from "react";

function Hook1(){

    
    const[count,setcount]=useState(0);
    const[count1,Totalcount]=useState(10);

    useEffect(()=>{

        // alert("UseEffect Hook");
        console.log("UseEffect Hook");
    },[count1]);
    
    return(
        <>

            <h1>UseState</h1>

            {/* Example 2 */}

            <h2> Count : {count}</h2>
            <button onClick={()=>setcount(count + 1)}>Update Count</button>


            <h2> Count : {count1}</h2>
            <button onClick={()=>Totalcount(count1 + 1)}>Update Count</button>

        </>
    );
}

export default Hook1;