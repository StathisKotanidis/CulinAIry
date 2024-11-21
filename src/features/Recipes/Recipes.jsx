import { useFilters } from "../Filters/FiltersProvider";
import Loader from "../../ui/Loader";
import BackToFilters from "./BackToFilters";
import ShowMoreRecipes from "./ShowMoreRecipes";
import RecipesNotFound from "./RecipesNotFound";
import RecipesList from "./RecipesList";

function Recipes() {
  const { apiData, loading, showFilters } = useFilters();
  const recipes = apiData?.results;

  if (loading) return <Loader />;

  if (!apiData) return null;

  return recipes && recipes?.length > 0 ? (
    <>
      <RecipesList />
      <div className="m-auto flex w-3/4 items-center justify-between">
        <BackToFilters />
        <ShowMoreRecipes />
      </div>
    </>
  ) : (
    <RecipesNotFound />
  );
}

export default Recipes;
