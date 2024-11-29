import { useNavigate } from "react-router-dom";
import chefCrumb from "../../ui/images/chefCrumb.png";

function AskChef() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-4 pt-10 text-lg text-center text-eggWhite">
      <span className="text-2xl font-semibold sm:text-3xl">OR</span>
      <span className="pb-6 sm:text-2xl md:text-3xl">Ask Chef Crumb</span>
      <button
        className="transition duration-300 ease-in-out hover:scale-110"
        onClick={() => navigate("/chat-with-chef")}
      >
        <img
          className="w-24 rounded-full sm:w-32 md:w-36 lg:w-28"
          alt="chef-image"
          src={chefCrumb}
        />
      </button>
    </div>
  );
}

export default AskChef;
