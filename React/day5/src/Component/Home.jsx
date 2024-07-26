import React from "react";
import { useNavigate , useLocation} from "react-router-dom";

export default function Home(){

    const navigate=useNavigate;
    const locat=useLocation;

    console.log(locat.state);
    
    return(

        <>
            <h2>Hello Home Page</h2>
            
            <button onClick={()=> navigate("/about")}> Go to About Page</button>
            <button onClick={()=>navigate('/service')}> Go to Service Page</button>
        </>
    )

}