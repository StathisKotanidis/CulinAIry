function Ingredient() {
  return (
    <div className="items-align flex justify-center">
      <input
        className="rounded-full bg-eggWhite px-4 py-2 text-center text-eggplant placeholder:text-sm placeholder:italic"
        placeholder="type your main ingredient"
        type="text"
        name="ingredient"
        id="ingredient"
      ></input>
      <label for="ingredient" className="hidden"></label>
    </div>
  );
}

export default Ingredient;
