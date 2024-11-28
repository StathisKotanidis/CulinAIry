import Description from "../Description";
import ExloreButton from "../ExloreButton";
import Logo from "../Logo";

function Homepage() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-20 bg-eggplant p-4 md:gap-28 lg:gap-32 xl:gap-36 2xl:gap-44">
      <Logo />
      <Description />
      <ExloreButton />
    </div>
  );
}

export default Homepage;
