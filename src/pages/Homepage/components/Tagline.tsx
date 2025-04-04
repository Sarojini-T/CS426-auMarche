import { useContext } from "react";
import { SelectedLanguageContext, selectedLanguageContextType } from "../../../components/Navbar/NavBarContexts";
import { homepageText} from "../../../data/translated-text-data";

const Tagline = () => {
    // Retrieve the selected language
    const {selectedLanguage} : selectedLanguageContextType = useContext(SelectedLanguageContext);
    // Find the corresponding data for the selected language
    const taglineText = homepageText[selectedLanguage as keyof typeof homepageText].tagline;

    // Font size array to set specific sizes for when the text is in japanese and another set of default
    // sizes for other languages. For reference, the indices map to this window size: [default, xs, sm ,md,lg, xl]
    const taglineSize = selectedLanguage == "JPN" ? ["text-sm", "text-xs", "text-2xl", "text-3xl", "text-4xl", "text-4xl"]: ["text-4xl", "text-4xl", "text-5xl", "text-5xl", "text-6xl", "text-6xl"]

    return(
        <p className={`text-center ${taglineSize[0]} xs:${taglineSize[1]}  sm:${taglineSize[2]}  md:${taglineSize[3]}  lg:${taglineSize[4]}  xl:${taglineSize[5]}`}
        style={{fontFamily : "var(--font-jomhuria)", color : "var(--color-primarygreen)" }}>
        {taglineText}</p>
    );
}

export default Tagline;