import React from "react";
import globe from "./../assets/globe.png";
import "../App.css";

function Header() {
    return (
        <header>
            <img src={globe} className="icon" alt="Globe icon" />
            <p className="header">my travel journal.</p>
        </header>
    )
}

export default Header;