import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { ITEM_DATA, ItemData } from "../../data/item-data";
import item0 from "./assets/item0.png"
import item1 from "./assets/item1.png"
import item2 from "./assets/item2.png"
import item3 from "./assets/item3.png"
import item4 from "./assets/item4.png"
import item5 from "./assets/item5.png"
import ListLocation from "./components/ListLocation";
import { LOCATION_DATA } from "../../data/location-data";
import NavBar from "../../components/Navbar/NavBar";
import ItemInfo from "./components/ItemInfo";
import { SelectedLanguageContext, selectedLanguageContextType } from "../../components/Navbar/NavBarContexts";
import { resultsPageText } from "../../data/translated-text-data";
import SuggestionButton from "./components/SuggestionButton";


const ResultsPage = () => {
    const { itemName } = useParams();
    const images = [ item0, item1, item2, item3, item4, item5 ];
    const [result, setResult] = useState<ItemData>();
    const {selectedLanguage} : selectedLanguageContextType = useContext(SelectedLanguageContext);

    const locations = resultsPageText[selectedLanguage as keyof typeof resultsPageText].locations;
    const onlineStores = resultsPageText[selectedLanguage as keyof typeof resultsPageText].onlineStores;

    useEffect(() => {
   	    const item = ITEM_DATA.find(i => i.englishNames.some(e => e === itemName) || i.haitianKreyolNames.some(e => e === itemName) || i.japaneseNames.some(e => e === itemName));
   	    setResult(item)

    }, [itemName])

    const navigate = useNavigate();

    return (
        result &&
        <>
            <NavBar />
        <div className="w-[100vw] h-fit flex flex-col">
            <div className="flex flex-col mb-20">
                <div className="flex flex-col md:flex-row justify-center w-[100%] self-center mb-3 mt-20">
                    <div className="flex items-center justify-center">
                        <img src={images[ITEM_DATA.indexOf(result)]} />
                    </div>
                    <ItemInfo item={result} itemName={itemName!}/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-[100%] justify-center bg-profilebg divide-x-2 divide-white">
            <div className="flex flex-col w-[100%] md:w-[50%]">
                    <div className="flex px-10 pt-3 flex-row mt-10 justify-center font-bold font-anek text-white">
                        <span className="flex text-5xl">{locations}</span>
                    </div>
                    <div className="flex flex-col self-center space-y-2 mt-6">
                        {LOCATION_DATA.map((location, index) => (
                        <ListLocation text={location.name} key={index} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col w-[100%] md:w-[50%]">
                    <div className="flex px-10 pt-3 flex-row mt-10 justify-center font-bold font-anek text-white">
                        <span className="flex text-5xl">{onlineStores}</span>
                    </div>
                    <div className="flex flex-col self-center space-y-2 mt-6">
                        {LOCATION_DATA.map((location, index) => (
                        <ListLocation text={location.name} key={index} />
                        ))}
                    </div>
                </div>
            </div>
            <SuggestionButton buttonFn={() => navigate("/suggestion")} />
        </div>
        </>
    );
    
}

export default ResultsPage