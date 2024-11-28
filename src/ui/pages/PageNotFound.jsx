import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-eggplant text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
      <h1>404 - The Chef Messed Up! 👨‍🍳</h1>
      <p>This page is undercooked. Let’s head back and start fresh!</p>
      <button onClick={() => navigate("/")}>Back to Home 🏠</button>
    </div>
  );
}

export default PageNotFound;
