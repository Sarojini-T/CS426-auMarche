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

        <div className="text-[10px] xs:text-[10px] md:text-[12px] xl:text-[12px] text-center
        hover:bg-secondary" style={{color : "var(--color-primarygreen)" , 
        fontFamily: "var(--font-anek)"}}
        onMouseDown={() => handleSelect(languageCode)}>{languageCode}</div>
    );
}

export default LanguageSelectionItem;



