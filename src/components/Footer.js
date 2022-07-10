import React from "react";

const Footer = () => {
    return (
        <div style={footer}>
            <h1>Copyright © Jofer 2022</h1>
        </div>
    )
}

export default Footer;

const footer = {
    display: "flex",
    background: "#295e77",
    padding: "0 0",
    justifyContent: "center",
    color: "#fff",
    alignItems: "center",
    position: "absolute",
    bottom: "0",
    width: "100%"
}
