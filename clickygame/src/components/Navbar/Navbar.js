import React from "react";
import "./Navbar.css"

const Navbar = ({children}) => (

<ul className="nav nav-pills nav-justified">
{children}

</ul>


);

export default Navbar;