import { useFilters } from "./FiltersProvider";
import Calories from "./Calories";
import Cuisine from "./Cuisine";
import Diet from "./Diet";
import FiltersToggler from "./FiltersToggler";
import Ingredient from "./Ingredient";
import Intolerances from "./Intolerances";
import Nutrients from "./Nutrients";
import SearchRecipesButton from "./SearchRecipesButton";
import AskChef from "../Chat/AskChef";
import ClearButton from "../../ui/ClearButton";
import { useEffect, useState } from "react";

function Filters() {
  const { toggles } = useFilters();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(<ClearButton />);
  return (
    <div className="flex flex-col justify-center gap-2">
      <Ingredient />
      <FiltersToggler />
      {toggles.filters ? (
        <>
          <Diet />
          <Cuisine />
          <Nutrients />
          <Calories />
          <Intolerances />
        </>
      ) : null}
      <AskChef />
      <SearchRecipesButton />
      {isLargeScreen && <ClearButton />}
    </div>
  );
}

export default Filters;
