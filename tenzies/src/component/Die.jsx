import React from 'react';
import '../App.css';

function Die({ value, hold }) {
    return (
        <button className="die" aria-pressed={value.isHeld} aria-label={`Die with value ${value.value}, ${value.isHeld ? "held" : "not held"}`} onClick={hold} style={{ backgroundColor: value.isHeld ? "#59E391" : "white" }}>
            {value.value}
        </button>
    )
}

export default Die;