import { useRecipes } from "./RecipesProvider";

function ShowMoreRecipes() {
  const { getRecipes, handleOffset } = useRecipes();

  // const handleShowMoreButton = async () => {
  //   await handleOffset();
  //   getRecipes(true);
  // };

  const handleShowMoreButton = async () => {
    handleOffset(); // Increment the offset
    setTimeout(() => {
      getRecipes(true); // Fetch more recipes with the updated baseURL
    }, 100); // Add a small delay to allow useEffect to update the baseURL
  };

  return (
    <button
      onClick={handleShowMoreButton}
      className="flex items-center justify-center gap-2 pt-8 hover:cursor-pointer"
    >
      <span className="text-xl text-eggWhite hover:underline sm:text-2xl">
        Show More
      </span>
    </button>
  );
}

export default ShowMoreRecipes;
