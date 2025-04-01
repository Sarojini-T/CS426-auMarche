import { useContext } from "react";
import { SelectedLanguageContext, selectedLanguageContextType } from "../../../components/Navbar/NavBarContexts";
import { homepageText} from "../../../data/translated-text-data";

const Tagline = () => {
    // Retrieve the selected language
    const {selectedLanguage} : selectedLanguageContextType = useContext(SelectedLanguageContext);
    // Find the corresponding data for the selected language
    const taglineText = homepageText[selectedLanguage as keyof typeof homepageText].tagline;
 
    return(
        <p className="text-center text-2xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl" 
        style={{fontFamily : "var(--font-jomhuria)", color : "var(--color-primary)" }}>
        {taglineText}</p>
    );
}

export default Tagline;