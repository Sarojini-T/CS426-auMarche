import { Dropdown } from "react-bootstrap";
import { SelectedLanguageContext, selectedLanguageContextType } from "./NavBarContexts";
import { useContext } from "react";

// This will return a language selection option 
type Props = {
    languageCode : string
}

const LanguageSelectionItem : React.FC<Props> = ({languageCode}) => {
    const {setSelectedLanguage} : selectedLanguageContextType =  useContext(SelectedLanguageContext);

    const handleSelect = (language : string) => {
        setSelectedLanguage(() => language);
    }

    return(
        <Dropdown.Item style={{color : "var(--color-primary)" , fontFamily: "var(--font-anek)"}}
          onMouseDown={() => handleSelect(languageCode)}>{languageCode}</Dropdown.Item>
    );
}

export default LanguageSelectionItem;