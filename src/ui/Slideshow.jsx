import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useRecipes } from "../features/Recipes/RecipesProvider";

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { similarRecipes, getInstructions } = useRecipes();

  // Navigate to the previous slide
  const prevRecipe = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? similarRecipes.length - 1 : prev - 1,
    );
  };

  // Navigate to the next slide
  const nextRecipe = () => {
    setCurrentSlide((prev) =>
      prev === similarRecipes.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div
      className="relative w-full mx-auto overflow-hidden rounded-lg group lg:w-3/4"
      style={{
        height: "400px", // Set a fixed height for the slideshow container
      }}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {similarRecipes.map((recipe, index) => (
          <div
            key={recipe.id}
            className="flex-shrink-0 w-full bg-center bg-cover"
            style={{
              backgroundImage: `url(https://spoonacular.com/recipeImages/${recipe.id}-312x231.${recipe.imageType})`,
              height: "400px", // Match the parent height to ensure proper scaling
            }}
          >
            <button
              onClick={() => getInstructions(recipe.id)}
              className="flex items-end justify-center w-full h-full p-4 bg-gradient-to-t from-black to-transparent hover:cursor-pointer"
            >
              <p className="pb-8 font-bold text-eggWhite">{recipe.title}</p>
            </button>
          </div>
        ))}
      </div>

      <button
        className="absolute p-2 text-white transition-opacity transform -translate-y-1/2 bg-gray-800 rounded-full opacity-0 left-4 top-1/2 group-hover:opacity-100"
        onClick={prevRecipe}
      >
        <IoIosArrowBack />
      </button>

      <button
        className="absolute p-2 text-white transition-opacity transform -translate-y-1/2 bg-gray-800 rounded-full opacity-0 right-4 top-1/2 group-hover:opacity-100"
        onClick={nextRecipe}
      >
        <IoIosArrowForward />
      </button>

      {/* Dots Indicator */}
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
        {similarRecipes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            } transition-all`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
