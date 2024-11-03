import { useNavigate } from "react-router-dom";

function ExloreButton() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/search");
  }

  return (
    <div className="flex basis-1/4 items-center justify-center">
      <button
        onClick={handleNavigate}
        className="rounded-full bg-lemonTart px-8 py-2 font-bold text-blueberry transition duration-300 ease-in-out hover:scale-110 sm:px-14 sm:py-2 sm:text-lg md:px-16 lg:px-20 lg:py-4"
      >
        Explore ➡
      </button>
    </div>
  );
}

export default ExloreButton;
