import Description from "../Description";
import ExloreButton from "../ExloreButton";
import Logo from "../Logo";

function Homepage() {
  return (
    <div className="flex h-screen flex-col items-center justify-between bg-eggplant">
      <Logo />
      <Description />
      <ExloreButton />
    </div>
  );
}

export default Homepage;
