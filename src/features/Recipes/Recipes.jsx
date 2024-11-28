import Loader from "../../ui/Loader";
import BackToFilters from "./BackToFilters";
import RecipesNotFound from "./RecipesNotFound";
import RecipesList from "./RecipesList";
import { useRecipes } from "./RecipesProvider";

function Recipes() {
  const { recipes, loading } = useRecipes();
  if (loading) return <Loader />;

  return recipes && recipes?.length > 0 ? (
    <>
      <RecipesList />
      <div className="m-auto flex w-3/4 items-center justify-between">
        <BackToFilters />
      </div>
    </>
  ) : (
    <RecipesNotFound />
  );
}

export default Recipes;
