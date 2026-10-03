import React, { useState } from "react";
import "../App.css";
import IngredientList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe";

function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false)

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    }

    return (
        <main>
            <form action={handleSubmit}>
                <input type="text" placeholder="e.g. Oregano" aria-label="Add ingredient" name="ingredient" />
                <button>Add Ingredient</button>
            </form>
            {ingredients.length > 0 && (
                <IngredientList ingredients={ingredients} setRecipeShown={setRecipeShown} />
            )}
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}

export default Main