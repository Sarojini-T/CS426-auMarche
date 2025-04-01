import { ReactNode, useState } from "react";
import { getItem } from "./Navbar/LocalStorage";
import { SelectedLanguageContext } from "./Navbar/NavBarContexts";

// This will return a global selected language context provider so that all the pages
// in the app can access the language set by the user in the navbar using the selectLanguageDropdown
const SelectedLanguageContextProvider : React.FC<{ children: ReactNode }> = ({ children }) => {
    // State to update and set users' language preferences
    const [selectedLanguage, setSelectedLanguage] = useState<string>(() => 
        // Retrieve selected language from local storage, if empty, set default to ENG
        getItem("Selected Language") ?  getItem("Selected Language") : "ENG"
    );
    return (
      <SelectedLanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
        {children}
      </SelectedLanguageContext.Provider>
    );
  };

export default SelectedLanguageContextProvider;