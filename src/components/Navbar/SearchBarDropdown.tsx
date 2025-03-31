// import { useContext } from "react";
// import { userValueContextType , UserValueContext } from "./UserValueContext";
// import { searchBarData } from "../../data/search-bar-data";
// import { useNavigate } from "react-router-dom";
// import { SearchBarSuggestions } from "./GetSearchBarSuggestions";
// import MatchedIngredients from "./MatchedIngredients";
// import DisplaySearchBarSuggestions from "./DisplaySearchBarSuggestions";

// // This component will return a dropdown containing a list of ingredients
// // being dynamically displayed based on what the user is inputting in the search bar
// const SearchBarDropdown : React.FC = () => {
//     // Retrieve state from NavSearchBar
//     const {value, setValue} : userValueContextType = useContext(UserValueContext);


//     // When user presses the enter key, they will be redirected to the results page 
//     // adding the item they selected to the routes : result:selected-item
//     const navigateToPage = useNavigate();
//     const handleSelect = (ingredient : string) => {
//     navigateToPage(`/results/${encodeURIComponent(ingredient)}`);
//     // On results page, the dropdown should be closed
//     setValue(() => "");
//     }

//     return (
//         <div className="bg-white border-1 border-gray-500">
//             {value && ( <MatchedIngredients /> != null ? 
//                 <MatchedIngredients/> : <DisplaySearchBarSuggestions /> != null ? 
//                 <DisplaySearchBarSuggestions /> : 
//                 ( <div className="flex items-center justify-center " style={{fontFamily : "var( --font-anek)", color : "var(--color-primary)"}}>
//                     <p>Item not found</p>
//                 </div>)
//             )}
//         </div>
//     );
// }

// export default SearchBarDropdown;

import { useContext, useState } from "react";
import { userValueContextType , UserValueContext } from "./UserValueContext";
import MatchedIngredients from "./MatchedIngredients";
import DisplaySearchBarSuggestions from "./DisplaySearchBarSuggestions";
import ItemNotFound from "./ItemNotFound";

export type Props = {
    state : boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
}
// This component will return a dropdown containing a list of ingredients
// being dynamically displayed based on what the user is inputting in the search bar
const SearchBarDropdown : React.FC = () => {
    // Retrieve state from NavSearchBar
    const {value } : userValueContextType = useContext(UserValueContext);
    const [foundMatch, setMatch] =  useState<boolean>(false);
    const [isMisspelled, setAsMisspelled] = useState<boolean>(false);

    // The dropdown menu displayed will depend on the three states defined above
    // ie: has the user found a match, is the word misspelled or does that item no exist
    // in our data
    return value && (
        <div className="bg-white border-1 border-gray-500">
            <MatchedIngredients foundMatch={foundMatch} setMatch={setMatch} />
            <DisplaySearchBarSuggestions setAsMisspelled={setAsMisspelled} foundMatch={foundMatch}/> 
            <ItemNotFound foundMatch={foundMatch} isMisspelled={isMisspelled} />
        </div> 
    )
    
}

export default SearchBarDropdown;