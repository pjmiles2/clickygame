import React from "react";

const Navbar = ({children}) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    {children}
  </nav>
);

export default Navbar;