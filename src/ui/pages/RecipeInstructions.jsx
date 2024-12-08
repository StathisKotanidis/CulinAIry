import { useRecipes } from "../../features/Recipes/RecipesProvider";
import BackButton from "../BackButton";
import Slideshow from "../Slideshow";

function RecipeInstructions() {
  const { instructions } = useRecipes();

  if (!instructions || instructions.length === 0) {
    return <p>No instructions found for this recipe.</p>;
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-eggplant p-4 text-eggWhite">
      <h1 className="pb-4 text-xl font-bold underline sm:text-2xl md:text-3xl lg:text-4xl">
        Instructions
      </h1>
      <ul className="flex flex-col gap-2">
        {instructions.map((instruction) => (
          <li
            className="text-md py-2 italic sm:text-lg md:text-xl lg:text-2xl"
            key={instruction.step}
          >
            {instruction.number}. {instruction.step}
          </li>
        ))}
      </ul>
      <h1 className="flex items-center justify-center pb-6 pt-8 text-center text-xl font-bold underline sm:text-2xl md:text-3xl lg:text-4xl">
        Similar Recipes
      </h1>
      <Slideshow />
      <BackButton />
    </div>
  );
}

export default RecipeInstructions;
