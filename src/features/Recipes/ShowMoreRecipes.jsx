// import { useRecipes } from "./RecipesProvider";

// function ShowMoreRecipes() {
//   const { getRecipes, handleOffset, handleShowMore } = useRecipes();

//   // const handleShowMoreButton = async () => {
//   //   await handleOffset();
//   //   getRecipes(true);
//   // };

//   return (
//     <button
//       onClick={handleShowMore}
//       className="flex items-center justify-center gap-2 pt-8 hover:cursor-pointer"
//     >
//       <span className="text-xl text-eggWhite hover:underline sm:text-2xl">
//         Show More
//       </span>
//     </button>
//   );
// }

// export default ShowMoreRecipes;

import { useRecipes } from "./RecipesProvider";

function ShowMoreRecipes() {
  const { getRecipes } = useRecipes();

  // const handleShowMoreButton = async () => {
  //   await handleOffset();
  //   getRecipes(true);
  // };

  return (
    <button
      onClick={getRecipes}
      className="flex items-center justify-center gap-2 pt-8 hover:cursor-pointer"
    >
      <span className="text-xl text-eggWhite hover:underline sm:text-2xl">
        Show More
      </span>
    </button>
  );
}

export default ShowMoreRecipes;
