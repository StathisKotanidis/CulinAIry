import { RiLoader5Fill } from "react-icons/ri";

function Loader() {
  return (
    <div className="flex justify-center px-2 pt-6 items-align text-lemonTart">
      <RiLoader5Fill className="w-24 h-24 spinner" />
    </div>
  );
}

export default Loader;
