import { useFilters } from "../Filters/FiltersProvider";
import Loader from "../../ui/Loader";

function Recipe() {
  const { apiData, loading } = useFilters();
  const recipes = apiData?.results;

  if (loading) return <Loader />;

  if (!apiData) return null;

  return recipes && recipes.length > 0 ? (
    <div className="flex flex-col items-center gap-4 pt-12">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="relative flex flex-col items-center justify-center w-3/4 h-64 overflow-hidden border-4 border-yellow-400 rounded-lg"
        >
          {/* Recipe Image */}
          <img
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            src={recipe.image}
            alt="recipe-img"
          />

          {/* Hover Overlay with Blur */}
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black opacity-0 bg-opacity-80 backdrop-blur-md group-hover:opacity-100">
            <span className="px-4 py-2 font-bold text-white bg-yellow-600 border-2 border-yellow-400 rounded-lg hover:bg-yellow-700">
              See Instructions 👩‍🍳
            </span>
          </div>

          {/* Recipe Title */}
          <p className="absolute bottom-0 w-full py-2 italic font-bold text-center text-white bg-yellow-600">
            {recipe.title}
          </p>
        </div>
      ))}
    </div>
  ) : (
    <p className="flex items-center justify-center pt-10 text-xl text-eggWhite">
      No recipes found 😞, try some different filters!
    </p>
  );
}

export default Recipe;
