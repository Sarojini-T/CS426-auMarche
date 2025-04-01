import { ITEM_DATA } from "./item-data";

// Iterate over the ITEM_DATA array of objects and for each object, combine the arrays 
// containing the haitian kreyol, english and japanese names into a single array
const searchBarData : string [] = [];
ITEM_DATA.forEach((obj) => (
    obj.haitianKreyolNames.forEach((name : string) => (
      searchBarData.push(name)
    )),

    obj.englishNames.forEach((name : string) => (
      searchBarData.push(name)
    )),

    obj.japaneseNames.forEach((name : string) => (
      searchBarData.push(name)
    ))
))

export {searchBarData };