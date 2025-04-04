import { useContext } from "react";
import { SelectedLanguageContext, selectedLanguageContextType } from "./NavBarContexts";

// This will display a link to a page in the website
type Props = {
    route : string,
    page : string
}
const MenuLink: React.FC<Props> = ({route, page}) => {
    const {selectedLanguage} : selectedLanguageContextType = useContext(SelectedLanguageContext);
    // The japanese characters take up a lot more space on the screen therefore if the selected 
    // language is japanese, apply special sizes to the menu links, otherwise, use another set of default values
    const textSizes = selectedLanguage == "JPN" ? ["text-sm", "text-1xl","text-2xl", "text-2xl"] : ["text-2xl", "text-3xl","text-4xl", "text-4xl"];

    return (
        <>
            <ul className="hover:bg-[var(--color-secondary)] w-full text-center">
                <a href={route} className={`text-white sm:${textSizes[0]} md:${textSizes[1]} lg:${textSizes[2]} xl:${textSizes[3]}`} 
                style={{fontFamily : "var(--font-jomhuria)", textDecoration: 'none'}}>{page}</a>
            </ul>
        </>
        
    );
}

export default MenuLink;