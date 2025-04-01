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
        <Dropdown.Item className="text-[10px] xs:text-[10px] md:text-[12px] xl:text-[12px] " style={{color : "var(--color-primarygreen)" , fontFamily: "var(--font-anek)"}}
          onMouseDown={() => handleSelect(languageCode)}>{languageCode}</Dropdown.Item>
    );
}

export default LanguageSelectionItem;