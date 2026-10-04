import React from "react";

function IngredientList({ ingredients, setRecipeShown }) {
    return <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
            {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        {ingredients.length > 3 && (
            <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={setRecipeShown}>Get a recipe</button>
            </div>
        )}
    </section>
}

export default IngredientList;