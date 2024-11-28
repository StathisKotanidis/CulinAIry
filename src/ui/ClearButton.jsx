import { AiOutlineClear } from "react-icons/ai";
function ClearButton() {
  return (
    <div className="flex items-center justify-center">
      <button className="mt-6 flex w-3/4 items-center justify-center gap-2 rounded-full bg-eggWhite py-3 text-xl font-bold text-eggplant hover:scale-110">
        Clear <AiOutlineClear />
      </button>
    </div>
  );
}

export default ClearButton;
