import React from "react";
import "../App.css";

function Main() {
    return (
        <main>
            <form>
                <input type="text" placeholder="e.g. Oregano" aria-label="Add ingredient" />
                <button>Add Ingredient</button>
            </form>
        </main>
    )
}

export default Main