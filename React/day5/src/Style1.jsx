import React from "react";
import "./Style.css"

function Style1(){

    const headline={
        color:'Blue',
        backgroundColor:'Orange'
    }

    return (<>
    

        <h1 style={{color: "green" , backgroundColor:"skyblue"}}> Inline CSS</h1>

        <h1 className="primary">Normal CSS</h1>
        <h1 style={headline}>CSS IN JS</h1>
   
    </> );
}

export default Style1;





