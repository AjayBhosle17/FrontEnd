import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){

    return(

        <>
            <nav>
                <ul>
                    <li>
                        {/* <a href="/">Home</a> */}
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        {/* <a href="/about">About</a> */}
                        <NavLink to='/about'>About</NavLink>


                    </li>

                    <li>
                        {/* <a href="/service">Service</a> */}
                        <NavLink to='/service'>Service</NavLink>

                    </li>

                    <li>
                        {/* <a href="/service">Service</a> */}

                    </li>
                </ul>
            </nav>
        </>
    )

}

export default Navbar;