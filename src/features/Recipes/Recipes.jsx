import Loader from "../../ui/Loader";
import BackToFilters from "./BackToFilters";
import RecipesNotFound from "./RecipesNotFound";
import RecipesList from "./RecipesList";
import { useRecipes } from "./RecipesProvider";
import { useEffect, useState } from "react";

function Recipes() {
  const { recipes, loading, hasSearched } = useRecipes();
  if (loading) return <Loader />;
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!hasSearched && !isSmallScreen) {
    return (
      <div className="pt-56 italic text-center justify-centertext-lg text-eggWhite xl:text-3xl 2xl:text-4xl">
        Let's get some recipes! 🥧
      </div>
    );
  }

  return recipes && recipes?.length > 0 ? (
    <>
      <RecipesList />
      <div className="flex items-center justify-between w-3/4 m-auto">
        {isSmallScreen && <BackToFilters />}
      </div>
    </>
  ) : (
    <RecipesNotFound />
  );
}

export default Recipes;
