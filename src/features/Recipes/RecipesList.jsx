// import { useFilters } from "../Filters/FiltersProvider";
import { useNavigate } from "react-router-dom";
import { useRecipes } from "./RecipesProvider";

function RecipesList() {
  const { recipes } = useRecipes();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-12">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="relative flex flex-col items-center justify-center w-3/4 h-64 overflow-hidden border-4 rounded-lg group border-lemonTart"
        >
          {/* Recipe Image */}
          <img
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            src={recipe.image}
            alt="recipe-img"
          />

          {/* Hover Overlay with Blur */}
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black opacity-0 bg-opacity-80 backdrop-blur-md group-hover:opacity-100">
            <button
              onClick={() => navigate(`/recipe-instructions/${recipe.id}`)}
              className="px-4 py-2 font-bold border-2 rounded-lg cursor-pointer border-lemonTart bg-eggplant text-eggWhite hover:bg-eggplant"
            >
              See Instructions 👩‍🍳
            </button>
          </div>

          {/* Recipe Title */}
          <p className="absolute bottom-0 w-full py-2 italic font-bold text-center bg-lemonTart text-eggplant">
            {recipe.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RecipesList;
