import React, { useState } from "react";
import "../App.css";

function Main() {
    const [ingredients, setIngredients] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g. Oregano" aria-label="Add ingredient" name="ingredient" />
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </main>
    )
}

export default Main