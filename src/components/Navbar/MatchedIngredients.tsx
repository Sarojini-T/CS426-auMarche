import { useContext, useEffect } from "react";
import { searchBarData } from "../../data/search-bar-data";
import { UserValueContext, userValueContextType } from "./NavBarContexts";
import { useNavigate } from "react-router-dom";

type Props = {
  foundMatch: boolean;
  setMatch: React.Dispatch<React.SetStateAction<boolean>>;
};

// This component will return a list of ingredients that match the first few letters that the
// user is typing in the search bar => ie: autocomplete
const MatchedIngredients: React.FC<Props> = ({ foundMatch, setMatch }) => {
  // Retrieve state from NavSearchBar
  const { value, setValue }: userValueContextType =
    useContext(UserValueContext);

  // Array that will take the search item that the user is currently typing & compare it
  // with the ingredients data, only items that start with the same letters will be returned
  const matchedIngredients: string[] = searchBarData.filter((ingredient) =>
    ingredient && ingredient.toLowerCase().startsWith(value.toLowerCase())
      ? true
      : false
  );

  // Update the state based on if a match has been found or not
  useEffect(() => {
    return matchedIngredients.length > 0 ? setMatch(() => true) : setMatch(() => false);
  },[matchedIngredients, setMatch])

  // When user presses the enter key, they will be redirected to the results page
  // adding the item they selected to the routes : result:selected-item
  const navigateToPage = useNavigate();
  const handleSelect = (ingredient: string) => {
    navigateToPage(`/results/${encodeURIComponent(ingredient)}`);
    // On results page, the dropdown should be closed
    setValue(() => "");
  };

  return (
    foundMatch &&
    matchedIngredients.map((ingredient, index) => (
      <ul
        key={index}
        className="mt-3 hover:bg-[#B6D7B0]"
        style={{
          fontFamily: "var( --font-anek)",
          color: "var(--color-primarygreen)",
        }}
        onMouseDown={() => handleSelect(ingredient)}
      >
        {ingredient}
      </ul>
    ))
  );
};

export default MatchedIngredients;
