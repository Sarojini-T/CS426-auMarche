import { useContext } from "react";
import { SelectedLanguageContext, selectedLanguageContextType } from "../../../components/Navbar/NavBarContexts";
import { homepageText } from "../../../data/translated-text-data";

// This component will return the website description that will be displayed alongside the website image
const WebsiteDescription : React.FC = () => {
    // Retrieve the selected language
    const {selectedLanguage} : selectedLanguageContextType = useContext(SelectedLanguageContext);

    // Find the corresponding data for the selected language
    const websiteDescription = homepageText[selectedLanguage as keyof typeof homepageText].description;

    return (
    <p className="text-left text-white ml-5 mr-5 text-sm sm:text-2xl md:text-3xl" 
    style={{fontFamily : "var(--font-jomhuria)"}}>
    {websiteDescription}</p>
    );
}

export default WebsiteDescription;