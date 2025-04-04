import { useContext, useState } from "react";
import { userValueContextType, UserValueContext } from "./NavBarContexts";
import MatchedIngredients from "./MatchedIngredients";
import DisplaySearchBarSuggestions from "./DisplaySearchBarSuggestions";
import ItemNotFound from "./ItemNotFound";

// This component will return a dropdown containing a list of ingredients
// being dynamically displayed based on what the user is inputting in the search bar
const SearchBarDropdown: React.FC = () => {
  // Retrieve state from NavSearchBar
  const { value }: userValueContextType = useContext(UserValueContext);
  const [foundMatch, setMatch] = useState<boolean>(false);
  const [isMisspelled, setAsMisspelled] = useState<boolean>(false);

  // The dropdown menu displayed will depend on the three states defined above
  // ie: has the user found a match, is the word misspelled or does that item no exist in our data
  return (
    value && (
      <div className="bg-white border-2 border-[var(--color-secondary)] absolute
      w-[11em] sm:w-[20em] md:w-[25em] lg:w-[25em] xl:w-[30em]
      h-auto focus:outline-[var(--color-secondary)]">
        <MatchedIngredients foundMatch={foundMatch} setMatch={setMatch} />
        <DisplaySearchBarSuggestions
          setAsMisspelled={setAsMisspelled}
          foundMatch={foundMatch}
        />
        <ItemNotFound foundMatch={foundMatch} isMisspelled={isMisspelled} />
      </div>
    )
  );
};

export default SearchBarDropdown;
