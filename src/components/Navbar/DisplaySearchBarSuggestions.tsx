import { useContext } from "react";
import { SelectedLanguageContext, selectedLanguageContextType, UserValueContext, userValueContextType } from "./NavBarContexts";
import { searchBarData } from "../../data/search-bar-data";
import { MisspelledDataArr } from "../../data/misspelled-data";
import { useNavigate } from "react-router-dom";
import { navBarText } from "../../data/translated-text-data";
// This component will return a list of suggested items when the user misspells a word.
// It takes as input 2 props : one to update the isMisspelled state based on if we are able
// to find the value in the misspelledDataArr or not and the other used to conditionally display the component.

// Define type for props of this component
type Props = {
  setAsMisspelled: React.Dispatch<React.SetStateAction<boolean>>;
  foundMatch: boolean;
};

const DisplaySearchBarSuggestions: React.FC<Props> = ({
  setAsMisspelled,
  foundMatch,
}) => {
  // Retrieve state from NavSearchBar
  const { value, setValue }: userValueContextType =
    useContext(UserValueContext);

  // Event handler for when user clicks an item
  const navigateToPage = useNavigate();
  const handleSelect = (ingredient: string) => {
    navigateToPage(`/results/${encodeURIComponent(ingredient)}`);
    // On results page, the dropdown should be closed => set input value to empty
    setValue(() => "");
  };
  // Find the which array form the nested misspelledDataArr that contains words similar
  // to the value
  const findMisspelledWords = MisspelledDataArr.filter((array) =>
    array.some((word) => word.toLowerCase().startsWith(value.toLowerCase()))
  );

  // Using the array of misspelled words similar to the value, match it to the searchBarData
  // to get the correct spelling
  const suggestedWords = searchBarData.filter((item) =>
    findMisspelledWords.some((array) =>
      array.some((word) => word.toLowerCase().includes(item.toLowerCase()))
    )
  );

  // Update isMisspelled state so that ItemNotFound component can be rendered
  // accordingly
  setAsMisspelled(() =>
    foundMatch == false && suggestedWords.length < 0 ? false : true
  );

  // Get selected language to display correct text translation
  const {selectedLanguage} : selectedLanguageContextType = useContext(SelectedLanguageContext);
  const didYouMeanText = navBarText[selectedLanguage as keyof typeof navBarText].suggestion;

  // It should only be displayed when foundMatch = false and isMisspelled = true ie:
  // there are no matches in the matchedIngredients array but there is one here
  return suggestedWords.length > 0 && foundMatch == false ? (
    <>
      <p
        className="ml-3 mt-3 font-bold" style={{fontFamily: "var( --font-anek)",color: "var(--color-primarygreen)",}}>
        {didYouMeanText}
      </p>
      {suggestedWords.filter((word) => word != "").map((word, index) => (
          <ul
            key={index}
            onMouseDown={() => handleSelect(word)}
            className="text-left hover:bg-[#B6D7B0]"
            style={{
              fontFamily: "var( --font-anek)",
              color: "var(--color-primarygreen)",
            }}
          >
            {word}
          </ul>
        ))}
    </>
  ) : (
    <>
      <></>
      {setAsMisspelled(() => false)}
    </>
  );
};

export default DisplaySearchBarSuggestions;

