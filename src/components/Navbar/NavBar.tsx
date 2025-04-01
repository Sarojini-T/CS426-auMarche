import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import MenuTab from './MenuTab';
import LanguageSelection from './LanguageSelectionButton';
import NavSearchBar from './NavSearchBar';
import { getItem } from './LocalStorage';
import { useState } from 'react';
import { SelectedLanguageContext } from './NavBarContexts';

// This component will return a navigation bar containing the website's name and logo
// a hamburger menu containing a link to the homepage and profile page, a search bar and
// a language selection button to set the language of the website
const NavBar = () => {
    // State to update and set users' language preferences
    const [selectedLanguage, setSelectedLanguage] = useState<string>(() => 
    // Retrieve selected language from local storage, if empty, set default to
    // ENG
    getItem("Selected Language") ?  getItem("Selected Language") : "ENG"
    );

  return (
    <>
        {/* Wrapper to pass context down to all pages via the NavBar */}
        <SelectedLanguageContext.Provider value={{selectedLanguage , setSelectedLanguage}}>
            <div className=" bg-[var(--color-primary)]">
            <Container fluid >
            {/* Flex container for navbar components */}
            <div className='flex flex-col'>
                {/* Flex container for the website name and the hamburger menu icon */}
                <div className="flex justify-between">
                    <a href="/" className=" text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                    xl:text-6xl mt-3" style={{fontFamily : "var(--font-jomhuria)", textDecoration: 'none'}}>
                        🌺 auMarche </a>
                    <MenuTab />
                </div>
                {/* Flex container for the navbar and the language selection button */}
                <div className="flex items-center justify-center">
                    <NavSearchBar />
                    <LanguageSelection/>
                </div>
            </div>
            </Container>
            </div>
        </SelectedLanguageContext.Provider>
    </>
        
  );
}

export default NavBar;
