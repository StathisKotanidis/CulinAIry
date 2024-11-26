import { useNavigate } from "react-router-dom";

function AskChef() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-4 text-center text-lg text-eggWhite">
      <span>OR</span>
      <span>Ask Chef Crumb</span>
      <button
        className="hover:scale-110"
        onClick={() => navigate("/chat-with-chef")}
      >
        <img
          className="w-24 rounded-full"
          alt="chef-image"
          src="src/assets/chefCrumb.png"
        />
      </button>
    </div>
  );
}

export default AskChef;
