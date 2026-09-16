import React from "react";
import icon from "../images/chef-claude-icon.png";
import "../App.css";

function Header() {
    return (
        <header>
            <img src={icon} alt="Chef Claude Logo" />
            <h1>Chef Claude</h1>
        </header>
    )
}

export default Header;