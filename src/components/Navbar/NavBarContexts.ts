import { createContext } from "react";

// This file will define contexts used in the navbar

//Defining the type for the user value context
type userValueContextType = {
  value : string,
  setValue : React.Dispatch<React.SetStateAction<string>>
}

// Context to pass the value state to the SearchBarDropdown component
// so that it can conditionally render the dropdown
const UserValueContext = createContext< userValueContextType>({
    // Initialize the value to empty 
    value : "",
    setValue : () => {}
});

//Defining the type for the selected language context
type selectedLanguageContextType = {
  selectedLanguage : string,
  setSelectedLanguage : React.Dispatch<React.SetStateAction<string>>
}

//Context to pass the selected language to all other pages via the navbar
const SelectedLanguageContext = createContext<selectedLanguageContextType>({
  selectedLanguage : "",
  setSelectedLanguage : () => {}
})

export {UserValueContext};
export {SelectedLanguageContext};
export type {userValueContextType};
export type {selectedLanguageContextType}