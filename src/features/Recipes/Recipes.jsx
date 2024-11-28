import Loader from "../../ui/Loader";
import BackToFilters from "./BackToFilters";
import RecipesNotFound from "./RecipesNotFound";
import RecipesList from "./RecipesList";
import { useRecipes } from "./RecipesProvider";
import { useEffect, useState } from "react";

function Recipes() {
  const { recipes, loading } = useRecipes();
  if (loading) return <Loader />;
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  // Update the `isSmallScreen` state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return recipes && recipes?.length > 0 ? (
    <>
      <RecipesList />
      <div className="m-auto flex w-3/4 items-center justify-between">
        {isSmallScreen && <BackToFilters />}
      </div>
    </>
  ) : (
    <RecipesNotFound />
  );
}

export default Recipes;
