import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
    return (
        <div style={nav}>
            <h1>Jofer</h1>
            <ul style={myUl}>
                <li><Link to="/" style={link}>Home</Link></li>
                <li><Link to="/" style={link}>Profil</Link></li>
                <li><Link to="/about" style={link}>About</Link></li>
                <li><Link to="/explore" style={link}>Explore</Link></li>
                <li><Link to="/findintern" style={link}>Find Internship</Link></li>
                <li><Button text="Sign In" variant="sign" /></li>
            </ul>
        </div>
    )
}

export default Navbar;

const link = {
    textDecoration: "none",
    color: "#fff"
}

const nav = {
    display: "flex",
    background: "#295e77",
    padding: "0 4rem",
    justifyContent: "space-between",
    color: "#fff",
    alignItems: "center"
}

const myUl = {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    width: "50%"
}
