import { useContext } from "react";
import { SelectedLanguageContext, selectedLanguageContextType } from "../../../components/Navbar/NavBarContexts";
import { ItemData } from "../../../data/item-data"
import { resultsPageText } from "../../../data/translated-text-data";

const ItemInfo = ({ item, itemName }: { item: ItemData, itemName: string }) => {
    const {selectedLanguage} : selectedLanguageContextType = useContext(SelectedLanguageContext);

    // const suggestionButton = resultsPageText[selectedLanguage as keyof typeof resultsPageText].suggestionButton;
    const EnglishNames = resultsPageText[selectedLanguage as keyof typeof resultsPageText].englishNames;
    const descriptionSize = selectedLanguage == "JPN" ? ["text-md", "text-lg", "text-xl", "text-2xl", "text-3xl", "text4xl"]: ["text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl", "text-7xl"]
    const titleSize =  ["マランガの根", "ハヤトウリ", "もやし", "木耳", "だし粉", "アナトー"].includes(itemName) ? ["text-lg", "text-xl", "text-2xl", "text-5xl", "text-4xl", "text-5xl"]: ["text-9xl", "text-[9rem]", "text-[11rem]", "text-[12.5rem]", "text-[14rem]", "text-[15rem]"]
    return (
        <div className="flex flex-col font-jomhuria ml-20 justify-center">
            <div className="flex flex-row h-21">
                <span className={`text-primarygreen ${titleSize[0]} xs:${titleSize[1]}  sm:${titleSize[2]}   md:${titleSize[3]}   lg:${titleSize[4]}   xl:${titleSize[5]} pr-3`}>{itemName}</span>
            </div>
            <div className="flex flex-col">
                <span className={`text-profileheader pr-2 ${descriptionSize[0]} xs:${descriptionSize[1]}  sm:${descriptionSize[2]}   md:${descriptionSize[3]}   lg:${descriptionSize[4]}   xl:${descriptionSize[5]} pt-2`}>
                    {EnglishNames} <span className="text-primarygreen text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{item.englishNames.join('/')}</span>
                </span>
            </div>
        </div>
    )
}

export default ItemInfo