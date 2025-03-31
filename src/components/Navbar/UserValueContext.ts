import { createContext } from "react";

//Defining the type for the context
type userValueContextType = {
  value : string,
  setValue : React.Dispatch<React.SetStateAction<string>>
}

// Context to pass the value state to the SearchBarDropdown component
// so that it can conditionally render the dropdown
const UserValueContext = createContext< userValueContextType>({
    // Initialize the value to empty 
    value : "",
    setValue : () => {}
});

export {UserValueContext};
export type {userValueContextType};