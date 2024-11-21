import { useFilters } from "../Filters/FiltersProvider";

function RecipesList() {
  const { apiData } = useFilters();
  const recipes = apiData?.results;

  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-12">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="group relative flex h-64 w-3/4 flex-col items-center justify-center overflow-hidden rounded-lg border-4 border-lemonTart"
        >
          {/* Recipe Image */}
          <img
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            src={recipe.image}
            alt="recipe-img"
          />

          {/* Hover Overlay with Blur */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
            <span className="cursor-pointer rounded-lg border-2 border-lemonTart bg-eggplant px-4 py-2 font-bold text-eggWhite hover:bg-eggplant">
              See Instructions 👩‍🍳
            </span>
          </div>

          {/* Recipe Title */}
          <p className="absolute bottom-0 w-full bg-lemonTart py-2 text-center font-bold italic text-eggplant">
            {recipe.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RecipesList;
