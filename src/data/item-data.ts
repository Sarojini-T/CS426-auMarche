import { LocationData, LOCATION_DATA } from "./location-data";

type ItemData = {
    englishNames: string[];
    haitianKreyolNames: string[];
    japaneseNames: string[];
    locations: LocationData[];
    image: string; // Added image property
};

const ITEM_DATA: ItemData[] = [
    {
        englishNames: ["Taro", "Malanga Root"], 
        haitianKreyolNames: ["Malanga"],
        japaneseNames: ["Maranga no ne", "マランガの根"],
        locations: [LOCATION_DATA[2], LOCATION_DATA[4]],
        image: "/images/malanga.jpg" 
    },
    {
        englishNames: ["Chayote"], 
        haitianKreyolNames: ["Militon"],
        japaneseNames: ["Hayatōri", "ハヤトウリ"],
        locations: [LOCATION_DATA[1]],
        image: "/images/chayote.jpg"
    },
    {
        englishNames: ["Bean Sprouts"], 
        haitianKreyolNames: ["Jèrm Pwa"],
        japaneseNames: ["Moyashi", "もやし"],
        locations: [LOCATION_DATA[1], LOCATION_DATA[2], LOCATION_DATA[3], LOCATION_DATA[4], LOCATION_DATA[5]],
        image: "/images/bean_sprouts.jpg"
    },
    {
        englishNames: ["Kikurage", "Wood Ear Mushroom", "Black Fungus"], 
        haitianKreyolNames: ["Zòrèy Bwa Djondjon"],
        japaneseNames: ["Kikurage", "木耳"],
        locations: [LOCATION_DATA[0]],
        image: "/images/kikurage.jpg"
    },
    {
        englishNames: ["Dashi Powder"], 
        haitianKreyolNames: ["Poud Dashi"],
        japaneseNames: ["Dashi-ko", "だし粉"],
        locations: [LOCATION_DATA[3], LOCATION_DATA[5]],
        image: "/images/dashi_powder.jpg"
    },
    {
        englishNames: ["Achiote paste"], 
        haitianKreyolNames: [""],
        japaneseNames: ["Anatō", "アナトー"],
        locations: [LOCATION_DATA[3], LOCATION_DATA[5]],
        image: "/images/achiote_paste.jpg"
    },
];


export { ITEM_DATA };
export type { ItemData };

