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
        <Dropdown.Toggle variant="success" id="dropdown-basic" className=" bg-white w-[4em] mb-2 h-8" 
        style={{color : "var(--color-primary)", fontFamily: "var(--font-anek)" , borderRadius : "0px"}}>
          {selectedLanguage}
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ borderRadius : "0px", minWidth: "4em" }}>
          <LanguageSelectionItem languageCode="ENG"/>
          <LanguageSelectionItem languageCode="HT"/>
          <LanguageSelectionItem languageCode="JPN"/>
        </Dropdown.Menu>
      </Dropdown>  
    );
}

export default LanguageSelectionButton;