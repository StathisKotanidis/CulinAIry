import { useRecipes } from "./RecipesProvider";

function ShowMoreRecipes() {
  const { getRecipes, handleOffset } = useRecipes();

  const handleShowMoreButton = async () => {
    handleOffset();
  };
  return (
    <button
      onClick={handleShowMoreButton}
      className="flex items-center justify-center gap-2 pt-8 hover:cursor-pointer"
    >
      <span className="text-xl text-eggWhite hover:underline">Show More</span>
    </button>
  );
}

export default ShowMoreRecipes;
