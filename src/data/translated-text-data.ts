// This file will contain the translated text data for all the pages of the app

// Type and data for navbar
type navBarTextType = {
    
    ENG : {
        searchBarPlaceholder : string,
        itemNotFound : string,
        suggestion : string
        Home : string,
        Profile : string,
        Suggestions : string
    },
    HT  : {
        searchBarPlaceholder : string,
        itemNotFound : string,
        suggestion : string,
        Home : string,
        Profile : string,
        Suggestions : string
    },
    JPN : {
        searchBarPlaceholder : string,
        itemNotFound : string,
        suggestion : string,
        Home : string,
        Profile : string,
        Suggestions : string
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
        Suggestions : "Suggestions"
    },
    HT : {
        searchBarPlaceholder : "Chèche yon engredyan...",
        itemNotFound : "Nou pa jwenn atik sa",
        suggestion : "Eske ou te vle di...",
        Home : "Paj Dakèy",
        Profile : "Paj Pwofil",
        Suggestions : "Sijesyon"
    },
    JPN : {
        searchBarPlaceholder : "材料を検索してください...",
        itemNotFound : "アイテムが見つかりません",
        suggestion : "ということでしたか...",
        Home : "ホームページ",
        Profile : "プロフィールページ",
        Suggestions : "提案"
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
        tagline :"Dekouvri. Tradui. Goute mond lan.",
        description : "Objektif nou pou pwojè sa a se kreye yon zouti ki ankouraje enklizivite epi ki fè chak kilti santi yo akeyi ak reprezante, epi ki kapab kontinye fè manje tradisyonèl ki ede yo kenbe an kontak ak idantite kiltirèl yo.",
        contact : "Kontakte Nou"
    },
    JPN : {
        tagline : "発見する。翻訳する。世界を味わいましょう。",
        description : "このプロジェクトの目標は、包括性を促進し、あらゆる文化が歓迎され代表されていると感じさせ、文化的アイデンティティとのつながりを維持するのに役立つ伝統的な食品を作り続けることができるツールを作成することです。" ,
        contact : "お問い合わせ"
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
        englishNames : "Non Angle:",
        locations : "Lokasyon",
        onlineStores : "Magazen sou entènèt",
        suggestionButton : "Gen yon sijesyon?"
    },
    JPN : {
        englishNames : "英語名:",
        locations : "場所",
        onlineStores : "オンラインストア",
        suggestionButton : "提案はありますか"
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
        englishName : "Non Angle:",
        formQuestion : "Ki kote ou te wè atik sa a anvan?",
        suggestionPlaceholder : "Antre sijesyon ou isit la...",
        submitButton : "Soumèt fòm"
    },
    JPN : {
        searchBarPlaceholder : "材料を検索してください...",
        englishName : "英語名:",
        formQuestion : "この商品をどこで見たことがありますか?",
        suggestionPlaceholder : "ここに提案を入力してください...",
        submitButton : "フォームを送信する"
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
        savedIngredients : "保存された材料",
        savedLocations : "保存された場所",
    }
}

export {navBarText, homepageText, resultsPageText , suggestionsPageText , profilePageText};
export type {navBarTextType, homepageTextType, suggestionsPageTextType, profilePageTextType}