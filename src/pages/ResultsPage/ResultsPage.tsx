import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { ITEM_DATA, ItemData } from "../../data/item-data";
// import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Row } from "react-bootstrap";
import item0 from "./assets/item0.png"
import item1 from "./assets/item1.png"
import item2 from "./assets/item2.png"
import item3 from "./assets/item3.png"
import item4 from "./assets/item4.png"
import item5 from "./assets/item5.png"
import ListLocation from "./components/ListLocation";
import { LOCATION_DATA } from "../../data/location-data";
import NavBar from "../../components/Navbar/NavBar";


const ResultsPage = () => {
    const { itemName } = useParams();
    const images = [ item0, item1, item2, item3, item4, item5 ];
    const [result, setResult] = useState<ItemData>();

    useEffect(() => {
   	    const item = ITEM_DATA.find(i => i.englishNames.some(e => e === itemName) || i.haitianKreyolNames.some(e => e === itemName) || i.japaneseNames.some(e => e === itemName));
   	    setResult(item)

    }, [itemName])

    return (
        result &&
        <>
            <NavBar />
            <div className="w-[100vw] h-[100vh] flex flex-col">
            <div className="flex flex-col mb-20">
                <div className="flex flex-row justify-center w-[70%] self-center mb-3 mt-20">
                    <div className="flex flex-col font-jomhuria ml-20 justify-center">
                        <div className="flex flex-row h-21">
                            <span className="text-primary text-9xl pr-3">{itemName}</span>
                        </div>
                        <div className="flex flex-row items-center">
                            <span className="text-profileheader pr-2 text-6xl pt-2">
                                English names: <span className="text-primary ">{result.englishNames.join('/')}</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center max-w-sm">
                        <img src={images[ITEM_DATA.indexOf(result)]} />
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-[100%] justify-center bg-profilebg divide-x-2 divide-white">
                <div className="flex flex-col w-[50%]">
                <div className="flex flex-col self-center space-y-2">
                    <div className="flex px-10 pt-3 flex-row mt-10 justify-center font-bold font-anek text-white">
                        <span className="flex text-5xl">Locations</span>
                    </div>
                    {LOCATION_DATA.map((location, index) => (
                    <ListLocation text={location.name} key={index} />
                    ))}
                </div>
                </div>
                <div className="flex flex-col w-[50%]">
                <div className="flex flex-col self-center space-y-2">
                    <div className="flex px-10 pt-3 flex-row mt-10 justify-center font-bold font-anek text-white">
                        <span className="flex text-5xl">Online Stores</span>
                    </div>
                    {LOCATION_DATA.map((location, index) => (
                    <ListLocation text={location.name} key={index} />
                    ))}
                </div>
                </div>
            </div>
            <div className="flex flex-row w-[100%] justify-center bg-white">
                <div className="flex px-10 pt-3 flex-row mt-10 justify-center rounded-full bg-profiletitle font-bold font-anek align-middle pb-6">
                    <button className="cursor-pointer hover:text-gray-400 pt-8 flex text-5xl">Have a suggestion?</button>
                </div>
            </div>
        </div>
        </>
    );
    
}

export default ResultsPage