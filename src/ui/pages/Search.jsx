import { useEffect, useState } from "react";
import { useRecipes } from "../../features/Recipes/RecipesProvider";
import Filters from "../../features/Filters/Filters";
import Recipes from "../../features/Recipes/Recipes";

function Search() {
  const { showFilters } = useRecipes();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  // Function to handle screen size changes
  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024);
  };

  useEffect(() => {
    // Add event listener to track screen width changes
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`flex min-h-screen bg-eggplant p-4 ${
        isLargeScreen ? "flex-row" : "flex-col"
      }`}
    >
      {isLargeScreen ? (
        <>
          <div className="w-1/4 p-2">
            <Filters />
          </div>
          <div
            className={`${isLargeScreen ? "w-3/4" : "w-full"} h-[calc(100vh-4rem)] flex-grow overflow-y-auto p-2`}
          >
            <Recipes />
          </div>
        </>
      ) : (
        // Maintain toggle behavior for small screens
        <div className="p-2">{showFilters ? <Filters /> : <Recipes />}</div>
      )}
    </div>
  );
}

export default Search;
