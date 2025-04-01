import Dropdown from 'react-bootstrap/Dropdown';
import {  setItem } from './LocalStorage';
import { SelectedLanguageContext, selectedLanguageContextType } from './NavBarContexts';
import { useContext, useEffect } from 'react';
import LanguageSelectionItem from './LanguageSelectionItem';

// This component will return a dropdown menu allowing users to select their preferred language
export const LanguageSelectionButton : React.FC = () => {
  const {selectedLanguage} : selectedLanguageContextType =  useContext(SelectedLanguageContext);

  useEffect(() => {
    // Add selected language to local storage for persistent storage
    setItem("Selected Language", selectedLanguage)
  },[selectedLanguage])

    return(
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className=" bg-white w-[4em] 
         text-sm sm:text-base md:text-lg lg:text-xl mb-2 h-8" 
        style={{color : "var(--color-primarygreen)", fontFamily: "var(--font-anek)" , borderRadius : "0px", fontSize: "0.75em"}}>
          {selectedLanguage}
        </Dropdown.Toggle>

        <Dropdown.Menu className="w-[3em] xs-w[3em] md:w-[3em] lg:w-[3em] xl:w-[3em]" style={{ borderRadius : "0px", minWidth: "1em" }}>
          <LanguageSelectionItem languageCode="ENG"/>
          <LanguageSelectionItem languageCode="HT"/>
          <LanguageSelectionItem languageCode="JPN"/>
        </Dropdown.Menu>
      </Dropdown>  
    );
}

export default LanguageSelectionButton;