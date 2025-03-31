// This file will store potential ways each item can be misspelled and use a hashMap to map them
// to the correct spelling(s)
type misspelledData = {
    englishNames: string[];
    haitianKreyolNames: string[];
    japaneseNames: string[];
};

const MISSPELLED_DATA : misspelledData[] = [
    {
        englishNames: ["Tarow", "Tharo", "Tahrow", "Mahlangha Root", "Mahlangha Rout", "Mahlangha Roote", "Mahlangha Route", "Mhalangha root", "Mhalanga route", "Malenga root"], 
        haitianKreyolNames: ["Malangha", "Mahlangha", "Mhalangha", "Mahlanga", "Mahlangah"],
        japaneseNames: ["Maranga no ne", "Maranga no nae", "Marranga no ne","Marenga no ne", "Maraga no ne"],
    },
    {
        englishNames: ["Chayotay", "Shayote"], 
        haitianKreyolNames: ["Militohn", "Militan"],
        japaneseNames: ["Hayatori", "Hayatorri",  "Hayatoori"],
    },
    {
        englishNames: ["Been Sprouts", "Beann Sprouts", "Bean Sprauts", "Beene Sprouts"], 
        haitianKreyolNames: ["Jèrme Pwa", "Jem Pwa", "Jairme Poua", "Jerme Poua"],
        japaneseNames: ["Moyashee", "Moyahshi", "Moyashee" ],
    },
    {
        englishNames: ["Kikoorage", "Kikourage", "keekourage"], 
        haitianKreyolNames: ["Zòray Bwa Djondjon", "Zorey Bouwa Djondjon"],
        japaneseNames: ["Kikurrage", "Kikourrage"],
    },
    {
        englishNames: ["Dachi Powder", "Dashee Powder", "Dashie Powder"], 
        haitianKreyolNames: ["Pouwd Dashi", "Poud Dashie", "Poud Dashee"],
        japaneseNames: ["Dashi-ko", "Dahsee-ko", "Dashi-koh"],
    },
    {
        englishNames: ["Ashiote paste", "Ashiotee paste", "Achiotee paste"], 
        haitianKreyolNames: [""],
        japaneseNames: ["Anatō", "Ahnatō", "Ahnnatō"],
    },
];

// Nested array that will store all the misspelled words defined above by concatenating
// each field's array
const MisspelledDataArr = MISSPELLED_DATA.map((obj) => {
   return obj.haitianKreyolNames.concat(obj.englishNames, obj.japaneseNames)
   
})

export  { MisspelledDataArr };
export  {MISSPELLED_DATA};