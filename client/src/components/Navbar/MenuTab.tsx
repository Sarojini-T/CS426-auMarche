import { useContext, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import MenuLink from "./MenuLink";
import { SelectedLanguageContext, selectedLanguageContextType } from "./NavBarContexts";
import { navBarText } from "../../data/translated-text-data";

// This component will initially display a hamburger menu icon,
// when clicked by the user it will disappear and a dropdown menu 
// will be displayed with the pages in the website and a close icon in the upper left corner
export const Menu : React.FC = () => {
    // State that will help conditionally render the appropriate icon
    const [currIcon, setIcon] = useState<string>("menu");

    // Retrieve the selected language
    const {selectedLanguage} : selectedLanguageContextType = useContext(SelectedLanguageContext);

    // Find the corresponding data for the selected language
    const navBarTranslationObj = navBarText[selectedLanguage as keyof typeof navBarText];

    // Event handler function that will take in a string refer to the icon clicked as an argument
    // and sets the state accordingly
    const handleClick = (icon : string) => {
        // If the menu icon was clicked, then set the state to be the "close" icon 
        if(icon == "menu"){
            setIcon(() => "close")
         } 
         // If the close icon was clicked, set the state to be the menu icon
         else{
            setIcon(() => "menu");
         } 
    }
    
    // If the user clicked to open the menu, display dropdown menu with links to other pages
    if(currIcon == "close"){
        return (
            // w-[230px]
            <div className="flex flex-col absolute right-0 bg-[#9bc79186] w-[7em] sm:w-[8em] md:w-[10em] lg:w-[12em] xl:w-[15em]
            h-auto text-white">
                <MdClose className="text-2xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl" onClick={() => handleClick("close")} color="white"/>
                {/* Container to Center the page links */}
                <nav className="flex flex-col items-center justify-center">
                    <MenuLink route={"/"} page={navBarTranslationObj.Home} />
                    <MenuLink route={"/profile"} page={navBarTranslationObj.Profile} />
                    <MenuLink route={"/aboutUs"} page={navBarTranslationObj.aboutUS} />
                </nav>          
            </div>
        )
    }// if they closed the dropdown menu, display the hamburger menu
    else{
        return <IoMenuSharp className="text-4xl" onClick={() => handleClick("menu")} color="white"/> 
    }
}

export default Menu;