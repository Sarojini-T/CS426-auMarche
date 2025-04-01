import { useContext } from "react";
import { SelectedLanguageContext, selectedLanguageContextType } from "../../../components/Navbar/NavBarContexts";
import { homepageText } from "../../../data/translated-text-data";

// This component will return the website description that will be displayed alongside the website image
const WebsiteDescription : React.FC = () => {
    // Retrieve the selected language
    const {selectedLanguage} : selectedLanguageContextType = useContext(SelectedLanguageContext);

    // Find the corresponding data for the selected language
    const websiteDescription = homepageText[selectedLanguage as keyof typeof homepageText].description;

    // Font size array to set specific sizes for when the text is japanese and another set of default
    // size for other languages. For reference, the indices map to tailwind's breakpoints: [default, xs, sm ,md,lg, xl]
    const descriptionSize = selectedLanguage == "JPN" ? ["text-sm", "text-2xl", "text-lg", "text-xl", "text-2xl"]: ["text-lg", "text-2xl", "text-3xl", "text-4xl", "text-4xl"]
    return (
    <p className={`text-left text-white ml-5 mr-5 ${descriptionSize[0]} xs:${descriptionSize[1]}  sm:${descriptionSize[2]}   md:${descriptionSize[3]}   lg:${descriptionSize[4]}   xl:${descriptionSize[5]} `} 
    style={{fontFamily : "var(--font-jomhuria)"}}>
    {websiteDescription}</p>
    );
}

export default WebsiteDescription;