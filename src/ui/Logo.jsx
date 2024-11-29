import logo from "./images/logo.png";
function Logo() {
  return (
    <img
      className="h-[120px] w-5/6 sm:w-9/12 lg:w-1/2 2xl:w-1/3"
      src={logo}
      alt="logo"
    ></img>
  );
}

export default Logo;
