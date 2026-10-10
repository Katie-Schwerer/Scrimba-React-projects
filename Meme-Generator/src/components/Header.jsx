import React from "react";
import trollface from "../assets/troll-face.png"

function Header() {
    return (
        <header className="header">
            <img src={trollface} />
            <h1>Meme Generator</h1>
        </header>
    )
}

export default Header;