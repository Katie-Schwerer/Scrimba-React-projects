import React, { useState } from "react";
import "../App.css";
import IngredientList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "./ai";

function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);
    const [recipe, setRecipe] = useState("");

    const recipeSection = React.useRef(null);

    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipe])

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    }

    async function toggleRecipeShown() {
        const getRecipe = await getRecipeFromMistral(ingredients);
        setRecipe(getRecipe);
        setRecipeShown(true);
    }

    return (
        <main>
            <form action={handleSubmit}>
                <input type="text" placeholder="e.g. Oregano" aria-label="Add ingredient" name="ingredient" />
                <button>Add Ingredient</button>
            </form>
            {ingredients.length > 0 && (
                <IngredientList ingredients={ingredients} setRecipeShown={toggleRecipeShown} recipeSection={recipeSection} />
            )}
            {recipeShown && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}

export default Main