import { useParams } from "react-router-dom";
import { useRecipes } from "./RecipesProvider";
import SimilarRecipes from "./SimilarRecipes";

function RecipeInstructions() {
  const { instructions } = useRecipes();
  // const { recipeID } = useParams();
  // console.log("Instructions in RecipeInstructions:", instructions);

  if (!instructions || instructions.length === 0) {
    return <p>No instructions found for this recipe.</p>;
  }

  // if (!Array.isArray(instructions)) {
  //   return <p>Instructions data is invalid or not an array.</p>;
  // }

  return (
    <div className="flex flex-col items-center h-full p-4 bg-eggplant text-eggWhite">
      <h1 className="pb-4 text-xl font-semibold">Instructions</h1>
      <ul className="flex flex-col gap-2">
        {instructions.map((instruction) => (
          <li className="text-md" key={instruction.step}>
            {instruction.number}. {instruction.step}
          </li>
        ))}
      </ul>
      <SimilarRecipes />
    </div>
  );
}

export default RecipeInstructions;
