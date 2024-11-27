import { useNavigate } from "react-router-dom";
import { useFilters } from "../features/Filters/FiltersProvider";
import { FaLongArrowAltLeft } from "react-icons/fa";

function BackButton() {
  const { handleClearUrl } = useFilters();
  const navigate = useNavigate();

  const handleBackButton = () => {
    handleClearUrl();
    navigate("/search");
  };
  return (
    <button
      onClick={handleBackButton}
      className="flex items-center justify-center gap-2 pt-8 text-xl text-eggWhite hover:cursor-pointer hover:underline"
    >
      <FaLongArrowAltLeft />
      <span>Back</span>
    </button>
  );
}

export default BackButton;
