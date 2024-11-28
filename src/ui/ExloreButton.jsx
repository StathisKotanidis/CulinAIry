import { useNavigate } from "react-router-dom";

function ExloreButton() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/search");
  }

  return (
    <button
      onClick={handleNavigate}
      className="rounded-full bg-lemonTart px-10 py-2 font-bold text-blueberry transition duration-300 ease-in-out hover:scale-110 sm:px-14 sm:py-3 sm:text-lg md:px-16 md:py-4 lg:px-20 lg:py-4 xl:px-24 xl:py-6"
    >
      Explore ➡
    </button>
  );
}

export default ExloreButton;
