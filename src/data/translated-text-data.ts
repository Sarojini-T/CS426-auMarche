// This file will contain the translated text data for all the pages of the app

// Type and data for navbar
type navBarTextType = {
    
    ENG : {
        searchBarPlaceholder : string,
        itemNotFound : string,
        suggestion : string
        Home : string,
        Profile : string,
        aboutUS : string
    },
    HT  : {
        searchBarPlaceholder : string,
        itemNotFound : string,
        suggestion : string,
        Home : string,
        Profile : string,
        aboutUS : string
    },
    JPN : {
        searchBarPlaceholder : string,
        itemNotFound : string,
        suggestion : string,
        Home : string,
        Profile : string,
        aboutUS : string
    }
}

const navBarText : navBarTextType = {
    ENG : {
        searchBarPlaceholder : "Search for an ingredient...",
        itemNotFound : "Item not found",
        suggestion : "Did you mean...",
        //menu tab links
        Home : "Home",
        Profile : "Profile",
        aboutUS : "About Us"
    },
    HT : {
        searchBarPlaceholder : "Chèche yon engredyan...",
        itemNotFound : "Nou pa jwenn atik sa",
        suggestion : "Eske ou te vle di...",
        Home : "Paj Dakèy",
        Profile : "Paj Pwofil",
        aboutUS : "Enfòmasyon sou nou"
    },
    JPN : {
        searchBarPlaceholder : "材料を探す...",
        itemNotFound : "材料がみつかりませんでした",
        suggestion : "...ということでしたか？",
        Home : "ホームページ",
        Profile : "プロフィールページ",
        aboutUS : "弊社について"
    }
}

// Type and data for homepage
type homepageTextType = {
    
    ENG : {
        tagline : string,
        description : string,
        // Footer
        contact : string
    },
    HT  : {
        tagline : string,
        description : string,
        contact : string
    },
    JPN : {
        tagline : string,
        description : string,
        contact : string
    }
}

const homepageText : homepageTextType = {
    ENG : {
        tagline : "Discover. Translate. Taste the World.",
        description : "Our goal for this project is to create a tool that promotes inclusivity and makes every culture feel welcome and represented, and able to continue making traditional food that helps them keep in touch with their cultural identity." ,
        contact :  "Contact Us"
    },
    HT : {
        tagline :"Dekouvri. Tradwi. Goute mond lan.",
        description : "Objektif nou pou pwojè sa a se kreye yon zouti ki ankouraje enklizivite epi ki fè chak kilti santi yo akeyi ak reprezante, epi ki kapab kontinye fè manje tradisyonèl ki ede yo kenbe an kontak ak idantite kiltirèl yo.",
        contact : "Kontakte Nou"
    },
    JPN : {
        tagline : "発見する。翻訳する。世界を味わう。",
        description : "このプロジェクトの目標は、包括性を促進し、あらゆる文化が歓迎され代表されていると感じさせ、文化的アイデンティティとのつながりを維持するのに役立つ伝統的な食品を作り続けることができるツールを作成することです。" ,
        contact : "お問合せ"
    }
}

// Type and data for results page
type resultsPageTextType = {    
    ENG : {
        englishNames : string,
        locations : string,
        onlineStores : string,
        suggestionButton : string
    },
    HT  : {
        englishNames : string,
        locations : string,
        onlineStores : string,
        suggestionButton : string
    },
    JPN : {
        englishNames : string,
        locations : string,
        onlineStores : string,
        suggestionButton : string
    }
}

const resultsPageText : resultsPageTextType = {
    ENG : {
        englishNames : "English names:",
        locations : "Locations",
        onlineStores : "Online Stores",
        suggestionButton : "Have a suggestion?"
    },
    HT  : {
        englishNames : "Non Anglè:",
        locations : "Lokasyon",
        onlineStores : "Magazen sou entènèt",
        suggestionButton : "Gen yon sijesyon?"
    },
    JPN : {
        englishNames : "英語名：",
        locations : "場所",
        onlineStores : "オンラインストア",
        suggestionButton : "ご提案はありますか？"
    }
}

// Types and data for suggestions page
type suggestionsPageTextType = {    
    ENG : {
        searchBarPlaceholder : string,
        englishName : string,
        formQuestion : string,
        suggestionPlaceholder : string,
        submitButton : string
    },
    HT  : {
        searchBarPlaceholder : string,
        englishName : string,
        formQuestion : string,
        suggestionPlaceholder : string,
        submitButton : string
    },
    JPN : {
        searchBarPlaceholder : string,
        englishName : string,
        formQuestion : string,
        suggestionPlaceholder : string,
        submitButton : string
    }
}

const suggestionsPageText : suggestionsPageTextType = {
    ENG : {
        searchBarPlaceholder : "Search for an ingredient...",
        englishName : "English name:",
        formQuestion : "Where have you seen this item before?",
        suggestionPlaceholder : "Enter your suggestion here...",
        submitButton : "Submit"
    },
    HT  : {
        searchBarPlaceholder : "Chèche yon engredyan...",
        englishName : "Non Anglè:",
        formQuestion : "Ki kote ou te wè atik sa a?",
        suggestionPlaceholder : "Antre sijesyon ou isit la...",
        submitButton : "Soumèt fòm"
    },
    JPN : {
        searchBarPlaceholder : "材料を探す...",
        englishName : "英語名：",
        formQuestion : "どこでこの食品を見たことはありますか?",
        suggestionPlaceholder : "ここにご提案を入力してください...",
        submitButton : "フォームを提出する"
    }
}

// Type and data for profile page
type profilePageTextType = {    
    ENG : {
        profileTitle : string,
        savedIngredients : string,
        savedLocations : string,
    },
    HT  : {
        profileTitle : string,
        savedIngredients : string,
        savedLocations : string,
    },
    JPN : {
        profileTitle : string,
        savedIngredients : string,
        savedLocations : string,
    }
}

const profilePageText : profilePageTextType = {
    ENG : {
        profileTitle : "Profile",
        savedIngredients : "Saved Ingredients",
        savedLocations : "Saved Locations",
    },
    HT  : {
        profileTitle : "Paj Pwofil",
        savedIngredients : "Engredyan ke ou sovgade",
        savedLocations : "Lokasyon ke ou sovgade",
    },
    JPN : {
        profileTitle : "プロフィールページ",
        savedIngredients : "お気に入り材料",
        savedLocations : "お気に入り場所",
    }
}

// Type and data for aboutUs page
type aboutUsTextType = {    
    ENG : {
        [name:string] : {
            yearAndMajor : string,
            background : string,
        }
    },
    HT  : {
        [name:string] : {
            yearAndMajor : string,
            background : string,
        }
    },
    JPN : {
        [name:string] : {
            yearAndMajor : string,
            background : string,
        }
    }
}

const aboutUSText : aboutUsTextType = {
    ENG : {
        "Sarojini Torchon" : {
            yearAndMajor : "Senior, Computer Science & Maths Major",
            background : "Experience with Front End Development + UI/UX design",
        } ,
        "Snigdha Thatikonda" : {
            yearAndMajor : "Third year CS major, Business minor",
            background : "Experience in Software Engineering and Web/App development",
        },
        "Danny Cedrone" : {
            yearAndMajor : "Senior CS major, Japanese minor",
            background : "Passionate about promoting DEI in tech",
        },
        "Sarah Jang" : {
            yearAndMajor : "Senior, Chemistry Major turned Computer Science Major",
            background : "Passionate about Front-End and Web development",
        }
    },
    HT  : {
       "Sarojini Torchon" : {
            yearAndMajor : "Reto, Syans enfòmatik ak Matematik",
            background : "Eksperyans ak Devlopman Front End + konsepsyon UI/UX",
        } ,
        "Snigdha Thatikonda" : {
            yearAndMajor : "Twazyèm ane Syans enfòmatik, biznis minè",
            background : "Eksperyans nan Jeni lojisyèl ak devlopman Web/App",
        },
        "Danny Cedrone" : {
            yearAndMajor : "Reto CS, Japonè minè",
            background : "Pasyone sou pwomosyon DEI nan teknoloji",
        },
        "Sarah Jang" : {
            yearAndMajor : "Reto, Chimi ki tounen Syans enfòmatik",
            background : "Pasyone pou Front-End ak devlopman entènèt",
        }
    },
    JPN : {
       "Sarojini Torchon" : {
            yearAndMajor : "シニア、コンピュータサイエンスと数学専攻",
            background : "フロントエンド開発 + UI/UX デザインの経験",
        } ,
        "Snigdha Thatikonda" : {
            yearAndMajor : "3 年生 CS 専攻、ビジネス副専攻",
            background : "ソフトウェアエンジニアリングと Web/アプリ開発の経験",
        },
        "Danny Cedrone" : {
            yearAndMajor : "シニア CS 専攻、日本語副専攻",
            background : "技術における DEI の推進に熱心",
        },
        "Sarah Jang" : {
            yearAndMajor : "4年生、化学専攻からコンピュータサイエンス専攻に転向",
            background : "フロントエンドとWeb開発に情熱を傾けている",
        }
    }
}


export {navBarText, homepageText, resultsPageText , suggestionsPageText , profilePageText, aboutUSText};
export type {navBarTextType, homepageTextType, suggestionsPageTextType, profilePageTextType, aboutUsTextType}