import { useRecipes } from "./RecipesProvider";

function SimilarRecipes() {
  const { similarRecipes } = useRecipes();

  if (!similarRecipes) console.log("There similaRecipes is not valid");
  return (
    <div className="flex flex-col gap-8 pt-6">
      <h1>Similar Recipes</h1>
      <div className="flex flex-col items-center justify-center gap-4 pt-12">
        {similarRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="relative flex flex-col items-center justify-center w-3/4 h-64 overflow-hidden border-4 rounded-lg group border-lemonTart"
          >
            {/* Recipe Image */}
            <img
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              src={recipe.sourceUrl}
              alt="recipe-img"
            />

            {/* Recipe Title */}
            <p className="absolute bottom-0 w-full py-2 italic font-bold text-center bg-lemonTart text-eggplant">
              {recipe.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarRecipes;
