import { useContext } from "react";
import { SelectedLanguageContext, selectedLanguageContextType } from "../../../components/Navbar/NavBarContexts";
import { resultsPageText } from "../../../data/translated-text-data";

const SuggestionButton = ({ buttonFn }: { buttonFn: () => void}) => {
    const {selectedLanguage} : selectedLanguageContextType = useContext(SelectedLanguageContext);

    // const suggestionButton = resultsPageText[selectedLanguage as keyof typeof resultsPageText].suggestionButton;
    const suggestionButton = resultsPageText[selectedLanguage as keyof typeof resultsPageText].suggestionButton;
    const textSize = selectedLanguage == "JPN" ? ["text-md", "text-lg", "text-xl", "text-2xl", "text-3xl", "text4xl"]: ["text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl", "text-7xl"]
    return (
        <div className="flex flex-row w-[100%] justify-center bg-white">
            <div className={`flex px-10 pt-3 flex-row mt-10 rounded-full bg-profiletitle text-primarygreen font-bold font-anek ${textSize[0]} xs:${textSize[1]}  sm:${textSize[2]}   md:${textSize[3]}   lg:${textSize[4]}   xl:${textSize[5]} pb-6`}>
                <button onClick={buttonFn} className="align-center hover:text-gray-400">{suggestionButton}</button>

            </div>
        </div>
    )
}

export default SuggestionButton;