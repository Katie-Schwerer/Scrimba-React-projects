import React, { useState } from "react";
import "../App.css";

function Main() {
    const [ingredients, setIngredients] = useState([]);

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
                <section>
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
                            <button>Get a recipe</button>
                        </div>
                    )}
                </section>
            )}
        </main>
    )
}

export default Main