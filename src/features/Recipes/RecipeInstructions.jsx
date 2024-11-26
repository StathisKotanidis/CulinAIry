import { useRecipes } from "./RecipesProvider";
import Slideshow from "../../ui/Slideshow";

function RecipeInstructions() {
  const { instructions } = useRecipes();

  if (!instructions || instructions.length === 0) {
    return <p>No instructions found for this recipe.</p>;
  }

  // if (!Array.isArray(instructions)) {
  //   return <p>Instructions data is invalid or not an array.</p>;
  // }

  return (
    <div className="flex flex-col items-center h-full min-h-screen p-4 bg-eggplant text-eggWhite">
      <h1 className="pb-4 text-xl font-semibold">Instructions</h1>
      <ul className="flex flex-col gap-2">
        {instructions.map((instruction) => (
          <li className="text-md" key={instruction.step}>
            {instruction.number}. {instruction.step}
          </li>
        ))}
      </ul>
      <h1 className="flex items-center justify-center pt-8 pb-4 text-xl font-semibold text-center">
        Similar Recipes
      </h1>
      <Slideshow />
    </div>
  );
}

export default RecipeInstructions;
