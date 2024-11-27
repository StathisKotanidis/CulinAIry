import { useRecipes } from "../../features/Recipes/RecipesProvider";
import Slideshow from "../Slideshow";

function RecipeInstructions() {
  const { instructions } = useRecipes();

  if (!instructions || instructions.length === 0) {
    return <p>No instructions found for this recipe.</p>;
  }

  // if (!Array.isArray(instructions)) {
  //   return <p>Instructions data is invalid or not an array.</p>;
  // }

  return (
    <div className="flex h-full min-h-screen flex-col items-center bg-eggplant p-4 text-eggWhite">
      <h1 className="pb-4 text-xl font-semibold">Instructions</h1>
      <ul className="flex flex-col gap-2">
        {instructions.map((instruction) => (
          <li className="text-md" key={instruction.step}>
            {instruction.number}. {instruction.step}
          </li>
        ))}
      </ul>
      <h1 className="flex items-center justify-center pb-4 pt-8 text-center text-xl font-semibold">
        Similar Recipes
      </h1>
      <Slideshow />
    </div>
  );
}

export default RecipeInstructions;
