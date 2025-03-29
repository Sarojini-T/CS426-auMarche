import { LocationData, LOCATION_DATA } from "./location-data";

type ItemData = {
    englishNames : string[],
    haitianKreyolNames : string[]
    japaneseNames : string[]
    locations : LocationData[]
}

const ITEM_DATA : ItemData[] = [
    {
        englishNames : ["Taro", "Malanga Root"], 
        haitianKreyolNames : ["Malanga"],
        japaneseNames : ["Maranga no ne","マランガの根"],
        locations : [LOCATION_DATA[2],LOCATION_DATA[4]]
    },
    {
        englishNames : ["Chayote"], 
        haitianKreyolNames : ["Militon"],
        japaneseNames : ["Hayatōri", "ハヤトウリ"],
        locations : [LOCATION_DATA[1]]
    },
    {
        englishNames : ["Bean Sprouts"], 
        haitianKreyolNames : ["Jèrm Pwa"],
        japaneseNames : ["Moyashi","もやし"],
        locations : [LOCATION_DATA[1],LOCATION_DATA[2],LOCATION_DATA[3],LOCATION_DATA[4], LOCATION_DATA[5]]
    },
    {
        englishNames : ["Kikurage", "Wood Ear Mushroom", "Black Fungus"], 
        haitianKreyolNames : ["Zòrèy Bwa Djondjon"],
        japaneseNames : ["Kikurage", "木耳"],
        locations : [LOCATION_DATA[0]]
    },
    {
        englishNames : ["Dashi Powder"], 
        haitianKreyolNames : ["Poud Dashi"],
        japaneseNames : ["Dashi-ko","だし粉"],
        locations : [LOCATION_DATA[3], LOCATION_DATA[5]]
    },
    {
        englishNames : ["Achiote paste"], 
        haitianKreyolNames : [""],
        japaneseNames : ["Anatō", "アナトー"],
        locations : [LOCATION_DATA[3], LOCATION_DATA[5]]
    },
]

export { ITEM_DATA }
export type { ItemData }