import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="nav-top">
      <Link to="/">ACCUEIL</Link>
      <Link to="/products">PRODUITS</Link>
      <Link to="/contact">CONTACT</Link>
    </nav>
  );
};

export default NavBar;
