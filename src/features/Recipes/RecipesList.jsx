import { useRecipes } from "./RecipesProvider";

function RecipesList() {
  const { recipes, getInstructions } = useRecipes();

  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-12">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="group relative flex h-64 w-3/4 flex-col items-center justify-center overflow-hidden rounded-lg border-4 border-lemonTart"
        >
          {/* Recipe Image */}
          <img
            className="h-full w-full object-fill transition-transform duration-300 group-hover:scale-110"
            src={recipe.image}
            alt="recipe-img"
          />

          {/* Hover Overlay with Blur */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
            <button
              onClick={() => {
                console.log("Button clicked for recipe:", recipe.id);
                getInstructions(recipe.id);
              }}
              className="cursor-pointer rounded-lg border-2 border-lemonTart bg-eggplant px-4 py-2 font-bold text-eggWhite hover:bg-eggplant sm:px-6 sm:py-3 sm:text-lg md:px-8 md:py-4 md:text-xl"
            >
              See Instructions 👩‍🍳
            </button>
          </div>

          {/* Recipe Title */}
          <p className="absolute bottom-0 w-full bg-lemonTart py-2 text-center font-bold italic text-eggplant sm:text-lg md:text-xl">
            {recipe.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RecipesList;
