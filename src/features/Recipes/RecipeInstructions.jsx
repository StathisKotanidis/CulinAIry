import { useRecipes } from "./RecipesProvider";

function RecipeInstructions() {
  const { instructions } = useRecipes();
  console.log("Instructions in RecipeInstructions:", instructions);

  if (!instructions || instructions.length === 0) {
    return <p>No instructions found for this recipe.</p>;
  }

  // if (!Array.isArray(instructions)) {
  //   return <p>Instructions data is invalid or not an array.</p>;
  // }

  return (
    <div className="flex h-full flex-col items-center gap-2 bg-eggplant text-lg text-eggWhite">
      <h1 className="">Instructions</h1>
      <ul>
        {instructions.map((instruction) => (
          <li key={instruction.number || instruction.step}>
            {instruction.number}. {instruction.step}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeInstructions;
