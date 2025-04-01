import { useContext } from "react";
import { SelectedLanguageContext, selectedLanguageContextType } from "./NavBarContexts";
import { navBarText } from "../../data/translated-text-data";

// This component will be displayed when an item is not found in our item data file &
// it is also not in our misspelled data file
type Props = {
    foundMatch: boolean,
    isMisspelled : boolean
}

// It will take as props two states : one tracking if a value has been found in the searchBarData
// and the other tracking if the value has been found in the misspelledDataArr
const ItemNotFound : React.FC<Props> = ({foundMatch, isMisspelled}) => {
    // Get the user's selected language to display the correct translation 
    const {selectedLanguage} : selectedLanguageContextType = useContext(SelectedLanguageContext);
    const itemNotFoundText = navBarText[selectedLanguage as keyof typeof navBarText].itemNotFound;

    return isMisspelled == false && foundMatch == false && (
        <div className="flex items-center justify-center mt-3" style={{fontFamily : "var( --font-anek)", color : "var(--color-primarygreen)"}}>
            <p>{itemNotFoundText}</p>
        </div>
    );
}

export default ItemNotFound;