import { useFilters } from "../Filters/FiltersProvider";

function Recipe() {
  const { apiData } = useFilters();
  const recipes = apiData?.results || [];
  return (
    <div className="flex flex-col gap-2">
      {recipes.map((recipe) => (
        <div
          className="w-3/4 h-32 border-2 border-black rounded-xl"
          key={recipe.id}
        >
          {recipe.title}
        </div>
      ))}
    </div>
  );
}

export default Recipe;
