import React from "react";
import { Link } from "react-router-dom";

export default function Page(){

    return(

        <>
            <h1>404</h1>
            <h2>Page Not Found</h2>

            <Link to='/'>Return to Home Page</Link>
        </>
    )
}