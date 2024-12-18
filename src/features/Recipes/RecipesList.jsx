import { useEffect, useState, useRef } from "react";
import { useRecipes } from "./RecipesProvider";
import { Loader } from "@chatscope/chat-ui-kit-react";

function RecipesList() {
  const { recipes, getInstructions } = useRecipes();
  const [visibleRecipes, setVisibleRecipes] = useState(6);
  const loaderRef = useRef(null); // Ref to detect the loader

  // Load more recipes when user scrolls near the loader
  const loadMoreRecipes = () => {
    if (visibleRecipes < recipes.length) {
      setVisibleRecipes((prev) => prev + 6); // Add 5 more recipes
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreRecipes();
        }
      },
      { threshold: 1.0 }, // Trigger when loader is fully visible
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loaderRef, visibleRecipes]);

  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
      {recipes.slice(0, visibleRecipes).map((recipe, index) => (
        <div
          key={`${recipe.id}-${index}`}
          className="relative flex flex-col items-center justify-center overflow-hidden border-4 rounded-lg group border-lemonTart"
        >
          {/* Recipe Image */}
          <img
            className="h-[250px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
            src={recipe.image}
            alt="recipe-img"
          />

          {/* Hover Overlay with Blur */}
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black opacity-0 bg-opacity-80 backdrop-blur-md group-hover:opacity-100">
            <button
              onClick={() => getInstructions(recipe.id)}
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

      {/* Loader */}
      {visibleRecipes < recipes.length && (
        <div className="flex items-center justify-center" ref={loaderRef}>
          <Loader />
        </div>
      )}
    </div>
  );
}

export default RecipesList;
